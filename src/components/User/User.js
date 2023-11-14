import './User.scss';
import { Button, Input, Tooltip, Table, Space } from 'antd';
import Column from 'antd/es/table/Column';
import { InfoCircleOutlined, UserOutlined, CompassOutlined, MoneyCollectOutlined,DeleteOutlined } from '@ant-design/icons';
import { useState,useEffect } from 'react';
import axios from 'axios';



const User = (props) => {
    const [dataUser,setDataUser] = useState([]);
    useEffect(() => {
        let fetchData=async()=> {
          let res = await axios.get('https://reqres.in/api/users?page=2');
          let data = res && res.data && res.data.data ? res.data.data : [];
          setDataUser(data);
          console.log('check',res.data.data);
        }
        fetchData();
      }, []);
    return (
        <div className="list-container-user">
        <div className='' style={{ color: '#06f7ff' }}>List User Components</div>
            <Table className='mx-5 pt-5' dataSource={dataUser} rowKey='id'>
                <Column title='Email' dataIndex='email'  />
                <Column title='First name' dataIndex='first_name'  />
                <Column title='Last name' dataIndex='last_name'  />
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
        </div>
    )
}

export default User;