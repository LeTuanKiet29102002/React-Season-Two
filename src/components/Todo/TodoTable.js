import React, { Component } from 'react';
import { InfoCircleOutlined, UserOutlined, CompassOutlined, MoneyCollectOutlined } from '@ant-design/icons';
import Column from 'antd/es/table/Column';
import { Button, Input, Tooltip, Table, Space } from 'antd';


const TodoTable =(props)=>{
    const todos = props.todos
      return (
        <div>
          <Table className='m-5' dataSource={todos}>
                <Column title='ID' dataIndex='id' key='key' />
                <Column title='Title' dataIndex='title' key='key' />
                <Column title='Salary' dataIndex='salary' key='key' />
                <Column
                    title="Action"
                    key="action"
                // render={(_, record) => (
                //     <Space size="middle">
                //         <a>Invite</a>
                //         <a>Delete</a>
                //     </Space>
                // )}
                />
            </Table>
        </div>
      )
}
export default TodoTable;
