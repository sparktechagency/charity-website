import {
  useElements,
  PaymentElement,
  useStripe,
} from "@stripe/react-stripe-js";
import { Button } from "antd";
import React, { useState } from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <div className=" max-w-7xl mx-auto ">
      <div className=" flex flex-col lg:flex-row justify-between gap-12 ">
        <div className="w-full mx-auto p-6 bg-white shadow-md rounded-lg">
          <div className="mb-6">
            <span className="text-sm text-gray-600 cursor-pointer">
              &larr;{" "}
            </span>
            <span className="ml-1 text-sm text-gray-600">Back</span>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-2">HopeCharity</h1>
          <p className="text-gray-600 mb-4">
            Subscribe to Monthly Support Plan
          </p>

          <div className="text-4xl font-semibold text-gray-800 mb-1">
            $20.00{" "}
            <span className="text-base font-normal text-gray-500">
              per month
            </span>
          </div>

          <div className="mt-6 border-t border-b py-4 text-sm text-gray-700">
            <div className="flex justify-between mb-1">
              <span>Charity Support Subscription</span>
              <span>$20.00</span>
            </div>
            <p className="text-xs text-gray-500">Billed monthly</p>
          </div>

          <div className="mt-4 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$20.00</span>
            </div>
            <div className="flex justify-between">
              <span className="flex items-center gap-1">
                Tax
                <span className="text-xs text-gray-500 cursor-help">ⓘ</span>
              </span>
              <span>$0.00</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t text-lg font-semibold flex justify-between text-gray-900">
            <span>Total due today</span>
            <span>$20.00</span>
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
                <button className=" bg-[#403730] hover:bg-[#27221D] w-[110px] border-none block mx-auto  py-2 text-white font-bold rounded-md  ">
                  Pay now
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
