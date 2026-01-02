import {Button, Divider} from "antd";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import {useNavigate} from "react-router";

const AuthLayout = ({ children }) => {

  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-300">
      <div className="flex shadow-lg max-w-5xl w-full bg-gray-200 rounded-2xl" >
        <div className="flex-1 p-10 w-1/2">
          <h1 className="mb-30">Nirvana</h1>
          <div className="flex flex-col justify-center text-center mb-10">
            <h2 className="text-xl">Login to your account</h2>
            <p className="text-gray-500">Welcome back, please enter your details</p>
          </div>
          <div className="flex gap-4 w-full mb-6">
            <Button icon={<FcGoogle />} block size="large">
              Continue with Google
            </Button>

            <Button
              icon={<FaFacebook style={{ color: "#1877F2" }} />}
              block
              size="large"
            >
              Continue with Facebook
            </Button>
          </div>
          <Divider plain>OR</Divider>
          <div>
            {children}
          </div>

          <div className="flex items-center justify-center">
            <p>Not registered yet?</p>
            <Button type="link" size="large" onClick={() => navigate("/register")}>Create an account</Button>
          </div>
        </div>
        <div className="w-1/2 bg-gray-500 flex items-center justify-center rounded-r-2xl">
          <img
            src="/login.png"
            alt="login illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
