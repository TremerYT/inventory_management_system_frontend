import {Button, Checkbox, Form, Input, Space} from "antd";
import {useState} from "react";

const LoginForm = () => {
  const [loginForm] = Form.useForm();
  const handleSubmit = () => {
    const data = loginForm.getFieldsValue();

  }

  return (
      <Form form={loginForm} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, type: "email" }]}
        >
          <Input size="large" placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true }]}
        >
          <Input.Password size="large" placeholder="Enter your password" />
        </Form.Item>

        <div className="flex justify-between items-center mb-4">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Stay logged in on this device</Checkbox>
          </Form.Item>
          <Button type="link" size="large" color="">Forgot Password?</Button>
        </div>

        <Button
          type="primary"
          htmlType="submit"
          size="large"
          className="w-full mb-6"
        >
          Login
        </Button>
      </Form>
  );
};

export default LoginForm;
