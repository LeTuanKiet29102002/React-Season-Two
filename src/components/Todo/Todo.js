import { Button, Input, Tooltip, Table, Space } from 'antd';
import { useState } from 'react';
import { InfoCircleOutlined, UserOutlined, CompassOutlined, MoneyCollectOutlined } from '@ant-design/icons';
import Column from 'antd/es/table/Column';
import './Todo.scss';
import { toast } from 'react-toastify';
import TodoTable from './TodoTable';
const Home = (props) => {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [salary, setSalary] = useState('');
    const [searchTitle, setSearchTitle] = useState('');
    const [filteredTodos, setFilteredTodos] = useState([]);
    const { Search } = Input;
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
    const handleOnchangeSearchTitle = (event) => {
        setSearchTitle(event.target.value);
    }
    const handleSearch = (event)=>{
        const filtered = todos.filter(todo => todo.title.toLowerCase().includes(searchTitle.toLowerCase()));
        setFilteredTodos(filtered);
        setSearchTitle('');
    }
    

    return (
        <div className='todo-container'>
            <div style={{ color: '#06f7ff' }}>Hello everyone!Wellcome to My TODO</div>
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
            <Button type="default" onClick={(event) => { handdleEvenClick(event) }}>Add todo</Button>
            <Search
                value={searchTitle}
                className='mx-5 mt-3'
                style={{width:'300px',display:'block'}}
                placeholder="input search text"
                allowClear
                enterButton="Search"
                onSearch={(event)=>{handleSearch(event)}}
                onChange={(event) => { handleOnchangeSearchTitle(event) }}
            />
            <TodoTable
                todos={filteredTodos.length > 0 ? filteredTodos : todos}
            />

        </div>
    )
}

export default Home










