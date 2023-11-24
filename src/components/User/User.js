import './User.scss';
import { Button, Input, Tooltip, Table, Space, Spin, Modal, Form ,Checkbox} from 'antd';
import Column from 'antd/es/table/Column';
import { InfoCircleOutlined, UserOutlined, CompassOutlined, MoneyCollectOutlined, DeleteOutlined, LoadingOutlined, EditOutlined, UserAddOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import axios from 'axios';
import useFetch from '../../customize/fetch';
import { useNavigate } from 'react-router-dom';



const User = (props) => {
    const navigate = useNavigate();
    const [newData, setNewData]=useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const [formData, setFormData] = useState({
        email: '',
        firstname: '',
        lastname: '',
    });
    const handleSubmitSave = async () => {
        let data = {
            id:122,
            email: formData.email,
            last_name: formData.lastname,
            first_name: formData.firstname,
        }
        try {
            let res = await axios.post('https://reqres.in/api/users', data);
      
            // Cập nhật state newData với dữ liệu mới nhận được từ API
            setNewData((prevData) => [res.data, ...prevData]);
      
            setFormData({
                email: '',
                firstname: '',
                lastname: '',
            });
            setIsModalOpen(false);
          } catch (error) {
            console.error('Error creating user:', error);
          }

    }

    const onFinish = (values) => {
        setIsModalOpen(false);

        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const handleFormChange = (changedValues, allValues) => {
        // Update the state for the whole form data
        setFormData(allValues);
    };


    // let dataUser = useFetch(url).data;
    const { data: dataUser, isLoading: loading, error } = useFetch('https://reqres.in/api/users?page=2')

    // const DetailBtn
    const handleDetailUser = (id) => {
        // const id = 
        navigate(`/users/${id}`)
        // console.log('check detail user:',id);

    }
    // const handleAddUser = () => {
    //     navigate(`/register`)
    // }
    const handleDeleteTodo = (id) => {
        let data = newData;
        data = data.filter(item=>item.id !== id);
        setNewData(data);
        
    }


    return (
        <div className="list-container-user">
            <div className='' style={{ color: '#06f7ff' }}>List User Components</div>
            <Button type="primary" style={{ marginTop: '20px' }}
                icon={<UserAddOutlined />}
                onClick={showModal}>
                Add user
            </Button>
            <Modal title=" My Infor" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    onValuesChange={handleFormChange}
                >
                    <Form.Item
                        label="Email"
                        value={formData.email}
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        value={formData.firstname}
                        label="First name"
                        name="firstname"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your first name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        value={formData.lastname}
                        label="Last name"
                        name="lastname"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your last name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit" onClick={handleSubmitSave}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
            {/* <Tooltip title="Thêm random">
                <Button
                    style={{ marginTop: '20px' }}
                    icon={<UserAddOutlined />}
                    onClick={() => handleAddUser()}
                >Add user</Button>
            </Tooltip> */}
            {loading === false ?
                <Table className='mx-5 pt-5' dataSource={[...newData, ...dataUser]} rowKey='id'>
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