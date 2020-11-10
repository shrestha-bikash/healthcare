import React, { useState } from 'react';
import './App.css';
import { Form, Input, Button, List, Checkbox } from 'antd';
import axios from 'axios';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const URL = 'https://cs5500-healthcare.herokuapp.com/v1/'

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function App() {
  const [rawactivity, setRawActivity] = useState(null);

  const onFinish = values => {
    console.log('Success:', values);
    axios.post(URL + 'user/signup', values).then(res => {
      console.log(res.data)
    })
  };
  
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const getRawActivity = () => {
    axios.get(URL + 'rawactivity').then(res => {
      console.log('Response: ', res)
      console.log('Data: ', res.data)
      setRawActivity(res.data)
    })
  }
  console.log('rawactivity:', rawactivity)
  return (
    <div className="App">
      <div className='signup-sec'>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your Full name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="re_password"
            rules={[{ required: true, message: 'Please reenter your password again!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div className="activity-sec">
        <Button type="primary" onClick={getRawActivity}>
          Get Raw Activity
        </Button>

        {
          rawactivity &&
          <div className="rawactivity">
            {/* {
              rawactivity.map((item, index) =>
                <div key={index}>
                  <p>{item.time}</p>
                  <p>{item.symptoms}</p>
                </div>
              )
            } */}
            <List
              bordered
              dataSource={rawactivity}
              itemLayout="vertical"
              renderItem={item => (
                <List.Item>
                  <p>{item.time}</p>
                  <p>{item.symptoms}</p>
                </List.Item>
              )}
            />
          </div>
        }

      </div>
    </div>
  );
}

export default App;
