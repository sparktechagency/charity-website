import { Form, Input, Button, Upload, Card, message } from "antd";
import {
  UploadOutlined,
  MailOutlined,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const RegistrationForm = ({setIsOpenModal,setLoginModal}) => {
  const onFinish = (values) => {
    console.log("Registration Success:", values);
    // Add your registration logic here
    toast.success(`Registration successfully`)
  };

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const openLoginModal = ()=>{
    setLoginModal(true);
    setIsOpenModal(false)
  }

  return (
    <div className="">
      <Card className="p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <Form
          name="register"
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          {/* Name */}
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Enter your name"
              className="py-2"
            />
          </Form.Item>

          {/* Email */}
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="Enter your email"
              className="py-2"
            />
          </Form.Item>

          {/* Password */}
          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              { min: 6, message: "Password must be minimum 6 characters." },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Enter your password"
              className="py-2"
            />
          </Form.Item>

          {/* Photo Upload */}
          <Form.Item
            label="Photo"
            name="photo"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={[{ required: true, message: "Please upload your photo!" }]}
            
          >
            <Upload.Dragger beforeUpload={()=>false} name="photo" listType="picture" maxCount={1}>
             <UploadOutlined/> Click to Upload Your Photo
            </Upload.Dragger>
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-btnColor h-11 text-[14px] font-bold border-none py-2 my-3 rounded-lg"
            >
              Register
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center mt-4">
          <span className="text-gray-600">Already have an account? </span>
          <Link
          onClick={openLoginModal}
            to=""
            className="text-green-600 hover:underline font-semibold"
          >
            Login
          </Link>
        </div>
      </Card>
      <Toaster position="top-right"></Toaster>
    </div>
  );
};

export default RegistrationForm;
