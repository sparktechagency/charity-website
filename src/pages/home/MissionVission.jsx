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
import { FaCcMastercard } from "react-icons/fa";
import { Link } from "react-router-dom";
import AggrementPage from "../aggrement/AggrementPage";
import PaymentModal from "../../components/client/payment/PaymentModal";
import DonateModal from "../../components/client/donate/DonateModal";

export const MissionVission = () => {
  // donate modal  terms & conditions. start

  const [termsModal, setTermsModal] = useState(false);

  const showTermModal = () => {
    // e.preventDefault(); // prevent link navigation
    setTermsModal(true);
  };

  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };

  const termModalCanel = () => {
    setTermsModal(false);
  };

  // donate modal  terms & conditions. end

  // Donate Art, Antique or Collectables modal  terms & conditions. start

  const [donateTerm, setDonateTerm] = useState(false);

  const showDonateTermModal = () => {
    // e.preventDefault(); // prevent link navigation
    setDonateTerm(true);
  };

  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };

  const donateModalCanel = () => {
    setDonateTerm(false);
  };

  // Donate Art, Antique or Collectables modal  terms & conditions. end

  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // retreatModal
  const [retreatModal, setRetreatModal] = useState(false);

  // 1st modal start
  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const handlieClickNextStep = () => {
    setIsModalOpen(false);
    setRetreatModal(true);
    console.log("ishan");
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

  const handleVolunterSubmit = (values) => {
    console.log("Form Submitted: ", values);
    form.resetFields();
    // You can handle form submission logic here
    setIsVolunterModal(false);
    showSuccessAlert();
    setIsModalOpen(false);
  };

  const uploadProps = {
    beforeUpload: (file) => {
      form.setFieldsValue({ cv: file });
      return false; // Prevent auto upload
    },
    maxCount: 1,
  };

  // Volunter Modal end

  // Luxury modal   start

  const [luxuryModal, setLuxuryModal] = useState(false);

  const openLuxuryModal = () => {
    setLuxuryModal(true);
    setIsModalOpen(false);
  };

  const closeLuxuryModal = () => {
    setLuxuryModal(false);
    setIsModalOpen(true);
  };

  const submitLuxriousModal = (values) => {
    console.log("Form Submitted:", values);

    // Access specific fields like this:

    console.log("Name:", values.name);
    console.log("Email:", values.email);
    console.log("Item:", values.item);
    console.log("Description:", values.description);
    console.log("Image File:", values.image);
    console.log("Agreed to Terms:", values.terms);
    form.resetFields();

    setLuxuryModal(false);
    showSuccessAlert();
  };
  // loxury modal end

  // retret modal start

  const closeRetretModal = () => {
    setRetreatModal(false);
    setIsModalOpen(true);
  };

  const backRetretModal = () => {
    setRetreatModal(false);
    setIsModalOpen(true);
  };

  const handleRetreatSubmit = (values) => {
    console.log("Form Submitted: ", values);
    form.resetFields();
    // You can handle form submission logic here
    setRetreatModal(false);
    showSuccessAlert();
    setIsModalOpen(false);
  };

  // retret modal end

  useEffect(() => {
    document.body.style.overflow =
      isModalOpen || luxuryModal || isVolunterModal || retreatModal
        ? "hidden"
        : "auto";
  }, [isModalOpen, luxuryModal, isVolunterModal, retreatModal]);

  return (
    <div>
      <div className="py-5 px-4 max-w-[1512px] mx-auto ">
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
            <h1 className="font-bold text-[#403730] lg:leading-[65px] text-3xl lg:text-[60px] lg:mt-2">
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

        {/* 1 st modal payment modal  */}

        <Modal
          title=""
          visible={isModalOpen}
          onCancel={handleCancel}
          footer={null}
          width={400}
          closable={false}
        >
          <PaymentModal
            openLuxuryModal={openLuxuryModal}
            handleCancel={handleCancel}
            handlieClickNextStep={handlieClickNextStep}
          ></PaymentModal>
        </Modal>

        {/* end 1st modal payment modal  */}

        {/* luxurious modal Donate Art, Antique or Collectables start */}

        <div className=" w-[600px]  z-50 ">
          <Modal
            visible={luxuryModal}
            onCancel={closeLuxuryModal}
            footer={null}
            width={600}
            height={800}
            // bodyStyle={{ padding: "20px" }}
            destroyOnClose
            closable={false}
          >
            <h1 className=" text-[#263234] font-semibold leading-8 text-3xl mb-6  ">
              Donate Art, Antique or Collectables
            </h1>

            <Form form={form} onFinish={submitLuxriousModal} layout="vertical">
              {/* Name */}
              <Form.Item
                name="name"
                label="Name"
                style={{ marginBottom: "0px" }}
                rules={[
                  { required: true, message: "Please input your name!" },
                  { min: 6, message: "Name must be at least 6 characters!" },
                ]}
              >
                <Input
                  style={{
                    padding: "12px",
                    border: "1px solid #A6ABAC",
                    outline: "none",
                  }}
                  placeholder="Enter your name"
                />
              </Form.Item>

              {/* Email */}
              <Form.Item
                style={{ marginBottom: "0px", marginTop: "8px" }}
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Enter a valid email!" },
                ]}
              >
                <Input
                  style={{
                    padding: "12px",
                    border: "1px solid #A6ABAC",
                    outline: "none",
                  }}
                  type="email"
                  placeholder="Enter your email address"
                />
              </Form.Item>

              {/* Item */}
              <Form.Item
                style={{ marginBottom: "0px", marginTop: "8px" }}
                name="item"
                label="Item"
                rules={[
                  { required: true, message: "Please input the item name!" },
                  {
                    min: 6,
                    message: "Item name must be at least 6 characters!",
                  },
                ]}
              >
                <Input
                  style={{
                    padding: "12px",
                    border: "1px solid #A6ABAC",
                    outline: "none",
                  }}
                  placeholder="Enter item name"
                />
              </Form.Item>

              {/* Description */}
              <Form.Item
                style={{ marginBottom: "0px", marginTop: "8px" }}
                name="description"
                label="Item Description"
                rules={[
                  {
                    required: true,
                    message: "Please input the item description!",
                  },
                  {
                    min: 6,
                    message: "Description must be at least 6 characters!",
                  },
                ]}
              >
                <Input.TextArea
                  style={{
                    padding: "12px",
                    border: "1px solid #A6ABAC",
                    outline: "none",
                  }}
                  placeholder="Enter a description..."
                  rows={4}
                />
              </Form.Item>

              {/* Image Upload */}
              <Form.Item
                style={{ marginBottom: "0px", marginTop: "8px" }}
                name="image"
                label="Upload a photo"
                rules={[
                  {
                    required: true,
                    message: "Please Upload a photo!",
                  },
                ]}
              >
                <Dragger {...uploadProps}>
                  <div>
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
                    <p className="text-start">
                      Click or drag file to this area to upload
                    </p>
                    <p className=" text-sm text-start text-[#4B5557]">
                      Supported format: JPG, JPEG, PNG, PDF
                    </p>
                  </div>
                </Dragger>
              </Form.Item>

              {/* Checkbox */}
              <Form.Item
                name="terms"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject("Please agree with the terms!"),
                  },
                ]}
              >
                <Checkbox>
                  I agree with Virtue Hope's{" "}
                  <Link
                    onClick={showDonateTermModal}
                    to={""}
                    className="underline"
                  >
                    terms & conditions
                  </Link>
                  .
                </Checkbox>
              </Form.Item>

              {/* Modal Buttons */}

              <div className=" flex flex-col md:flex-row md:justify-end justify-start  lg:flex-row  lg:justify-end mt-5 mb-2">
                <Button onClick={closeLuxuryModal} className="  navBtn1  ">
                  Back
                </Button>
                <Button htmlType="submit" className="navBtn2">
                  Apply now
                </Button>
              </div>
            </Form>
          </Modal>
        </div>

        {/*   luxurious modal {/* luxurious modal Donate Art, Antique or Collectables start end  */}

        {/* Donate modal start */}

        <div className=" w-[600px]  z-50 ">
          <Modal
            visible={retreatModal}
            onCancel={closeRetretModal}
            footer={null}
            width={600}
            height={800}
            // bodyStyle={{ padding: "20px" }}
            closable={false}
          >
            <DonateModal
              form={form}
              handleRetreatSubmit={handleRetreatSubmit}
              uploadProps={uploadProps}
              showTermModal={showTermModal}
              backRetretModal={backRetretModal}
            />
          </Modal>
        </div>

        {/* Donate retret modal end  */}

        {/* start  Volunter Modal */}

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

            <Form form={form} onFinish={handleVolunterSubmit} layout="vertical">
              {/* Name Field */}
              <Form.Item
                style={{ marginBottom: "0px" }}
                name="name"
                label={
                  <span className="block! text-sm! font-medium! text-[#263234]! leading-5! ">
                    {" "}
                    Name{" "}
                  </span>
                }
                rules={[
                  { required: true, message: "Please input your name!" },
                  { min: 6, message: "Name must be at least 6 characters!" },
                ]}
              >
                <div className="mb-2">
                  <Input
                    style={{
                      border: "1px solid #A6ABAC  ",
                      padding: "10px 14px ",
                      lineHeight: "24px",
                      fontSize: "16px",
                    }}
                    placeholder="Enter your name"
                  />
                </div>
              </Form.Item>

              {/* Email Field */}

              <Form.Item
                style={{ marginBottom: "0px" }}
                label={
                  <span className="block! text-sm! font-medium! text-[#263234]! leading-5! ">
                    Email
                  </span>
                }
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Enter a valid email!" },
                ]}
              >
                <div className="mb-2">
                  <Input
                    style={{
                      border: "1px solid #A6ABAC  ",
                      padding: "10px 14px ",
                    }}
                    type="email"
                    placeholder="Enter your email address"
                  />
                </div>
              </Form.Item>

              {/* Contact Number Field */}

              <Form.Item
                style={{ marginBottom: "0px" }}
                label={
                  <span className="block! text-sm! font-medium! text-[#263234]! leading-5! ">
                    Contact number
                  </span>
                }
                name="contactNumber"
                rules={[
                  {
                    required: true,
                    message: "Please input your contact number!",
                  },
                ]}
              >
                <div className="mb-2">
                  <Input
                    style={{
                      border: "1px solid #A6ABAC  ",
                      padding: "10px 14px ",
                      lineHeight: "24px",
                      fontSize: "16px",
                    }}
                    placeholder="Enter your contact number"
                  />
                </div>
              </Form.Item>

              {/* Location Field */}

              <Form.Item
                style={{ marginBottom: "0px" }}
                label={
                  <span className="block! text-sm! font-medium! text-[#263234]! leading-5! ">
                    Location
                  </span>
                }
                name="location"
                rules={[
                  { required: true, message: "Please input your location!" },
                ]}
              >
                <div className="mb-2">
                  <Input
                    style={{
                      border: "1px solid #A6ABAC  ",
                      padding: "10px 14px ",
                      lineHeight: "24px",
                      fontSize: "16px",
                    }}
                    placeholder="Street, City name & State name"
                  />
                </div>
              </Form.Item>

              {/* Why do you want to be a Volunteer Field */}
              <Form.Item
                style={{ marginBottom: "0px" }}
                label={
                  <span className="block! text-sm! font-medium! text-[#263234]! leading-5! ">
                    Why do you want to be a Volunteer
                  </span>
                }
                name="whyYouWantToBeAVolunteer"
                rules={[
                  {
                    required: true,
                    message: "Please input why you want to be a volunteer!",
                  },
                  {
                    min: 6,
                    message: "Description must be at least 6 characters!",
                  },
                ]}
              >
                <div className="mb-2">
                  <Input.TextArea
                    style={{
                      border: "1px solid #A6ABAC  ",
                      padding: "10px 14px ",
                      lineHeight: "24px",
                      fontSize: "16px",
                    }}
                    placeholder="Enter a description..."
                    rows={4}
                  />
                </div>
              </Form.Item>

              {/* File Upload Field */}

              <Form.Item
                style={{ marginBottom: "0px" }}
                label={
                  <span className="block! text-sm! font-medium! text-[#263234]! leading-5! ">
                    Upload your CV
                  </span>
                }
                name="cv"
                rules={[
                  {
                    required: true,
                    message: "Please Upload your CV!",
                  },
                  {
                    type: "file",
                    accept: ".doc,.docx,.pdf,.jpg,.jpeg,.png",
                    message:
                      "Upload only doc, docx, pdf, jpg, jpeg or png file!",
                  },
                ]}
              >
                <div className="mb-2">
                  <label className="block text-sm font-medium text-[#263234] leading-5 mb-1.5 "></label>
                  <Dragger
                    {...uploadProps}
                    style={{ border: "2px dotted #E9EBEB " }}
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
              </Form.Item>

              {/* Terms & Conditions Checkbox */}
              <Form.Item
                name="termsAndConditions"
                valuePropName="checked"
                rules={[
                  {
                    required: true,
                    message: "Please accept the terms and conditions!",
                  },
                ]}
              >
                <div className="mb-4">
                  <Checkbox style={{ color: "" }}>
                    I agree with Virtue Hope's{" "}
                    <a href="#" className="underline">
                      terms & conditions.
                    </a>
                  </Checkbox>
                </div>
              </Form.Item>

              {/* Modal Buttons */}

              <div className=" flex flex-col md:flex-row md:justify-end justify-start  lg:flex-row  lg:justify-end mt-5 mb-2">
                <Button onClick={closeVolunteerModal} className="  navBtn1  ">
                  Cancel
                </Button>
                <Button htmlType="submit" className="navBtn2">
                  Apply now
                </Button>
              </div>
            </Form>
          </Modal>
        </div>

        {/* end   Volunter Modal*/}
      </div>

      {/* donate modal terms conditions start   */}

      <div className=" ">
        <Modal
          width={"70%"}
          open={termsModal}
          style={{ top: 0 }}
          // onOk={handleOk}
          onCancel={termModalCanel}
          footer={null} // remove if you want buttons
        >
          <AggrementPage></AggrementPage>
        </Modal>
      </div>
      {/* donate modal terms conditions end   */}

      {/* Donate Art, Antique or Collectables  Terms & Conditions start */}

      <div className=" ">
        <Modal
          width={"70%"}
          open={donateTerm}
          style={{ top: 0 }}
          // onOk={handleOk}
          onCancel={donateModalCanel}
          footer={null} // remove if you want buttons
        >
          <AggrementPage></AggrementPage>
        </Modal>
      </div>

      {/* Donate Art, Antique or Collectables  Terms & Conditions end */}
    </div>
  );
};
