import {
  Button,
  Card,
  Descriptions,
  Divider,
  Modal,
  Form,
  Input,
  Select,
} from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const { Option } = Select;

const UserDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const payload = location.state;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const userPayload = {
    amount: payload?.amount,
    donation_type: payload?.donation_type,
    email: payload?.email,
    frequency: payload?.frequency,
    name: payload?.name,
    remark: payload?.remark,
    phone_number: payload?.phone_number,
  };

  const navigateStripeFrom = () => {
    navigate("/payment-list", { state: userPayload });
  };

  const onEdit = () => {
    form.setFieldsValue({
      name: payload?.name,
      email: payload?.email,
      phone_number: payload?.phone_number,
      remark: payload?.remark,
      donation_type: payload?.donation_type,
      frequency: payload?.frequency,
      amount: payload?.amount,
    });
    setIsModalOpen(true);
  };

  const handleFormSubmit = (values) => {
    payload.name = values?.name;
    payload.email = values?.email;
    payload.phone_number = values?.phone_number;
    payload.remark = values?.remark;
    payload.donation_type = values?.donation_type;
    payload.frequency = values?.frequency;
    payload.amount = values?.amount;
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col lg:flex-row max-w-[1512px] mx-auto mt-20">
      <div className="max-w-2xl border mx-auto p-6 bg-white rounded-2xl w-full shadow-md">

        <div className="bg-white rounded-full p-4  flex items-center justify-center gap-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full   px-4 py-2   transition"
          >
            <span>
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.707 8.00006H4.12097L8.62097 12.5001L7.20697 13.9141L0.292969 7.00006L7.20697 0.0860634L8.62097 1.50006L4.12097 6.00006L15.707 6.00006V8.00006Z" fill="black" />
              </svg>

            </span>
            {/* Back */}
          </Link>
          <h2 className="text-2xl font-semibold">Review Donation</h2>
        </div>

        <Card className="mb-6 border border-gray-200 shadow-sm">
          <Descriptions
            column={1}
            labelStyle={{ fontWeight: 600 }}
            contentStyle={{ color: "#263234" }}
          >
            <Descriptions.Item label="Donation Type">
              {payload?.donation_type === "one_time_donate"
                ? "One Time Donate"
                : "Recurring"}
            </Descriptions.Item>

            <Descriptions.Item label="Frequency">
              {payload?.frequency.charAt(0).toUpperCase() +
                payload?.frequency.slice(1)}
            </Descriptions.Item>

            <Descriptions.Item label="Amount">£ {payload?.amount}</Descriptions.Item>
          </Descriptions>
        </Card>

        <Card className="mb-6 border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Donor Information</h3>

          <Descriptions
            column={1}
            labelStyle={{ fontWeight: 600 }}
            contentStyle={{ color: "#263234" }}
          >
            <Descriptions.Item label="Name">{payload?.name}</Descriptions.Item>
            <Descriptions.Item label="Email">{payload?.email}</Descriptions.Item>
            {payload?.phone_number && (
              <Descriptions.Item label="Phone">{payload?.phone_number}</Descriptions.Item>
            )}
            {payload?.remark && (
              <Descriptions.Item label="Description">{payload?.remark}</Descriptions.Item>
            )}
          </Descriptions>
        </Card>

        <Divider />

        <div className="flex lg:flex-row flex-col items-center lg:justify-between gap-4 mt-6">
          <Button
            onClick={onEdit}
            className="w-1/2 h-12 border font-bold text-[#403730] homeBtn border-[#717680] hover:bg-[#403730]"
          >
            Edit
          </Button>
          <Button
            onClick={navigateStripeFrom}
            className="w-1/2 homeBtn h-12 border font-bold text-white bg-[#403730] border-[#717680]"
          >
            Confirm & Proceed to Payment
          </Button>
        </div>
      </div>

      {/* Edit Modal */}
      <Modal
        title="Edit Donation Details"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={() => form.submit()}
        okText="Update"
        cancelText="Cancel"
        closeIcon={<span className="text-black text-2xl">×</span>}
        okButtonProps={{
          className:
            "!bg-[#403730] !text-white !border-none hover:!bg-[#2e2723] focus:!shadow-none",
        }}
        cancelButtonProps={{
          className:
            "!bg-[#403730] !text-white !border-none hover:!bg-[#2e2723] focus:!shadow-none",
        }}
      >
        <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
          <Form.Item
            name="donation_type"
            label="Donation Type"
            rules={[{ required: true, message: "Please select donation type" }]}
          >
            <Select>
              <Option value="one_time_donate">One Time Donate</Option>
              <Option value="recurring">Recurring</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="frequency"
            label="Frequency"
            rules={[{ required: true, message: "Please select frequency" }]}
          >
            <Select>
              <Option value="montly">Monthly</Option>
              <Option value="quantely">Weekly</Option>
              <Option value="annually">Yearly</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="amount"
            label="Amount (£)"
            rules={[{ required: true, message: "Please enter amount" }]}
          >
            <Input type="number" min={1} />
          </Form.Item>

          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { type: "email", required: true, message: "Please enter a valid email" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="phone_number" label="Phone Number">
            <Input />
          </Form.Item>

          <Form.Item name="remark" label="Description">
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>

    </div>
  );
};

export default UserDetails;
