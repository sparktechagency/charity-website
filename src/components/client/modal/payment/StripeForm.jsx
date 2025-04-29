import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import { useLocation, useNavigate } from "react-router-dom";

// Your Stripe publishable key
const stripePromise = loadStripe(
  "pk_test_51RCsN4GheeTFBgpkrJvnRLxtTIF7HyELpY1MF8bFVT98mdBfwbNOLPfLZIaVv5lXCM9fQsja7M6m2mgh3oLI8jh800gaNGnv0m"
);

const StripeForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const payload = location?.state;
  const price = payload?.amount;

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    if (!price) {
      navigate("/donation");
      return;
    }

    const url = `http://137.59.180.219:8000/api/create-payment-intent?amount=${price}&payment_method=pm_card_visa`;

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
        console.log("Payment Intent:", data);
        setClientSecret(data.clientSecret);
      })
      .catch((error) => {
        console.error("Error creating payment intent:", error);
      });
  }, [price, navigate]);

  const appearance = {
    theme: "stripe",
  };

  return (
    <div className="max-w-[600px] mx-auto py-28">
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
