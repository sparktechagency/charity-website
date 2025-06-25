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
            prefix={<span>
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0.5C11.3261 0.5 12.5979 1.02678 13.5355 1.96447C14.4732 2.90215 15 4.17392 15 5.5C15 6.82608 14.4732 8.09785 13.5355 9.03553C12.5979 9.97322 11.3261 10.5 10 10.5C8.67392 10.5 7.40215 9.97322 6.46447 9.03553C5.52678 8.09785 5 6.82608 5 5.5C5 4.17392 5.52678 2.90215 6.46447 1.96447C7.40215 1.02678 8.67392 0.5 10 0.5ZM10 13C15.525 13 20 15.2375 20 18V20.5H0V18C0 15.2375 4.475 13 10 13Z" fill="#888888" />
              </svg>


            </span>}
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
            prefix={<span>
              <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5 0H2.5C1.125 0 0.0125 1.125 0.0125 2.5L0 17.5C0 18.875 1.125 20 2.5 20H22.5C23.875 20 25 18.875 25 17.5V2.5C25 1.125 23.875 0 22.5 0ZM22.5 5L12.5 11.25L2.5 5V2.5L12.5 8.75L22.5 2.5V5Z" fill="#888888" />
              </svg>

            </span>}
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
            prefix={<span>
              <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 21.5C1.45 21.5 0.979333 21.3043 0.588 20.913C0.196666 20.5217 0.000666667 20.0507 0 19.5V9.5C0 8.95 0.196 8.47933 0.588 8.088C0.98 7.69667 1.45067 7.50067 2 7.5H3V5.5C3 4.11667 3.48767 2.93767 4.463 1.963C5.43833 0.988334 6.61733 0.500667 8 0.500001C9.38267 0.499334 10.562 0.987001 11.538 1.963C12.514 2.939 13.0013 4.118 13 5.5V7.5H14C14.55 7.5 15.021 7.696 15.413 8.088C15.805 8.48 16.0007 8.95067 16 9.5V19.5C16 20.05 15.8043 20.521 15.413 20.913C15.0217 21.305 14.5507 21.5007 14 21.5H2ZM8 16.5C8.55 16.5 9.021 16.3043 9.413 15.913C9.805 15.5217 10.0007 15.0507 10 14.5C9.99933 13.9493 9.80367 13.4787 9.413 13.088C9.02233 12.6973 8.55133 12.5013 8 12.5C7.44867 12.4987 6.978 12.6947 6.588 13.088C6.198 13.4813 6.002 13.952 6 14.5C5.998 15.048 6.194 15.519 6.588 15.913C6.982 16.307 7.45267 16.5027 8 16.5ZM5 7.5H11V5.5C11 4.66667 10.7083 3.95833 10.125 3.375C9.54167 2.79167 8.83333 2.5 8 2.5C7.16667 2.5 6.45833 2.79167 5.875 3.375C5.29167 3.95833 5 4.66667 5 5.5V7.5Z" fill="#888888" />
              </svg>
            </span>}
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
            prefix={<span>
              <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 21.5C1.45 21.5 0.979333 21.3043 0.588 20.913C0.196666 20.5217 0.000666667 20.0507 0 19.5V9.5C0 8.95 0.196 8.47933 0.588 8.088C0.98 7.69667 1.45067 7.50067 2 7.5H3V5.5C3 4.11667 3.48767 2.93767 4.463 1.963C5.43833 0.988334 6.61733 0.500667 8 0.500001C9.38267 0.499334 10.562 0.987001 11.538 1.963C12.514 2.939 13.0013 4.118 13 5.5V7.5H14C14.55 7.5 15.021 7.696 15.413 8.088C15.805 8.48 16.0007 8.95067 16 9.5V19.5C16 20.05 15.8043 20.521 15.413 20.913C15.0217 21.305 14.5507 21.5007 14 21.5H2ZM8 16.5C8.55 16.5 9.021 16.3043 9.413 15.913C9.805 15.5217 10.0007 15.0507 10 14.5C9.99933 13.9493 9.80367 13.4787 9.413 13.088C9.02233 12.6973 8.55133 12.5013 8 12.5C7.44867 12.4987 6.978 12.6947 6.588 13.088C6.198 13.4813 6.002 13.952 6 14.5C5.998 15.048 6.194 15.519 6.588 15.913C6.982 16.307 7.45267 16.5027 8 16.5ZM5 7.5H11V5.5C11 4.66667 10.7083 3.95833 10.125 3.375C9.54167 2.79167 8.83333 2.5 8 2.5C7.16667 2.5 6.45833 2.79167 5.875 3.375C5.29167 3.95833 5 4.66667 5 5.5V7.5Z" fill="#888888" />
              </svg>
            </span>}
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
