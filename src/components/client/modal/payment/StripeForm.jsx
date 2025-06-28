import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CheckoutForm from './CheckoutForm';
// Your Stripe publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);


const StripeForm = () => {
  const location = useLocation();
  const userPayload = location.state;
  const userDetails = {
    amount: Number(userPayload?.amount),
    donation_type: userPayload?.donation_type,
    email: userPayload?.email,
    frequency: userPayload?.frequency,
    name: userPayload?.name,
    remark: userPayload?.remark,
    phone_number: userPayload?.phone_number
  }
  const navigate = useNavigate();
  const [clientSecret, setClientSecret] = useState("");
  const [paymentId, setPaymentId] = useState("")
  useEffect(() => {
    if (!userPayload?.amount) {
      navigate("/user-details");
      return;
    }

    const url = `https://api.virtuehope.com/api/create-payment-intent?amount=${userPayload.amount}&payment_method=pm_card_visa`;


    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // No body needed for this API
    })
      .then((res) => {

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setClientSecret(data?.data?.client_secret);
        setPaymentId(data?.data?.id)
      })
      .catch((error) => {
        navigate("/payment-list")
      });
  }, [userPayload?.amount]);





  const appearance = {
    theme: "stripe",
  };

  return (
    <div className="max-w-[600px] mx-auto py-28 ">
      {clientSecret ? (
        <Elements options={{ clientSecret, appearance }} stripe={stripePromise}>
          <CheckoutForm paymentId={paymentId} userDetails={userDetails} clientSecret={clientSecret} />
        </Elements>
      ) : (
        <div className=" h-[50vh]  flex flex-col justify-center b " >
          <div className="flex flex-col items-center justify-center space-y-4 p-6">
            {/* Spinner */}
            <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>

            {/* Loading Text */}
            <p className="text-lg font-semibold text-gray-700">Processing Payment...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default StripeForm;
