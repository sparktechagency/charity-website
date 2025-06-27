import { Card, Descriptions, Divider } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaPaypal, FaApplePay, FaGooglePay } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAxiosPublic from "../../../pages/hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";

const PaymentList = () => {
    const axiosPublic = useAxiosPublic()
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const location = useLocation();
    const payload = location.state;
    const handleSubmitStripe = () => {
        navigate("/stripe-from", { state: payload })
    }
    const handlePaypalPayment = async () => {
        try {
            setLoading(true);
            const res = await axiosPublic.post(`/create-paypal-payment-intent?amount=${payload.amount}&currency=USD`);

            const approvalLink = res?.data?.approve_link;

            if (approvalLink) {
                window.location.href = approvalLink;
            }else {
                console.error("PayPal approval link not found in response.");
            }
        } catch (error) {
            console.error("Error creating PayPal payment intent:", error);
        } finally {
            setLoading(false);
        }
    };
    const handleGooglePay = () => {
        navigate("/google-pay", { state: payload })
    }
    return (
        <div className="bg-[#f6f8fb] min-h-screen py-10 lg:px-4">

            <div className="max-w-7xl mx-auto">
                <Helmet>
                    <title>Virtuehope | Paymentlist</title>
                </Helmet>
                <div className=" flex   items-center " >
                    {/* <Link
                        to="/user-details"
                        className="inline-flex items-center gap-2 rounded-full px-4 py-2 transition"
                    >
                        <span>
                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.707 8.00006H4.12097L8.62097 12.5001L7.20697 13.9141L0.292969 7.00006L7.20697 0.0860634L8.62097 1.50006L4.12097 6.00006L15.707 6.00006V8.00006Z" fill="black" />
                            </svg>

                        </span>
                        
                    </Link> */}

                    <h2 className="text-3xl font-semibold ">Payment</h2>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md flex  lg:flex-row flex-col mt-8 gap-8">
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-4">Please select your preferred payment method</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Credit Card */}
                            <div onClick={handleSubmitStripe} className="border rounded-lg p-4 flex flex-col gap-2 hover:shadow  cursor-pointer">
                                <div className="flex items-center justify-between " >
                                    <span className="text-base font-medium"> Card</span>

                                    {/* <FaCcAmex />
                                    <FaCcVisa />
                                    <FaCcMastercard /> */}

                                    <span>
                                        <svg width="80" height="40" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_0_11)">
                                                <path d="M1.98703 -0.0040741H23.0886C23.7546 -0.0040741 24.2945 0.535796 24.2945 1.20173V13.8627C24.2945 14.5287 23.7546 15.0685 23.0886 15.0685H1.98703C1.3211 15.0685 0.781227 14.5287 0.781227 13.8627V1.20173C0.781227 0.535796 1.3211 -0.0040741 1.98703 -0.0040741Z" fill="#0E4595" />
                                                <path d="M9.61967 10.5085L10.6253 4.60727H12.2339L11.2275 10.5085H9.61967ZM17.0387 4.73449C16.7201 4.61493 16.2206 4.48663 15.5971 4.48663C14.0077 4.48663 12.8881 5.28699 12.8786 6.4341C12.8696 7.28208 13.6779 7.75512 14.2879 8.0374C14.9141 8.32664 15.1245 8.5111 15.1216 8.76942C15.1176 9.16495 14.6216 9.34567 14.1593 9.34567C13.5155 9.34567 13.1735 9.25623 12.6452 9.0359L12.4379 8.94215L12.2122 10.2632C12.5879 10.4279 13.2826 10.5706 14.0039 10.578C15.6948 10.578 16.7923 9.78682 16.8049 8.56184C16.8109 7.89053 16.3824 7.37966 15.4544 6.95848C14.8921 6.68551 14.5478 6.50331 14.5515 6.22691C14.5515 5.98162 14.8429 5.7193 15.4726 5.7193C15.9986 5.71116 16.3797 5.82586 16.6766 5.94539L16.8207 6.01352L17.0387 4.73449ZM21.1779 4.60718H19.935C19.5499 4.60718 19.2618 4.7123 19.0927 5.09656L16.7039 10.5046H18.3929C18.3929 10.5046 18.6691 9.77741 18.7315 9.61779C18.9162 9.61779 20.557 9.62033 20.7916 9.62033C20.8397 9.82691 20.9872 10.5046 20.9872 10.5046H22.4798L21.1779 4.607V4.60718ZM19.2059 8.41783C19.3389 8.07783 19.8468 6.7682 19.8468 6.7682C19.8372 6.78394 19.9788 6.42654 20.06 6.20497L20.1687 6.71379C20.1687 6.71379 20.4767 8.12244 20.5411 8.41783H19.2059ZM8.25415 4.60718L6.67937 8.63156L6.51155 7.81373C6.21839 6.871 5.30499 5.84962 4.28388 5.33826L5.7238 10.4991L7.42567 10.4972L9.95799 4.60712H8.25415" fill="white" />
                                                <path d="M5.20992 4.60688H2.6162L2.59567 4.72966C4.61353 5.21813 5.94872 6.39859 6.50309 7.81683L5.93907 5.10497C5.8417 4.73132 5.55933 4.61981 5.20998 4.60676" fill="#F2AE14" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_0_11">
                                                    <rect width="23.5132" height="15.0644" fill="white" transform="translate(0.781227)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                </div>


                            </div>

                            {/* PayPal */}
                            <div onClick={handlePaypalPayment} className="border rounded-lg p-4 flex items-center justify-between hover:shadow cursor-pointer">
                                <span className="text-base font-medium">PayPal</span>
                                {/* <FaPaypal className="text-2xl text-blue-600" /> */}

                                <span>
                                    <svg width="100" height="50" viewBox="0 0 57 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_0_5)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.95412 4.39699H8.83415C10.9174 4.39699 11.7016 5.45163 11.5804 7.00103C11.3801 9.55901 9.8337 10.9742 7.78252 10.9742H6.74691C6.46547 10.9742 6.27618 11.1605 6.20006 11.6653L5.76037 14.5998C5.73133 14.7901 5.63117 14.9003 5.48094 14.9153H3.04315C2.8138 14.9153 2.73267 14.7401 2.79276 14.3605L4.27907 4.95285C4.33716 4.57627 4.54348 4.39699 4.95412 4.39699Z" fill="#009EE3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.8002 4.22243C23.1092 4.22243 24.3171 4.93254 24.1518 6.70229C23.9515 8.80556 22.8248 9.96936 21.047 9.97437H19.4936C19.2703 9.97437 19.1621 10.1567 19.104 10.5302L18.8035 12.4402C18.7585 12.7287 18.6102 12.8709 18.3919 12.8709H16.9466C16.7163 12.8709 16.6362 12.7236 16.6872 12.3941L17.8801 4.73924C17.9392 4.36265 18.0804 4.22243 18.3378 4.22243H21.7972H21.8002ZM19.4465 8.3208H20.6234C21.3595 8.29276 21.8483 7.78297 21.8973 6.86354C21.9274 6.29566 21.5438 5.88902 20.9338 5.89203L19.8261 5.89704L19.4465 8.3208ZM28.081 12.285C28.2132 12.1648 28.3474 12.1027 28.3283 12.2509L28.2813 12.6055C28.2572 12.7907 28.3303 12.8889 28.5026 12.8889H29.7866C30.0029 12.8889 30.1081 12.8018 30.1612 12.4672L30.9524 7.50153C30.9925 7.25214 30.9314 7.12995 30.7421 7.12995H29.3299C29.2027 7.12995 29.1406 7.20106 29.1075 7.39536L29.0555 7.70084C29.0284 7.86009 28.9553 7.88813 28.8872 7.72788C28.6478 7.161 28.0369 6.90661 27.1846 6.92664C25.2045 6.9677 23.8694 8.47104 23.7262 10.398C23.616 11.8883 24.6837 13.0592 26.0919 13.0592C27.1134 13.0592 27.5702 12.7587 28.085 12.288L28.081 12.285ZM27.0053 11.5208C26.153 11.5208 25.559 10.8407 25.6822 10.0074C25.8054 9.17413 26.6027 8.49407 27.455 8.49407C28.3073 8.49407 28.9012 9.17413 28.778 10.0074C28.6548 10.8407 27.8586 11.5208 27.0053 11.5208ZM33.4653 7.11393H32.1633C31.8949 7.11393 31.7857 7.31424 31.8708 7.56062L33.4873 12.294L31.9019 14.5465C31.7687 14.7348 31.8718 14.906 32.0591 14.906H33.5224C33.6077 14.9159 33.694 14.901 33.7711 14.8632C33.8481 14.8254 33.9127 14.7662 33.9571 14.6927L38.9288 7.56162C39.082 7.34228 39.0099 7.11193 38.7585 7.11193H37.3734C37.136 7.11193 37.0409 7.20607 36.9047 7.40338L34.8314 10.408L33.905 7.39637C33.8509 7.21408 33.7157 7.11393 33.4663 7.11393H33.4653Z" fill="#113984" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M44.1004 4.22246C45.4095 4.22246 46.6174 4.93257 46.4521 6.70232C46.2518 8.80559 45.125 9.96939 43.3473 9.9744H41.7949C41.5715 9.9744 41.4633 10.1567 41.4053 10.5303L41.1048 12.4402C41.0597 12.7287 40.9115 12.8709 40.6932 12.8709H39.2479C39.0175 12.8709 38.9374 12.7237 38.9885 12.3942L40.1834 4.73726C40.2424 4.36068 40.3837 4.22046 40.6411 4.22046H44.1004V4.22246ZM41.7468 8.32083H42.9236C43.6598 8.29279 44.1485 7.783 44.1976 6.86357C44.2276 6.29568 43.844 5.88905 43.2341 5.89206L42.1264 5.89707L41.7468 8.32083ZM50.3812 12.285C50.5134 12.1648 50.6476 12.1027 50.6286 12.2509L50.5815 12.6055C50.5575 12.7908 50.6306 12.8889 50.8029 12.8889H52.0869C52.3032 12.8889 52.4084 12.8018 52.4614 12.4673L53.2527 7.50156C53.2927 7.25217 53.2316 7.12998 53.0423 7.12998H51.6321C51.505 7.12998 51.4429 7.20109 51.4098 7.39539L51.3577 7.70087C51.3307 7.86011 51.2576 7.88816 51.1895 7.72791C50.9501 7.16103 50.3391 6.90663 49.4868 6.92667C47.5067 6.96773 46.1717 8.47107 46.0284 10.3981C45.9183 11.8884 46.9859 13.0592 48.3941 13.0592C49.4157 13.0592 49.8724 12.7587 50.3872 12.288L50.3812 12.285ZM49.3065 11.5208C48.4542 11.5208 47.8603 10.8407 47.9835 10.0075C48.1067 9.17416 48.9039 8.4941 49.7562 8.4941C50.6086 8.4941 51.2025 9.17416 51.0793 10.0075C50.9561 10.8407 50.1589 11.5208 49.3065 11.5208ZM55.2287 12.8969H53.7464C53.7206 12.8981 53.6949 12.8935 53.6711 12.8836C53.6473 12.8737 53.626 12.8586 53.6086 12.8395C53.5913 12.8203 53.5785 12.7976 53.5709 12.7729C53.5634 12.7482 53.5614 12.7222 53.5651 12.6966L54.8672 4.44781C54.8796 4.39152 54.9107 4.34108 54.9555 4.30471C55.0002 4.26835 55.0559 4.24818 55.1136 4.2475H56.5959C56.6216 4.24635 56.6474 4.2509 56.6712 4.26084C56.695 4.27078 56.7163 4.28585 56.7336 4.30499C56.751 4.32413 56.7638 4.34685 56.7714 4.37154C56.7789 4.39623 56.7809 4.42227 56.7771 4.44781L55.4751 12.6966C55.4631 12.7533 55.4321 12.8042 55.3874 12.841C55.3426 12.8777 55.2867 12.8982 55.2287 12.8989V12.8969Z" fill="#009EE3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.52889 1.1588H6.41293C7.50663 1.1588 8.80464 1.19385 9.67199 1.96004C10.2519 2.47184 10.5564 3.2861 10.4863 4.16347C10.2479 7.12908 8.47413 8.79065 6.09443 8.79065H4.17946C3.85295 8.79065 3.63761 9.00699 3.54547 9.5919L3.01064 12.9972C2.97559 13.2175 2.88044 13.3477 2.71017 13.3638H0.31345C0.0480378 13.3638 -0.0461094 13.1635 0.022998 12.7208L1.74567 1.8058C1.81478 1.36712 2.05616 1.1588 2.52889 1.1588Z" fill="#113984" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.60088 9.2464L4.27894 4.95273C4.33803 4.57614 4.54435 4.39586 4.95499 4.39586H8.83502C9.47701 4.39586 9.99682 4.49601 10.4035 4.6813C10.0138 7.32141 8.30619 8.78768 6.07072 8.78768H4.15875C3.90235 8.78868 3.71406 8.91689 3.60088 9.2464Z" fill="#172C70" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_0_5">
                                                <rect width="56.7812" height="15.0644" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </span>
                            </div>

                            {/* Apple Pay */}
                            <div onClick={handleSubmitStripe} className="border rounded-lg p-4 flex items-center justify-between hover:shadow cursor-pointer">
                                <span className="text-base font-medium">Apple Pay</span>
                                {/* <FaApplePay className="text-2xl text-white  " /> */}
                                <span>
                                    <svg width="80" height="30" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_0_22)">
                                            <path d="M5.35388 3.10893C5.67884 2.67441 5.91095 2.09506 5.84132 1.51571C5.35388 1.53985 4.7736 1.85366 4.42543 2.26404C4.12369 2.62613 3.84515 3.22962 3.91479 3.78484C4.47186 3.85725 5.00571 3.54344 5.35388 3.10893ZM5.84132 3.92967C5.05214 3.88139 4.37901 4.38833 4.00763 4.38833C3.63625 4.38833 3.05597 3.95381 2.42927 3.95381C1.61688 3.97795 0.87412 4.43661 0.456319 5.20908C-0.379284 6.72987 0.224207 8.97486 1.05981 10.206C1.4544 10.8095 1.94184 11.4854 2.56854 11.4612C3.17203 11.4371 3.40414 11.0509 4.12369 11.0509C4.84324 11.0509 5.05214 11.4612 5.70205 11.4371C6.35196 11.413 6.76977 10.8336 7.16436 10.206C7.62858 9.50593 7.81427 8.83002 7.81427 8.80588C7.79106 8.78174 6.53765 8.29895 6.53765 6.80229C6.51444 5.54703 7.51252 4.94354 7.55895 4.9194C7.02509 4.05037 6.14306 3.95381 5.84132 3.92967Z" fill="black" />
                                            <path d="M12.665 2.21562C14.3826 2.21562 15.5664 3.44674 15.5664 5.20894C15.5664 6.99527 14.3594 8.22639 12.6186 8.22639H10.7384V11.3404H9.36899V2.21562H12.665ZM10.7384 7.04355H12.2936C13.4774 7.04355 14.1505 6.36764 14.1505 5.23308C14.1505 4.07437 13.4774 3.4226 12.2936 3.4226H10.7152V7.04355H10.7384ZM15.9145 9.48166C15.9145 8.32295 16.7734 7.59876 18.3053 7.50221L20.0694 7.40565V6.89871C20.0694 6.15038 19.5819 5.71587 18.7927 5.71587C18.0268 5.71587 17.5625 6.10211 17.4465 6.68146H16.1931C16.2627 5.47447 17.2608 4.58131 18.8392 4.58131C20.3943 4.58131 21.3924 5.4262 21.3924 6.77802V11.3645H20.139V10.2783H20.1158C19.7444 11.0266 18.932 11.4852 18.0964 11.4852C16.7966 11.4852 15.9145 10.6645 15.9145 9.48166ZM20.0694 8.87817V8.34709L18.491 8.44365C17.7018 8.49193 17.2608 8.85403 17.2608 9.43338C17.2608 10.0127 17.725 10.399 18.4214 10.399C19.3498 10.399 20.0694 9.74719 20.0694 8.87817ZM22.553 13.8268V12.7164C22.6458 12.7405 22.8779 12.7405 22.9708 12.7405C23.5742 12.7405 23.8992 12.475 24.1081 11.7991C24.1081 11.7749 24.2242 11.3887 24.2242 11.3887L21.903 4.72615H23.3189L24.9437 10.1576H24.9669L26.5917 4.72615H27.9844L25.5936 11.7508C25.0365 13.3681 24.4098 13.8751 23.0868 13.8751C22.994 13.8509 22.669 13.8509 22.553 13.8268Z" fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_0_22">
                                                <rect width="27.9231" height="14.52" fill="white" transform="translate(0.0606995 0.544403)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </span>
                            </div>

                            {/* Google Pay */}
                            <div onClick={handleGooglePay} className="border rounded-lg p-4 flex items-center justify-between hover:shadow cursor-pointer">
                                <span className="text-base font-medium">Google Pay</span>
                                {/* <FaGooglePay className="text-2xl text-green-600" /> */}
                                <span>
                                    <svg width="80" height="30" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_0_15)">
                                            <path d="M14.3723 8.45553V11.9193H13.2726V3.36336H16.1877C16.891 3.3484 17.5705 3.61522 18.0755 4.10399C18.5867 4.56408 18.8747 5.22242 18.8635 5.90944C18.8785 6.60145 18.5904 7.26478 18.0755 7.72611C17.5655 8.21239 16.9359 8.45553 16.1877 8.45428L14.3723 8.45553ZM14.3723 4.41695V7.40442H16.2152C16.6241 7.41689 17.0181 7.25605 17.3024 6.96179C17.8797 6.4007 17.8934 5.47678 17.3311 4.89949C17.3211 4.88951 17.3124 4.87954 17.3024 4.87081C17.0219 4.57032 16.6254 4.40573 16.2152 4.41695H14.3723ZM21.3971 5.87453C22.2101 5.87453 22.8509 6.09148 23.321 6.52539C23.7911 6.9593 24.0255 7.55529 24.0255 8.31089V11.9193H22.9744V11.1063H22.927C22.4719 11.7759 21.8659 12.1101 21.1103 12.1101C20.4657 12.1101 19.9258 11.9193 19.4919 11.5365C19.0705 11.1812 18.8311 10.655 18.841 10.1026C18.841 9.49665 19.0705 9.01536 19.5281 8.65752C19.9857 8.29967 20.5966 8.12012 21.3622 8.12012C22.0143 8.12012 22.5529 8.23982 22.9744 8.47797V8.2261C22.9769 7.84955 22.8098 7.49295 22.5205 7.25355C22.23 6.99171 21.851 6.84833 21.4595 6.85331C20.846 6.85331 20.3597 7.11266 20.0019 7.63011L19.0343 7.02039C19.5655 6.25607 20.3535 5.87453 21.3971 5.87453ZM19.9744 10.1276C19.9732 10.4118 20.1091 10.6787 20.3385 10.8445C20.5817 11.0353 20.8834 11.1375 21.1926 11.1313C21.6565 11.13 22.1016 10.9455 22.4295 10.6176C22.7936 10.2747 22.9756 9.8732 22.9756 9.41062C22.6327 9.13756 22.1552 9.0004 21.5417 9.0004C21.0954 9.0004 20.7226 9.10763 20.4246 9.32334C20.1241 9.54279 19.9744 9.80837 19.9744 10.1276ZM30.0603 6.0653L26.3908 14.5003H25.2561L26.6177 11.549L24.2038 6.0653H25.3983L27.1426 10.2709H27.1663L28.8633 6.0653H30.0603Z" fill="#5F6368" />
                                            <path d="M9.93008 7.70733C9.93008 7.37193 9.90264 7.03777 9.84529 6.70735H5.20947V8.60008H7.86403C7.75431 9.21104 7.4002 9.75093 6.88276 10.0938V11.3232H8.46751C9.39517 10.4691 9.93008 9.20356 9.93008 7.70733Z" fill="#4285F4" />
                                            <path d="M5.20914 12.5116C6.53579 12.5116 7.65298 12.0765 8.46718 11.3246L6.88242 10.0952C6.44103 10.3945 5.87371 10.5653 5.20914 10.5653C3.92737 10.5653 2.83886 9.70122 2.44984 8.53665H0.817703V9.80346C1.65185 11.4643 3.35132 12.5116 5.20914 12.5116Z" fill="#34A853" />
                                            <path d="M2.45028 8.53668C2.24455 7.92697 2.24455 7.26489 2.45028 6.65517V5.38837H0.818144C0.119904 6.77737 0.119904 8.41449 0.818144 9.80349L2.45028 8.53668Z" fill="#FBBC04" />
                                            <path d="M5.20914 4.62638C5.90987 4.61516 6.58691 4.8795 7.09439 5.36328L8.49835 3.96056C7.60809 3.12517 6.42981 2.66632 5.20914 2.68004C3.35132 2.68004 1.65185 3.72865 0.817703 5.38821L2.44984 6.65502C2.83886 5.49046 3.92737 4.62638 5.20914 4.62638Z" fill="#EA4335" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_0_15">
                                                <rect width="29.7662" height="14.325" fill="white" transform="translate(0.294464 0.73941)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </span>
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
                                <Descriptions.Item label="Donation Type">
                                    {payload?.donation_type === "one_time_donate" ? "one_time_donate" : "recurring"}
                                </Descriptions.Item>

                                <Descriptions.Item label="Frequency">
                                    {payload?.frequency.charAt(0).toUpperCase() +
                                        payload?.frequency.slice(1)}
                                </Descriptions.Item>

                                <Descriptions.Item label="Amount">
                                    £ {payload?.amount}
                                </Descriptions.Item>
                            </Descriptions>
                        </Card>
                        <Divider></Divider>
                        <Card className="mb-6 border shadow-sm">
                            <h3 className="text-lg font-semibold mb-4">Donor Information</h3>

                            <Descriptions
                                column={1}
                                labelStyle={{ fontWeight: 600 }}
                                contentStyle={{ color: "#263234" }}
                            >
                                <Descriptions.Item label="Name">{payload?.name}</Descriptions.Item>
                                <Descriptions.Item label="Email">{payload?.email}</Descriptions.Item>
                                {payload?.phone_number && (
                                    <Descriptions.Item label="Phone">
                                        {payload?.phone_number}
                                    </Descriptions.Item>
                                )}
                                {payload?.remark && (
                                    <Descriptions.Item label="Description">
                                        {payload?.remark}
                                    </Descriptions.Item>
                                )}
                            </Descriptions>
                        </Card>
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

export default PaymentList;

