import { Button, Modal, Form, Input, Checkbox, Radio } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { bookingSuccessAlert } from "../../helper/bookingMsg";
import { ArrowRightOutlined } from "@ant-design/icons";
import { FaCcMastercard } from "react-icons/fa";
import AggrementPage from "../aggrement/AggrementPage";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";

const timeSlots = [
  { id: 1, slot: "10:00 AM" },
  { id: 2, slot: "11:00 AM" },
  { id: 3, slot: "12:00 PM" },
  { id: 4, slot: "2:00 PM" },
  { id: 5, slot: "4:00 PM" },
];

const bookedSlots = [
  { date: "2025-04-13", timeId: 1 },
  { date: "2025-04-14", timeId: 2 },
  { date: "2025-04-14", timeId: 3 },
  { date: "2025-04-14", timeId: 4 },
  { date: "2025-04-14", timeId: 5 },
  { date: "2025-04-14", timeId: 1 },
  { date: "2025-04-15", timeId: 3 },
  { date: "2025-04-16", timeId: 4 },
  { date: "2025-04-17", timeId: 5 },
  { date: "2025-04-18", timeId: 1 },
  { date: "2025-04-19", timeId: 2 },
  { date: "2025-04-20", timeId: 3 },
];

export const LuxerySection = ({ onDateChange }) => {
  const navigate = useNavigate();
  const daysOfWeek = [
    { id: 1, name: "Monday" },
    { id: 2, name: "Tuesday" },
    { id: 3, name: "Wednesday" },
    { id: 4, name: "Thursday" },
    { id: 5, name: "Friday" },
  ];

  // booking related function

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  const formattedDate = format(selectedDate, "yyyy-MM-dd");

  const isTimeBooked = (timeId) => {
    return bookedSlots.some(
      (slot) => slot.date === formattedDate && slot.timeId === timeId
    );
  };

  const handleTimeClick = (time) => {
    if (!isTimeBooked(time.id)) {
      setSelectedTime(time.id);
    }
  };

  const handleChange = (date) => {
    setSelectedDate(date);
    onDateChange(date); // Lift date up to parent if needed
  };

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

  const [form] = Form.useForm();

  // Form submit handler
  const handleBooking = (values) => {
    try {
      console.log("Form Values:", values);
      console.log("Name:", values.name);
      console.log("Phone:", values.number);
      console.log("Email:", values.email);
      console.log("Day:", values.day);
      console.log("Time:", values.time);
      bookingSuccessAlert();
      setIsModalOpen(false);
      form.resetFields();
    } catch (error) {
      console.error("Error booking:", error);
      setIsModalOpen(false);
      form.resetFields();
    }
  };

  // booking modal end

  // payment modal start

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  // Modal Open Function

  const showPaymentModal = () => {
    console.log(`payment modal open`);
    setIsPaymentModalOpen(true);
    setIsModalOpen(false);
    form.resetFields();
    document.body.style.overflow = "hidden";
  };

  // Modal Close Function
  const handlePaymentCancel = () => {
    setIsPaymentModalOpen(false);
    setIsModalOpen(true);
    navigate("/");
  };

  const submitDonateModal = () => {
    console.log(`Donate modal opened: `);
    setIsPaymentModalOpen(false);
    setIsModalOpen(true);
  };

  // payment modal end

  const [termsModal, setTermsModal] = useState(false);

  const termModalCanel = () => {
    setTermsModal(false);
  };

  const openTermModal = () => {
    setTermsModal(true);
  };

  useEffect(() => {
    document.body.style.overflow =
      isModalOpen || isPaymentModalOpen ? "hidden" : "auto";
  }, [isModalOpen, isPaymentModalOpen]);

  // payment method

  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    if (
      paymentMethod === "card" ||
      paymentMethod === "google_pay" ||
      paymentMethod === "apple_pay"
    ) {
      navigate("/payment-from");
    }
  }, [paymentMethod]);

  return (
    <div className="bg-[#ecebea] lg:mt-16 py-4 p-2 lg:p-0">
      <div className="max-w-[1480px] mx-auto">
        {/* First Row with Images and Text */}
        <div className="flex flex-col lg:flex-row py-4 items-center lg:justify-between gap-5">
          <div className="relative w-full lg:w-[629px] h-[300px] lg:h-[569px]">
            {/* Background Image */}
            <img
              src="./luxery-img2.jpg"
              className="w-full h-full object-cover rounded-2xl opacity-110"
              alt=""
            />
            {/* Left & Right Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 rounded-2xl"></div>
            {/* Bottom Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent rounded-2xl"></div>
            {/* Text Content */}
            <h1 className="absolute text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold bottom-11 left-5 lg:left-16 text-white">
              Luxury <br /> retreats
            </h1>
          </div>

          <div className="relative w-full lg:w-[831px] h-[300px] lg:h-[569px]">
            {/* Background Image */}
            <img
              src="./luxery-img1.jpg"
              className="w-full h-full object-cover rounded-2xl opacity-110"
              alt=""
            />
            {/* Bottom Gradient Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/100 to-transparent rounded-b-2xl"></div>
            {/* Text Content */}
            <h1 className="absolute text-3xl sm:text-4xl lg:text-5xl font-semibold lg:bottom-48 bottom-40 lg:left-16 left-5 text-white">
              Respite
            </h1>
            <p className="absolute font-semibold text-sm sm:text-lg lg:text-xl bottom-12 lg:left-16 left-5 text-white">
              Our respite care program offers a safe, supportive space for women
              to relax, recharge, and focus on well-being. With comfortable
              accommodations and compassionate staff, we provide a healing
              retreat that fosters hope and personal growth.
            </p>
          </div>
        </div>

        {/* Second Row with Image and Text */}
        <div className="flex flex-col lg:flex-row py-4   lg:justify-between gap-5">
          <div className="lg:max-w-[635px] w-full">
            <img
              src="./luxery-img-3.png"
              className="w-[100%] lg:max-w-[635px] h-[668px] rounded-2xl  object-cover "
              alt=""
            />
          </div>
          <div className="max-w-[825px] w-full rounded-2xl lg:h-[669px] lg:py-20 py-4 lg:pl-16 pl-4 lg:pr-[86px] pr-4 bg-white mx-auto">
            <h1 className="lg:text-[124px] text-4xl sm:text-5xl leading-none mt-3">
              Therapeutic <br />
            </h1>
            <span className="lg:text-7xl w-full text-3xl">wellbeing</span>
            <p className="text-justify lg:text-start lg:mt-6 mt-2 text-lg text-[#263234] leading-7">
              Our therapeutic wellbeing sessions offer a safe space for women to
              explore their feelings and experiences. With trained and
              empathetic counsellors, yoga teachers and other professionals you
              will navigate the complexities of trauma and begin to understand
              your emotions. Through personalised sessions, we aim to empower
              you, helping you find your voice and regain control of your life.
              You will learn coping strategies and gain insights that pave the
              way for healing by and personal growth. Take the courageous step
              towards recovery and discover the strength within you through our
              supportive wellness approach.
            </p>
            <div className="lg:mt-12 mt-5 ">
              <Button onClick={showModal} className=" luxeryBtn ">
                Start your Journey <ArrowRightOutlined />{" "}
              </Button>
            </div>
          </div>
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
        style={{ top: 0 }}
        closable={false}
        width={"30%"}
      >
        <p className=" text-[#263234] leading-8 font-semibold text-lg ">
          Basic information
        </p>

        <Form form={form} layout="vertical" onFinish={handleBooking}>
          {/* Name */}
          <Form.Item
            style={{ marginBottom: "0px", marginTop: "16px" }}
            label={
              <span className=" text-[#263234] font-semibold text-xs ">
                Name
              </span>
            }
            rules={[{ required: true, message: "Please enter a name" }]}
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
            rules={[
              { required: true, message: "Please enter your telephone number" },
            ]}
            label={
              <span className=" text-[#263234] font-semibold text-xs ">
                Telephone number
              </span>
            }
            name="number"
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
            rules={[
              { required: true, message: "Please enter your email address" },
            ]}
            name="email"
          >
            <Input
              type="email"
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

          <div>
            <h1 className=" font-semibold text-2xl mt-3 text-[#263234] " >Bookings can be made from Monday to Friday.</h1>
          </div>

          {/* calender  */}
          <Form.Item style={{marginBottom:"0px",marginTop:"20px"}} >
            <Calendar
              onChange={handleChange}
              value={selectedDate}
              minDate={new Date()} // disable past dates
              tileClassName={({ date }) => {
                if (
                  format(date, "yyyy-MM-dd") ===
                  format(selectedDate, "yyyy-MM-dd")
                ) {
                  return "bg-[#403730] text-white rounded-full space-x-4 ";
                }
                return "";
              }}
              className="w-full rounded-md"
            />
            <p className="mt-3 text-xl font-medium mb-1 text-[#263234] ">
              Selected Date:{" "}
              <span className="font-medium"> {format(selectedDate, "EEEE, PPP")}</span>
            </p>
          </Form.Item>

          <div className="">
            {timeSlots.every((time) => isTimeBooked(time.id)) ? (
              <p className="text-[#263234] text-lg font-medium ">
                No available slots for this date
              </p>
            ) : (
              <ul className="mt-2 flex flex-wrap gap-3">
                {timeSlots.map((time) => {
                  const booked = isTimeBooked(time.id);
                  const selected = selectedTime === time.id;

                  return (
                    <li
                      key={time.id}
                      onClick={() => handleTimeClick(time)}
                      className={`cursor-pointer px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                        booked
                          ? " text-gray-400 cursor-not-allowed"
                          : selected 
                          ? "bg-[#403730] cursor-not-allowed hover:bg-[#2D2722] text-white"
                          : "bg-white  hover:bg-[#f0f0f0] text-[#403730] border-[#A6ABAC]"
                      }`}
                    >
                      {time.slot}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* Choose a time */}

          {/* Terms */}
          <Form.Item
            name="terms"
            valuePropName="checked"
            rules={[
              {
                required: true,
                message: "Please agree with terms and conditions",
              },
            ]}
          >
            <Checkbox>
              <span className=" text-[#263234] text-[14px] leading-5 ">
                I agree with Virtue Hope’s{" "}
                <Link
                  onClick={openTermModal}
                  className=" underline decoration-solid "
                  to={""}
                >
                  terms & conditions.
                </Link>
              </span>
            </Checkbox>
          </Form.Item>

          {/* Submit Button */}
          <div className="flex justify-end gap-3">
            <Button className="serviceBtn2" onClick={showPaymentModal}>
              Cancel
            </Button>
            <Button className="serviceBtn3" htmlType="submit">
              Proceed next step
            </Button>
          </div>
        </Form>
      </Modal>

      {/* payment method modal start  */}
      <Modal
        title=""
        visible={isPaymentModalOpen}
        onCancel={handlePaymentCancel}
        footer={null}
        width={400}
        closable={false}
        style={{ top: 0 }}
      >
        <h1 className="mb-6 text-[#263234] text-2xl leading-9 font-semibold px-1.5 ">
          Please choose the way you want to Donate
        </h1>
        {/* Form Start */}

        <Form layout="vertical">
          <Form.Item name="donation">
            <div className="flex flex-col gap-4">
              <Form.Item name="donation">
                <Radio.Group
                  onChange={(e) => {
                    setPaymentMethod(e.target.value);
                  }}
                  className="w-full"
                >
                  <div className="flex flex-col gap-4">
                    {/* card */}
                    <Radio
                      value="card"
                      className="w-full px-2! pl-2 h-[56px]  border border-[#A6ABAC] rounded-lg cursor-pointer "
                    >
                      <h1 className="block mt-3.5 text-[16px]  text-[#263234] leading-6 font-medium">
                        Card
                      </h1>
                      <span className="block lg:ml-[240px]! md:ml-[245px] ml-[158px] -mt-6 ">
                        {/* Apple Pay Icon */}
                        <FaCcMastercard className=" text-2xl " />
                      </span>
                    </Radio>
                    {/* Apple Pay */}
                    <Radio
                      value="apple_pay"
                      className="w-full pl-2  h-[56px]  border border-[#A6ABAC]  rounded-lg cursor-pointer "
                    >
                      <h1 className="block mt-3.5 text-[16px]  text-[#263234] leading-6 font-medium">
                        With Apple Pay
                      </h1>
                      <span className="block lg:ml-[240px]! md:ml-[220%] ml-[145%] -mt-6 ">
                        {/* Apple Pay Icon */}
                        <svg
                          width="20"
                          height="24"
                          viewBox="0 0 20 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_180689_8357)">
                            <path
                              d="M19.3735 8.18824C17.7349 9.17647 16.7229 10.8706 16.7229 12.7529C16.7229 14.8706 18.0241 16.8 20 17.6C19.6145 18.8235 19.0361 19.9529 18.3133 20.9882C17.253 22.4471 16.1446 23.9529 14.506 23.9529C12.8675 23.9529 12.3855 23.0118 10.4578 23.0118C8.57831 23.0118 7.90361 24 6.36145 24C4.81928 24 3.75904 22.6353 2.55422 20.9412C0.963856 18.5882 0.0481928 15.8588 0 12.9882C0 8.32941 3.08434 5.83529 6.16867 5.83529C7.80723 5.83529 9.15663 6.87059 10.1687 6.87059C11.1325 6.87059 12.6747 5.78824 14.506 5.78824C16.4337 5.74118 18.2651 6.63529 19.3735 8.18824ZM13.6386 3.81176C14.4578 2.87059 14.8916 1.69412 14.9398 0.470588C14.9398 0.329412 14.9398 0.141176 14.8916 0C13.494 0.141176 12.1928 0.8 11.2771 1.83529C10.4578 2.72941 9.9759 3.85882 9.92771 5.08235C9.92771 5.22353 9.92771 5.36471 9.9759 5.50588C10.0723 5.50588 10.2169 5.55294 10.3133 5.55294C11.6145 5.45882 12.8193 4.8 13.6386 3.81176Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_180689_8357">
                              <rect width="20" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </Radio>

                    {/* Google Pay */}
                    <Radio
                      value="google_pay"
                      className="w-full pl-2 px-2! h-[56px]  border border-[#A6ABAC] rounded-lg cursor-pointer "
                    >
                      <h1 className="block mt-3.5 text-[16px] text-[#263234] leading-6 font-medium">
                        With Google Pay
                      </h1>
                      <span className="lg:ml-[240px]! md:ml-[200%] ml-[132%] block -mt-6 ">
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

                    {/* paypal Pay */}
                    <Radio
                      value="paypal_pay"
                      className="w-full pl-2 px-2! h-[56px]  border border-[#A6ABAC] rounded-lg cursor-pointer "
                    >
                      <h1 className="block mt-3.5 text-[16px] text-[#263234] leading-6 font-medium">
                        PayPal Pay
                      </h1>
                      <span className="block  lg:ml-[245px] md:ml-[209%] ml-[140%] -mt-6 ">
                        {/* paypal Pay Icon */}
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
                      </span>
                    </Radio>
                  </div>
                </Radio.Group>
              </Form.Item>
            </div>
          </Form.Item>

          {/* Modal Buttons */}
          <div className=" flex items-center gap-5 justify-end mt-5 mb-2">
            <Button
              onClick={handlePaymentCancel}
              className=" missionModalBtn1 "
            >
              Back
            </Button>
            <Button onClick={submitDonateModal} className="missionModalBtn2">
              Continue
            </Button>
          </div>
        </Form>
      </Modal>

      {/* payment method modal end  */}

      {/* term condiction modal */}

      <div className=" ">
        <Modal
          width={"70%"}
          open={termsModal}
          // onOk={handleOk}
          style={{ top: 0 }}
          onCancel={termModalCanel}
          zIndex={1100}
          footer={null} // remove if you want buttons
        >
          <AggrementPage></AggrementPage>
        </Modal>
      </div>
    </div>
  );
};
