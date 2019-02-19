import React,{Component} from "react";
import {Row, Col, Card, Table, Tabs, Button, Divider} from 'antd';
import {StatDimensions,StatDataSetDimensions,StatDataSets} from '../../mock/dataSource'

const dataSetColumns = [
    {
        title: '序号',
        key: 'id',
        width: 10,
        dataIndex: 'id'
    },
    {
        title: '名称',
        key: 'name',
        width: 20,
        dataIndex: 'name',
    }
]

const dimensionColumns = [
    {
        title: '序号',
        key: 'id',
        width: 10,
        dataIndex: 'id'
    },
    {
        title: '名称',
        key: 'name',
        width: 20,
        dataIndex: 'name',
    },
    {
        title: '操作',
        key: 'action',
        width: 20,
        render: (text, record) => (
            <div>
                <Button>编辑</Button>
                <Divider type="vertical" />
                <Button>删除</Button>
            </div>
        ),
    }
]

export default class extends Component {

    constructor(props){
        super(props)
        this.onDataSetChange = this.onDataSetChange.bind(this)

        var dataSets = StatDataSets
        var dataSetId = StatDataSets[0].id
        var dataSetDimensions = StatDataSetDimensions.filter(item=>{return item.dataSetId === dataSetId})
        var dataSetDimensionIds = dataSetDimensions.map(item=>{ return item.dimensionID})
        var statDimensions = StatDimensions.filter(item=>{return dataSetDimensionIds.indexOf(item.id)>=0})

        this.state = {
            dataSets:dataSets,
            dataSetId:dataSetId,
            statDimensions:statDimensions,
        }
    }

    componentWillReceiveProps(nextProps){

    }
    onDataSetChange(record){
        console.log("onDataSetChange",record)
        var dataSetId = record.id
        var dataSetDimensions = StatDataSetDimensions.filter(item=>{return item.dataSetId === dataSetId})
        var dataSetDimensionIds = dataSetDimensions.map(item=>{ return item.dimensionID})
        var statDimensions = StatDimensions.filter(item=>{return dataSetDimensionIds.indexOf(item.id)>=0})

        this.setState({
            dataSetId:dataSetId,
            statDimensions:statDimensions,
        })
    }
    render(){
        return (
            <Row>
                <Col span={8}>
                    <Card title={"数据集"} >
                        <Table
                            bordered
                            rowKey={'id'}
                            size="small"
                            columns={dataSetColumns}
                            dataSource={this.state.dataSets}
                            pagination={false}
                            // scroll={{y:this.props.size.height-200}}
                            onRow={(record) => {
                                return {
                                    onClick: (event) =>{this.onDataSetChange(record)},       // 点击行
                                    onDoubleClick: (event) => {},
                                    onContextMenu: (event) => {},
                                    onMouseEnter: (event) => {},  // 鼠标移入行
                                    onMouseLeave: (event) => {}
                                };
                            }}
                        />
                    </Card>
                </Col>
                <Col span={16}>
                    <Card title={"数据集相关维度"} >
                        <Button >新增</Button>
                        <Table
                            bordered
                            rowKey={'id'}
                            size="small"
                            columns={dimensionColumns}
                            dataSource={this.state.statDimensions}
                            pagination={false}
                            // scroll={{y:this.props.size.height-200}}
                        />
                    </Card>
                </Col>
            </Row>

        )
    }
}
