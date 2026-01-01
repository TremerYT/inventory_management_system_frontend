import {Button, Form, Input, Space} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";


const LoginForm = () => {
  const [loginForm] = Form.useForm();
  return (
      <Form form={loginForm} layout="vertical">
        <Form.Item
          rules={[
            { required: true, message: "Email address is required" },
            { type: "email", message: "Enter a valid email address" }
          ]}
          name="email"
          label="Email Address"
        >
          <Input placeholder = "Enter Email"/>
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "Password is required" }]}
          name="password"
          label="Password"
        >
          <Input.Password
            placeholder = "Enter Password"
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined/>)}
          />
        </Form.Item>
      </Form>
  );
};

export default LoginForm;
