import React,{Component} from "react";
import TabContent from "../tab/tabContent";
import Group from "../group/group";
import GroupWapper from "../group/groupWapper";
import TextOption from "../option/textOptionComponent"
import CheckOption from "../option/checkOptionComponent";
import NumberOption from "../option/numberOptionComponent";
import ColorOption from "../option/colorOptionComponent";
import DropdownListOption from "../option/dropdownListOptionComponent";
import ButtonOption from "../option/buttonOptionComponent";
import connect from "react-redux/es/connect/connect";
import {TabType} from "../../store/reducers/spread/actions";
import {statTableStyle} from '../../utils/spreadHelper'
import {mergeCells} from '../../utils/eventHelper'
import { TreeSelect,Radio,Card   } from 'antd';
import {StatDimensionTree} from '../../mock/dataSource'

const TreeNode = TreeSelect.TreeNode;
const RadioGroup = Radio.Group;

class statTabContent extends Component {

    statTableIndex=0

    constructor(props) {
        super(props);

        this.onTextChange = this.onTextChange.bind(this)
        this.onStatDimensionChange = this.onStatDimensionChange.bind(this)

        this.state = {
            insertType:0, //0直接插入度量；1二级插入度量；2插入维度度量；
            insertDirection:0  //0：表旁；1表头
        }
    }
    componentWillReceiveProps(nextProps) {
    }

    onOptionChange(sender,optionName){
        switch (optionName) {
            case "showVerticalGridline":
            case "showHorizontalGridline":
                this.props.activeSheet.options.gridline[optionName] =
                    !this.props.activeSheet.options.gridline[optionName]
                break
            default:
                break
        }
        this.setState({});
    }
    onNumberChange(sender,propetyName){
        console.log("onNumberChange:",sender,propetyName)
        var newValue = sender.target.value
        switch (propetyName) {
            case "rowCount":
                if (newValue !== this.props.activeSheet.getRowCount()) {
                    try {
                        this.props.activeSheet.setRowCount(newValue);
                        // console.log(propetyName,newValue)
                   } catch (ex) {
                        sender.target.value = this.props.activeSheet.getRowCount();
                    }
                }
                break
            case "columnCount":
                if (newValue !== this.props.activeSheet.getColumnCount()) {
                    try {
                        this.props.activeSheet.setColumnCount(newValue);
                        // console.log(propetyName,newValue)
                    } catch (ex) {
                        sender.target.value = this.props.activeSheet.getColumnCount();
                    }
                }
                break
            case "frozenRowCount":
                this.props.activeSheet.frozenRowCount(newValue)
                break
            case "frozenColumnCount":
                this.props.activeSheet.frozenColumnCount(newValue)
                break
            default:
                break
        }
        // this.render()
    }
    onTextChange(sender,propetyName){
        console.log("onTextChange:",sender,propetyName)
        var newValue = sender.target.value
        switch (propetyName) {
            case "sheetName":
                if (newValue !== this.props.activeSheet.name()) {
                    try {
                        this.props.activeSheet.name(newValue);
                        this.setState({
                            sheetName: this.props.activeSheet.name()
                        });
                    } catch (ex) {
                        alert("sheet名称重复！");
                        sender.target.value = this.props.activeSheet.name();
                    }
                }
                break
            default:
                break

        }
    }
    getTreeNode(data,level){
        return data.map((item)=>{
            return (
                <TreeNode style={{ fontSize:12 }}
                          value={item.code} title={item.name} key={item.code}
                          selectable={ level !== 0}>
                    {item.children && (level < 1 || (level === 1 && this.state.insertType in [0,1]))? this.getTreeNode(item.children,level+1): null}
                </TreeNode>
            )
        })
    }
    onStatDimensionChange(value){
        if(!value)
            return
        var sheet = this.props.activeSheet,
            rowIndex = sheet.getActiveRowIndex(),
            columnIndex = sheet.getActiveColumnIndex()
        if (rowIndex<0 || columnIndex <0)
            return
        var values = value.split('.'),
            level = values.length
        if (level<2)
            return
        var dimension = null,key="",tempTreeNodes = StatDimensionTree,
            tempTreeChildren = null
        var treeNodePath = []
        for(var i=0;i<level;i++){
            console.log('tempTreeNodes i before',i,values.slice(0,i+1).join('.'))
            tempTreeNodes.forEach(item=>{
                if(item.code === values.slice(0,i+1).join('.')) {
                    treeNodePath.push(item)
                    tempTreeChildren = item.children
                }})
            console.log('tempTreeNodes i after',i,tempTreeChildren)
            tempTreeNodes = tempTreeChildren
            if (!tempTreeNodes)
                break
        }
        console.log('treeNodePath',treeNodePath,this.state.insertType)
        var commentJson = {}
        if (this.state.insertType>1){  //插入维度
            var size = tempTreeNodes.length
            if (this.state.insertType === 3)
                size = size + 1
            sheet.clearSelection()
            if (this.state.insertDirection === 0)
                sheet.addSelection(rowIndex,columnIndex, size,1)
            else
                sheet.addSelection(rowIndex,columnIndex,1, size)
            mergeCells(sheet)
            sheet.getCell(rowIndex,columnIndex).text(treeNodePath[1].name)
            if (this.state.insertDirection === 0){
                // sheet.addColumns(columnIndex,1)
                columnIndex++
            }else
                rowIndex++
        }
        var rowCount = 0
        if (treeNodePath.length === 2 && tempTreeNodes){ //选择的是维度
            if (this.state.insertType === 1)
                if (this.state.insertDirection === 0)
                    columnIndex++
                else
                    rowIndex++
            tempTreeNodes.forEach( item =>{
                commentJson = {"statDimension":item.code}
                if (this.state.insertDirection === 0){
                    sheet.getCell(rowIndex + rowCount,columnIndex).text(item.name)
                    sheet.comments.add(rowIndex + rowCount, columnIndex,JSON.stringify(commentJson))
                }else{
                    sheet.getCell(rowIndex ,columnIndex + rowCount).text(item.name)
                    sheet.comments.add(rowIndex, columnIndex + rowCount,JSON.stringify(commentJson))
                }
                rowCount++
            })
            if (this.state.insertType === 3){
                commentJson = {"statDimension":treeNodePath[1].code,"sum":tempTreeNodes.length}
                if (this.state.insertDirection === 0){
                    sheet.getCell(rowIndex + rowCount,columnIndex).text("合计")
                    sheet.comments.add(rowIndex + rowCount, columnIndex,JSON.stringify(commentJson))
                }else{
                    sheet.getCell(rowIndex,columnIndex + rowCount).text("合计")
                    sheet.comments.add(rowIndex, columnIndex + rowCount,JSON.stringify(commentJson))
                }
                rowCount++
            }
        } else if (treeNodePath.length === 3){ //选择的是度量
            if (this.state.insertType === 1)
                if (this.state.insertDirection === 0)
                    columnIndex++
                else
                    rowIndex++
            commentJson = {"statDimension":treeNodePath[2].code}
            if (this.state.insertDirection === 0){
                sheet.getCell(rowIndex + rowCount,columnIndex).text(treeNodePath[2].name)
                sheet.comments.add(rowIndex + rowCount, columnIndex,JSON.stringify(commentJson))
            }else{
                sheet.getCell(rowIndex ,columnIndex+ rowCount).text(treeNodePath[2].name)
                sheet.comments.add(rowIndex , columnIndex+ rowCount,JSON.stringify(commentJson))
            }
            rowCount++
        }

    }
    onInsertTypeChange(e){
        this.setState({
            insertType:e.target.value
        })
    }
    onInsertDirectionChange(e){
        this.setState({
            insertDirection:e.target.value
        })
    }

    onButtonClick(sender,self){
        var id = sender.target.id
        var activeRowIndex = self.props.activeSheet.getActiveRowIndex(),
            activeColumnIndex = self.props.activeSheet.getActiveColumnIndex()
        console.log('onButtonClick',id,self.props.activeSheet,activeRowIndex,activeColumnIndex)
        switch(id){
            case "freezePane":
                self.props.activeSheet.frozenRowCount(activeRowIndex);
                self.props.activeSheet.frozenColumnCount(activeColumnIndex);
                break
            case "unfreeze":
                self.props.activeSheet.frozenRowCount(0);
                self.props.activeSheet.frozenColumnCount(0);
                break
            case "insertStatTable":  //废弃代码
                try{
                    var table = self.props.activeSheet.tables.find(activeRowIndex, activeColumnIndex)
                    if(table)
                        return
                    table = self.props.activeSheet.tables.add('table'+this.statTableIndex.toString(), activeRowIndex, activeColumnIndex, 10, 10,statTableStyle)
                    table.showHeader(false)
                    table.bandRows(false)
                    this.statTableIndex++
                }
                catch (e) {
                    alert(e.message);
                }

                break
            case "clearStatDimension":
                var selections = self.props.activeSheet.getSelections()
                selections.forEach(selection =>{
                    for(var r=0;r<selection.rowCount;r++)
                        for (var c=0;c<selection.colCount;c++){
                            var cell =self.props.activeSheet.getCell(selection.row+r,selection.col+c)
                            cell.value("")
                            self.props.activeSheet.comments.remove(selection.row+r,selection.col+c)
                        }

                })
                break
            case "addOneColumn":
                self.props.activeSheet.addColumns(activeColumnIndex,1)
                break
            case "delOneColumn":
                self.props.activeSheet.deleteColumns(activeColumnIndex,1)
                break
            default:
                break
        }
        this.setState({})
    }

    render(){
       return (
           <TabContent data={{id:"statTab",active: true}} >
               <GroupWapper>
                   <Group data={{name:"通用",collapsed:false}}>
                       {/*<TextOption {...this.props} data={{name:"名称",value:this.props.activeSheet?this.props.activeSheet.name():""}}*/}
                                   {/*onTextChange={e => {this.onTextChange(e,'sheetName')}}*/}
                       {/*/>*/}
                       <NumberOption data={{name:"行数",value:this.props.activeSheet?this.props.activeSheet.getRowCount():0}}
                                   onNumberChange={e => {this.onNumberChange(e,'rowCount')}}
                       />
                       <NumberOption data={{name:"列数",value:this.props.activeSheet?this.props.activeSheet.getColumnCount():0}}
                                     onNumberChange={e => {this.onNumberChange(e,'columnCount')}}
                       />
                       <CheckOption data={{name:"垂直线",checked:this.props.activeSheet?this.props.activeSheet.options.gridline.showVerticalGridline:false}}
                                    onOptionChange={e=>this.onOptionChange(e,"showVerticalGridline")}
                       />
                       <CheckOption data={{name:"水平线",checked:this.props.activeSheet?this.props.activeSheet.options.gridline.showHorizontalGridline:false}}
                                    onOptionChange={e=>this.onOptionChange(e,"showHorizontalGridline")}
                       />
                       <ColorOption data={{name:"背景色"}}
                           onColorChange={e => {this.onColorChange(e,'sheetTabColor')}}
                       />
                   </Group>
                   <Group data={{name:"冻结",collapsed:false}}>
                       <NumberOption {...this.props} data={{name:"冻结行",value:this.props.activeSheet?this.props.activeSheet.frozenRowCount():0}}
                                     onNumberChange={e => {this.onNumberChange(e,'frozenRowCount')}}
                       />
                       <NumberOption {...this.props} data={{name:"冻结列",value:this.props.activeSheet?this.props.activeSheet.frozenColumnCount():0}}
                                                              onNumberChange={e => {this.onNumberChange(e,'frozenColumnCount')}}
                       />
                       <ButtonOption data={[{name:"冻结",value:"freezePane"},{name:"取消冻结",value:"unfreeze"}]}
                                     onButtonClick={e => {this.onButtonClick(e,this)}}
                       />
                   </Group>
                   <Group data={{name:"统计区域",collapsed:false}}>
                       <ButtonOption data={[{name:"插入统计表",value:"insertStatTable"},{name:"删除统计表",value:"deleteStatTable"}]}
                                     onButtonClick={e => {this.onButtonClick(e,this)}}
                       />
                   </Group>
                   <Group data={{name:"设置维度",collapsed:false}}>
                       <RadioGroup
                           onChange={this.onInsertDirectionChange.bind(this)}
                           value={this.state.insertDirection}>
                           <Radio style={{ fontSize:12 }} value={0}>设置行维度</Radio>
                           <Radio style={{ fontSize:12 }} value={1}>设置列维度</Radio>
                       </RadioGroup>
                       <RadioGroup
                           onChange={this.onInsertTypeChange.bind(this)}
                                   value={this.state.insertType}>
                           <Radio style={{ fontSize:12 }} value={0}>直接插入度量</Radio>
                           <Radio style={{ fontSize:12 }} value={1}>二级插入度量</Radio>
                           <Radio style={{ fontSize:12 }} value={2}>插入维度度量</Radio>
                           <Radio style={{ fontSize:12 }} value={3}>插入度量合计</Radio>
                       </RadioGroup>
                       <TreeSelect
                           style={{ width: 250,fontSize:12 }}
                           // value={}
                           dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                           placeholder="请选择统计"
                           allowClear
                           treeDefaultExpandAll
                           onChange={this.onStatDimensionChange}
                       >
                           {this.getTreeNode(StatDimensionTree,0)}
                       </TreeSelect>
                       <ButtonOption data={[{name:"清除统计维度",value:"clearStatDimension"}]}
                                     onButtonClick={e => {this.onButtonClick(e,this)}}
                       />
                       <ButtonOption data={[{name:"增加一列",value:"addOneColumn"},{name:"删除一列",value:"delOneColumn"}]}
                                     onButtonClick={e => {this.onButtonClick(e,this)}}
                       />

                   </Group>
                   <Group data={{name:"设置指标",collapsed:false}}>
                   </Group>
                </GroupWapper>
           </TabContent>
       )
    }
}

const getStoreProps = state => {
    return {
        activeSheet: state.spread.activeSheet,
        activeTabType: state.spread.activeTabType
    }
}

export default connect(getStoreProps)(statTabContent)
