import React,{Component} from "react";
import TabContent from "../tab/tabContent";
import Group from "../group/group";
import GroupWapper from "../group/groupWapper";
import TextOption from "../option/textOptionComponent"
import NumberOption from "../option/numberOptionComponent";
import ButtonOption from "../option/buttonOptionComponent";
import connect from "react-redux/es/connect/connect";
import {mergeCells} from '../../utils/eventHelper'
import {StatTitleStyle,StatCellLineBorder,StatIndexStyle} from '../../utils/spreadHelper'
import { TreeSelect,Row,Col   } from 'antd';
import {StatDataSets,StatDimensions,StatDataSetDimensions,StatIndexs,StatDataSetIndexs,StatDimensionTree,StatIndexTree,StatMeasures} from '../../mock/dataSource'

const TreeNode = TreeSelect.TreeNode;

class statTabContent extends Component {

    constructor(props) {
        super(props);

        this.addStatDimension = this.addStatDimension.bind(this)
        this.getDataSetTreeNode = this.getDataSetTreeNode.bind(this)
        this.getDimensionTreeNode = this.getDimensionTreeNode.bind(this)
        this.getIndexTreeNode = this.getIndexTreeNode.bind(this)

        this.getDataSetTreeNode()
        this.state = {
            statDatSets:[],
            statDimensions: []
        }
    }
    componentWillReceiveProps(nextProps) {
        var statDatSets = []
        if(nextProps.activeSheet){
            var comment = nextProps.activeSheet.getCell(0,0).comment()
            console.log("comment",comment)
            if (comment)
                try{
                    var obj = JSON.parse(comment.text()).statDataSets
                    if(obj)
                        statDatSets = obj
                }catch(e){

                }
        }
        this.setState({
            statDatSets:statDatSets,
            statDimensions: []
        })
    }

    getDataSetTreeNode(){
        var dataSets = StatDataSets
        console.log("getDataSetTreeNode",dataSets)
        if(!dataSets || dataSets.length === 0 )
            return ([])
        return dataSets.map(item=>{
            return (
                <TreeNode style={{ fontSize:12 }}
                          value={item.id} title={item.name} key={item.id}
                          selectable={ true} >
                </TreeNode> )
        })
    }
    onStatDataSetsSelect(value) {
        // console.log("addStatDimension", value)
        var commentJson = {"statDataSets":value}
        if(this.props.activeSheet){
            this.props.activeSheet.comments.add(0, 0,JSON.stringify(commentJson))
            this.props.activeSheet.setStyle(0,0,StatTitleStyle)
            // this.props.activeSheet.getCell(0, 0).backColor(StatBackGroundColor)
            this.props.activeSheet.getRange(0,0,1,1).setBorder(StatCellLineBorder,{all: true})
        }
        this.setState({
            statDatSets: value.concat()
        })
    }

    getDimensionTreeNode(){
        // var dataSets = this.state.statDatSets
        var dataSets = StatDataSets.filter(item=>{return this.state.statDatSets.indexOf(item.id)>=0})
        // console.log("getDimensionTreeNode1",dataSets)
        if(!dataSets || dataSets.length === 0 )
            return ([])
        return dataSets.map(dsItem=>{  //数据集层
            var dataSetDimensionIDs = []
            StatDataSetDimensions.forEach(diItem=>{
                if (diItem.dataSetId === dsItem.id)
                    dataSetDimensionIDs.push(diItem.dimensionID)
            })
            // console.log("getDimensionTreeNode2",dataSetDimensionIDs)
            var dimensions = StatDimensions.filter(diItem=>{ return dataSetDimensionIDs.indexOf(diItem.id)>=0 })
            // console.log("getDimensionTreeNode3",dimensions)
            return (
                <TreeNode style={{ fontSize:12 }}
                          value={dsItem.id} title={dsItem.name} key={[dsItem.id]}
                          selectable={ false } >
                    { dimensions.map( diItem =>{
                        return (
                            <TreeNode style={{ fontSize:12 }}
                                      value={dsItem.id.toString() + "-" + diItem.id.toString()} title={diItem.name} key={dsItem.id.toString() + "-" + diItem.id.toString()}
                                      selectable={ true } >
                            </TreeNode>
                        )

                    })}
                </TreeNode> )
        })
    }

    getIndexTreeNode(){
        // var dataSets = this.state.statDatSets
        var dataSets = StatDataSets.filter(item=>{return this.state.statDatSets.indexOf(item.id)>=0})
        // console.log("getDimensionTreeNode1",dataSets)
        if(!dataSets || dataSets.length === 0 )
            return ([])
        return dataSets.map(dsItem=>{  //数据集层
            var dataSetIndexIDs = []
            StatDataSetIndexs.forEach(diItem=>{
                if (diItem.dataSetId === dsItem.id)
                    dataSetIndexIDs.push(diItem.indexId)
            })
            // console.log("getDimensionTreeNode2",dataSetDimensionIDs)
            var indexs = StatIndexs.filter(diItem=>{ return dataSetIndexIDs.indexOf(diItem.id)>=0 })
            // console.log("getDimensionTreeNode3",dimensions)
            return (
                <TreeNode style={{ fontSize:12 }}
                          value={dsItem.id} title={dsItem.name} key={[dsItem.id]}
                          selectable={ false } >
                    { indexs.map( diItem =>{
                        return (
                            <TreeNode style={{ fontSize:12 }}
                                      value={dsItem.id.toString() + "-" + diItem.id.toString()} title={diItem.name} key={dsItem.id.toString() + "-" + diItem.id.toString()}
                                      selectable={ true } >
                            </TreeNode>
                        )

                    })}
                </TreeNode> )
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

    onStatDimensionSelect(value) {
        console.log("onStatDimensionSelect", value)
        this.setState({
            statDimensions: value,
        })
    }
    multiply(array){
        if(!array || array.length === 0)
            return 1
        if(array.length === 1)
            return array[0].length
        return array.reduce(function(a, b) {
            return a.length * b.length
        })
    }

    addStatDimension(direction) {
        let dimensions = this.state.statDimensions
        // console.log("addStatDimension0", dimensions)
        if(!dimensions || dimensions.length <= 0)
            return
        this.props.spread.suspendPaint();
        try{
            let i,j,span,span2,commentJson = "",count
            let sheet = this.props.activeSheet,
                rowIndex = sheet.getActiveRowIndex(),
                columnIndex = sheet.getActiveColumnIndex()
            // console.log("addStatDimension00")
            let statMeasures = []
            dimensions.forEach(dsDiId=>{
                // console.log("addStatDimension01", dsDiId,dsDiId.indexOf("-"))
                var diId = dsDiId.substring(dsDiId.indexOf("-")+1)
                // console.log("addStatDimension02", diId)
                statMeasures.push( StatMeasures.filter(meItem=>{
                    return meItem.dimensionID.toString() === diId
                }))
            })
            // console.log("addStatDimension03", statMeasures)
            // value.forEach(item=>{statDimensions.push(this.findStatDimension(StatDimensionTree, item))})
            span = this.multiply(statMeasures)
            // console.log("addStatDimension1", dimensions,statMeasures,span)
            if (direction === 0){
                if(sheet.getColumnCount() <= columnIndex + span )
                    sheet.setColumnCount(columnIndex + span)
            }else{
                if(sheet.getRowCount() <= rowIndex + span )
                    sheet.setRowCount(rowIndex + span)
            }

            for(i=0;i<statMeasures.length;i++){
                if( i >= 1 ){  //下移一行或右移一行
                    if (direction === 0){
                        rowIndex++
                        sheet.addRows(rowIndex,1)
                    }else{
                        columnIndex++
                        sheet.addColumns(columnIndex,1)
                    }
                }
                if ( i === statMeasures.length - 1)
                    span = 1
                else
                    span = this.multiply(statMeasures.slice(i+1))
                // console.log("multiply1",i,span)
                count = 0
                span2 = this.multiply(statMeasures.slice(0,i))
                // console.log("multiply2",i,span2)
                // if (direction === 0)
                //     sheet.setStyle(rowIndex,-1,StatTitleStyle)
                // else
                //     sheet.setStyle(-1,columnIndex,StatTitleStyle)
                for(j=0;j<span2;j++){
                    statMeasures[i].forEach( item =>{
                        if(span > 1){  //合并单元格
                            console.log("合并单元格",rowIndex,columnIndex + count,1, span)
                            sheet.clearSelection()
                            if (direction === 0)
                                sheet.addSelection(rowIndex,columnIndex + count,1, span)
                            else
                                sheet.addSelection(rowIndex + count,columnIndex, span,1)
                            mergeCells(sheet)
                        }
                        commentJson = {"statMeasureId":item.id,"statExpression":item.expression}
                        if (direction === 0){
                            sheet.getCell(rowIndex ,columnIndex + count).text(item.name)
                            sheet.comments.add(rowIndex, columnIndex + count,JSON.stringify(commentJson))
                            sheet.setStyle(rowIndex, columnIndex + count,StatTitleStyle)
                            // sheet.getCell(rowIndex, columnIndex + count).backColor(StatBackGroundColor)
                            sheet.getRange(rowIndex,columnIndex + count,1,1).setBorder(StatCellLineBorder,{all: true})
                        }else{
                            sheet.getCell(rowIndex + count,columnIndex).text(item.name)
                            sheet.comments.add(rowIndex + count, columnIndex,JSON.stringify(commentJson))
                            sheet.setStyle(rowIndex + count, columnIndex,StatTitleStyle)
                            // sheet.getCell(rowIndex + count, columnIndex).backColor(StatBackGroundColor)
                            sheet.getRange(rowIndex + count,columnIndex,1,1).setBorder(StatCellLineBorder,{all: true})
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
        var iId = value.substring(value.indexOf("-")+1)
        var statIndexs = StatIndexs.filter(iItem=>{
            return iItem.id.toString() === iId
        })
        if(!statIndexs || statIndexs.length === 0)
            return
        var statIndex = statIndexs[0]
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
                        var commentJson = {"statIndex":statIndex.id,"statExpression":statIndex.expression}
                        cell.text(statIndex.name)
                        self.props.activeSheet.comments.add(selection.row+r, selection.col+c,JSON.stringify(commentJson))
                        self.props.activeSheet.setStyle(selection.row+r, selection.col+c,StatIndexStyle)
                    }
                self.props.activeSheet.getRange(selection.row,selection.col,selection.rowCount,selection.colCount).setBorder(StatCellLineBorder,{all: true})

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
        // this.setState({})
    }

    render(){
       return (
           <TabContent data={{id:"statTab",active: true}} >
               <GroupWapper>
                   <Group data={{name:"设置通用参数",collapsed:false}}>
                       <TextOption data={{name:"sheetName",caption:"名称",cols:[2,10]}}/>
                       {/*<ColorOption data={{name:"sheetTabColor",caption:"统计表名称背景色"}}/>*/}
                       {/*<Row>*/}
                           {/*<Col span={12}>*/}
                               {/*<NumberOption data={{name:"rowCount",caption:"行数",cols:[4,7]}}/>*/}
                           {/*</Col>*/}
                           {/*<Col span={12}>*/}
                               {/*<NumberOption data={{name:"columnCount",caption:"列数",cols:[4,7]}}/>*/}
                           {/*</Col>*/}
                       {/*</Row>*/}
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
                                   value={this.state.statDatSets}
                                   treeCheckable={true}
                                   treeDefaultExpandAll
                                   onChange={this.onStatDataSetsSelect.bind(this)}
                       >
                           {this.getDataSetTreeNode()}
                       </TreeSelect>
                       <ButtonOption data={[{name:"设置",value:"setDataSets"},{name:"清空",value:"clearDataSets"}]}/>
                   </Group>
                   <Group data={{name:"设置统计维度",collapsed:false}}>
                       <TreeSelect style={{ width: "100%",fontSize:12 }}
                           // value={}
                                   dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                   placeholder="请选择维度"
                                   allowClear
                                   // value={this.state.statDimensions}
                                   treeCheckable={true}
                                   treeDefaultExpandAll
                                   onChange={this.onStatDimensionSelect.bind(this)}
                       >
                           {this.getDimensionTreeNode()}
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
                                   {this.getIndexTreeNode()}
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
