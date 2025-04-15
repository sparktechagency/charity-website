import {
  useElements,
  PaymentElement,
  useStripe,
} from "@stripe/react-stripe-js";
import { Card, Button, Descriptions, Divider } from "antd";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:5173/succeeded",
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "accordion",
  };

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
    navigate(`/donate-from`)
  };
  const onConfirm = () => {
    console.log(`Proceed to payment`);
  };

  return (
    <div className=" max-w-7xl mx-auto  ">
      <div className=" flex flex-col lg:flex-row justify-between gap-12 ">
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
                {donationData.donationType === "oneTime"
                  ? "One-Time"
                  : "Recurring"}
              </Descriptions.Item>

              {donationData.donationType === "recurring" &&
                donationData.frequency && (
                  <Descriptions.Item label="Frequency">
                    {donationData.frequency.charAt(0).toUpperCase() +
                      donationData.frequency.slice(1)}
                  </Descriptions.Item>
                )}

              <Descriptions.Item label="Amount">
                £{donationData.amount}
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
              <Descriptions.Item label="Name">
                {donationData.name}
              </Descriptions.Item>
              <Descriptions.Item label="Email">
                {donationData.email}
              </Descriptions.Item>
              {donationData.phone && (
                <Descriptions.Item label="Phone">
                  {donationData.phone}
                </Descriptions.Item>
              )}
              {donationData.message && (
                <Descriptions.Item label="Message">
                  {donationData.message}
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
        <form
          id="payment-form"
          className=" w-full justify-end "
          onSubmit={handleSubmit}
        >
          <PaymentElement
            id="payment-element"
            options={paymentElementOptions}
          />
          <button disabled={isLoading || !stripe || !elements} id="submit">
            <span className="block mx-auto border my-5 " id="button-text  ">
              {isLoading ? (
                <div className="spinner" id="spinner"></div>
              ) : (
                <button className=" bg-[#403730] hover:bg-[#27221D] w-[130px]  block mx-auto  py-3 text-white font-bold rounded-md  ">
                  Donate Now
                </button>
              )}
            </span>
          </button>
          {/* Show any error or success messages */}
          {message && <div id="payment-message">{message}</div>}
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
