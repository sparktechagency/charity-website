import React, { useState, useEffect } from "react";
import { Modal, Input, Button, Checkbox, Upload, Radio, Form } from "antd";

import AggrementPage from "../aggrement/AggrementPage";
import VolunteerModal from "../../components/client/modal/volunteer/VolunteerModal";
import DonateModal from "../../components/client/modal/donate/DonateModal";
import ArtAntiqModal from "../../components/client/modal/art-antique/ArtAntiqModal";
import PaymentModal from "../../components/client/modal/payment/PaymentModal";
import DonerDetailsModal from "../../components/client/modal/doner-details/DonerDetailsModal";

export const MissionVission = () => {
  // donate modal  terms & conditions. start

  const [termsModal, setTermsModal] = useState(false);

  const termModalCanel = () => {
    setTermsModal(false);
  };

  // donate modal  terms & conditions. end

  // Donate Art, Antique or Collectables modal  terms & conditions. start

  const [donateTerm, setDonateTerm] = useState(false);

  const donateModalCanel = () => {
    setDonateTerm(false);
  };

  // Donate Art, Antique or Collectables modal  terms & conditions. end

  // doner details modal use state
  const [donerDetailsModal, setDonerDetailsModal] = useState(false);
  // payment modal use state
  const [modalOpen, setModalOpen] = useState(false);
  // Donate modal use state
  const [secondModalOpen, setSecondModalOpen] = useState(false);
  // art antique of luxuryModal use state
  const [luxuryModal, setLuxuryModal] = useState(false);

  // doner details modal start
  const openDonerDetailsModal = () => {
    setDonerDetailsModal(true);
  };

  // doner details modal end

  // payment modal start
  const onClose = () => setModalOpen(false);
  // payment modal end


  // volunter modal start 
  const [isVolunterModal,setIsVolunterModal] = useState(false);
  const openVolunterModal = ()=>{
    setIsVolunterModal(true)
  }

  useEffect(() => {
    document.body.style.overflow =
      modalOpen || secondModalOpen || luxuryModal || donerDetailsModal || isVolunterModal
        ? "hidden"
        : "auto";
  }, [modalOpen, secondModalOpen, luxuryModal, donerDetailsModal,isVolunterModal]);

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
              <Button
                onClick={openDonerDetailsModal}
                className=" homeBtn supportBtn "
              >
                Support survivors
              </Button>

              <Button onClick={openVolunterModal} className="volunteerBtn ">
                Join our enthusiastic team{" "}
              </Button>
            </div>
          </div>
        </div>

        {/* Donar details modal start  */}

        <div className="  ">
          <Modal
            open={donerDetailsModal}
            footer={null}
            closable={false}
            centered
            width="400px"
            style={{ top: 0 }}
          >
            <DonerDetailsModal
              setDonerDetailsModal={setDonerDetailsModal}
              setModalOpen={setModalOpen}
              // setOpen={setOpen}
            />
          </Modal>
        </div>

        {/* Donar details modal end  */}

        {/* Payment Modal start */}

        <div className="  ">
          <Modal
            open={modalOpen}
            onCancel={onClose}
            footer={null}
            closable={false}
            centered
            width="400px"
            style={{ padding: "15px", top: 0 }}
          >
            <PaymentModal
              handleCancel={onClose}
              setModalOpen={setModalOpen}
              setLuxuryModal={setLuxuryModal}
              setSecondModalOpen={setSecondModalOpen}
              setDonerDetailsModal={setDonerDetailsModal}
            />
          </Modal>
        </div>

        {/* Payment Modal end */}

        {/* Donate modal start second modal */}

        <Modal
          open={secondModalOpen}
          footer={null}
          centered
          closable={false}
          style={{ top: 0 }}
        >
          <DonateModal
            setModalOpen={setModalOpen}
            setSecondModalOpen={setSecondModalOpen}
            setDonateTerm={setDonateTerm}
          />
        </Modal>

        {/* Donate modal end  */}



        {/* Donate Art, Antique or Collectables start modal start   */}

        <div className=" w-[600px]  z-50 ">
          <Modal
            visible={luxuryModal}
            footer={null}
            width={500}
            height={800}
            // bodyStyle={{ padding: "20px" }}
            destroyOnClose
            closable={false}
            style={{ top: 0 }}
          >
            <ArtAntiqModal
              setLuxuryModal={setLuxuryModal}
              setModalOpen={setModalOpen}
              setDonateTerm={setDonateTerm}
            />
          </Modal>
        </div>


        {/* Donate Art, Antique or Collectables start modal end  */}



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
            style={{top:0}}
          >
            <VolunteerModal
              setIsVolunterModal = {setIsVolunterModal}
              setDonateTerm = {setDonateTerm}
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
          zIndex={1100} // higher z-index
        >
          <AggrementPage></AggrementPage>
        </Modal>
      </div>

      {/* donate modal terms conditions end   */}

      {/* Donate Art, Antique or Collectables  Terms & Conditions modal start */}

      <div className=" ">
        <Modal
          width={"70%"}
          open={donateTerm}
          style={{ top: 0 }}
          // onOk={handleOk}
          onCancel={donateModalCanel}
          footer={null} // remove if you want buttons
          zIndex={1100} // higher z-index
        >
          <AggrementPage></AggrementPage>
        </Modal>
      </div>

      {/* Donate Art, Antique or Collectables  Terms & Conditions modal end */}
    </div>
  );
};
