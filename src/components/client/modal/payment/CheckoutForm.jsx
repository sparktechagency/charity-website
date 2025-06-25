import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
  PaymentRequestButtonElement,

} from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../../pages/hooks/useAxiosPublic";
import { message } from "antd";
import Swal from "sweetalert2";

const CheckoutForm = ({ userDetails, paymentId }) => {
  const axiosPublic = useAxiosPublic();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [formMessage, setFormMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentRequest, setPaymentRequest] = useState(null);

  useEffect(() => {
    if (stripe) {
      const pr = stripe.paymentRequest({
        country: "GB",
        currency: "gbp",

        googlePay: true,

        total: {
          label: "Total",
          amount: userDetails?.amount * 100,
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });

      pr.canMakePayment().then((result) => {
        if (result) {
          setPaymentRequest(pr);
        }
      });
    }
  }, [stripe, userDetails]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      setFormMessage("Stripe not loaded yet.");
      return;
    }

    setIsLoading(true);
    setFormMessage(null);

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: window.location.href,
        },
        redirect: "if_required",
      });

      const paymentTypeLocal = paymentIntent?.payment_method_types?.[0];

      if (error) {
        setFormMessage(error.message ?? "An unexpected error occurred.");
        return;
      }

      if (paymentIntent?.status === "succeeded") {
        try {
          const res = await axiosPublic.post(`/donate-money`, {
            transaction_id: paymentId,
            payment_type: paymentTypeLocal,
            donation_type: userDetails?.donation_type,
            frequency: userDetails?.frequency,
            name: userDetails?.name,
            email: userDetails?.email,
            remark: userDetails?.remark,
            amount: userDetails?.amount,
            phone_number: userDetails?.phone_number,
            payment_gatway: "stripe",
          });

          if (res) {
            navigate("/");
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Payment successful",
              showConfirmButton: false,
              timer: 1500,
            });
            return;
          }
        } catch (error) {
          console.error("Error saving donation:", error.response?.data?.message);
          message.error("Payment succeeded, but failed to save donation record.");
        }
      }
    } catch (err) {
      console.error("Error during checkout:", err);
      setFormMessage("Something went wrong while processing your payment.");
    } finally {
      setIsLoading(false);
    }
  };

  console.log(paymentRequest)

  return (
    <div className="max-w-4xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="w-full border p-6 rounded-md shadow-md bg-white flex flex-col gap-4"
      >
        {paymentRequest && (
          <PaymentRequestButtonElement
            allow="payment"
            options={{ paymentRequest }}

            className="w-full h-[40px] mb-4"
          />
        )}

        <div>
          <label className="text-sm font-medium text-gray-700">Card Details</label>
          <div className="p-2 border rounded">
            <PaymentElement />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading || !stripe || !elements}
          className="w-full sm:w-[200px] bg-[#403730] hover:bg-[#27221D] py-3 text-white font-bold rounded-md flex items-center justify-center gap-2"
        >
          {isLoading && (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          )}
          {isLoading ? "Processing..." : "Payment Now"}
        </button>

        {formMessage && (
          <div className="text-red-500 text-center mt-2">{formMessage}</div>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
