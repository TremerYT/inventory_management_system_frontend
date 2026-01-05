import {Button, Checkbox, Form, Input} from "antd";

const RegisterForm = () => {
  const [registerForm] = Form.useForm();
  return (
    <Form form={registerForm} layout="vertical">
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[{required: true, message: "First name is required"}]}
      >
        <Input size="large" placeholder="Enter your first name"/>
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[{required: true, message: "Last name is required"}]}
      >
        <Input size="large" placeholder="Enter your Last name"/>
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{required: true, type: "email"}]}
      >
        <Input size="large" placeholder="Enter your email"/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{required: true}]}
      >
        <Input.Password size="large" placeholder="Enter your password"/>
      </Form.Item>

      <Button
        type="primary"
        htmlType="submit"
        size="large"
        className="w-full mb-6"
      >
        Register
      </Button>
    </Form>
  );
}

export default RegisterForm;