import { Button, Card } from "antd";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="flex gap-10 p-10 shadow-lg max-w-4xl w-full">
        <div className="flex-1">
          <h1 className="mb-10 font-bold">Nirvana</h1>
          <div className="flex flex-col justify-center text-center mb-10">
            <h2 className="text-xl font-semibold">Login to your account</h2>
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

          <div>
            {children}
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src="/login.png"
            alt="login illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
