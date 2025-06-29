// GooglePayButton.jsx
import React, { useEffect, useState } from 'react';
import {
    PaymentRequestButtonElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import useAxiosPublic from '../../../pages/hooks/useAxiosPublic';

const GooglePay = ({ clientSecret, userDetails, paymentId }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentRequest, setPaymentRequest] = useState(null);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const initPayment = async () => {
            if (!stripe || !elements || !clientSecret || !userDetails) return;

            const pr = stripe.paymentRequest({
                country: 'US',
                currency: 'gbp',
                total: {
                    label: 'Donation',
                    amount: userDetails?.amount,
                },
                requestPayerName: true,
                requestPayerEmail: true,
                supportedPaymentMethods: [
                    {
                        supportedMethods: 'card',
                        data: {
                            supportedNetworks: ['visa', 'mastercard', 'amex'],
                            supportedTypes: ['debit', 'credit'],
                        },
                    },
                ],
            });


            const result = await pr.canMakePayment();

            if (result) {
                setPaymentRequest(pr);

                pr.on('paymentmethod', async (ev) => {
                    // 🔥 1. Call your donate-money API IMMEDIATELY on click
                    try {
                        await axiosPublic.post('/donate-money', {
                            transaction_id: paymentId,
                            payment_type: "google-pay",
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
                        console.log(error);
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
    }, [stripe, elements, clientSecret, userDetails]);

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
