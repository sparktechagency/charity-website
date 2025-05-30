import React, { useEffect, useState } from "react";

import { Button, Form, Input, Modal, Select, Dropdown } from "antd";
import { ChevronDown, Gavel, Quote } from "lucide-react";
import {
  AppleOutlined,
  CreditCardOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import Checkbox from "antd/es/checkbox/Checkbox";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AggrementPage from "../aggrement/AggrementPage";
import AuctionDetailsModal from "../../components/client/auctionModal/AuctionDetailsModal";
import PersonalDetailModal from "../../components/client/auctionModal/PersonalDetailModal";
import { CardNumberElement } from "@stripe/react-stripe-js";
import CardNumberModal from "../../components/client/auctionModal/CardNumberModal";
import UserDetailsModal from "../../components/client/auctionModal/UserDetailsModal";
import AuctionSlider from "../auction/AuctionSlider";
const HomeSlider = () => {
  const [donateTerm, setDonateTerm] = useState(false);

  const [userDetailsModal, setUserDetailsModal] = useState(false);

  const donateModalCanel = () => {
    setDonateTerm(false);
  };

  const openDonateTermModal = () => {
    setDonateTerm(true);
  };

  const [form] = Form.useForm();

  const [verified, isVerified] = useState(false);

  const donateFull = Form.useWatch("donateFull", form);


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: false,
    centerMode: false,
  };


  const [personalData, setPersonalData] = useState(null);
  const [auctionData, setAuctionData] = useState(null);

  // first slider start

  // 1st modal start

  const [auctionDetailsModal, setAuctionDetailsModal] = useState(false);
  const [personalDetailsModal, setPersonalDetailsModal] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);

  // 2nd modal end

  // 3rd modal start

  // 3rd modal end

  // 1st 2nd 3rd modal overflow hidden start

  useEffect(() => {
    document.body.style.overflow =
      auctionDetailsModal || personalDetailsModal || paymentModal
        ? "hidden"
        : "auto";
  }, [auctionDetailsModal, personalDetailsModal, paymentModal]);

  // 1st 2nd 3rd modal overflow hidden end

  // first slider end

  // 2nd slide start

  const [selectedKey, setSelectedKey] = useState(null); // To store selected item key
  const [selectedValue, setSelectedValue] = useState(""); // To store selected label
  const [customAmount, setCustomAmount] = useState(""); // To store custom input
  const items = [
    { key: "1", label: "$25" },
    { key: "2", label: "$30" },
    { key: "3", label: "$40" },
    { key: "4", label: "$50" },
    { key: "5", label: "Custom" },
  ];

  const [firstModal, setFirstModal] = useState(false);
  const [secondModal, setSecondModal] = useState(false);

  const handleMenuClick = ({ key }) => {
    setSelectedKey(key);
    // Set value based on the key
    const selected = items.find((item) => item.key === key);
    setSelectedValue(selected?.label || "");
  };

  // first modal start

  const openFirstModal = () => {
    if (selectedValue && selectedValue !== "None") {
      setFirstModal(true);
    } else {
    }
  };

  const handleCancel = () => {
    setFirstModal(false);
  };

  const submitBuyerInfo = (values) => {
    setFirstModal(false);
    setSecondModal(true);
  };

  // first modal end

  // 2nd modal start

  const handleSecondCancelModal = () => {
    setSecondModal(false);
    setFirstModal(true);
  };

  useEffect(() => {
    document.body.style.overflow =
      firstModal || secondModal ? "hidden" : "auto";
  }, [firstModal, secondModal]);

  // 2nd slide end

  return (
    <div className=" bg-[#ecebea] py-4 mb-5   ">
      <div className=" max-w-[1512px] mx-auto ">
        {/* large device  */}
        <div className="relative hidden lg:flex   ">
          <Slider {...settings} className="w-full">
            {/* 1st slide  */}

            <div className="" >
              <div className="relative lg:w-[715px] w-full mt-5 ">
                <img
                  src="/auctionBg-img.jpg"
                  className="w-full h-[83vh] object-cover rounded-2xl "
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/80 to-transparent "></div>
                <div className="absolute left-0 pl-6 bottom-0">
                  <p className="lg:text-5xl text-2xl text-white lg:pb-8 pb-2">
                    Empower women to <br />
                    <span className="font-bold">
                      buy or list your
                    </span> <br /> auctions
                  </p>
                  <div className="lg:pb-8 pb-4">
                    <button
                      onClick={() => setPersonalDetailsModal(true)}
                      className="bg-[#F6F6F7] cursor-pointer text-[#172B4D] font-bold text-sm hover:bg-[#ecebea] transition-all duration-200 rounded px-6 py-2.5"
                    >
                      Contribute your Auction
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* 2nd slide  */}

            <div className="  max-w-7xl  " >
              <AuctionSlider />
            </div>

          </Slider>
        </div>

        {/* small device  */}

        <div className=" lg:hidden block px-3 ">
          {/* 1st slide  */}
          <div>
            <div>
              <div className="relative lg:w-[715px]  w-full h-auto lg:h-[70vh]">
                <img
                  src="/auctionBg-img.jpg"
                  className="w-full h-full object-cover rounded-2xl "
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/80 to-transparent "></div>
                <div className="absolute left-0 pl-6 bottom-0">
                  <p className="lg:text-5xl text-2xl text-white lg:pb-8 pb-2">
                    Empower women to <br />
                    <span className="font-bold">
                      buy or list your
                    </span> <br /> auctions
                  </p>
                  <div className="lg:pb-8 pb-4">
                    <button
                      onClick={() => setPersonalDetailsModal(true)}
                      className="bg-[#F6F6F7] cursor-pointer text-[#172B4D] font-bold text-sm hover:bg-[#ecebea] transition-all duration-200 rounded px-6 py-2.5"
                    >
                      Contribute your Auction
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd slide  */}
          <AuctionSlider />
        </div>
      </div>

      {/* 1st slider modal  */}

      {/* first Modal Personal Details start */}

      <div className=" ">
        <Modal
          centered
          open={personalDetailsModal}
          closable={false}
          footer={null}
          width={600}
        >
          <PersonalDetailModal
            setPersonalDetailsModal={setPersonalDetailsModal}
            setAuctionDetailsModal={setAuctionDetailsModal}
            sendPersonalDataToParent={setPersonalData}
          />
        </Modal>
      </div>

      {/* First Modal Personal Details end  */}

      {/*  Second Modal Auction Details start */}
      <Modal
        centered
        open={auctionDetailsModal}
        closable={false} // Removes close (X) icon
        width={600}
        footer={null}
      >
        <AuctionDetailsModal
          setPersonalDetailsModal={setPersonalDetailsModal}
          setAuctionDetailsModal={setAuctionDetailsModal}
          setDonateTerm={setDonateTerm}
          isVerified={isVerified}
          verified={verified}
          donateFull={donateFull}
          setPaymentModal={setPaymentModal}
          auctionDetailsData={setAuctionData}
          personalData={personalData}
          setUserDetailsModal={setUserDetailsModal}
        />
      </Modal>
      {/* Second Modal Auction Details end */}

      {/* user details modal start  */}

      <Modal
        centered
        open={userDetailsModal}
        closable={false} // Removes close (X) icon
        width={600}
        footer={null}
      >
        <UserDetailsModal
          personalData={personalData}
          auctionData={auctionData}
          setUserDetailsModal={setUserDetailsModal}
          setPaymentModal={setPaymentModal}
          setAuctionDetailsModal={setAuctionDetailsModal}
        />
      </Modal>

      {/* user details modal end  */}

      {/* Third Modal Payment modal start  */}

      {!donateFull && (
        <Modal
          title=""
          open={paymentModal}
          // onCancel={handleCancel}
          footer={null}
          width={400}
          closable={false}
        >
          <CardNumberModal
            setAuctionDetailsModal={setAuctionDetailsModal}
            setPaymentModal={setPaymentModal}
            personalData={personalData}
            auctionData={auctionData}
            setUserDetailsModal={setUserDetailsModal}
          />
        </Modal>
      )}
      <div className=" ">
        <Modal
          width={"70%"}
          open={donateTerm}
          style={{ top: 0 }}
          zIndex={1100}
          onCancel={donateModalCanel}
          footer={null} // remove if you want buttons
        >
          <AggrementPage></AggrementPage>
        </Modal>
      </div>
    </div>
  );
};

export default HomeSlider;
