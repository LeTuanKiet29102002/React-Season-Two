import { Button, Input, Tooltip, Table, Space } from 'antd';
import { useState } from 'react';
import { InfoCircleOutlined, UserOutlined, CompassOutlined, MoneyCollectOutlined } from '@ant-design/icons';
import ColumnGroup from 'antd/es/table/ColumnGroup';
import Column from 'antd/es/table/Column';
import './Home.scss';
import {toast } from 'react-toastify';
const Home = (props) => {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [salary, setSalary] = useState('');
    const [todos, setTodos] = useState([
        { key: 'todo1', id: 'todo1', title: 'Watching Kimoon ', salary: '200' },
        { key: 'todo2', id: 'todo2', title: 'Playing game with Kimoon ', salary: '300' },
        { key: 'todo3', id: 'todo3', title: 'Fix bug with Kimoon ', salary: '500' },
    ]);


    const handdleEvenClick = () => {
        if (!id || !title || !salary) {
            toast.error('Empty input');
            return;
        }
        const NewTodo = {
            key: Math.floor(Math.random() * 1000),
            id,
            title,
            salary,
        };
        setTodos([...todos, NewTodo]);
        toast.success('Add todo successfully !');

        setId('');
        setTitle('');
        setSalary('');

    }
    const handleOnchangeID = (event) => {
        setId(event.target.value);
    }
    const handleOnchangeTitle = (event) => {
        setTitle(event.target.value);
    }
    const handleOnchangeSalary = (event) => {
        setSalary(event.target.value);
    }

    return (
        <div className='homepage-container'>
            <Input
                value={id}
                onChange={(event) => { handleOnchangeID(event) }}
                className='m-3'
                style={{ width: '200px' }}
                placeholder="Enter your ID"
                prefix={<UserOutlined className="site-form-item-icon" />}
                suffix={
                    <Tooltip title="Extra information">
                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                }
            />
            <Input
                value={title}
                onChange={(event) => { handleOnchangeTitle(event) }}
                className='m-3'
                style={{ width: '200px' }}
                placeholder="Enter your title"
                prefix={<CompassOutlined className="site-form-item-icon" />}
                suffix={
                    <Tooltip title="Extra information">
                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                }
            />
            <Input
                value={salary}
                onChange={(event) => { handleOnchangeSalary(event) }}
                className='m-3'
                style={{ width: '200px' }}
                placeholder="Enter your salary"
                prefix={<MoneyCollectOutlined className="site-form-item-icon" />}
                suffix={
                    <Tooltip title="Extra information">
                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                }
            />
            <Button type="default" onClick={(event) => { handdleEvenClick(event) }}>Click me</Button>
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

export default Home










