import { Form, Input, Button, Card, Alert, Modal, InputNumber } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

const LoginForm = ({ setLoginModal }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const formData = new FormData();

  const onFinish = (values) => {
    try {
      setLoading(true);
      console.log("Login Success:", values);

      formData.append(`email`, values.email);
      formData.append(`password`, values.password);

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // registration modal

  const [isModalOpen, setIsOpenModal] = useState(false);
  const openModal = () => {
    setIsOpenModal(true);
    setLoginModal(false);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  // new password set modal
  const [newPasswordModal, setNewPasswordModal] = useState(false);

  const closeNewPasswordModal = ()=>{
    setNewPasswordModal(false)
  };

  const submitNewPasswordModal = async(values)=>{
    setNewPasswordModal(false);
    alert(`Password reset successfully`)
  };




  // otp verify modal
  const [isOtpVerifyModal, setIsOtpVerifyModal] = useState(false);
  const closeOtpVerifyModal = () => {
    setIsOtpVerifyModal(false);
  };

  const submitOtpVerifyModal = () => {
    setNewPasswordModal(true);
    setIsOtpVerifyModal(false);
  };

  // forget password modal

  const [forgetPasswordModal, setForgetPasswordModal] = useState(false);

  const openForgetPasswordModal = () => {
    setForgetPasswordModal(true);
    setLoginModal(false);
  };

  const closeForgetPasswordModal = () => {
    setForgetPasswordModal(false);
  };

  const submitForgetPasswordFrom = (values) => {
    setForgetPasswordModal(false);
    setLoginModal(false);
    setIsOtpVerifyModal(true);
    console.log(values);
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  return (
    <div className="">
      <Card className=" rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <Form
          name="login"
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
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

          {/* 👉 Here we add Forget Password link */}
          <div className="flex justify-end mb-4">
            <Link
              onClick={openForgetPasswordModal}
              to=""
              className="text-blue-600 hover:underline text-sm font-semibold"
            >
              Forgot Password?
            </Link>
          </div>

          <Form.Item>
            <Button
              loading={loading}
              type="primary"
              htmlType="submit"
              className="w-full bg-btnColor border-none h-11 font-bold text-white text-[14px] mt-1 rounded-lg"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center mt-4">
          <span className="text-gray-600">Don't have an account? </span>
          <Link
            onClick={openModal}
            to=""
            className="text-blue-600 hover:underline font-semibold"
          >
            Register
          </Link>
        </div>
      </Card>

      {/* registration modal  */}

      <Modal
        open={isModalOpen}
        footer={null}
        closable={true}
        onCancel={closeModal}
        centered
        // width="400px"
        style={{ padding: "15px", top: 0 }}
      >
        <RegistrationForm
          setIsOpenModal={setIsOpenModal}
          setLoginModal={setLoginModal}
        />
      </Modal>

      {/* forget password modal  */}

      <Modal
        open={forgetPasswordModal}
        footer={null}
        closable={true}
        onCancel={closeForgetPasswordModal}
        centered
        // width="400px"
        style={{ padding: "15px", top: 0 }}
      >
        <Form form={form} onFinish={submitForgetPasswordFrom} layout="vertical">
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
          <Form.Item>
            <Button
              loading={loading}
              type="primary"
              htmlType="submit"
              className="w-full bg-btnColor border-none h-11 font-bold text-white text-[14px] mt-1 rounded-lg"
            >
              Verify email
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* otp verify modal  */}

      <Modal
        open={isOtpVerifyModal}
        footer={null}
        closable={true}
        onCancel={closeOtpVerifyModal}
        centered
        // width="400px"
        style={{ padding: "15px", top: 0 }}
      >
        <Form form={form} onFinish={submitOtpVerifyModal} layout="vertical">
          <Form.Item
            label="OTP"
            name="otp"
            rules={[
              { required: true, message: "Please input your OTP!" },
              { type: "number", message: "OTP must be a valid number!" },
            ]}
          >
            <InputNumber
              placeholder="Enter your OTP"
              className="w-full py-2"
              controls={false} // number increment/decrement button hide kore
            />
          </Form.Item>

          <Form.Item>
            <Button
              loading={loading}
              type="primary"
              htmlType="submit"
              className="w-full bg-btnColor border-none h-11 font-bold text-white text-[14px] mt-1 rounded-lg"
            >
              Verify Otp
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* set new password modal  */}

      <Modal
        open={newPasswordModal}
        footer={null}
        closable={true}
        onCancel={closeNewPasswordModal}
        centered
        style={{ padding: "15px", top: 0 }}
      >
        <Form
          name="new_password_set"
          layout="vertical"
          onFinish={submitNewPasswordModal}
          autoComplete="off"
        >
          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              { min: 6, message: "Password must be minimum 6 characters." },
            ]}
            hasFeedback
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Enter your password"
              className="py-2"
            />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={["password"]} // very important for matching
            hasFeedback
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

          <Form.Item>
            <Button
              loading={loading}
              type="primary"
              htmlType="submit"
              className="w-full bg-btnColor border-none h-11 font-bold text-white text-[14px] mt-1 rounded-lg"
            >
              Set new password
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default LoginForm;
