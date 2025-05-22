import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../../pages/hooks/useAxiosPublic";

// Your Stripe publishable key
const stripePromise = loadStripe(
  "pk_test_51RRV3sGaj33uXsOfuinFKoDgdWMXKBC2CfDPYmBjjUDP20DZELgzjQnVMjcQG3PUqH13wnxKwFQlcHcu1TIaFhcQ00cZSyR4rv"
);

const StripeForm = ({ price }) => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const donationMoney = 20;
  // const donationMoney = Number(price);
  console.log(typeof `donationMoney is ${parseFloat(donationMoney)} `)
  const payload = donationMoney
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    if (!price) {
      navigate("/donation");
      return;
    }

    const url = `http://137.59.180.219:8000/api/create-payment-intent?amount=${100}&payment_method=pm_card_visa`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // No body needed for this API
    })
      .then((res) => {
        console.log('res is ', res)
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Payment data:", data?.data?.client_secret);
        setClientSecret(data?.data?.client_secret);
      })
      .catch((error) => {
        console.error("Error creating payment intent:", error);
      });
  }, [price, navigate]);






  const appearance = {
    theme: "stripe",
  };

  return (
    <div className="max-w-[600px] mx-auto py-28 ">
      {clientSecret ? (
        <Elements options={{ clientSecret, appearance }} stripe={stripePromise}>
          <CheckoutForm data={payload} />
        </Elements>
      ) : (
        <p className="text-center">Loading payment form...</p>
      )}
    </div>
  );
};

export default StripeForm;
