import React, { useState, useEffect } from "react";
import { Modal, Input, Button, Checkbox, Upload, Radio, Form } from "antd";

const { Dragger } = Upload;

import { showSuccessAlert } from "../../helper/showSuccessAlert";
import { Link } from "react-router-dom";
import AggrementPage from "../aggrement/AggrementPage";
import PaymentModal from "../../components/client/payment/PaymentModal";
import DonateModal from "../../components/client/donate/DonateModal";
import VolunteerModal from "../../components/client/Volunteer/VolunteerModal";
import ArtAntiqModal from "../../components/client/art-antique/ArtAntiqModal";

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
            style={{ top: 0 }}
          >
            <ArtAntiqModal
              form={form}
              submitLuxriousModal={submitLuxriousModal}
              uploadProps={uploadProps}
              showDonateTermModal={showDonateTermModal}
              closeLuxuryModal={closeLuxuryModal}
            ></ArtAntiqModal>
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
            <VolunteerModal
              form={form}
              handleVolunterSubmit={handleVolunterSubmit}
              uploadProps={uploadProps}
              closeVolunteerModal={closeVolunteerModal}
            />
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
