import {
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ clientSecret }) => {
  console.log('client sicret from checkoutpage', clientSecret)
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsLoading(true);

    const cardElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, { payment_method: { card: cardElement, }, }
    );

    if (error) {
      setMessage(error.message || "An unexpected error occurred.");
    } else if (paymentIntent.status === "succeeded") {
      navigate("/payment-success");
    }

    setIsLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto  ">
      <form onSubmit={handleSubmit} className="w-full">
        <CardElement
          options={{
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
          }}
        />

        <button
          type="submit"
          disabled={isLoading || !stripe || !elements}
          className="mt-6 w-[150px] bg-[#403730] hover:bg-[#27221D] py-3 text-white font-bold rounded-md mx-auto block"
        >
          {isLoading ? "Processing..." : "Donate Now"}
        </button>

        {message && (
          <div className="mt-4 text-red-500 text-center">{message}</div>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
