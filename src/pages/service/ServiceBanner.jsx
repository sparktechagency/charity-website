import { Button, Modal, Form, Input,Checkbox } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServiceBanner = () => {
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

  // 1st modal start

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

  // 1st modal end

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  return (
    <div>
      <p className="lg:pt-20 pt-24 text-[#403730] font-semibold text-center">
        Our services
      </p>
      <h1 className="lg:text-5xl text-2xl p-2 lg:leading-16 text-center lg:mt-3 text-[#263234] font-semibold">
        Our Services
      </h1>
      <div className="lg:mt-6 max-w-[800px] mx-auto text-center">
        <p className="text-[#263234] text-justify p-2 lg:text-xl lg:leading-[30px]">
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

      {/* Modal */}
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
            <h2 className="text-lg font-semibold leading-7 text-[#263234] mt-6  mb-4">
              Available slot
            </h2>
            <ul className="flex justify-between ">
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
            <ul className="flex  items-center gap-2  ">
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
            <Checkbox >
              <span className=" text-[#263234] text-[14px] leading-5 " >I agree with Virtue Hope’s <Link className=" underline decoration-solid " to={""}  > terms & conditions.</Link> </span>
            </Checkbox>
          </Form.Item>

          {/* Submit Button */}
          <div className="flex justify-end gap-3">
            <Button className=" serviceBtn2 " onClick={handleCancel}>Cancel</Button>
            <Button className={"serviceBtn3"} htmlType="submit" >
              Confirm Booking
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default ServiceBanner;
