import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cardErrors, setCardErrors] = useState({ number: "", expiry: "", cvc: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsLoading(true);
    setMessage(null);

    const cardNumber = elements.getElement(CardNumberElement);
    const cardExpiry = elements.getElement(CardExpiryElement);
    const cardCvc = elements.getElement(CardCvcElement);

    if (!cardNumber || !cardExpiry || !cardCvc) {
      setMessage("Please fill in all card details.");
      setIsLoading(false);
      return;
    }

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardNumber,
      },
    });

    if (error) {
      setMessage(error.message ?? "An unexpected error occurred.");
    } else if (paymentIntent?.status === "succeeded") {
      navigate("/payment-success");
    }

    setIsLoading(false);
  };

  const handleElementChange = (field) => (event) => {
    setCardErrors((prev) => ({
      ...prev,
      [field]: event.error ? event.error.message : "",
    }));
  };

  const stripeStyleOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#32325d",
        "::placeholder": {
          color: "#a0aec0",
        },
      },
      invalid: {
        color: "#fa755a",
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="w-full border p-6 rounded-md shadow-md bg-white flex flex-col gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Card Number</label>
          <CardNumberElement
            className="p-2 border rounded"
            options={stripeStyleOptions}
            onChange={handleElementChange("number")}
          />
          {cardErrors.number && <p className="text-red-500 text-sm mt-1">{cardErrors.number}</p>}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Expiry Date</label>
          <CardExpiryElement
            className="p-2 border rounded"
            options={stripeStyleOptions}
            onChange={handleElementChange("expiry")}
          />
          {cardErrors.expiry && <p className="text-red-500 text-sm mt-1">{cardErrors.expiry}</p>}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">CVC</label>
          <CardCvcElement
            className="p-2 border rounded"
            options={stripeStyleOptions}
            onChange={handleElementChange("cvc")}
          />
          {cardErrors.cvc && <p className="text-red-500 text-sm mt-1">{cardErrors.cvc}</p>}
        </div>

        <button
          type="submit"
          disabled={isLoading || !stripe || !elements}
          className="w-full sm:w-[200px] bg-[#403730] hover:bg-[#27221D] py-3 text-white font-bold rounded-md"
        >
          {isLoading ? "Processing..." : "Donate Now"}
        </button>

        {message && <div className="text-red-500 text-center mt-2">{message}</div>}
      </form>
    </div>
  );
};

export default CheckoutForm;
