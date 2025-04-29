import { Form, Input, Button, Upload, Card, Modal, Space, message } from "antd";
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
  const axiosPublic = useAxiosPublic();

  const [form] = Form.useForm();
  // otp verify related function start

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpModal, setOtpModal] = useState(false);

  const handleChange = (value, index) => {
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto focus next input
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`)?.focus();
      }
      // If empty and backspace, go to previous input
      if (!value && index > 0) {
        document.getElementById(`otp-input-${index - 1}`)?.focus();
      }
    }
  };

  const handleSubmit = async () => {
    const otpCode = otp.join("");
    if (otpCode.length !== otp.length) {
      message.error("Please enter the full 6-digit OTP!");
      return;
    }

    try {
      setLoading(true);

      // 👉 API Call here
      const res = await axiosPublic.post(`/otp-verify`, {
        otp: otpCode,
      });

      console.log(res);

      if (res.data.success) {
        message.success("OTP Verified Successfully!");
        form.resetFields();
        setOtp(["", "", "", "", "", ""]);
        setOtpModal(false);
        setLoginModal(true);
      } else {
        message.error(res.data.message || "Invalid OTP!");
      }
    } catch (error) {
      console.error(error);
      message.error(
        error.response?.data?.message || "OTP Verification Failed!"
      );
    } finally {
      setLoading(false);
    }
  };

  const onClose = () => {
    setOtpModal(false);
  };

  const openOtpModal = () => {
    setOtpModal(true);
  };

  // otp verify related function end

  const [fileList, setFileList] = useState(null);
  const [loading, setLoading] = useState();
  const handleFileChange = (info) => {
    setFileList(info.fileList);
  };
  const onFinish = async (values) => {
    const formData = new FormData();
    formData.append("full_name", values.full_name);
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("password_confirmation", values.password_confirmation);
    formData.append("image", fileList[0]?.originFileObj);

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
        setLoginModal(false);
        setOtpModal(true); // 👉 Move here
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
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
    document.body.style.overflow = isModalOpen || otpModal ? "hidden" : "auto";
  }, [isModalOpen, otpModal]);

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
            onClick={openOtpModal}
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

      {/* email verify or otp verify modal  */}

      <Modal
        open={otpModal}
        onCancel={onClose}
        footer={null}
        centered
        width={400}
        closable={true}
      >
        <div className="text-center py-4">
          <h2 className="text-2xl font-bold mb-2">Verify OTP</h2>
          <p className="text-gray-500 mb-6 text-sm">
            Enter the 6-digit code sent to your email.
          </p>

          <Form
            form={form}
            onFinish={handleSubmit}
            autoComplete="off"
            className="flex flex-col items-center"
          >
            <Space size="middle" className="mb-6">
              {otp.map((digit, idx) => (
                <Form.Item
                  key={idx}
                  name={`otp-${idx}`}
                  rules={[
                    { required: true, message: "" },
                    { pattern: /^[0-9]$/, message: "" },
                  ]}
                  noStyle
                >
                  <Input
                    id={`otp-input-${idx}`}
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e.target.value, idx)}
                    className="lg:!w-12 !h-12 text-center text-lg font-semibold rounded-lg"
                    autoFocus={idx === 0}
                  />
                </Form.Item>
              ))}
            </Space>

            <Button
              htmlType="submit"
              type="primary"
              block
              className="h-11 lg:w-full !w-20 rounded-lg font-semibold bg-btnColor border-none "
            >
              Verify
            </Button>
          </Form>

          {/* Optional Resend Section */}
          {/* <p className="mt-4 text-gray-500 text-sm">
            Didn't receive code?{" "}
            <span className="text-blue-600 cursor-pointer">Resend</span>
          </p> */}
        </div>
      </Modal>

      {/* </Card> */}
      {/* <Toaster position="top-right"></Toaster> */}
    </div>
  );
};

export default RegistrationForm;
