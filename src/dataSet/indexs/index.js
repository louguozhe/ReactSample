import React,{Component} from "react";
import {Table, Button, Divider, Row} from 'antd';
import {StatIndexs} from '../../mock/dataSource'

const indexColumns = [
    {
        title: '序号',
        key: 'id',
        width: 10,
        dataIndex: 'id'
    },
    {
        title: '名称',
        key: 'name',
        width: 40,
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

    render(){
        return (
            <div>
                <Button >新增</Button>

                <Table
                bordered
                rowKey={'id'}
                size="small"
                columns={indexColumns}
                dataSource={StatIndexs}
                pagination={false}
                // scroll={{y:this.props.size.height-200}}
            />
            </div>
        )
    }
}
