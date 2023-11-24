import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';
import './Register.scss';

const AddNewUser = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    firstname: '',
    lastname: '',
  });

  
  const handleCheckData = ()=>{
    console.log('>>>check data:', formData.email);
  }

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/users');
  };

  const handleFormChange = (changedValues, allValues) => {
    // Update the state for the whole form data
    setFormData(allValues);
  };

  return (
    <div className='register-container'>
      Hello add new User
      <Button className="m-3" onClick={() => handleBack()}>
        Back
      </Button>
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
          <Button type="primary" htmlType="submit" onClick={handleCheckData}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddNewUser;
