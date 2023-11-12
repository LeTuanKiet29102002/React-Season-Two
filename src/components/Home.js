import { Button, Input, Tooltip } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
const Home = (props) => {
    const handdleEvenClick = () => {
        console.log('Click me:',);
    }
    const handleOnchange =(event)=>{
        
    }

    return (
        <div>
            <Input
                onChange={(event)=>{handleOnchange(event)}}
                className='m-3'
                style={{ width: '200px' }}
                placeholder="Enter your username"
                prefix={<UserOutlined className="site-form-item-icon" />}
                suffix={
                    <Tooltip title="Extra information">
                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                }
            />
            <Button type="default" onClick={(event) => { handdleEvenClick(event) }}>Click me</Button>
        </div>
    )
}

export default Home