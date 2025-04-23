import { Button, Modal, Form, Input, Checkbox, Radio } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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


  // Modal Open Function

  const showPaymentModal = () => {
    setIsModalOpen(false);
    form.resetFields();
    document.body.style.overflow = "hidden";
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
      isModalOpen  ? "hidden" : "auto";
  }, [isModalOpen, ]);






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
