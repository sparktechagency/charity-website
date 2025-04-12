import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentRequestButtonElement,
} from "@stripe/react-stripe-js";

const StripePaymentRequest = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentRequest, setPaymentRequest] = useState(null);

  useEffect(() => {
    if (!stripe) return;

    const pr = stripe.paymentRequest({
      country: "US",
      currency: "usd",
      total: {
        label: "Total",
        amount: 10000, // $100.00
      },
      requestPayerName: true,
      requestPayerEmail: true,
    });

    pr.canMakePayment().then((result) => {
      if (result) {
        setPaymentRequest(pr);
      }
    });
  }, [stripe]);

  return (
    <>
      {paymentRequest ? (
        <PaymentRequestButtonElement
          options={{ paymentRequest }}
          style={{
            paymentRequestButton: {
              type: "default",
              theme: "dark",
              height: "48px",
              width: "100%",
            },
          }}
        />
      ) : (
        <p className="text-center text-gray-500 mt-4">
          Google Pay is not available on this device or browser.
        </p>
      )}
    </>
  );
};

export default StripePaymentRequest;
