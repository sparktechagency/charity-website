import React from "react";
import {
  Form,
  Input,
  Upload,
  Button,
  Select,
  Checkbox,
  Modal,
  InputNumber,
} from "antd";
import { AppleOutlined, CreditCardOutlined, GoogleOutlined } from "@ant-design/icons";

const CardNumberModal = ({setFirstModal,setSecondModal}) => {
  const [form] = Form.useForm();
  const handleSubmit = (values) => {
    console.log(values);
  };
  const backFirstModal = () => {
    setFirstModal(true);
    setSecondModal(false);
  };

  return (
    <div>
      <h1 className=" text-[#263234] text-2xl font-semibold leading-8 ">
        Get paid
      </h1>
      <div className="flex items-center gap-2 mt-4 ">
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 18C8 17.4477 8.44772 17 9 17H15C15.5523 17 16 17.4477 16 18C16 18.5523 15.5523 19 15 19H9C8.44772 19 8 18.5523 8 18Z"
              fill="#F5851E"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9 22C9 21.4477 9.44772 21 10 21H14C14.5523 21 15 21.4477 15 22C15 22.5523 14.5523 23 14 23H10C9.44772 23 9 22.5523 9 22Z"
              fill="#F5851E"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.05025 3.05025C8.36301 1.7375 10.1435 1 12 1C13.8565 1 15.637 1.7375 16.9497 3.05025C18.2605 4.36103 18.9978 6.13813 19 7.99162C19.0123 8.78605 18.8568 9.57416 18.5438 10.3045C18.2326 11.0306 17.7727 11.6833 17.1937 12.2206C16.5443 12.8733 16.2066 13.456 16.0735 14.1807C15.9738 14.7238 15.4525 15.0833 14.9093 14.9835C14.3662 14.8838 14.0067 14.3625 14.1065 13.8193C14.3324 12.589 14.9311 11.6547 15.7929 10.7929C15.8026 10.7831 15.8126 10.7736 15.8227 10.7643C16.2017 10.4154 16.5026 9.99017 16.7055 9.51666C16.9085 9.04315 17.0089 8.53205 17.0001 8.01696L17 8C17 6.67392 16.4732 5.40215 15.5355 4.46447C14.5979 3.52678 13.3261 3 12 3C10.6739 3 9.40215 3.52678 8.46447 4.46447C7.52678 5.40215 7 6.67392 7 8C7 8.79486 7.16385 9.74236 8.19272 10.7785C9.06407 11.5822 9.65861 12.6414 9.89067 13.8043C9.99874 14.3459 9.6473 14.8726 9.10569 14.9807C8.56409 15.0887 8.03741 14.7373 7.92933 14.1957C7.77899 13.4423 7.39218 12.7564 6.82519 12.238C6.8142 12.2279 6.80343 12.2176 6.79289 12.2071C5.29462 10.7088 5 9.20145 5 8C5 6.14348 5.7375 4.36301 7.05025 3.05025Z"
              fill="#F5851E"
            />
          </svg>
        </div>
        <div>
          <p className="text-[#263234]">
            Once your auction is sold out, you will get paid and donation amount
            will be funded to the Virtue Hope.
          </p>
        </div>
      </div>

      {/* Form Start */}
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        {/* Card Number */}
        <Form.Item
          name="cardNumber"
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

        {/* Payment Method */}
        <Form.Item
          name="paymentMethod"
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
              <CreditCardOutlined className="mr-2" /> Card
            </Option>
            <Option value="apple">
              <AppleOutlined className="mr-2" /> Apple Pay
            </Option>
            <Option value="google">
              <GoogleOutlined className="mr-2" /> Google Pay
            </Option>
            <Option value="paypal">
              <span className="flex items-center gap-1">
                {/* Your PayPal SVG here */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.9861 6.91069C19.0396 4.12819 16.7436 1.99219 13.5866 1.99219H7.05757C6.90538 1.99224 6.7582 2.0466 6.64252 2.14551C6.52685 2.24441 6.45027 2.38135 6.42657 2.53169L3.81007 18.8797C3.79837 18.9538 3.80285 19.0295 3.82323 19.1017C3.8436 19.1738 3.87937 19.2407 3.92808 19.2978C3.97678 19.3548 4.03727 19.4006 4.10537 19.432C4.17348 19.4634 4.24758 19.4797 4.32257 19.4797H8.19107L7.58607 23.2657C7.57436 23.3398 7.57886 23.4156 7.59926 23.4878C7.61966 23.56 7.65548 23.6269 7.70424 23.684C7.753 23.741 7.81355 23.7868 7.88172 23.8181C7.94988 23.8495 8.02403 23.8657 8.09907 23.8657H11.2501C11.4026 23.8657 11.5381 23.8107 11.6536 23.7122C11.7691 23.6132 11.7881 23.4767 11.8116 23.3262L12.7366 17.8837C12.7601 17.7337 12.8366 17.5387 12.9526 17.4397C13.0681 17.3407 13.1691 17.2867 13.3211 17.2862H15.2501C18.3416 17.2862 20.9651 15.0892 21.4446 12.0327C21.7836 9.86269 20.8531 7.88919 18.9861 6.91069Z"
                    fill="#001C64"
                  />
                  <path
                    d="M9.02798 13.4502L8.06448 19.5602L7.45948 23.3922C7.44777 23.4663 7.45227 23.542 7.47267 23.6143C7.49308 23.6865 7.52889 23.7534 7.57765 23.8104C7.62642 23.8675 7.68697 23.9132 7.75513 23.9446C7.82329 23.976 7.89745 23.9922 7.97248 23.9922H11.3075C11.4596 23.992 11.6066 23.9376 11.7222 23.8387C11.8378 23.7398 11.9143 23.6029 11.938 23.4527L12.817 17.8827C12.8407 17.7325 12.9172 17.5956 13.0328 17.4968C13.1484 17.398 13.2954 17.3437 13.4475 17.3437H15.411C18.5025 17.3437 21.1255 15.0887 21.605 12.0322C21.945 9.86266 20.853 7.88916 18.986 6.91016C18.981 7.14116 18.961 7.37166 18.9255 7.60016C18.446 10.6562 15.8225 12.9117 12.731 12.9117H9.65848C9.5065 12.9117 9.3595 12.9659 9.24393 13.0646C9.12836 13.1633 9.05179 13.3 9.02798 13.4502Z"
                    fill="#0070E0"
                  />
                  <path
                    d="M8.06398 19.5601H4.18398C4.10896 19.5601 4.03482 19.5439 3.96668 19.5125C3.89853 19.4812 3.83801 19.4354 3.78929 19.3783C3.74056 19.3213 3.70479 19.2544 3.68446 19.1821C3.66412 19.1099 3.65969 19.0342 3.67148 18.9601L6.28748 2.36908C6.31119 2.21879 6.38779 2.08191 6.50348 1.98309C6.61917 1.88427 6.76634 1.83001 6.91848 1.83008H13.587C16.7435 1.83008 19.0395 4.12758 18.986 6.91008C18.2005 6.49808 17.2775 6.26258 16.266 6.26258H10.7065C10.5545 6.26273 10.4075 6.31708 10.2919 6.41587C10.1763 6.51466 10.0998 6.65142 10.076 6.80158L9.02848 13.4501L8.06398 19.5601Z"
                    fill="#003087"
                  />
                </svg>
                PayPal
              </span>
            </Option>
          </Select>
        </Form.Item>

        {/* Modal Buttons */}
        <div className="flex flex-col lg:flex-row md:flex-row lg:justify-end lg:gap-8">
          <Button onClick={backFirstModal} className="missionModalBtn1">
            Go Back
          </Button>

          <Button htmlType="submit" className="missionModalBtn2">
            Complete process
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CardNumberModal;
