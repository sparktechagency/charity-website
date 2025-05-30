import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../../pages/hooks/useAxiosPublic";
import { message } from "antd";
import axios from "axios";
import Swal from 'sweetalert2'; 

const CheckoutForm = ({ clientSecret, userDetails, paymentId }) => {
  const axiosPublic = useAxiosPublic();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [formMessage, setFormMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);



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
          return_url: window.location.href, // Optional: redirect on success
        },
        redirect: "if_required",
      });

      const paymentTypeLocal = paymentIntent?.payment_method_types?.[0]; // ✅ Use local variable

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

          console.log("Donation recorded:", res);
          navigate("/");
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Pyament successfull",
            showConfirmButton: false,
            timer: 1500
          });
          return;
        } catch (error) {
          console.error("Error saving donation:", error);
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

  return (
    <div className="max-w-4xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="w-full border p-6 rounded-md shadow-md bg-white flex flex-col gap-4"
      >
        <div>
          <label className="text-sm font-medium text-gray-700">
            Card Details
          </label>
          <div className="p-2 border rounded">
            <PaymentElement />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading || !stripe || !elements}
          className="w-full sm:w-[200px] bg-[#403730] hover:bg-[#27221D] py-3 text-white font-bold rounded-md"
        >
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
