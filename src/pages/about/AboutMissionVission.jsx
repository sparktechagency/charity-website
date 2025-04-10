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
import PaymentModal from "../../components/client/payment/PaymentModal";
import DonateModal from "../../components/client/donate/DonateModal";
import AggrementPage from "../aggrement/AggrementPage";
import VolunteerModal from "../../components/client/Volunteer/VolunteerModal";
import ArtAntiqModal from "../../components/client/art-antique/ArtAntiqModal";
const AboutMissionVission = () => {
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
  const [antiqueModal, setAntiqueModal] = useState(false);

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

  // Donate with Luxury retreats modal start

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

    // You can now send the data to backend or close the modal
    closeLuxuryModal();
    setIsModalOpen(false);
  };
  // Donate with Luxury retreats modal end

  // Donate  Art, Antique or Collectables Modal start 4th modal

  const openAntiqueModal = () => {
    setAntiqueModal(true);
  };
  const closeAntiquModal = () => {
    setAntiqueModal(false);
    setIsModalOpen(true);
  };

  // Donate  Art, Antique or Collectables Modal end 4th modal

  useEffect(() => {
    document.body.style.overflow =
      isModalOpen || luxuryModal || isVolunterModal ? "hidden" : "auto";
  }, [isModalOpen, luxuryModal, isVolunterModal]);
  return (
    <div className="  p-4 bg-[#ecebea]  ">
      <div className=" max-w-[1480px] mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Side - Image */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full z-0"></div>
            <img
              src="/img-2.png"
              alt="Supportive Women"
              className="relative z-10 w-full h-auto object-cover"
            />
          </div>

          {/* Right Side - Text */}
          <div className="bg-white shadow lg:pt-[127px] lg:px-[64px] p-4 rounded-2xl">
            <h3 className="lg:text-3xl text-xl font-thin text-[#403730]">
              Our mission & vision
            </h3>
            <h1 className="font-bold text-[#403730] text-3xl lg:text-[60px] leading-[60px] lg:mt-2">
              Healing Support for Women Survivors of Abuse and Trauma
            </h1>
            <p className="text-[#263234] pt-2 lg:pt-6 lg:pb-12 pb-6 leading-6 ">
              Hope is our purpose. Every action we take at Virtue Hope is driven
              by belief that healing begins with hope.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button
                onClick={showModal}
                className="bg-[#403730] cursor-pointer text-white py-3 px-6 rounded-md font-medium hover:bg-[#2E2A26]"
              >
                Support survivors
              </button>
              <button
                onClick={openVolunteerModal}
                className="bg-[#F6F6F7] cursor-pointer text-gray-800 py-3 ml-4 px-6 rounded-md font-bold"
              >
                Join our enthusiastic team
              </button>
            </div>
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
        {/* openLuxuryModal,handleCancel,handlieClickNextStep */}

        <PaymentModal
          openLuxuryModal={openAntiqueModal}
          handleCancel={handleCancel}
          handlieClickNextStep={handlieClickNextStep}
        />
      </Modal>

      {/* end 1st modal payment modal  */}

      {/* Donate with Luxury retreats 2nd modal   */}

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
          {/* form, handleRetreatSubmit, uploadProps, showTermModal,
          backRetretModal, */}

          <DonateModal
            form={form}
            handleRetreatSubmit={submitLuxriousModal}
            uploadProps={uploadProps}
            showTermModal={showTermModal}
            backRetretModal={closeLuxuryModal}
          />
        </Modal>
      </div>

      {/* End Donate with Luxury retreats 2nd modal  */}

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
          style={{top:0}}
          
        >



          <VolunteerModal
            form={form}
            handleVolunterSubmit={handleVolunterSubmit}
            uploadProps={uploadProps}
            closeVolunteerModal={closeVolunteerModal}
            showTermModal={showTermModal}
          />
        </Modal>
      </div>

      {/* end   Volunter Modal*/}

      {/* Donate Art, Antique or Collectables 4th modal  */}

      <div className=" w-[600px]  z-50 ">
        <Modal
          visible={antiqueModal}
          onCancel={""}
          footer={null}
          width={600}
          height={800}
          // bodyStyle={{ padding: "20px" }}
          destroyOnClose
          closable={false}
        >
          

          {/* form,submitLuxriousModal,uploadProps,showDonateTermModal,closeLuxuryModal */}

          <ArtAntiqModal form = {form} submitLuxriousModal = {""} uploadProps={uploadProps} showDonateTermModal = {showDonateTermModal} closeLuxuryModal = {closeAntiquModal}  />

        </Modal>
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

export default AboutMissionVission;
