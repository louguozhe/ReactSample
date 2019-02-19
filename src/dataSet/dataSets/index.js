import React,{Component} from "react";
import {Card, Table,Row,Col,Tabs, Button, Divider} from 'antd';
import {StatDataSets} from '../../mock/dataSource'

const dataSetColumns = [
    {
        title: '序号',
        key: 'id',
        width: 5,
        dataIndex: 'id'
    },
    {
        title: '名称',
        key: 'name',
        width: 20,
        dataIndex: 'name',
    },
    {
        title: '访问接口',
        key: 'api',
        width: 40,
        dataIndex: 'api',
    },
    {
        title: '操作',
        key: 'action',
        width: 5,
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
    render(){
        return (
            <div>
                <Row>
                    <Button >新增</Button>
                </Row>
                <Row>
                    <Table
                        bordered
                        size="middle"
                        rowKey={'id'}
                        columns={dataSetColumns}
                        dataSource={StatDataSets}
                        pagination={false}
                    />
                </Row>

            </div>

        )
    }
}
