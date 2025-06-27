import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import GooglePay from './GooglePay';
import { useLocation, useNavigate } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51RLzucIC4wM63k4fYkVbJvppgGxZY61KXU8F0fxBOPYyFmez1J8y26q62vSyIXr5C2t8seOfOBSocn0TvK4UhkgJ00bvXfaKfw'); // Replace with your publishable key

const GooglePayContainer = () => {
    const location = useLocation();
    const userPayload = location.state;
    const userDetails = {
        amount: Number(userPayload?.amount),
        donation_type: userPayload?.donation_type,
        email: userPayload?.email,
        frequency: userPayload?.frequency,
        name: userPayload?.name,
        remark: userPayload?.remark,
        phone_number: userPayload?.phone_number
    };
    const navigate = useNavigate();
    const [clientSecret, setClientSecret] = useState('');
    const [paymentId, setPaymentId] = useState("")

    useEffect(() => {
        if (!userPayload?.amount) {
            navigate("/user-details");
            return;
        }

        const url = `https://api.virtuehope.com/api/create-payment-intent?amount=${userPayload.amount}&payment_method=pm_card_visa`;


        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // No body needed for this API
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((data) => {
                setClientSecret(data?.data?.client_secret);
                setPaymentId(data?.data?.id)
            })
            .catch((error) => {
                navigate("/payment-list")
            });
    }, [userPayload?.amount]);

    const options = {
        clientSecret,
        appearance: { theme: 'flat' },
    };

    return clientSecret ? (
        <Elements stripe={stripePromise} options={options}>
            <GooglePay paymentId={paymentId} userDetails={userDetails} clientSecret={clientSecret}  ></GooglePay>
        </Elements>
    ) : (
        <p>Loading payment form...</p>
    );
};

export default GooglePayContainer;
