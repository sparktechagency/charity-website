import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import GooglePay from './GooglePay';
import { useLocation, useNavigate } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51RLzucIC4wM63k4fYkVbJvppgGxZY61KXU8F0fxBOPYyFmez1J8y26q62vSyIXr5C2t8seOfOBSocn0TvK4UhkgJ00bvXfaKfw');

const GooglePayContainer = () => {
    const location = useLocation();
    const userPayload = location.state;
    const navigate = useNavigate();

    const [clientSecret, setClientSecret] = useState(null);
    const [paymentId, setPaymentId] = useState(null);

    const userDetails = {
        amount: Number(userPayload?.amount),
        donation_type: userPayload?.donation_type,
        email: userPayload?.email,
        frequency: userPayload?.frequency,
        name: userPayload?.name,
        remark: userPayload?.remark,
        phone_number: userPayload?.phone_number
    };
    console.log(typeof userPayload?.amount)
    useEffect(() => {
        if (!userPayload?.amount) {
            navigate("/");
            return;
        }

        const url = `https://api.virtuehope.com/api/create-payment-intent?amount=${userPayload.amount}&payment_method=pm_card_visa`;

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then((data) => {
                setClientSecret(data?.data?.client_secret);
                setPaymentId(data?.data?.id);
            })
            .catch(() => {
                navigate("/payment-list");
            });
    }, [userPayload?.amount, navigate]);

    // Prevent rendering <Elements> until clientSecret is available
    if (!clientSecret) return <p>Loading payment form...</p>;

    const options = {
        clientSecret,
        appearance: { theme: 'flat' },
    };

    return (
        <Elements stripe={stripePromise} options={options}>
            <GooglePay paymentId={paymentId} userDetails={userDetails} clientSecret={clientSecret} />
        </Elements>
    );
};

export default GooglePayContainer;
