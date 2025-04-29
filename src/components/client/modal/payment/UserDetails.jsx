import { Button, Card, Descriptions, Divider } from "antd";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import StripeForm from "./StripeForm";

const UserDetails = () => {
  const location = useLocation();
  const payload = location.state;
  console.log(payload);

  const navigate = useNavigate();
  const donationData = {
    donationType: "recurring",
    amount: "24.50",
    frequency: "monthly",
    name: "Jane Doe",
    email: "jane@example.com",
    phone: "+44 123456789",
    message: "For education support",
  };

  const onEdit = () => {
    console.log(`go to to edit page`);
    navigate(`/donate-from`, { state: payload });
  };

  return (
    <div>
      <div className="max-w-2xl border mx-auto p-6 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Review Donation
        </h2>

        <Card className="mb-6 border border-gray-200 shadow-sm">
          <Descriptions
            column={1}
            labelStyle={{ fontWeight: 600 }}
            contentStyle={{ color: "#263234" }}
          >
            <Descriptions.Item label="Donation Type">
              {payload.donation_type === "oneTime" ? "One-Time" : "Recurring"}
            </Descriptions.Item>

            <Descriptions.Item label="Frequency">
              {payload.frequency.charAt(0).toUpperCase() +
                donationData.frequency.slice(1)}
            </Descriptions.Item>

            <Descriptions.Item label="Amount">
              £{payload.amount}
            </Descriptions.Item>
          </Descriptions>
        </Card>

        <Card className="mb-6 border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Donor Information</h3>

          <Descriptions
            column={1}
            labelStyle={{ fontWeight: 600 }}
            contentStyle={{ color: "#263234" }}
          >
            <Descriptions.Item label="Name">{payload.name}</Descriptions.Item>
            <Descriptions.Item label="Email">{payload.email}</Descriptions.Item>
            {payload.phone_number && (
              <Descriptions.Item label="Phone">
                {payload.phone_number}
              </Descriptions.Item>
            )}
            {payload.remark && (
              <Descriptions.Item label="Description">
                {payload.remark}
              </Descriptions.Item>
            )}
          </Descriptions>
        </Card>

        <Divider />

        <div className="flex justify-between gap-4 mt-6">
          <Button
            onClick={onEdit}
            className="w-1/2 h-12 border font-bold text-[#403730] border-[#717680] hover:bg-[#403730]"
          >
            Edit
          </Button>
        </div>
      </div>
      <div>
        <StripeForm />
      </div>
    </div>
  );
};

export default UserDetails;
