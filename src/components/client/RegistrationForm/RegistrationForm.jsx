import { Form, Input, Button, Upload, Card, Modal, Space, message, InputNumber } from "antd";
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

const RegistrationForm = ({ setIsOpenModal, setLoginModal, isModalOpen, form }) => {
  const axiosPublic = useAxiosPublic();


  // otp verify related function start

  const [otp, setOtp] = useState("");
  const [otpModal, setOtpModal] = useState(false);


  const handleChange = (value) => {
    if (!/^\d*$/.test(value)) return; // Ensure only numbers are entered

    if (value.length <= 6) { // Limit OTP to 6 digits
      setOtp(value);
    }
  };

  const onClose = () => {
    form.resetFields();
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
  const [forms] = Form.useForm();
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

      if (res.data.success) {
        form.resetFields();
        setIsOpenModal(false);
        setLoginModal(false);
        form.resetFields();
        setOtpModal(true);
        return message.success(`Registration successful`);

        return;
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
      form.resetFields();
      return;
    }
  };
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const openLoginModal = () => {
    setLoginModal(true);
    setIsOpenModal(false);
  };

  // otp verify 

  const handleSubmitOtp = async (values) => {
    console.log(`values is ${values}`)
    try {
      setLoading(true);

      const res = await axiosPublic.post(`/otp-verify`, { otp: values.otp });

      if (res.data.success) {
        form.resetFields()
        localStorage.setItem(`token`, res.data.data?.token);
        window.location.href = "/"
        message.success(res.data.message);
        return setOtpModal(false);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
      return;
    } finally {
      form.resetFields();
      setLoading(false);
      setOtpModal(false)
      return
    }
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
        form={form}
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
          label="Photo ID"
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
            className="lg:w-full navBtn2 h-11 text-[14px] font-bold border-none py-2 my-3 rounded-lg"
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
        closable
        maskClosable={false}
        closeIcon={<span className="text-black text-2xl">×</span>}
      >
        <div className="text-center py-4 px-2">
          <h2 className="text-2xl font-bold mb-2">Verify OTP</h2>
          <p className="mb-6 text-sm text-gray-600">
            Enter the 6-digit code sent to your email.
          </p>

          <Form
            form={forms}
            onFinish={handleSubmitOtp}
            layout="vertical"
            className="flex flex-col items-center"
          >
            <Form.Item
              label="OTP"
              name="otp"
              className="w-full"
              rules={[
                { required: true, message: "Please input your OTP!" },
                {
                  validator: (_, value) =>
                    value && value.toString().length === 6
                      ? Promise.resolve()
                      : Promise.reject("OTP must be 6 digits"),
                },
              ]}
            >
              <Input
                placeholder="Enter your OTP"
                maxLength={6}
                className="h-11 text-center tracking-widest"
                inputMode="numeric"
              />
            </Form.Item>

            <Button

              loading={loading}
              disabled={loading}
              htmlType="submit"
              type="primary"
              className="h-11 w-full rounded-lg font-semibold navBtn2 border-none"
            >
              Verify
            </Button>
          </Form>
        </div>
      </Modal>

      {/* </Card> */}
      {/* <Toaster position="top-right"></Toaster> */}
    </div>
  );
};

export default RegistrationForm;
