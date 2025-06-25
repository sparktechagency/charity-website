import { Form, Input, Button, Card, Alert, Modal, InputNumber, message } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import useAxiosPublic from "../../../pages/hooks/useAxiosPublic";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { MdEmail } from "react-icons/md";

const LoginForm = ({ setLoginModal, loginModal, form }) => {
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const formData = new FormData();
  const [otpFrom] = Form.useForm();

  // login modal 

  const onFinish = async (values) => {
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("email", values.email);
      formData.append("password", values.password);

      const res = await axiosPublic.post(`/login`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Login successful!",
          showConfirmButton: false,
          timer: 1500,
        });

        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("authId", res.data.data.user.id);
        setLoginModal(false);
        form.resetFields(); // ✅ only reset if success
        window.location.href = "/";
      } else {
        // Optional: API returned success: false
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: res.data.message || "Login failed!",
          showConfirmButton: true,
        });
      }
    } catch (error) {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: error.response?.data?.message || "Something went wrong!",
        showConfirmButton: true,
      });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!loginModal) {
      form.resetFields();
    }
  }, [loginModal]);



  // registration modal

  const [isModalOpen, setIsOpenModal] = useState(false);
  const openModal = () => {
    setIsOpenModal(true);
    setLoginModal(false);
  };
  const closeModal = () => {
    form.resetFields()
    setIsOpenModal(false);
  };

  const token = localStorage.getItem(`forgetToken`);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Bearer added
    },
  };

  // 👈 true if token exists

  // new password set modal
  const [newPasswordModal, setNewPasswordModal] = useState(false);

  const closeNewPasswordModal = () => {
    setNewPasswordModal(false);
  };

  const submitNewPasswordModal = async (values) => {
    try {
      setLoading(true);
      let res = await axiosPublic.post(
        `/create-new-password`,
        {
          email: values.email,
          new_password: values.new_password,
          new_password_confirmation: values.new_password_confirmation,
        },
        config
      );

      if (res) {
        message.success(`${res.data.message}`);
        setNewPasswordModal(false);
        form.resetFields()
      }


    } catch (error) {

      message.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };



  // otp verify modal
  const [isOtpVerifyModal, setIsOtpVerifyModal] = useState(false);
  const closeOtpVerifyModal = () => {
    setIsOtpVerifyModal(false);
  };


  const [otp, setOtp] = useState("");

  const [error, setError] = useState("");
  const [forgetPasswordModal, setForgetPasswordModal] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true);
    try {

      const res = await axiosPublic.post(`/otp-verify`, { otp: otp })
      if (res) {
        localStorage.setItem("forgetToken", res.data?.data?.token)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: error.response?.data?.message,
          showConfirmButton: false,
          timer: 1500
        });
        // Assuming success means:
        setNewPasswordModal(true);
        setIsOtpVerifyModal(false);
        return setOtp("")

      }



      // You can use 'data' here if needed
    } catch (error) {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: error.response?.data?.message,
        showConfirmButton: false,
        timer: 1500
      });
    } finally {
      setLoading(false);
    }
  };

  // forget password modal




  const openForgetPasswordModal = () => {
    setForgetPasswordModal(true);
    setLoginModal(false);
  };

  const closeForgetPasswordModal = () => {
    setForgetPasswordModal(false);
  };

  const [userEmail, setUserEmail] = useState(null);

  const submitForgetPasswordFrom = async (values) => {
    try {
      setLoading(true);
      let res = await axiosPublic.post(`/forgot-password`, {
        email: values.email,

      }); // 👈 small fix here too (send object, not just string)

      if (res.data.success) {
        // ✅ Email verification request successful
        toast.success("Verification email sent!");
        setForgetPasswordModal(false);
        setLoginModal(false);
        setIsOtpVerifyModal(true);
        setUserEmail(values.email)
        form.resetFields();
        return;
      } else {
        toast.error("Failed to send verification email.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {

      setLoading(false);
      form.resetFields();
      return;
    }
  };

  useEffect(() => {
    document.body.style.overflow =
      isModalOpen || loginModal || forgetPasswordModal ? "hidden" : "auto";
  }, [isModalOpen, loginModal, forgetPasswordModal]);

  return (
    <div className="">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

      <Form
        form={form}
        name="login"
        layout="vertical"
        onFinish={onFinish}
        maskClosable={false}

      >
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
              <svg width="17" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5 0H2.5C1.125 0 0.0125 1.125 0.0125 2.5L0 17.5C0 18.875 1.125 20 2.5 20H22.5C23.875 20 25 18.875 25 17.5V2.5C25 1.125 23.875 0 22.5 0ZM22.5 5L12.5 11.25L2.5 5V2.5L12.5 8.75L22.5 2.5V5Z" fill="#888888" />
              </svg>

            </span>} // 👈 Blue email icon
            placeholder="Enter your email"
            className="py-2 px-2"
          />
        </Form.Item>

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
              <svg width="16" height="20" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 21.5C1.45 21.5 0.979333 21.3043 0.588 20.913C0.196666 20.5217 0.000666667 20.0507 0 19.5V9.5C0 8.95 0.196 8.47933 0.588 8.088C0.98 7.69667 1.45067 7.50067 2 7.5H3V5.5C3 4.11667 3.48767 2.93767 4.463 1.963C5.43833 0.988334 6.61733 0.500667 8 0.500001C9.38267 0.499334 10.562 0.987001 11.538 1.963C12.514 2.939 13.0013 4.118 13 5.5V7.5H14C14.55 7.5 15.021 7.696 15.413 8.088C15.805 8.48 16.0007 8.95067 16 9.5V19.5C16 20.05 15.8043 20.521 15.413 20.913C15.0217 21.305 14.5507 21.5007 14 21.5H2ZM8 16.5C8.55 16.5 9.021 16.3043 9.413 15.913C9.805 15.5217 10.0007 15.0507 10 14.5C9.99933 13.9493 9.80367 13.4787 9.413 13.088C9.02233 12.6973 8.55133 12.5013 8 12.5C7.44867 12.4987 6.978 12.6947 6.588 13.088C6.198 13.4813 6.002 13.952 6 14.5C5.998 15.048 6.194 15.519 6.588 15.913C6.982 16.307 7.45267 16.5027 8 16.5ZM5 7.5H11V5.5C11 4.66667 10.7083 3.95833 10.125 3.375C9.54167 2.79167 8.83333 2.5 8 2.5C7.16667 2.5 6.45833 2.79167 5.875 3.375C5.29167 3.95833 5 4.66667 5 5.5V7.5Z" fill="#888888" />
              </svg>
            </span>} // 👈 Red lock icon
            placeholder="Enter your password"
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
            disabled={loading}
            type="primary"
            htmlType="submit"
            className="lg:w-full  navBtn2 border-none h-11 font-bold text-white text-[14px] mt-1 rounded-lg"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>

      <div className="text-center ">
        <span className="text-gray-600">Don't have an account? </span>
        <Link
          onClick={openModal}
          to=""
          className="text-blue-600 hover:underline font-semibold"
        >
          Register
        </Link>
      </div>

      {/* registration modal  */}

      <Modal
        open={isModalOpen}
        footer={null}
        closable={true}
        onCancel={closeModal}
        maskClosable={false}
        centered

        closeIcon={<span className="text-black text-2xl">×</span>}
      // width="400px"
      // style={{ padding: "15px", top: 0 }}
      >
        <RegistrationForm
          setIsOpenModal={setIsOpenModal}
          setLoginModal={setLoginModal}
          isModalOpen={isModalOpen}
          form={form}
        />
      </Modal>

      {/* forget password modal  */}

      <Modal
        open={forgetPasswordModal}
        footer={null}
        closable={true}
        onCancel={closeForgetPasswordModal}
        maskClosable={false}
        centered
        closeIcon={<span className="text-black text-2xl">×</span>}
      >
        <Form form={otpFrom} onFinish={submitForgetPasswordFrom} layout="vertical">
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
                <svg width="20" height="18" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.5 0H2.5C1.125 0 0.0125 1.125 0.0125 2.5L0 17.5C0 18.875 1.125 20 2.5 20H22.5C23.875 20 25 18.875 25 17.5V2.5C25 1.125 23.875 0 22.5 0ZM22.5 5L12.5 11.25L2.5 5V2.5L12.5 8.75L22.5 2.5V5Z" fill="#888888" />
                </svg>

              </span>}
              placeholder="Enter your email"
              className="py-2"
            />
          </Form.Item>
          <Form.Item>
            <Button
              loading={loading}
              type="primary"
              htmlType="submit"
              className="lg:w-full navBtn2 border-none h-11 font-bold text-white text-[14px] mt-1 rounded-lg"
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
        onCancel={closeOtpVerifyModal}
        centered
        maskClosable={false}
        closeIcon={<span className="text-black text-2xl">×</span>}
        style={{ padding: "15px", top: 0 }}
      >
        <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
          <form onSubmit={handleSubmit} style={{ color: "black" }}>
            <label htmlFor="otp" style={{ display: "block", marginBottom: 8 }}>
              OTP
            </label>
            <input
              id="otp"
              name="otp"
              type="text"
              placeholder="Enter your OTP"
              maxLength={6}
              value={otp}
              className=" hover:outline-0 focus:outline-none "
              onChange={(e) => setOtp(e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
                border: error ? "1px solid red" : "1px solid #ccc",
                borderRadius: 4,
                marginBottom: error ? 4 : 16,
                color: "black",
                fontSize: 16,
              }}
            />
            {error && (
              <div style={{ color: "red", marginBottom: 16, fontSize: 14 }}>
                {error}
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="  navBtn2 w-full py-2 text-white rounded-md font-semibold text-lg "
            >
              {loading ? "Verifying..." : "Verify Otp"}
            </button>
          </form>
        </div>
      </Modal>

      {/* set new password modal  */}

      <Modal
        open={newPasswordModal}
        footer={null}
        closable={true}
        onCancel={closeNewPasswordModal}
        centered
        maskClosable={false}
        closeIcon={<span className="text-black text-2xl">×</span>}
      >
        <Form
          name="new_password_set"
          layout="vertical"
          onFinish={submitNewPasswordModal}
          autoComplete="off"
          initialValues={{ email: userEmail }}

        >
          <Form.Item label="Email" name="email">
            <Input
              disabled
              prefix={<MailOutlined />}
              placeholder="Enter your email"
              className="py-2"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="new_password"
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
            name="new_password_confirmation"
            dependencies={["new_password"]}
            hasFeedback
            rules={[
              { required: true, message: "Please confirm your password!" },

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
              className="lg:w-full navBtn2 bg-btnColor border-none h-11 font-bold text-white text-[14px] mt-1 rounded-lg"
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
