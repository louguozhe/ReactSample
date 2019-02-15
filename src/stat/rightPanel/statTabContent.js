import React,{Component} from "react";
import TabContent from "../tab/tabContent";
import Group from "../group/group";
import GroupWapper from "../group/groupWapper";
import TextOption from "../option/textOptionComponent"
import NumberOption from "../option/numberOptionComponent";
import ButtonOption from "../option/buttonOptionComponent";
import connect from "react-redux/es/connect/connect";
import {mergeCells} from '../../utils/eventHelper'
import { TreeSelect,Row,Col   } from 'antd';
import {StatDimensionTree,StatIndexTree} from '../../mock/dataSource'

const TreeNode = TreeSelect.TreeNode;

class statTabContent extends Component {

    constructor(props) {
        super(props);

        this.addStatDimension = this.addStatDimension.bind(this)
        this.state = {
            statDatSets:[],
            statDimensions: []
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({})
    }

    getTreeNode(data,level,maxLevel=0){
        return data.map((item)=>{
            return (
                <TreeNode style={{ fontSize:12 }}
                          value={item.code} title={item.name} key={item.code}
                          selectable={ level !== 0}>
                    {item.children && (level < 1) & (level<=maxLevel)? this.getTreeNode(item.children,level+1): null}
                </TreeNode>
            )
        })
    }
    findStatDimension(tree,code){
        if(!tree || !code)
            return null
        var temp = null
        for(var i=0;i<tree.length;i++){
            if (tree[i].code === code)
                return tree[i]
            if(tree[i].children){
                temp = this.findStatDimension(tree[i].children,code)
                if (temp)
                    return temp
            }
        }
        return null
    }
    onStatDataSetsSelect(value) {
        console.log("addStatDimension", value)
        this.setState({
            statDatSets: value
        })
    }

    onStatDimensionSelect(value) {
        console.log("addStatDimension", value)
        this.setState({
            statDimensions: value
        })
    }
    multiply(array){
        if(!array || array.length === 0)
            return 1
        if(array.length === 1)
            return array[0].children.length
        return array.reduce(function(a, b) {
            return a.children.length * b.children.length
        })
    }

    addStatDimension(direction) {
        let value = this.state.statDimensions
        if(!value || value.length <= 0)
            return
        this.props.spread.suspendPaint();
        try{
            let i,j,span,span2,commentJson = "",statDimensions = [],count
            let sheet = this.props.activeSheet,
                rowIndex = sheet.getActiveRowIndex(),
                columnIndex = sheet.getActiveColumnIndex()
            value.forEach(item=>{statDimensions.push(this.findStatDimension(StatDimensionTree, item))})
            span = this.multiply(statDimensions)
            console.log("addStatDimension",statDimensions,span,columnIndex,sheet.getColumnCount())
            if (direction === 0){
                if(sheet.getColumnCount() <= columnIndex + span )
                    sheet.setColumnCount(columnIndex + span)
            }else{
                if(sheet.getRowCount() <= rowIndex + span )
                    sheet.setRowCount(rowIndex + span)
            }

            for(i=0;i<statDimensions.length;i++){
                if( i >= 1 ){  //下移一行或右移一行
                    if (direction === 0){
                        rowIndex++
                        sheet.addRows(rowIndex,1)
                    }else{
                        columnIndex++
                        sheet.addColumns(columnIndex,1)
                    }
                }
                if ( i === statDimensions.length - 1)
                    span = 1
                else
                    span = this.multiply(statDimensions.slice(i+1))
                console.log("multiply1",i,span)
                count = 0
                span2 = this.multiply(statDimensions.slice(0,i))
                console.log("multiply2",i,span2)
                for(j=0;j<span2;j++){
                    statDimensions[i].children.forEach( item =>{
                        if(span > 1){  //合并单元格
                            console.log("合并单元格",rowIndex,columnIndex + count,1, span)
                            sheet.clearSelection()
                            if (direction === 0)
                                sheet.addSelection(rowIndex,columnIndex + count,1, span)
                            else
                                sheet.addSelection(rowIndex + count,columnIndex, span,1)
                            mergeCells(sheet)
                        }
                        commentJson = {"statDimension":item.code,"statExpression":item.expression}
                        if (direction === 0){
                            sheet.getCell(rowIndex ,columnIndex + count).text(item.name)
                            sheet.comments.add(rowIndex, columnIndex + count,JSON.stringify(commentJson))
                        }else{
                            sheet.getCell(rowIndex + count,columnIndex).text(item.name)
                            sheet.comments.add(rowIndex + count, columnIndex,JSON.stringify(commentJson))
                        }
                        count = count + span
                    })
                }
            }
        }catch (e) {
        }
        this.props.spread.resumePaint();
        // this.props.spread.suspendPaint();
        // try{
        // }catch (e) {
        // }
        // this.props.spread.resumePaint();

    }

    addStatIndex(value){
        if(!value)
            return
        var statIndex = this.findStatDimension(StatIndexTree, value)
        if(!statIndex)
            return
        this.props.spread.suspendPaint();
        try{
            var self = this
            var selections = self.props.activeSheet.getSelections()
            if (!selections)
                return
            selections.forEach(selection =>{
                for(var r=0;r<selection.rowCount;r++)
                    for (var c=0;c<selection.colCount;c++){
                        var cell =self.props.activeSheet.getCell(selection.row+r,selection.col+c)
                        var commentJson = {"statIndex":statIndex.code,"statExpression":statIndex.expression}
                        cell.text(statIndex.name)
                        self.props.activeSheet.comments.add(selection.row+r, selection.col+c,JSON.stringify(commentJson))
                    }

            })
        }catch (e) {
        }
        this.props.spread.resumePaint();
    }
    onButtonClick(sender,self){
        var id = sender.target.id
        // var activeRowIndex = self.props.activeSheet.getActiveRowIndex(),
        //     activeColumnIndex = self.props.activeSheet.getActiveColumnIndex()
        console.log('onButtonClick',id)
        switch(id){
            case "addTopStatDimension":
                this.addStatDimension(0)
                break
            case "addLeftStatDimension":
                this.addStatDimension(1)
                break
            case "runStat":
                try{
                    console.log('执行统计...')
                }
                catch (e) {
                    alert(e.message);
                }
                break
            case "clearStat":
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
            default:
                break
        }
        this.setState({})
    }

    render(){
       return (
           <TabContent data={{id:"statTab",active: true}} >
               <GroupWapper>
                   <Group data={{name:"设置通用参数",collapsed:false}}>
                       <TextOption data={{name:"sheetName",caption:"名称",cols:[2,10]}}/>
                       {/*<ColorOption data={{name:"sheetTabColor",caption:"统计表名称背景色"}}/>*/}
                       <Row>
                           <Col span={12}>
                               <NumberOption data={{name:"rowCount",caption:"行数",cols:[4,7]}}/>
                           </Col>
                           <Col span={12}>
                               <NumberOption data={{name:"columnCount",caption:"列数",cols:[4,7]}}/>
                           </Col>
                       </Row>
                       {/*<CheckOption data={{name:"showVerticalGridline",caption:"垂直线"}}/>*/}
                       {/*<CheckOption data={{name:"showHorizontalGridline",caption:"水平线"}}/>*/}
                       <ButtonOption data={[{name:"冻结",value:"freezePane"},{name:"取消冻结",value:"unfreeze"}]}/>
                   </Group>
                   <Group data={{name:"设置统计范围",collapsed:false}}>
                       <TreeSelect style={{ width: "100%",fontSize:12 }}
                           // value={}
                                   dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                   placeholder="请选择数据集"
                                   allowClear
                                   treeCheckable={true}
                                   treeDefaultExpandAll
                                   onChange={this.onStatDataSetsSelect.bind(this)}
                       >
                           {this.getTreeNode(StatDimensionTree,0,0)}
                       </TreeSelect>
                       <ButtonOption data={[{name:"设置",value:"setDataSets"},{name:"清空",value:"clearDataSets"}]}/>
                   </Group>
                   <Group data={{name:"设置统计维度",collapsed:false}}>
                       <TreeSelect style={{ width: "100%",fontSize:12 }}
                           // value={}
                                   dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                   placeholder="请选择维度"
                                   allowClear
                                   treeCheckable={true}
                                   treeDefaultExpandAll
                                   onChange={this.onStatDimensionSelect.bind(this)}
                       >
                           {this.getTreeNode(StatDimensionTree,0,2)}
                       </TreeSelect>
                       <ButtonOption data={[
                           {name:"设置为表头维度",value:"addTopStatDimension"},
                           {name:"设置为表旁维度",value:"addLeftStatDimension"}]}
                                     onButtonClick={e => {this.onButtonClick(e,this)}}
                       />
                   </Group>
                   <Group data={{name:"设置统计指标",collapsed:false}}>
                       <Row>
                           <Col span={6}><div style={{lineHeight:"32px"}}>选择指标：</div></Col>
                           <Col span={18}>
                               <TreeSelect style={{ width: "100%",fontSize:12 }}
                                   // value={}
                                           dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                           placeholder="请选择维度"
                                           allowClear
                                           treeDefaultExpandAll
                                           onChange={this.addStatIndex.bind(this)}
                               >
                                   {this.getTreeNode(StatIndexTree,0,1)}
                               </TreeSelect>
                           </Col>
                       </Row>
                   </Group>
                   <Group data={{name:"执行统计",collapsed:false}}>
                       <ButtonOption data={[{name:"执行统计",value:"runStat"},{name:"清除统计",value:"clearStat"}]}
                                     onButtonClick={e => {this.onButtonClick(e,this)}}
                       />
                   </Group>
                </GroupWapper>
           </TabContent>
       )
    }
}

const getStoreProps = state => {
    return {
        spread: state.spread.spread,
        activeSheet: state.spread.activeSheet,
        activeTabType: state.spread.activeTabType
    }
}

export default connect(getStoreProps)(statTabContent)
