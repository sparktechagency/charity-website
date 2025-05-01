import {
  useElements,
  PaymentElement,
  useStripe,
} from "@stripe/react-stripe-js";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ data }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:5173/succeeded", // Replace with your actual redirect URL
      },
    });

    if (error) {
      if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error.message);
      } else {
        setMessage("An unexpected error occurred.");
      }
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "accordion",
  };

  return (
    <div className="max-w-4xl mx-auto ">
      <form onSubmit={handleSubmit} id="payment-form" className="w-full">
        <PaymentElement id="payment-element" options={paymentElementOptions} />

        <button
          type="submit"
          disabled={isLoading || !stripe || !elements}
          className="mt-6 w-[150px] bg-[#403730] hover:bg-[#27221D] py-3 text-white font-bold rounded-md mx-auto block"
        >
          {isLoading ? "Processing..." : "Donate Now"}
        </button>

        {message && (
          <div id="payment-message" className="mt-4 text-red-500 text-center">
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
