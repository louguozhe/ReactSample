import React,{Component} from "react";
import { Tabs,Row,Col  } from 'antd';
import DataSets from './dataSets'
import Dimensions from './dimensions'
import DataSetDimensions from './dataSetDimensions'
import DataSetIndexs from './dataSetIndexs'
import Indexs from './indexs'
const TabPane = Tabs.TabPane;

export default class extends Component {

    constructor(props){
        super(props)
        this.onTabChange = this.onTabChange.bind(this)
        this.onDataSetChange = this.onDataSetChange.bind(this)

        this.state = {
            dataSetId:1,
            dimensionId:1,
        }
    }
    onTabChange(){

    }
    onDataSetChange(record){
        console.log("onDataSetChange",record)
        this.setState({
            dataSetId:record.id
        })
    }
    render(){
        return (
                    <Tabs defaultActiveKey="1" onChange={this.onTabChange}>
                        <TabPane tab="数据集" key="1">
                            <DataSets></DataSets>
                        </TabPane>
                        <TabPane tab="维度与测量" key="2">
                            <Dimensions></Dimensions>
                        </TabPane>
                        <TabPane tab="数据集与维度" key="3">
                            <DataSetDimensions></DataSetDimensions>
                        </TabPane>
                        <TabPane tab="指标" key="4">
                            <Indexs></Indexs>
                        </TabPane>
                        <TabPane tab="数据集与指标" key="5">
                            <DataSetIndexs></DataSetIndexs>
                        </TabPane>
                    </Tabs>
        )
    }
}
