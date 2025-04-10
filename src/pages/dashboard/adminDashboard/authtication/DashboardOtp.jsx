import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { Link } from "react-router-dom";

const DashboardOtp = () => {
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
            Enter the OTP
          </p>
        </div>

        <Form form={form} layout="vertical" onFinish={onFinish}>
          <div>
            <p className="font-roboto font-bold text-[#E9EBEB] text-[16px] pb-1">
              OTP code
            </p>
            <Form.Item
              name="otp"
              rules={[
                { required: true, message: "Please Enter your OTP!" },
                { pattern: /^[0-9]{4,6}$/, message: "Invalid OTP format!" }, // ✅ Ensures 4-6 digit number
              ]}
            >
              <Input
                type="text" // ✅ Use "text" instead of "number" to avoid auto-correction issues
                maxLength={6} // ✅ Limits OTP to 6 digits
                placeholder="Enter your OTP"
                style={{ border: "1px solid #B6B6BA", padding: "10px" }}
              />
            </Form.Item>
          </div>

          {/* submit button */}
          <Form.Item>
            <Link to="/admin/dashboard/create-new-password">
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
                Submit OTP
              </Button>
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default DashboardOtp;
