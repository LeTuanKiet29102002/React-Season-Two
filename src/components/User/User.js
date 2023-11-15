import './User.scss';
import { Button, Input, Tooltip, Table, Space, Spin } from 'antd';
import Column from 'antd/es/table/Column';
import { InfoCircleOutlined, UserOutlined, CompassOutlined, MoneyCollectOutlined, DeleteOutlined, LoadingOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import axios from 'axios';
import useFetch from '../../customize/fetch';



const User = (props ) => {
    
    
    // let dataUser = useFetch(url).data;
    const{data:dataUser, isLoading:loading}=useFetch('https://reqres.in/api/users?page=2')

    return (
        <div className="list-container-user">
            <div className='' style={{ color: '#06f7ff' }}>List User Components</div>
            {loading === false ?
                <Table className='mx-5 pt-5' dataSource={dataUser} rowKey='id'>
                    <Column title='Email' dataIndex='email' />
                    <Column title='First name' dataIndex='first_name' />
                    <Column title='Last name' dataIndex='last_name' />
                    <Column
                        title="Action"
                        key="action"
                        render={(_, record) => (
                            <Space size="middle">
                                <Tooltip title="Xóa">
                                    <Button
                                        shape="circle"
                                        icon={<DeleteOutlined />}
                                    // onClick={() => handleDeleteTodo(record.key)}
                                    />
                                </Tooltip>
                            </Space>
                        )}
                    />
                </Table>
                :
                <div>
                    <span>Loading...</span>
                    <Spin

                        indicator={

                            <LoadingOutlined
                                style={{
                                    fontSize: 24,
                                }}
                                spin
                            />
                        }
                    />
                </div>
            }
        </div>
    )
}

export default User;