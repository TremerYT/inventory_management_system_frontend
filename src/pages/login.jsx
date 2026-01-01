import LoginForm from "../components/forms/login_form.jsx";
import AuthLayout from "../components/layout/auth_layout.jsx";

const Login = () => {
  return (
   <AuthLayout children={<LoginForm/>}/>
  );
}

export default Login;