import React, { useState, useEffect } from "react";
import { Modal, Input, Button, Checkbox, Upload, Radio, Form } from "antd";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import {
  PayCircleOutlined,
  CreditCardOutlined,
  BankOutlined,
} from "@ant-design/icons";

const { Dragger } = Upload;

import { showSuccessAlert } from "../../helper/showSuccessAlert";

export const MissionVission = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [donateModal, setDonateModal] = useState(false);

  // 1st modal start
  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const handlieClickNextStep = () => {
    setIsModalOpen(false);
    setLuxuryModal(true);
  };

  // 1st modal end

  //  Volunter Modal start

  const [isVolunterModal, setIsVolunterModal] = useState(false);

  const openVolunteerModal = () => {
    setIsVolunterModal(true);
    setIsModalOpen(false);
  };

  const closeVolunteerModal = () => {
    setIsVolunterModal(false);
  };

  const handleVolunterSubmit = (e) => {
    e.preventDefault();
    console.log("Volunteer Form Submitted");
    setIsVolunterModal(false);
    setDonateModal(false);
    setIsModalOpen(false);
    showSuccessAlert();
  };

  // Volunter Modal end

  // Luxury  start

  const [luxuryModal, setLuxuryModal] = useState(false);

  const openLuxuryModal = () => {
    setLuxuryModal(true);
    setIsModalOpen(false);
  };

  const closeLuxuryModal = () => {
    setLuxuryModal(false);
    setIsModalOpen(true);
  };

  const submitLuxriousModal = () => {
    console.log("Luxury Form Submitted");
    setLuxuryModal(false);
    setIsModalOpen(false);
    showSuccessAlert();
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // Ensure scroll is enabled when component unmounts
    };
  }, [isModalOpen, donateModal]);

  useEffect(() => {
    if (donateModal) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // Ensure scroll is enabled when component unmounts
    };
  }, [donateModal]);

  useEffect(() => {
    if (isVolunterModal) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // Ensure scroll is enabled when component unmounts
    };
  }, [isVolunterModal]);

  useEffect(() => {
    if (isVolunterModal) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "0px"; // Adjust based on scrollbar width
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [isVolunterModal]);

  useEffect(() => {
    if (luxuryModal) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "0px"; // Adjust based on scrollbar width
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [luxuryModal]);

  return (
    <div className="py-5 px-4 max-w-[1512px] mx-auto bg-[#ecebea]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Side - Image */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <img
            src="/img-2.png"
            alt="Supportive Women"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right Side - Text */}
        <div className="bg-white shadow lg:pt-[127px] lg:px-[64px] p-4 rounded-2xl">
          <h3 className="lg:text-3xl text-xl font-thin text-[#403730]">
            Our mission & vision
          </h3>
          <h1 className="font-bold text-[#403730] text-3xl lg:text-[60px] lg:mt-2">
            Healing Support for Women Survivors of Abuse and Trauma
          </h1>
          <p className="text-[#263234] pt-2 lg:pt-6 lg:pb-12 pb-0 leading-6">
            Hope is our purpose. Every action we take at Virtue Hope is driven
            by belief that healing begins with hope.
          </p>

          {/* Buttons */}
          <div className="lg:mt-6 mt-3 flex flex-col lg:flex-row  md:flex-row   lg:gap-4">
            <Button onClick={showModal} className=" homeBtn supportBtn ">
              Support survivors
            </Button>

            <Button onClick={openVolunteerModal} className="   volunteerBtn ">
              Join our enthusiastic team{" "}
            </Button>
          </div>
        </div>
      </div>

      {/* 1 st modal */}

      <Modal
        title=""
        visible={isModalOpen}
        onCancel={handleCancel}
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
                  <span className="block lg:ml-[260px]! md:ml-[240%] ml-[170%] -mt-6 ">
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
                  <span className="lg:ml-[260px]! md:ml-[220%] ml-[155%] block -mt-6 ">
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

                {/* Divider */}
                <Divider style={{ borderColor: "#A6ABAC", margin: "20px 0" }}>
                  Or
                </Divider>

                {/* Luxurious Retreat Option */}
                <Radio
                  onClick={openLuxuryModal}
                  value="luxurious"
                  className="flex items-center py-3.5! px-2! justify-between w-full  border border-[#A6ABAC] rounded-lg cursor-pointer"
                >
                  <span className="text-[#263234] font-medium">
                  Donate 
                  Art, Antique or Collectables
                  </span>
                </Radio>
              </div>
            </Radio.Group>
          </Form.Item>

          {/* Modal Buttons */}
          <div className=" flex flex-col md:flex-row md:justify-end  lg:flex-row justify-center lg:justify-end mt-5 mb-2">
            <Button
              onClick={handleCancel}
              type="text"
              className=" missionModalBtn1 "
            >
              Cancel
            </Button>
            <Button onClick={handlieClickNextStep} className="missionModalBtn2">
              Proceed next step
            </Button>
          </div>
        </Form>
      </Modal>

      {/* luxurious modal  */}

      <div className=" w-[600px]  z-50 ">
        <Modal
          visible={luxuryModal}
          onCancel={closeLuxuryModal}
          footer={null}
          width={500}
          height={800}
          // bodyStyle={{ padding: "20px" }}
          destroyOnClose
          closable={false}
        >
          <h1 className=" text-[#263234] font-semibold leading-8 text-3xl mb-6  ">
            Donate with Luxury retreats
          </h1>

          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#263234] leading-5 mb-1.5 ">
              Name
            </label>
            <Input
              style={{
                border: "1px solid #A6ABAC  ",
                padding: "10px 14px ",
                lineHeight: "24px",
                fontSize: "16px",
                marginTop: "6px",
              }}
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#263234] leading-5 mb-1.5 ">
              Email
            </label>
            <Input
              style={{
                border: "1px solid #A6ABAC  ",
                padding: "10px 14px ",
                marginTop: "6px",
              }}
              type="email"
              placeholder="Enter your email address"
            />
          </div>

          {/* Item field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#263234] leading-5 mb-1.5 ">
              Item
            </label>
            <Input
              style={{
                border: "1px solid #A6ABAC  ",
                padding: "10px 14px ",
                lineHeight: "24px",
                fontSize: "16px",
                marginTop: "6px",
              }}
              placeholder="Enter item name"
            />
          </div>

          {/* Why do you want to be a Volunteer Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#263234] leading-5 mb-1.5 ">
              Item description
            </label>
            <Input.TextArea
              style={{
                border: "1px solid #A6ABAC  ",
                padding: "10px 14px ",
                lineHeight: "24px",
                fontSize: "16px",
                marginTop: "6px",
              }}
              placeholder="Enter a description..."
              rows={4}
            />
          </div>

          {/* File Upload Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#263234] leading-5 mb-1.5 ">
              Upload your photo
            </label>
            <Dragger
              style={{ marginTop: "6px", border: "2px dotted #E9EBEB " }}
            >
              <div className=" text-start  ">
                <p className="ant-upload-drag-icon">
                  <span>
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
                        d="M3 14C3.55228 14 4 14.4477 4 15V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H19C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V15C20 14.4477 20.4477 14 21 14C21.5523 14 22 14.4477 22 15V19C22 19.7957 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7957 22 19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V15C2 14.4477 2.44772 14 3 14Z"
                        fill="#4B5557"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L17.7071 7.29289C18.0976 7.68342 18.0976 8.31658 17.7071 8.70711C17.3166 9.09763 16.6834 9.09763 16.2929 8.70711L12 4.41421L7.70711 8.70711C7.31658 9.09763 6.68342 9.09763 6.29289 8.70711C5.90237 8.31658 5.90237 7.68342 6.29289 7.29289L11.2929 2.29289Z"
                        fill="#4B5557"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 2C12.5523 2 13 2.44772 13 3V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V3C11 2.44772 11.4477 2 12 2Z"
                        fill="#4B5557"
                      />
                    </svg>
                  </span>
                </p>
                <p className="ant-upload-text text-[#263234] font-semibold text-[16px] mb-1 ">
                  Click or drag file to this area to upload
                </p>
                <p className="text-sm text-[#4B5557] leading-5 mt-2 mb-6 ">
                  Supported format: JPG, JPEG, PNG, PDF
                </p>
              </div>
            </Dragger>
          </div>

          {/* Terms & Conditions Checkbox */}
          <div className="mb-4">
            <Checkbox style={{ color: "" }}>
              I agree with Virtue Hope's{" "}
              <a href="#" className="underline">
                terms & conditions.
              </a>
            </Checkbox>
          </div>

          {/* Modal Buttons */}
          <div className="   flex justify-end gap-7 mr-2 ">
            <div>
              <button
                onClick={closeLuxuryModal}
                className=" px-6 py-2 text-[#403730] cursor-pointer font-bold text-sm "
                type="text"
              >
                Back
              </button>
            </div>
            <div>
              <button
                className=" px-6 py-2  bg-[#403730] text-white rounded shadow cursor-pointer font-bold text-sm "
                onClick={submitLuxriousModal}
              >
                Apply now
              </button>
            </div>
          </div>
        </Modal>
      </div>

      {/*  Volunter Modal*/}

      <div className=" w-[600px]  z-50 ">
        <Modal
          visible={isVolunterModal}
          footer={null}
          width={500}
          height={800}
          // bodyStyle={{ padding: "20px" }}
          destroyOnClose
          closable={false}
        >
          <h1 className=" text-[#263234] font-semibold leading-8 text-3xl mb-6  ">
            Get Involved as a Volunteer
          </h1>

          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#263234] leading-5 mb-1.5 ">
              Name
            </label>
            <Input
              style={{
                border: "1px solid #A6ABAC  ",
                padding: "10px 14px ",
                lineHeight: "24px",
                fontSize: "16px",
                marginTop: "6px",
              }}
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#263234] leading-5 mb-1.5 ">
              Email
            </label>
            <Input
              style={{
                border: "1px solid #A6ABAC  ",
                padding: "10px 14px ",
                marginTop: "6px",
              }}
              type="email"
              placeholder="Enter your email address"
            />
          </div>

          {/* Contact Number Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#263234] leading-5 mb-1.5 ">
              Contact number
            </label>
            <Input
              style={{
                border: "1px solid #A6ABAC  ",
                padding: "10px 14px ",
                lineHeight: "24px",
                fontSize: "16px",
                marginTop: "6px",
              }}
              placeholder="Enter your contact number"
            />
          </div>

          {/* Location Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#263234] leading-5 mb-1.5 ">
              Location
            </label>
            <Input
              style={{
                border: "1px solid #A6ABAC  ",
                padding: "10px 14px ",
                lineHeight: "24px",
                fontSize: "16px",
                marginTop: "6px",
              }}
              placeholder="Street, City name & State name"
            />
          </div>

          {/* Why do you want to be a Volunteer Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#263234] leading-5 mb-1.5 ">
              Why do you want to be a Volunteer
            </label>
            <Input.TextArea
              style={{
                border: "1px solid #A6ABAC  ",
                padding: "10px 14px ",
                lineHeight: "24px",
                fontSize: "16px",
                marginTop: "6px",
              }}
              placeholder="Enter a description..."
              rows={4}
            />
          </div>

          {/* File Upload Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#263234] leading-5 mb-1.5 ">
              Upload your photo
            </label>
            <Dragger
              style={{ marginTop: "6px", border: "2px dotted #E9EBEB " }}
            >
              <div className=" text-start  ">
                <p className="ant-upload-drag-icon">
                  <span>
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
                        d="M3 14C3.55228 14 4 14.4477 4 15V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H19C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V15C20 14.4477 20.4477 14 21 14C21.5523 14 22 14.4477 22 15V19C22 19.7957 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7957 22 19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V15C2 14.4477 2.44772 14 3 14Z"
                        fill="#4B5557"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L17.7071 7.29289C18.0976 7.68342 18.0976 8.31658 17.7071 8.70711C17.3166 9.09763 16.6834 9.09763 16.2929 8.70711L12 4.41421L7.70711 8.70711C7.31658 9.09763 6.68342 9.09763 6.29289 8.70711C5.90237 8.31658 5.90237 7.68342 6.29289 7.29289L11.2929 2.29289Z"
                        fill="#4B5557"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 2C12.5523 2 13 2.44772 13 3V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V3C11 2.44772 11.4477 2 12 2Z"
                        fill="#4B5557"
                      />
                    </svg>
                  </span>
                </p>
                <p className="ant-upload-text text-[#263234] font-semibold text-[16px] mb-1 ">
                  Click or drag file to this area to upload
                </p>
                <p className="text-sm text-[#4B5557] leading-5 mt-2 mb-6 ">
                  Supported format: JPG, JPEG, PNG, PDF
                </p>
              </div>
            </Dragger>
          </div>

          {/* Terms & Conditions Checkbox */}
          <div className="mb-4">
            <Checkbox style={{ color: "" }}>
              I agree with Virtue Hope's{" "}
              <a href="#" className="underline">
                terms & conditions.
              </a>
            </Checkbox>
          </div>

          {/* Modal Buttons */}
          <div className="   flex justify-end gap-7 mr-2 ">
            <div>
              <button
                onClick={closeVolunteerModal}
                className=" px-6 py-2 text-[#403730] cursor-pointer font-bold text-sm "
                type="text"
              >
                Cancel
              </button>
            </div>
            <div>
              <button
                className=" px-6 py-2  bg-[#403730] text-white rounded shadow cursor-pointer font-bold text-sm "
                onClick={handleVolunterSubmit}
              >
                Apply now
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};
