import { Button, Input, Tooltip } from 'antd';
import { useState } from 'react';
import { InfoCircleOutlined, UserOutlined,CompassOutlined} from '@ant-design/icons';
const Home = (props) => {
    const [name, setName] = useState('Kimoon');
    const [address, setAddress] = useState('Moon');
    const [showInfo, setShowInfo] = useState(false);

    const handdleEvenClick = () => {
        setName(address);
        setAddress(name);
        setShowInfo(true);
    }
    const handleOnchangeName = (event) => {
        setName(event.target.value);
        console.log(event.target.value);
    }
    const handleOnchangeAddress = (event) => {
        setAddress(event.target.value);
        console.log(event.target.value);
    }

    return (
        <div>
            <div className='m-3'>Hi guy!My name is {name}</div>
            <div className='m-3'>I'm from {address}</div>
            <Input
                value={name}
                onChange={(event) => { handleOnchangeName(event) }}
                className='m-3'
                style={{ width: '200px' }}
                placeholder="Enter your name"
                prefix={<UserOutlined className="site-form-item-icon" />}
                suffix={
                    <Tooltip title="Extra information">
                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                }
            />
            <Input
                value={address}
                onChange={(event) => { handleOnchangeAddress(event) }}
                className='m-3'
                style={{ width: '200px' }}
                placeholder="Enter your address"
                prefix={<CompassOutlined className="site-form-item-icon" />}
                suffix={
                    <Tooltip title="Extra information">
                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                }
            />
            <Button type="default" onClick={(event) => { handdleEvenClick(event) }}>Click me</Button>
            {showInfo && (
                <div className='m-3'>
                    Additional information: My name :{name} - {address}
                </div>
            )}
        </div>
    )
}

export default Home










