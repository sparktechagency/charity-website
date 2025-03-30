import { Button, Modal, Form, Input, Checkbox, Radio } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { showSuccessAlert } from "../../helper/showSuccessAlert";

const ServiceBanner = () => {
  const navigate = useNavigate()
  const daysOfWeek = [
    { id: 1, name: "Monday" },
    { id: 2, name: "Tuesday" },
    { id: 3, name: "Wednesday" },
    { id: 4, name: "Thursday" },
    { id: 5, name: "Friday" },
  ];

  const timeSlots = [
    { id: 1, slot: "10 - 12 am" },
    { id: 2, slot: "12 - 14 " },
    { id: 3, slot: "14 - 16 " },
    { id: 4, slot: "16 - 18" },
  ];

  // booking modal start

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modal Open Function
  const showModal = () => {
    setIsModalOpen(true);
  };

  // Modal Close Function
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleClick = (e) => {
    console.log(e);
  };

  // booking modal end

  // payment modal start

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  // Modal Open Function
  const showPaymentModal = () => {
    console.log(`payment modal open`);
    setIsPaymentModalOpen(true);
    setIsModalOpen(false);
  };
  // Modal Close Function
  const handlePaymentCancel = () => {
    setIsPaymentModalOpen(false);
    setIsModalOpen(true);
    navigate("/")

  };

  const submitDonateModal = ()=>{
    console.log(`Donate modal opened: `)
    setIsPaymentModalOpen(false);
    setIsModalOpen(true);
  }


  // payment modal end


  // submit booking from 

  const submitBookingFrom = async (e) => {
    e.preventDefault();
    console.log("Booking Form Submitted");
    setIsModalOpen(false);
    showSuccessAlert();
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (isPaymentModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isPaymentModalOpen]);

  return (
    <div>
      <p className="lg:pt-20 pt-24 text-[#403730] font-semibold text-center">
        Our services
      </p>
      <h1 className="lg:text-5xl text-2xl p-2 lg:leading-16 text-center lg:mt-3 text-[#263234] font-semibold">
        Our Services
      </h1>
      <div className="lg:mt-6 max-w-[800px] mx-auto text-center">
        <p className="text-[#263234] text-justify p-2 text-[16px] lg:text-xl lg:leading-[30px]">
          A Virtue Hope C.I.C., we provide holistic, trauma-informed services
          designed to support women on their journey to healing, empowerment,
          and renewed purpose. Our services are built around compassion,
          creativity, and community, offering practical tools and emotional
          support for survivors of abuse and trauma.
        </p>
        <div className="lg:pb-24! pb-10! mt-5">
          <Button className="seviceBtn" onClick={showModal}>
            Start Your Journey
          </Button>
        </div>
      </div>

      {/* booking modal */}
      <Modal
        title={
          <span className=" text-[#263234] text-2xl leading-9 font-semibold mt-6 ">
            Book Your Schedule
          </span>
        }
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={600}
        closable={false}
      >
        <p className=" text-[#263234] leading-8 font-semibold text-lg ">
          Basic information
        </p>
        <Form layout="vertical" onFinish={"handleBooking"}>
          {/* Name */}
          <Form.Item
            style={{ marginBottom: "0px", marginTop: "16px" }}
            label={
              <span className=" text-[#263234] font-semibold text-xs ">
                Name
              </span>
            }
            name="name"
          >
            <Input
              className=" placeholder:text-[#818889] "
              style={{
                border: "1px solid #A6ABAC ",
                outline: "none",
                padding: "10px 14px",
                lineHeight: "24px",
                fontSize: "16px",
              }}
              placeholder="Enter your name"
            />
          </Form.Item>

          {/* Telephone number */}
          <Form.Item
            style={{ marginBottom: "0px", marginTop: "16px" }}
            label={
              <span className=" text-[#263234] font-semibold text-xs ">
                Telephone number
              </span>
            }
            name="email"
          >
            <Input
              style={{
                border: "1px solid #A6ABAC ",
                outline: "none",
                padding: "10px 14px",
                lineHeight: "24px",
                fontSize: "16px",
              }}
              placeholder="123"
            />
          </Form.Item>

          {/* Email */}
          <Form.Item
            style={{ marginBottom: "0px", marginTop: "16px" }}
            label="Email Address"
            name="email"
          >
            <Input
              style={{
                border: "1px solid #A6ABAC ",
                outline: "none",
                padding: "10px 14px",
                lineHeight: "24px",
                fontSize: "16px",
              }}
              placeholder="Enter your email"
            />
          </Form.Item>

          {/* Date */}
          <Form.Item>
            <h2 className="text-lg font-semibold leading-7 text-[#263234] lg:mt-6 mt-3 mb-2 lg:mb-4">
              Available slot
            </h2>
            <ul className="flex flex-col lg:flex-row lg:items-center gap-3 justify-between ">
              {daysOfWeek.map((day) => (
                <li
                  onClick={handleClick}
                  key={day.id}
                  className="text-lg text-[#403730] font-semibold cursor-pointer leading-6 text-[16px] border border-[#A6ABAC] py-2 px-4 rounded-4xl "
                >
                  {day.name}
                </li>
              ))}
            </ul>
          </Form.Item>

          {/* Choose a time */}

          <Form.Item>
            <h2 className="text-lg font-semibold leading-7 text-[#263234] mb-4 ">
              Choose a time
            </h2>
            <ul className="flex flex-col lg:flex-row  lg:items-center  gap-2  ">
              {timeSlots.map((time) => (
                <li
                  key={time.id}
                  className="text-lg text-[#403730]  font-semibold cursor-pointer leading-6 text-[16px] border border-[#A6ABAC] py-2 px-4 rounded-4xl "
                >
                  {time.slot}
                </li>
              ))}
            </ul>
          </Form.Item>

          <Form.Item>
            <Checkbox>
              <span className=" text-[#263234] text-[14px] leading-5 ">
                I agree with Virtue Hope’s{" "}
                <Link className=" underline decoration-solid " to={""}>
                  {" "}
                  terms & conditions.
                </Link>{" "}
              </span>
            </Checkbox>
          </Form.Item>

          {/* Submit Button */}
          <div className="flex justify-end gap-3">
            <div>
              <Button className=" serviceBtn2 " onClick={showPaymentModal}>
                Cancel
              </Button>
            </div>
            <div>
              <Button onClick={submitBookingFrom} className={"serviceBtn3"} htmlType="submit">
                Proceed next step
              </Button>
            </div>
          </div>
        </Form>
      </Modal>

      {/* payment method modal  */}

      <Modal
        title=""
        visible={isPaymentModalOpen}
        onCancel={handlePaymentCancel}
        footer={null}
        width={400}
        closable={false}
      >
        <h1 className="mb-6 text-[#263234] text-2xl leading-9 font-semibold px-1.5 ">
          Please choose the way you want to Donate
        </h1>
        {/* Form Start */}
        <Form layout="vertical">
          <Form.Item name="donation">
            <Radio.Group className="w-full">
              <div className="flex flex-col gap-4">
                {/* Apple Pay */}
                <Radio
                  value="apple_pay"
                  className="w-full px-2! h-[56px]  border border-[#A6ABAC] rounded-lg cursor-pointer "
                >
                  <h1 className="block mt-3.5 text-[16px]  text-[#263234] leading-6 font-medium">
                    With Apple Pay
                  </h1>
                  <span className="block ml-[260px] -mt-6 ">
                    {/* Apple Pay Icon */}
                    <svg
                      width="20"
                      height="24"
                      viewBox="0 0 20 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.3735 8.18824C17.7349 9.17647 16.7229 10.8706 16.7229 12.7529C16.7229 14.8706 18.0241 16.8 20 17.6C19.6145 18.8235 19.0361 19.9529 18.3133 20.9882C17.253 22.4471 16.1446 23.9529 14.506 23.9529C12.8675 23.9529 12.3855 23.0118 10.4578 23.0118C8.57831 23.0118 7.90361 24 6.36145 24C4.81928 24 3.75904 22.6353 2.55422 20.9412C0.963856 18.5882 0.0481928 15.8588 0 12.9882C0 8.32941 3.08434 5.83529 6.16867 5.83529C7.80723 5.83529 9.15663 6.87059 10.1687 6.87059C11.1325 6.87059 12.6747 5.78824 14.506 5.78824C16.4337 5.74118 18.2651 6.63529 19.3735 8.18824Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </Radio>

                {/* Google Pay */}
                <Radio
                  value="google_pay"
                  className="w-full px-2! h-[56px]  border border-[#A6ABAC] rounded-lg cursor-pointer "
                >
                  <h1 className="block mt-3.5 text-[16px] text-[#263234] leading-6 font-medium">
                    With Google Pay
                  </h1>
                  <span className="block  ml-[260px] -mt-6 ">
                    {/* Google Pay Icon */}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.255H17.92C17.665 15.63 16.89 16.795 15.725 17.575V20.335H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M11.9999 23C14.9699 23 17.4599 22.015 19.2799 20.335L15.7249 17.575C14.7399 18.235 13.4799 18.625 11.9999 18.625C9.13492 18.625 6.70992 16.69 5.84492 14.09H2.16992V16.94C3.97992 20.535 7.69992 23 11.9999 23Z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.845 14.09C5.625 13.43 5.5 12.725 5.5 12C5.5 11.275 5.625 10.57 5.845 9.91V7.06H2.17C1.4 8.59286 0.999321 10.2846 1 12C1 13.775 1.425 15.455 2.17 16.94L5.845 14.09Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M11.9999 5.375C13.6149 5.375 15.0649 5.93 16.2049 7.02L19.3599 3.865C17.4549 2.09 14.9649 1 11.9999 1C7.69992 1 3.97992 3.465 2.16992 7.06L5.84492 9.91C6.70992 7.31 9.13492 5.375 11.9999 5.375Z"
                        fill="#EA4335"
                      />
                    </svg>
                  </span>
                </Radio>
              </div>
            </Radio.Group>
          </Form.Item>

          {/* Modal Buttons */}
          <div className=" flex items-center gap-5 justify-end mt-5 mb-2">
            <Button
              onClick={handlePaymentCancel}
              className=" missionModalBtn1 "
            >
              Back
            </Button>
            <Button
              onClick={submitDonateModal}
              className="missionModalBtn2"
            >
              Continue
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default ServiceBanner;
