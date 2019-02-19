import React,{Component} from "react";
import {Row, Col, Card, Table, Tabs,Divider,
    Button} from 'antd';
import {StatDimensions,StatDataSetDimensions,StatMeasures} from '../../mock/dataSource'

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

const measuresColumns = [
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
        title: '表达式',
        key: 'expression',
        width: 100,
        dataIndex: 'expression',
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
        this.onDimensionChange = this.onDimensionChange.bind(this)

        var dimensionId = StatDimensions[0].id
        var dimensionMeasures = StatMeasures.filter(item=>{return item.dimensionID === dimensionId})

        this.state = {
            dimensions:StatDimensions,
            dimensionId:dimensionId,
            dimensionMeasures:dimensionMeasures,
        }
    }
    componentWillReceiveProps(nextProps){

    }
    onDimensionChange(record){
        console.log("onDataSetChange",record)
        var dimensionId = record.id
        var dimensionMeasures = StatMeasures.filter(item=>{return item.dimensionID === dimensionId})
        this.setState({
            dimensionId:dimensionId,
            dimensionMeasures:dimensionMeasures,
        })
    }
    render(){
        return (
            <Row>
                <Col span={10}>
                    <Card title={"维度"} >
                        <Button >新增</Button>
                        <Table
                            bordered
                            rowKey={'id'}
                            size="small"
                            columns={dimensionColumns}
                            dataSource={this.state.dimensions}
                            pagination={false}
                            // scroll={{y:this.props.size.height-200}}
                            onRow={(record) => {
                                return {
                                    onClick: (event) =>{this.onDimensionChange(record)},       // 点击行
                                    onDoubleClick: (event) => {},
                                    onContextMenu: (event) => {},
                                    onMouseEnter: (event) => {},  // 鼠标移入行
                                    onMouseLeave: (event) => {}
                                };
                            }}
                        />
                    </Card>
                </Col>
                <Col span={14}>
                    <Card title={"维度相关测量"} >
                        <Button >新增</Button>
                        <Table
                            bordered
                            rowKey={'id'}
                            size="small"
                            columns={measuresColumns}
                            dataSource={this.state.dimensionMeasures}
                            pagination={false}
                            // scroll={{y:this.props.size.height-200}}
                        />
                    </Card>
                </Col>
            </Row>

        )
    }
}
