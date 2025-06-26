import React from "react";
import GooglePayButton from "@google-pay/button-react";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../pages/hooks/useAxiosPublic";
import { useLocation } from "react-router-dom";

const GooglePay = () => {
    const axiosPublic = useAxiosPublic();
    const location = useLocation();
    const payload = location.state;

    const amount = payload?.amount || "10.00"; // fallback if not provided
    const label = payload?.name || "Virtuehope Donation";

    return (
        <div>
            <Helmet>
                <title>Virtuehope | Google Pay</title>
            </Helmet>
            <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
                <GooglePayButton
                    environment="TEST"
                    buttonColor="black"
                    buttonType="donate"
                    paymentRequest={{
                        apiVersion: 2,
                        apiVersionMinor: 0,
                        allowedPaymentMethods: [
                            {
                                type: "CARD",
                                parameters: {
                                    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                                    allowedCardNetworks: ["VISA", "MASTERCARD"],
                                },
                                tokenizationSpecification: {
                                    type: "PAYMENT_GATEWAY",
                                    parameters: {
                                        gateway: "stripe",
                                        gatewayMerchantId: "example", // For TEST only
                                    },
                                },
                            },
                        ],
                        merchantInfo: {
                            merchantName: "Virtuehope",
                        },
                        transactionInfo: {
                            totalPriceStatus: "FINAL",
                            totalPrice: amount.toString(),
                            currencyCode: "USD",
                        },
                    }}
                    onLoadPaymentData={async (paymentData) => {
                        const token =
                            paymentData?.paymentMethodData?.tokenizationData?.token;

                        console.log("✅ Google Pay Token:", token);

                        try {
                            const res = await axiosPublic.post(
                                `/api/create-payment-intent?amount=${amount}`,
                                { token }
                            );
                            const result = res.data;

                            if (result.success) {
                                alert("✅ Payment Successful!");
                            } else {
                                alert("❌ Payment Failed: " + result.error);
                            }
                        } catch (err) {
                            console.error("❌ API Error:", err);
                            alert("❌ Server error occurred");
                        }
                    }}
                    onError={(err) => {
                        console.error("❌ Google Pay Error:", err);
                    }}
                />
            </div>
        </div>
    );
};

export default GooglePay;
