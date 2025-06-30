import { Card, Descriptions, Divider } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaPaypal, FaApplePay, FaGooglePay } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';

const WinnerPayment = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const location = useLocation();
    const params = new URLSearchParams(window.location.search);
    const contributorId = params.get("contributor_id");
    const amount = params.get("amount");
    const auctionName = params.get("auction_name");
    const description = params.get("description");
    const winnerName = params.get("winner_name");
    const email = params.get("email");

    console.log({ contributorId, amount, auctionName, description, winnerName, email });

    const payload = { contributorId, amount, auctionName, description, winnerName, email };

    const handleSubmitStripe = () => {
        navigate("/stripe-from", { state: payload })
    }
    const handlePaypalPayment = async () => {
        try {
            setLoading(true);
            const res = await axios.post(
                `http://137.59.180.219:8000/api/create-paypal-payment-intent?amount=${amount}&currency=USD`
            );

            const approvalLink = res?.data?.approve_link;

            if (approvalLink) {
                window.location.href = approvalLink;
            } else {
                console.error("PayPal approval link not found in response.");
            }
        } catch (error) {
            console.error("Error creating PayPal payment intent:", error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="bg-[#f6f8fb] min-h-screen py-10 lg:px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-semibold mb-6">Payment</h2>

                <div className="bg-white rounded-xl p-6 shadow-md flex  lg:flex-row flex-col gap-8">
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-4">Please select your preferred payment method</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Credit Card */}
                            <div className="border rounded-lg p-4 flex flex-col gap-2 hover:shadow cursor-pointer">
                                <span className="text-base font-medium"> Card</span>
                                <div className="flex items-center gap-4 text-2xl text-gray-700">
                                    <FaCcAmex />
                                    <FaCcVisa />
                                    <FaCcMastercard />
                                </div>
                            </div>

                            {/* PayPal */}
                            <div onClick={handlePaypalPayment} className="border rounded-lg p-4 flex items-center justify-between hover:shadow cursor-pointer">
                                <span className="text-base font-medium">PayPal</span>
                                <FaPaypal className="text-2xl text-blue-600" />
                            </div>

                            {/* Apple Pay */}
                            <div onClick={handleSubmitStripe} className="border rounded-lg p-4 flex items-center justify-between hover:shadow cursor-pointer">
                                <span className="text-base font-medium">Apple Pay</span>
                                <FaApplePay className="text-2xl text-black" />
                            </div>

                            {/* Google Pay */}
                            <div onClick={handleSubmitStripe} className="border rounded-lg p-4 flex items-center justify-between hover:shadow cursor-pointer">
                                <span className="text-base font-medium">Google Pay</span>
                                <FaGooglePay className="text-2xl text-green-600" />
                            </div>
                        </div>

                        {/* <p className="text-sm text-gray-500 mt-3">
                            Apple Pay is not supported on this device. Please use a different payment method.
                        </p> */}
                    </div>

                    {/* Order Summary */}
                    <div className="bg-white rounded-lg  lg:p-4 w-full md:w-[350px] ">
                        <Card className="mb-6 border shadow-sm">
                            <Descriptions
                                column={1}
                                labelStyle={{ fontWeight: 600 }}
                                contentStyle={{ color: "#263234" }}
                            >
                                <Descriptions.Item label="Auction Name">
                                    {auctionName}
                                </Descriptions.Item>

                                <Descriptions.Item label="Email">
                                    {winnerName}
                                </Descriptions.Item>

                                <Descriptions.Item className="" label="Amount">
                                    £ {amount}
                                </Descriptions.Item>


                            </Descriptions>
                            <h1 className=" mt-3 text-sm text-[#8c8c8c] font-medium  " >Auction Details</h1>
                            <Descriptions.Item label="Auction Details">
                                <div className=" leading-relaxed h-[150px] overflow-y-scroll mt-2 " >
                                    <p className=" text-justify " >
                                        {
                                            description
                                        }
                                    </p>
                                </div>
                            </Descriptions.Item>
                        </Card>
                        <Divider></Divider>

                    </div>
                </div>

                {/* Help Section */}
                {/* <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
                    <div className="flex items-start gap-3">
                        <span className="text-blue-600 text-xl">📞</span>
                        <div>
                            <p className="font-medium">Need help?</p>
                            <p>We're available 24/7.</p>
                            <p className="text-blue-600 font-semibold">+443333365691</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="text-blue-600 text-xl">🔒</span>
                        <div>
                            <p className="font-medium">Secure checkout</p>
                            <p>We secure your transaction with SSL encryption to protect your data.</p>
                        </div>
                    </div>
                </div> */}

                {/* Trustpilot */}
                {/* <div className="mt-6 text-sm text-gray-600">
                    <p>
                        <span className="text-green-600 font-medium">Trustpilot</span> 4.7 out of 5. see all <span className="underline">26905 reviews</span>
                    </p>
                </div> */}
            </div>
        </div>
    );
};

export default WinnerPayment;

