import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { Link } from "react-router-dom";

const DashboardCreateNewPassword = () => {
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
            Create a new password
          </p>
        </div>

        <Form form={form} layout="vertical" onFinish={onFinish} className="">
          <div>
            <p className="font-roboto font-bold text-[#E9EBEB] text-[16px]">
              New password
            </p>
            <Form.Item
              name="new-password"
              rules={[
                {
                  required: true,
                  message: "Please input your new password!",
                },
              ]}
            >
              <Input.Password
                type="password"
                placeholder="Enter your password"
                style={{
                  border: "1px solid #B6B6BA",
                  padding: "10px",
                  backgroundColor: "transparent",
                  color: "#ffffff",
                }}
              />
            </Form.Item>
          </div>

          <div>
            <p className="font-roboto font-bold text-[#E9EBEB] text-[16px]">
              Confirm new password
            </p>
            <Form.Item
              name="confirm-new-password"
              rules={[
                {
                  required: true,
                  message: "Please input your confirm new password!",
                },
              ]}
            >
              <Input.Password
                type="password"
                placeholder="Enter your password"
                style={{
                  border: "1px solid #B6B6BA",
                  padding: "10px",
                  backgroundColor: "transparent",
                  color: "#ffffff",
                }}
              />
            </Form.Item>
          </div>

          {/* Submit Button */}
          <Form.Item>
            <Link to="/admin/dashboard/login">
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
                Save changes
              </Button>
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default DashboardCreateNewPassword;
