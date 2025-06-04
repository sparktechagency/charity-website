import React, { useEffect, useState } from "react";
import { Button, Radio, Form, Tabs, Input, Divider, InputNumber } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import "../../../../assets/css/style.css"
const PaymentModal = ({ setSupportModal, setPaymentModal }) => {
  const [form] = Form.useForm();
  const [donationType, setDonationType] = useState("one_time_donate");
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentType, setPaymentType] = useState("montly");

  const presetAmounts = [19.50, 24.50, 45.50, 99.50];
  const navigate = useNavigate();
  const [data, setData] = useState(null)


  const handleSubmit = async (values) => {
    const amount = selectedAmount === "custom" ? customAmount : parseFloat(selectedAmount);
    if (!amount) {
      message.warning("Please select or enter a donation amount.");
      return;
    }
    const payload = {
      ...values,
      donation_type: donationType,
      amount: Number(amount),
      frequency: paymentType,
    };
    setData(payload);
    navigate("/user-details", { state: payload });
  }

  return (

    <div>

      <div className="lg:max-w-2xl w-full  mx-auto p-6 bg-white rounded-2xl ">
        <h2 className="text-2xl text-[#263234] font-semibold text-center mb-6">
          Enter Donation Details
        </h2>

        <Form layout="vertical" form={form} onFinish={handleSubmit}>
          {/* Donation Type */}
          <Tabs
            defaultActiveKey="one_time_donate"
            onChange={(key) => {
              setDonationType(key);
              setSelectedAmount(null);
              setCustomAmount("");
            }}
            items={[
              {
                key: "one_time_donate",
                label: (
                  <span className=" text-[#263234] lg:text-lg text-sm font-semibold ">
                    One-Time Donation
                  </span>
                ),
                children: (
                  <div className="grid grid-cols-2 gap-4">
                    {presetAmounts.map((amount) => (
                      <Button
                        key={amount}
                        className={`border rounded-lg h-12 ${selectedAmount === amount
                          ? "  text-white bg-blue-600 "
                          : "bg-white"
                          }`}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                      >
                        £{amount}
                      </Button>
                    ))}
                    <InputNumber
                      prefix="£"
                      style={{ padding: "10px 20px", outline: "none", width: "100%" }}
                      className="placeholder:text-lg placeholder:text-[#818889]"
                      placeholder="Other"
                      value={selectedAmount === "custom" ? customAmount : null}
                      onChange={(value) => {
                        setSelectedAmount("custom");
                        setCustomAmount(value);
                      }}
                      onKeyPress={(e) => {
                        if (!/[0-9]/.test(e.key)) {
                          e.preventDefault();
                        }
                      }}
                    />
                  </div>
                ),
              },
              {
                key: "recurring",
                label: (
                  <span className=" text-[#263234] text-sm lg:text-lg font-semibold ">
                    Recurring Donation
                  </span>
                ),
                children: (
                  <>
                    <Radio.Group
                      onChange={(e) => setPaymentType(e.target.value)}
                      className="flex gap-4 mb-4"
                      defaultValue="monthly"
                      name="frequency"
                    >
                      <Radio.Button value="monthly">Monthly</Radio.Button>
                      <Radio.Button value="quarterly">Yearly </Radio.Button>
                      <Radio.Button value="annually">Annually</Radio.Button>
                    </Radio.Group>
                    <Input
                      style={{ padding: "10px 20px", outline: "none" }}
                      className=" placeholder:text-lg placeholder:text-[#818889] "
                      prefix="£"
                      placeholder="Enter recurring amount"
                      value={customAmount}
                      onChange={(e) => {
                        setSelectedAmount("custom");
                        setCustomAmount(e.target.value);
                      }}
                    />
                  </>
                ),
              },
            ]}
          />

          <Divider />

          {/* Donor Details */}
          <Form.Item
            name="name"
            label="Full Name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input

              style={{ padding: "10px 20px", outline: "none" }}
              className=" placeholder:text-lg !text-black bg-gray-600 placeholder:text-[#818889] "
              placeholder="John Doe"
            />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email Address"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Invalid email format" },
            ]}
          >
            <Input
              style={{ padding: "10px 20px", outline: "none" }}
              className=" placeholder:text-lg placeholder:text-[#818889] "
              placeholder="Enter your email "
            />
          </Form.Item>

          <Form.Item name="phone_number" label="Phone (Optional)">
            <Input
              style={{ padding: "10px 20px", outline: "none" }}
              className=" placeholder:text-lg placeholder:text-[#818889] "
              placeholder="+44 123 456 789"
            />
          </Form.Item>

          <Form.Item name="remark" label="Message / Reason">
            <TextArea
              style={{ padding: "10px 20px", outline: "none" }}
              className=" placeholder:text-lg placeholder:text-[#818889] "
              rows={4}
              placeholder="Why are you donating?"
            />
          </Form.Item>

          <Form.Item>
            <Button
              htmlType="submit"
              className=" h-12 text-white font-bold text-lg bg-[#403730] border-none hover:bg-[#27221D]! "
            >
              Submit Donation
            </Button>
          </Form.Item>
        </Form>
      </div>

    </div>
  );
};

export default PaymentModal;


