import React, { useState } from "react";
import { Form, Input, Button, Select } from "antd";
import {
  AppleOutlined,
  CreditCardOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import useAxiosPublic from "../../../pages/hooks/useAxiosPublic";
import { auctionMsg } from "../../../helper/auctionMsg";
import Swal from "sweetalert2";

const { Option } = Select;

const CardNumberModal = ({
  setAuctionDetailsModal,
  setPaymentModal,
  auctionData,
  personalData,
  setUserDetailsModal
}) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const name = personalData.name;
  const email = personalData.email;
  const contact_number = personalData.contact_number;
  const city = personalData.city;
  const address = personalData.address;
  const profile = personalData.profile;

  const title = auctionData.title;
  const description = auctionData.description;
  const image = auctionData.image;
  const donate_share = Number(auctionData.donate_share);
  const formData = new FormData();

  // const payload = {
  //   name,email,contact_number,city,address,photo,title,description,image,donate_share
  // }
  const axiosPublic = useAxiosPublic();
  const handleSubmit = async (values) => {
    formData.append("name", name);
    formData.append("email", email);
    formData.append("contact_number", contact_number);
    formData.append("city", city);
    formData.append("address", address);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("donate_share", Number(donate_share));
    formData.append("card_number", Number(values.card_number));
    formData.append("payment_type", values.payment_type);

    // Append photo (assuming it's a single image file)
    if (profile) {
      formData.append("profile", profile);
    }

    if (image) {
      formData.append("image", image); // only one image
    }

    try {
      setLoading(true)
      const res = await axiosPublic.post(`/auction`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data?.success) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `<h1>Donation item under review.</h1>`,
          text: "Your auction listing is under review. Once done, it will be published & we’ll notify you via email.",
          showConfirmButton: true,
          timer: 2500,
        });
      }
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `${error.response?.data?.message || "Something went wrong!"}`,
        showConfirmButton: true,
        timer: 2500,
      });
    } finally {
      setLoading(false)
    }
    setPaymentModal(false)
    form.resetFields()
  };

  const backModal = () => {
    setUserDetailsModal(true);
    setPaymentModal(false);
  };

  return (
    <>
      <>
        <h1 className="text-[#263234] text-2xl font-semibold leading-8">
          Get paid
        </h1>
        <div className="flex items-center gap-2 mt-4">
          <div>
            {/* Payment Info Icon */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 18C8 17.4477 8.44772 17 9 17H15C15.5523 17 16 17.4477 16 18C16 18.5523 15.5523 19 15 19H9C8.44772 19 8 18.5523 8 18Z"
                fill="#F5851E"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 22C9 21.4477 9.44772 21 10 21H14C14.5523 21 15 21.4477 15 22C15 22.5523 14.5523 23 14 23H10C9.44772 23 9 22.5523 9 22Z"
                fill="#F5851E"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.05025 3.05025C8.36301 1.7375 10.1435 1 12 1C13.8565 1 15.637 1.7375 16.9497 3.05025C18.2605 4.36103 18.9978 6.13813 19 7.99162C19.0123 8.78605 18.8568 9.57416 18.5438 10.3045C18.2326 11.0306 17.7727 11.6833 17.1937 12.2206C16.5443 12.8733 16.2066 13.456 16.0735 14.1807C15.9738 14.7238 15.4525 15.0833 14.9093 14.9835C14.3662 14.8838 14.0067 14.3625 14.1065 13.8193C14.3324 12.589 14.9311 11.6547 15.7929 10.7929C15.8026 10.7831 15.8126 10.7736 15.8227 10.7643C16.2017 10.4154 16.5026 9.99017 16.7055 9.51666C16.9085 9.04315 17.0089 8.53205 17.0001 8.01696L17 8C17 6.67392 16.4732 5.40215 15.5355 4.46447C14.5979 3.52678 13.3261 3 12 3C10.6739 3 9.40215 3.52678 8.46447 4.46447C7.52678 5.40215 7 6.67392 7 8C7 8.79486 7.16385 9.74236 8.19272 10.7785C9.06407 11.5822 9.65861 12.6414 9.89067 13.8043C9.99874 14.3459 9.6473 14.8726 9.10569 14.9807C8.56409 15.0887 8.03741 14.7373 7.92933 14.1957C7.77899 13.4423 7.39218 12.7564 6.82519 12.238C6.8142 12.2279 6.80343 12.2176 6.79289 12.2071C5.29462 10.7088 5 9.20145 5 8C5 6.14348 5.7375 4.36301 7.05025 3.05025Z"
                fill="#F5851E"
              />
            </svg>
          </div>
          <div>
            <p className="text-[#263234]">
              Once your auction is sold out, you will get paid and donation
              amount will be funded to the Virtue Hope.
            </p>
          </div>
        </div>

        {/* Step Indicator */}
        <div>
          <p className="text-[#263234] text-sm font-semibold mt-4">
            Step 3 of 3
          </p>
        </div>
        <div className="flex gap-3.5 mt-2.5 mb-6">
          <div className="w-[33%] h-1.5 bg-[#457205]"></div>
          <div className="w-[33%] h-1.5 bg-[#457205]"></div>
          <div className="w-[33%] h-1.5 bg-[#457205]"></div>
        </div>

        {/* Form Start */}
        <Form form={form} onFinish={handleSubmit} layout="vertical">


          {/* Payment Method */}
          <Form.Item
            name="payment_type"
            label={
              <span className="text-[#414651] text-[14px] font-medium">
                Choose a payment method
              </span>
            }
            rules={[
              { required: true, message: "Please select a payment method" },
            ]}
            style={{ marginBottom: "20px", marginTop: "12px" }}
          >
            <Select
              placeholder="Select Payment Method"
              bordered={false}
              style={{
                width: "100%",
                backgroundColor: "#f9f9f9",
                height: "45px",
                fontWeight: "500",
              }}
              className="shadow-sm hover:shadow-md focus:shadow-md transition-all"
            >
              <Option value="card">

                <span className=" flex flex-row items-center gap-x-3  " >
                  <span><svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  <span>Card</span>
                </span>
              </Option>
              <Option value="apple_pay">
                <span className=" flex flex-row items-center gap-x-2 " >
                  <span>
                    <svg width="26" height="20" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  <span>Apple Pay</span>
                </span>
              </Option>
              <Option value="google_pay">
                <span className=" flex flex-row items-center gap-x-3 " >
                  <span>
                    <svg width="31" height="16" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  <span>
                    Google Pay
                  </span>
                </span>
              </Option>
              <Option value="paypal_pay">
                <span className="flex items-center gap-1">
                  {/* PayPal SVG included above */}
                  <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9861 4.91069C16.0396 2.12819 13.7436 -0.0078125 10.5866 -0.0078125H4.05757C3.90538 -0.00776348 3.7582 0.0466044 3.64252 0.145507C3.52685 0.244409 3.45027 0.381351 3.42657 0.531687L0.810071 16.8797C0.798366 16.9538 0.802855 17.0295 0.823226 17.1017C0.843598 17.1738 0.879369 17.2407 0.928077 17.2978C0.976785 17.3548 1.03727 17.4006 1.10537 17.432C1.17348 17.4634 1.24758 17.4797 1.32257 17.4797H5.19107L4.58607 21.2657C4.57436 21.3398 4.57886 21.4156 4.59926 21.4878C4.61966 21.56 4.65548 21.6269 4.70424 21.684C4.753 21.741 4.81355 21.7868 4.88172 21.8181C4.94988 21.8495 5.02403 21.8657 5.09907 21.8657H8.25007C8.40257 21.8657 8.53807 21.8107 8.65357 21.7122C8.76907 21.6132 8.78807 21.4767 8.81157 21.3262L9.73657 15.8837C9.76007 15.7337 9.83657 15.5387 9.95257 15.4397C10.0681 15.3407 10.1691 15.2867 10.3211 15.2862H12.2501C15.3416 15.2862 17.9651 13.0892 18.4446 10.0327C18.7836 7.86269 17.8531 5.88919 15.9861 4.91069Z" fill="#001C64" />
                  </svg>

                  <span className=" font-semibold">PayPal</span>
                </span>
              </Option>
            </Select>
          </Form.Item>
          {/* Card Number */}
          <Form.Item
            name="card_number"
            label={
              <span className="text-[#414651] text-[14px] font-medium">
                Enter your card number
              </span>
            }
            rules={[{ required: true, message: "Card number is required" }]}
            style={{ marginBottom: "0px" }}
          >
            <Input
              className="py-3 px-4 placeholder:text-[16px] w-full"
              placeholder="Enter your card number"
              maxLength={19}
              style={{
                border: "1px solid #D5D7DA",
                outline: "none",
              }}
            />
          </Form.Item>

          {/* Buttons */}
          <div className=" lg:flex lg:flex-row lg:items-center lg:justify-end gap-x-6 mt-4 ">
            <Button onClick={backModal} className="cancelBtn mb-4 lg:mb-0 ">
              Go Back
            </Button>
            <Button loading={loading} htmlType="submit" className="navBtn2">
              Complete process
            </Button>
          </div>
        </Form>
      </>
    </>
  );
};

export default CardNumberModal;
