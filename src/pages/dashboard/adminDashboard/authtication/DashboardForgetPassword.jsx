import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { Link } from "react-router-dom";

const DashboardForgetPassword = () => {
  const [form] = useForm();

  const onFinish = () => {
    console.log("click");
  };
  return (
    <div className="flex justify-center items-center h-screen bg-[#171F20] px-2 md:px-0">
      <div className="w-full max-w-[462px] mx-auto bg-[#263234] rounded-lg p-10 py-8">
        <div className="flex flex-col justify-center items-center">
          <img
            src="/dashboardPhoto/dashboardLoginLogo.png"
            alt="login logo"
            className="object-cover w-[30%]"
          />
          <h2 className="font-roboto  text-[#E9EBEB] text-[16px]">
            Virtue Hope
          </h2>
        </div>
        <div className="py-[24px]">
          <p className="font-roboto text-[24px] font-bold text-[#ffffff] ">
            Forgot password
          </p>
        </div>

        <Form form={form} layout="vertical" onFinish={onFinish} className="">
          <div>
            <p className="font-roboto font-bold text-[#E9EBEB] text-[16px]">
              Email
            </p>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Invalid email address!" },
              ]}
            >
              <Input
                placeholder="Enter your email"
                className="w-full border border-gray-400 p-2 rounded-md"
              />
            </Form.Item>
          </div>
          {/* Submit Button */}
          <Form.Item>
            <Link to="/admin/dashboard/otp">
              <Button
                htmlType="submit"
                className="w-full hover:!bg-[#ffffff6e] hover:!text-[#ffffff] transition-all duration-300"
                style={{
                  backgroundColor: "#ffffff",
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                  fontSize: "16px",
                  padding: "24px ",
                  marginLeft: "0px",
                }}
              >
                Get OTP
              </Button>
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default DashboardForgetPassword;
