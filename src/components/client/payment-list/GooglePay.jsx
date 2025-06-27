// GooglePayButton.jsx
import React, { useEffect, useState } from 'react';
import {
    PaymentRequestButtonElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import axios from 'axios';
import useAxiosPublic from '../../../pages/hooks/useAxiosPublic';

const GooglePay = ({ clientSecret, user }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentRequest, setPaymentRequest] = useState(null);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const initPayment = async () => {
            if (!stripe || !elements || !clientSecret || !user) return;

            const pr = stripe.paymentRequest({
                country: 'US',
                currency: 'usd',
                total: {
                    label: 'Donation',
                    amount: 500,
                },
                requestPayerName: true,
                requestPayerEmail: true,
                supportedPaymentMethods: [
                    {
                        supportedMethods: 'card',
                    },
                ],
            });

            const result = await pr.canMakePayment();
            console.log('canMakePayment result:', result);

            if (result) {
                setPaymentRequest(pr);

                pr.on('paymentmethod', async (ev) => {
                    // 🔥 1. Call your donate-money API IMMEDIATELY on click
                    try {
                        await axiosPublic.post('/donate-money', {
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
                        console.log('Donation API called on click ✅');
                    } catch (err) {
                        console.error('Donation API failed on click ❌:', err);
                    }

                    // ✅ 2. Proceed with Stripe payment
                    const { error } = await stripe.confirmCardPayment(
                        clientSecret,
                        { payment_method: ev.paymentMethod.id },
                        { handleActions: false }
                    );

                    if (error) {
                        ev.complete('fail');
                        alert('Payment failed!');
                        console.error(error);
                    } else {
                        ev.complete('success');
                        alert('Payment successful!');
                    }
                });
            } else {
                console.warn('Google Pay is not available on this device.');
            }
        };

        initPayment();
    }, [stripe, elements, clientSecret, user]);

    if (!paymentRequest)
        return <p className="text-red-500">Google Pay is not available on this device.</p>;

    return (
        <PaymentRequestButtonElement
            options={{ paymentRequest }}
            style={{
                paymentRequestButton: {
                    theme: 'dark',
                    height: '48px',
                    type: 'donate',
                },
            }}
        />
    );
};

export default GooglePay;
