import { Form, Input, Button, Upload, Card, message } from "antd";
import {
  UploadOutlined,
  MailOutlined,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import useAxiosPublic from "../../../pages/hooks/useAxiosPublic";
import { useEffect, useState } from "react";

const RegistrationForm = ({ setIsOpenModal, setLoginModal, isModalOpen }) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState(null);
  const [loading, setLoading] = useState();
  const axiosPublic = useAxiosPublic();
  const handleFileChange = (info) => {
    setFileList(info.fileList);
  };
  const onFinish = async (values) => {
    console.log("Registration Success:", values);

    const formData = new FormData(); // 👈 You need to create FormData here
    formData.append("full_name", values.full_name);
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("password_confirmation", values.password_confirmation);
    formData.append("image", fileList[0]?.originFileObj); // 👈 get file from fileList

    try {
      setLoading(true);
      const res = await axiosPublic.post(`/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(res);
      if (res.data.success) {
        toast.success(`Registration successful`);
        form.resetFields();
        setIsOpenModal(false);
        setLoginModal(true);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const openLoginModal = () => {
    setLoginModal(true);
    setIsOpenModal(false);
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  return (
    <div className="">
      {/* <Card className="lg:p-6"> */}
        <h2 className="text-2xl font-bold text-center mb-2 lg:mb-6">Register</h2>
        <Form
          name="register"
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          {/* Name */}
          <Form.Item
            label="Name"
            name="full_name"
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

          {/* Password Confirmation */}
          <Form.Item
            label="Confirm Password"
            name="password_confirmation"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match!"));
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Confirm your password"
              className="py-2"
            />
          </Form.Item>

          {/* Photo Upload */}
          <Form.Item
            label="Photo"
            name="image"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={[{ required: true, message: "Please upload your photo!" }]}
          >
            <Upload.Dragger
              beforeUpload={() => false}
              fileList={fileList}
              name="image"
              listType="picture"
              maxCount={1}
              onChange={handleFileChange}
            >
              <UploadOutlined /> Click to Upload Your Photo
            </Upload.Dragger>
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button
              loading={loading}
              disabled={loading}
              type="primary"
              htmlType="submit"
              className="lg:w-full bg-btnColor h-11 text-[14px] font-bold border-none py-2 my-3 rounded-lg"
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
      {/* </Card> */}
      {/* <Toaster position="top-right"></Toaster> */}
    </div>
  );
};

export default RegistrationForm;
