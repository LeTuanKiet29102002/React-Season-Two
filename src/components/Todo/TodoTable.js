import React, { Component } from 'react';
import { InfoCircleOutlined, UserOutlined, CompassOutlined, MoneyCollectOutlined, DeleteOutlined } from '@ant-design/icons';
import Column from 'antd/es/table/Column';
import { Button, Input, Tooltip, Table, Space } from 'antd';


const TodoTable = (props) => {
  const todos = props.todos;
  const { deleteDataTodo } = props
  const handleDeleteTodo = (key) => {
    deleteDataTodo(key);
    // console.log('check key:',key);
  }
  return (
    <div>
    {/* render={(text, record , index)=>(
          <span>{text}-{index} -{record.title}</span>
        )} */}
      <Table className='m-5' dataSource={todos}>
        <Column title='ID' dataIndex='id' key='key' />
        <Column title='Title' dataIndex='title' key='key' />
        <Column title='Salary' dataIndex='salary' key='key' />
        <Column
          title="Action"
          key="action"
          render={(text, record, index) => (
            <Space size="middle">
              <Tooltip title="Xóa">
                <Button
                  shape="circle"
                  icon={<DeleteOutlined />}
                  onClick={() => handleDeleteTodo(record.key)}
                />
              </Tooltip>
            </Space>
          )}
        />
      </Table>
    </div>
  )
}
export default TodoTable;
