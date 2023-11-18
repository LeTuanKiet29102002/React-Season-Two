import './User.scss';
import { Button, Input, Tooltip, Table, Space, Spin } from 'antd';
import Column from 'antd/es/table/Column';
import { InfoCircleOutlined, UserOutlined, CompassOutlined, MoneyCollectOutlined, DeleteOutlined, LoadingOutlined, EditOutlined ,UserAddOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import axios from 'axios';
import useFetch from '../../customize/fetch';
import { useNavigate } from 'react-router-dom';



const User = (props) => {
    const navigate = useNavigate();


    // let dataUser = useFetch(url).data;
    const { data: dataUser, isLoading: loading, error } = useFetch('https://reqres.in/api/users?page=2')

    // const DetailBtn
    const handleDetailUser = (id) => {
        // const id = 
        navigate(`/users/${id}`)
        // console.log('check detail user:',id);

    }
    const handleAddUser = ()=>{
        navigate(`/register`)
    }
    const handleDeleteTodo = (id) => {
        console.log('check user : ', id);
    }


    return (
        <div className="list-container-user">
            <div className='' style={{ color: '#06f7ff' }}>List User Components</div>
            <Tooltip title="Thêm random">
                <Button
                    style={{ marginTop: '20px' }}
                    icon={<UserAddOutlined />}
                    onClick={() =>handleAddUser()}
                >Add user</Button>
            </Tooltip>
            {loading === false ?
                <Table className='mx-5 pt-5' dataSource={dataUser} rowKey='id'>
                    <Column title='Email' dataIndex='email' />
                    <Column title='First name' dataIndex='first_name' />
                    <Column title='Last name' dataIndex='last_name' />
                    <Column
                        className='btn-action'
                        title="Action"
                        key="action"
                        render={(_, record) => (
                            <Space size="middle">
                                <Tooltip title="Xóa">
                                    <Button
                                        shape="circle"
                                        icon={<DeleteOutlined />}
                                        onClick={() => handleDeleteTodo(record.id)}
                                    />
                                </Tooltip>
                                <Tooltip title="Sửa">
                                    <Button
                                        shape="circle"
                                        icon={<EditOutlined />}
                                    // onClick={() => this.handleEditTodo()}
                                    />
                                </Tooltip>
                                <Tooltip title="Chi tiết">
                                    <Button
                                        shape="circle"
                                        icon={<InfoCircleOutlined />}
                                        onClick={() => handleDetailUser(record.id)}
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