import React, { useEffect, useState } from "react";
import { Button, Form, Input, Modal, Select, Upload, Dropdown } from "antd";
import { ChevronDown, Gavel, Quote } from "lucide-react";
import {
  AppleOutlined,
  CreditCardOutlined,
  GoogleOutlined,
} from "@ant-design/icons";

import Checkbox from "antd/es/checkbox/Checkbox";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { showSuccessAlert } from "../../helper/showSuccessAlert";
import AggrementPage from "../aggrement/AggrementPage";
import BuyerInfoModal from "../../components/client/bitModal/BuyerInfoModal";
import BitPaymentModal from "../../components/client/bitModal/BitPaymentModal";

const AuctionSlider = () => {
  const [donateTerm, setDonateTerm] = useState(false);

  const donateModalCanel = () => {
    setDonateTerm(false);
  };

  const openDonateTermModal = () => {
    setDonateTerm(true);
  };

  var settings = {
    dots: true,
    infinite: false, // Prevents wrapping issues
    speed: 500,
    slidesToShow: 1, // Show 4 slides at a time
    slidesToScroll: 1,
    variableWidth: true, // Ensures each slide keeps its width
    adaptiveHeight: false, // Prevents height jumps
    centerMode: false, // Keeps slides inline
  };

  const [form] = Form.useForm();

  // first slider start

  // 1st modal start

  const [isModal, setIsModal] = useState(false);

  // first modal end

  // 2nd modal start

  const [secondModalOpen, setSecondModalOpen] = useState(false);

  // 2nd modal end

  // 3rd modal start

  const [thirdModalOpen, setThirdModalOpen] = useState(false);

  const handleSubmit = () => {
    showSuccessAlert();
    setSecondModalOpen(false);
    setThirdModalOpen(false);
    setIsModal(false);
  };

  // 3rd modal end

  // 1st 2nd 3rd modal overflow hidden start

  useEffect(() => {
    if (isModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModal]);

  useEffect(() => {
    if (secondModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [secondModalOpen]);

  useEffect(() => {
    if (thirdModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [thirdModalOpen]);

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

  const [buyerInfoModal, setBuyerInfoModal] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);

  const openFirstModal = () => {
    if (selectedValue && selectedValue !== "None") {
      setBuyerInfoModal(true);
    } else if (customAmount.length !== 0) {
      setBuyerInfoModal(true);
    } else {
      console.log("No bid selected, modal won't open.");
    }
  };
  // Handle item click from dropdown
  const handleMenuClick = ({ key }) => {
    setSelectedKey(key);
    // Set value based on the key
    const selected = items.find((item) => item.key === key);
    setSelectedValue(selected?.label || "");
  };

  // first modal start

  const handleCancel = () => {
    buyerInfoModal(false);
    form.resetFields();
  };

  // const handleSubmitBuyerInfo = (values) => {
  //   console.log("Buyer info submitted: ", values);
  //   console.log("Form submitted!");
  //   setSecondModal(true);
  //   setFirstModal(false);
  //   form.resetFields();
  // };

  // first modal end

  // 2nd modal start

  const openSecondModal = () => {
    console.log(`ishan`);
    setPaymentModal(true);
    setBuyerInfoModal(false);
    document.body.style.overflow = "hidden"; // Disable scrolling
  };
  const handleSecondCancelModal = () => {
    console.log("Second modal opened: ");
    setPaymentModal(false);
    setBuyerInfoModal(true);
  };

  const handleSubmitModal = async (e) => {
    setPaymentModal(false);
    showSuccessAlert();
  };

  // 2nd modal end

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted!");
  //   bidSuccessMsg();
  //   setSecondModal(false);
  // };

  useEffect(() => {
    document.body.style.overflow =
      buyerInfoModal || paymentModal ? "hidden" : "auto";
  }, [buyerInfoModal, paymentModal]);

  // 2nd slide end

  return (
    <div className=" bg-[#ecebea] py-10 mb-5    ">
      <div className=" max-w-[1512px] mx-auto ">
        {/* large device  */}
        <div className="relative hidden lg:flex ">
          <Slider {...settings} className="w-full">
            {/* 1st slide  */}
            <div>
              <div className=" bg-[#ecebea] ml-5  hidden lg:flex rounded-2xl ">
                <div className=" lg:w-[1036px] w-full      ">
                  <div className="  bg-white shadow  rounded-2xl  flex lg:flex-row flex-col lg:justify-between px-6 py-6 gap-6  ">
                    <div className=" lg:w-[433px]  ">
                      <h1 className=" font-semibold lg:text-5xl text-2xl lg:leading-12 text-black lg:pb-4  ">
                        The ancient statue of Sri Lanka
                      </h1>
                      <p className=" lg:mt-4 text-[#263234] lg:text-xl ">
                        Estimated price :
                        <span className=" text-[#263234] font-bold ">
                          {" "}
                          $59-$200
                        </span>
                      </p>
                      <div className="flex items-center gap-1 mt-1 ">
                        {/* icon */}
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
                            d="M9 2C9 1.44772 9.44772 1 10 1H14C14.5523 1 15 1.44772 15 2C15 2.55228 14.5523 3 14 3H10C9.44772 3 9 2.55228 9 2Z"
                            fill="#4B5557"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.7071 10.2929C16.0976 10.6834 16.0976 11.3166 15.7071 11.7071L12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071C10.9024 14.3166 10.9024 13.6834 11.2929 13.2929L14.2929 10.2929C14.6834 9.90237 15.3166 9.90237 15.7071 10.2929Z"
                            fill="#4B5557"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 7C8.13401 7 5 10.134 5 14C5 17.866 8.13401 21 12 21C15.866 21 19 17.866 19 14C19 10.134 15.866 7 12 7ZM3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14C21 18.9706 16.9706 23 12 23C7.02944 23 3 18.9706 3 14Z"
                            fill="#4B5557"
                          />
                        </svg>
                        <p className=" text-[#263234] lg:text-xl font-semibold ">
                          07:03: <span>39sec left </span>
                        </p>
                      </div>
                      <div className="flex items-center lg:gap-3 gap-1.5 lg:mt-6 mt-2.5 ">
                        <div>
                          <img
                            src="./sliderImg-2.jpg"
                            className=" w-12 h-12  rounded-full "
                            alt=""
                          />
                        </div>
                        <div>
                          <h1 className=" text-sm font-semibold text-[#263234] ">
                            Illena D’cruz
                          </h1>
                          <p className=" text-[#4B5557] text-xs ">
                            Contributor
                          </p>
                        </div>
                      </div>
                      <div className="bg-[#e9ebeb] mt-6 lg:p-6 p-2.5 rounded-lg max-w-2xl mx-auto shadow-md">
                        <p className=" text-lg leading-relaxed">
                          I am honored to donate Whispers of Dawn to this
                          auction in support of Healing and Hope for Women. This
                          initiative empowers women facing adversity, providing
                          them with the resources to rebuild their lives. We can
                          create a masterpiece of change.
                        </p>
                        {/* Quote Icon */}
                        <div className=" lg:ml-20  -mt-9  ">
                          <Quote className="text-gray-600 w-6 h-6" />
                        </div>
                      </div>

                      <div className=" mt-12 flex flex-row    gap-x-3  ml-[252px]  ">
                        <div className="">
                          {selectedKey === "5" && (
                            <div className="mb-2">
                              <Input
                                type="number"
                                placeholder="Enter custom amount"
                                onChange={(e) => {
                                  setCustomAmount(e.target.value);
                                }}
                                className="w-40"
                              />
                            </div>
                          )}
                        </div>
                        <div>
                          {selectedKey === "5" && (
                            <>
                              <p
                                className=" cursor-pointer  "
                                onClick={() => setSelectedKey(null)}
                              >
                                x
                              </p>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="flex lg:flex-row flex-col   items-center justify-between  gap-4">
                        {/* Price & Bids */}
                        <div className="text-gray-900 text-xl font-bold">
                          $1,80{" "}
                          <span className="text-gray-500 text-sm">
                            (12 bids)
                          </span>
                        </div>

                        {/* Bid Button */}
                        <div className="flex items-center">
                          <div>
                            <button
                              onClick={openFirstModal}
                              // disabled={paymentModal}
                              className="flex items-center gap-1 cursor-pointer bg-[#403730] text-white text-sm font-semibold px-[12px] py-2.5 hover:bg-[#2c241f] transition"
                            >
                              <Gavel className="w-4 h-4" />
                              Bid online
                              {selectedValue !== "None" &&
                              selectedValue !== "Custom"
                                ? ` ${selectedValue}`
                                : ""}
                              {customAmount.length > 0
                                ? ` £${customAmount} `
                                : ""}
                            </button>
                          </div>

                          <div>
                            {/* Dropdown Below */}
                            <Dropdown
                              menu={{
                                items: items.map((item) => ({
                                  ...item,
                                  label: (
                                    <span className="custom-dropdown-item">
                                      {item.label}
                                    </span>
                                  ),
                                })),
                                onClick: handleMenuClick,
                              }}
                              placement="top"
                              trigger={["click"]}
                            >
                              
                              <Button onClick={(e) => e.preventDefault()}>
                                <span className="flex">
                                  <ChevronDown />
                                </span>
                              </Button>
                            </Dropdown>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" relative ">
                      <img
                        src="/sliderImg-3.jpg"
                        className=" lg:w-[532px] w-[100%] block mx-auto  rounded-2xl lg:h-[630px] mb-6  "
                        alt=""
                      />
                      <div className="absolute top-0 ml-3 mt-4 px-2 py-1 text-sm text-[#263234] bg-white rounded ">
                        <button>Featured</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2nd slide  */}

            <div>
              <div className=" bg-[#ecebea] ml-5  hidden lg:flex rounded-2xl ">
                <div className=" lg:w-[1036px] w-full      ">
                  <div className="  bg-white shadow  rounded-2xl  flex lg:flex-row flex-col lg:justify-between px-6 py-6 gap-6  ">
                    <div className=" lg:w-[433px]  ">
                      <h1 className=" font-semibold lg:text-5xl text-2xl lg:leading-12 text-black lg:pb-4  ">
                        Capturing the first light of day in a serene landscape
                      </h1>
                      <p className=" lg:mt-4 text-[#263234] lg:text-xl ">
                        Estimated price :
                        <span className=" text-[#263234] font-bold ">
                          {" "}
                          $59-$200
                        </span>
                      </p>
                      <div className="flex items-center gap-1 mt-1 ">
                        {/* icon */}
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
                            d="M9 2C9 1.44772 9.44772 1 10 1H14C14.5523 1 15 1.44772 15 2C15 2.55228 14.5523 3 14 3H10C9.44772 3 9 2.55228 9 2Z"
                            fill="#4B5557"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.7071 10.2929C16.0976 10.6834 16.0976 11.3166 15.7071 11.7071L12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071C10.9024 14.3166 10.9024 13.6834 11.2929 13.2929L14.2929 10.2929C14.6834 9.90237 15.3166 9.90237 15.7071 10.2929Z"
                            fill="#4B5557"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 7C8.13401 7 5 10.134 5 14C5 17.866 8.13401 21 12 21C15.866 21 19 17.866 19 14C19 10.134 15.866 7 12 7ZM3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14C21 18.9706 16.9706 23 12 23C7.02944 23 3 18.9706 3 14Z"
                            fill="#4B5557"
                          />
                        </svg>
                        <p className=" text-[#263234] lg:text-xl font-semibold ">
                          07:03: <span>39sec left </span>
                        </p>
                      </div>
                      <div className="flex items-center lg:gap-3 gap-1.5 lg:mt-6 mt-2.5 ">
                        <div>
                          <img
                            src="./sliderImg-2.jpg"
                            className=" w-12 h-12  rounded-full "
                            alt=""
                          />
                        </div>
                        <div>
                          <h1 className=" text-sm font-semibold text-[#263234] ">
                            Illena D’cruz
                          </h1>
                          <p className=" text-[#4B5557] text-xs ">
                            Contributor
                          </p>
                        </div>
                      </div>
                      <div className="bg-[#e9ebeb] mt-6 lg:p-6 p-2.5 rounded-lg max-w-2xl mx-auto shadow-md">
                        <p className=" text-lg leading-relaxed">
                          I am honored to donate Whispers of Dawn to this
                          auction in support of Healing and Hope for Women. This
                          initiative empowers women facing adversity, providing
                          them with the resources to rebuild their lives. We can
                          create a masterpiece of change.
                        </p>
                        {/* Quote Icon */}
                        <div className=" lg:ml-20  -mt-9  ">
                          <Quote className="text-gray-600 w-6 h-6" />
                        </div>
                      </div>

                      <div className=" mt-12 flex flex-row    gap-x-3  ml-[252px]  ">
                        <div className="">
                          {selectedKey === "5" && (
                            <div className="mb-2">
                              <Input
                                type="number"
                                placeholder="Enter custom amount"
                                onChange={(e) => {
                                  setCustomAmount(e.target.value);
                                }}
                                className="w-40"
                              />
                            </div>
                          )}
                        </div>
                        <div>
                          {selectedKey === "5" && (
                            <>
                              <p
                                className=" cursor-pointer  "
                                onClick={() => setSelectedKey(null)}
                              >
                                x
                              </p>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="flex lg:flex-row flex-col   items-center justify-between  gap-4">
                        {/* Price & Bids */}
                        <div className="text-gray-900 text-xl font-bold">
                          $1,80{" "}
                          <span className="text-gray-500 text-sm">
                            (12 bids)
                          </span>
                        </div>

                        {/* Bid Button */}
                        <div className="flex items-center">
                          <div>
                            <button
                              onClick={openFirstModal}
                              disabled={paymentModal}
                              className="flex items-center gap-1 cursor-pointer bg-[#403730] text-white text-sm font-semibold px-[12px] py-2.5 hover:bg-[#2c241f] transition"
                            >
                              <Gavel className="w-4 h-4" />
                              Bid online
                              {selectedValue !== "None" &&
                              selectedValue !== "Custom"
                                ? ` ${selectedValue}`
                                : ""}
                              {customAmount.length > 0
                                ? ` £${customAmount} `
                                : ""}
                            </button>
                          </div>

                          <div>
                            {/* Dropdown Below */}
                            <Dropdown
                              menu={{
                                items: items.map((item) => ({
                                  ...item,
                                  label: (
                                    <span className="custom-dropdown-item">
                                      {item.label}
                                    </span>
                                  ),
                                })),
                                onClick: handleMenuClick,
                              }}
                              placement="top"
                              trigger={["click"]}
                            >
                              <Button onClick={(e) => e.preventDefault()}>
                                <span className="flex">
                                  <ChevronDown />
                                </span>
                              </Button>
                            </Dropdown>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" relative ">
                      <img
                        src="/homeSliderImage.jpg"
                        className=" lg:w-[532px] w-[100%] block mx-auto  rounded-2xl lg:h-[630px] mb-6  "
                        alt=""
                      />
                      <div className="absolute top-0 ml-3 mt-4 px-2 py-1 text-sm text-[#263234] bg-white rounded ">
                        <button>Featured</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        {/* small device  */}

        <div className=" lg:hidden block ">
          {/* 1st slide  */}
          <div>
            <div className=" bg-[#ecebea]  lg:h-[70vh]  rounded-2xl ">
              <div className=" lg:w-[1036px] w-full      ">
                <div className="  bg-white shadow  rounded-2xl  flex lg:flex-row flex-col lg:justify-between px-6 py-6 gap-6  ">
                  <div className=" lg:w-[433px]  ">
                    <h1 className=" font-semibold lg:text-5xl text-2xl lg:leading-12 text-black lg:pb-4  ">
                      The ancient statue of Sri Lanka
                    </h1>
                    <p className=" lg:mt-4 text-[#263234] lg:text-xl ">
                      Estimated price :
                      <span className=" text-[#263234] font-bold ">
                        {" "}
                        $59-$200
                      </span>
                    </p>
                    <div className="flex items-center gap-1 mt-1 ">
                      {/* icon */}
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
                          d="M9 2C9 1.44772 9.44772 1 10 1H14C14.5523 1 15 1.44772 15 2C15 2.55228 14.5523 3 14 3H10C9.44772 3 9 2.55228 9 2Z"
                          fill="#4B5557"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.7071 10.2929C16.0976 10.6834 16.0976 11.3166 15.7071 11.7071L12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071C10.9024 14.3166 10.9024 13.6834 11.2929 13.2929L14.2929 10.2929C14.6834 9.90237 15.3166 9.90237 15.7071 10.2929Z"
                          fill="#4B5557"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 7C8.13401 7 5 10.134 5 14C5 17.866 8.13401 21 12 21C15.866 21 19 17.866 19 14C19 10.134 15.866 7 12 7ZM3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14C21 18.9706 16.9706 23 12 23C7.02944 23 3 18.9706 3 14Z"
                          fill="#4B5557"
                        />
                      </svg>
                      <p className=" text-[#263234] lg:text-xl font-semibold ">
                        07:03: <span>39sec left </span>
                      </p>
                    </div>
                    <div className="flex items-center lg:gap-3 gap-1.5 lg:mt-6 mt-2.5 ">
                      <div>
                        <img
                          src="./sliderImg-2.jpg"
                          className=" w-12 h-12  rounded-full "
                          alt=""
                        />
                      </div>
                      <div>
                        <h1 className=" text-sm font-semibold text-[#263234] ">
                          Illena D’cruz
                        </h1>
                        <p className=" text-[#4B5557] text-xs ">Contributor</p>
                      </div>
                    </div>
                    <div className="bg-[#e9ebeb] mt-6 lg:p-6 p-2.5 rounded-lg max-w-2xl mx-auto shadow-md">
                      <p className=" text-lg leading-relaxed">
                        I am honored to donate Whispers of Dawn to this auction
                        in support of Healing and Hope for Women. This
                        initiative empowers women facing adversity, providing
                        them with the resources to rebuild their lives. We can
                        create a masterpiece of change.
                      </p>
                      {/* Quote Icon */}
                      <div className=" lg:ml-20 hidden  -mt-9  ">
                        <Quote className="text-gray-600 w-6 h-6" />
                      </div>
                    </div>

                    <div className="flex lg:flex-row flex-col items-center justify-between mt-8 gap-4">
                      {/* Price & Bids */}
                      <div className="text-gray-900 text-xl font-bold">
                        $1,80{" "}
                        <span className="text-gray-500 text-sm">(12 bids)</span>
                      </div>

                      {/* Bid Button */}
                      <div className="flex items-center">
                        <div>
                          <button
                            onClick={openFirstModal}
                            disabled={paymentModal}
                            className="flex items-center gap-1 cursor-pointer bg-[#403730] text-white text-sm font-semibold px-[12px] py-2.5 hover:bg-[#2c241f] transition"
                          >
                            <Gavel className="w-4 h-4" />
                            Bid online{" "}
                            {selectedValue !== "None" ? selectedValue : ""}
                          </button>
                        </div>
                        <div>
                          <Dropdown
                            menu={{
                              items: items.map((item) => ({
                                ...item,
                                label: (
                                  <span className="custom-dropdown-item">
                                    {item.label}
                                  </span>
                                ),
                              })),
                              onClick: handleMenuClick,
                            }}
                            placement="top"
                            trigger={["click"]}
                          >
                            <Button onClick={(e) => e.preventDefault()}>
                              <span className="flex">
                                <ChevronDown className="" />
                              </span>
                            </Button>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" relative ">
                    <img
                      src="/sliderImg-3.jpg"
                      className=" lg:w-[532px] w-[100%] block mx-auto  rounded-2xl lg:h-[630px] mb-6  "
                      alt=""
                    />
                    <div className="absolute top-0 ml-3 mt-4 px-2 py-1 text-sm text-[#263234] bg-white rounded ">
                      <button>Featured</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd slide  */}

          <div>
            <div className=" bg-[#ecebea] ml-5 lg:h-[70vh] hidden lg:flex rounded-2xl ">
              <div className=" lg:w-[1036px] w-full      ">
                <div className="  bg-white shadow  rounded-2xl  flex lg:flex-row flex-col lg:justify-between px-6 py-6 gap-6  ">
                  <div className=" lg:w-[433px]  ">
                    <h1 className=" font-semibold lg:text-5xl text-2xl lg:leading-12 text-black lg:pb-4  ">
                      Capturing the first light of day in a serene landscape
                    </h1>
                    <p className=" lg:mt-4 text-[#263234] lg:text-xl ">
                      Estimated price :
                      <span className=" text-[#263234] font-bold ">
                        {" "}
                        $59-$200
                      </span>
                    </p>
                    <div className="flex items-center gap-1 mt-1 ">
                      {/* icon */}
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
                          d="M9 2C9 1.44772 9.44772 1 10 1H14C14.5523 1 15 1.44772 15 2C15 2.55228 14.5523 3 14 3H10C9.44772 3 9 2.55228 9 2Z"
                          fill="#4B5557"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.7071 10.2929C16.0976 10.6834 16.0976 11.3166 15.7071 11.7071L12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071C10.9024 14.3166 10.9024 13.6834 11.2929 13.2929L14.2929 10.2929C14.6834 9.90237 15.3166 9.90237 15.7071 10.2929Z"
                          fill="#4B5557"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 7C8.13401 7 5 10.134 5 14C5 17.866 8.13401 21 12 21C15.866 21 19 17.866 19 14C19 10.134 15.866 7 12 7ZM3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14C21 18.9706 16.9706 23 12 23C7.02944 23 3 18.9706 3 14Z"
                          fill="#4B5557"
                        />
                      </svg>
                      <p className=" text-[#263234] lg:text-xl font-semibold ">
                        07:03: <span>39sec left </span>
                      </p>
                    </div>
                    <div className="flex items-center lg:gap-3 gap-1.5 lg:mt-6 mt-2.5 ">
                      <div>
                        <img
                          src="./sliderImg-2.jpg"
                          className=" w-12 h-12  rounded-full "
                          alt=""
                        />
                      </div>
                      <div>
                        <h1 className=" text-sm font-semibold text-[#263234] ">
                          Illena D’cruz
                        </h1>
                        <p className=" text-[#4B5557] text-xs ">Contributor</p>
                      </div>
                    </div>
                    <div className="bg-[#e9ebeb] mt-6 lg:p-6 p-2.5 rounded-lg max-w-2xl mx-auto shadow-md">
                      <p className=" text-lg leading-relaxed">
                        I am honored to donate Whispers of Dawn to this auction
                        in support of Healing and Hope for Women. This
                        initiative empowers women facing adversity, providing
                        them with the resources to rebuild their lives. We can
                        create a masterpiece of change.
                      </p>
                    </div>

                    <div className="flex lg:flex-row flex-col items-center justify-between mt-8 gap-4">
                      {/* Price & Bids */}
                      <div className="text-gray-900 text-xl font-bold">
                        $1,80{" "}
                        <span className="text-gray-500 text-sm">(12 bids)</span>
                      </div>

                      {/* Bid Button */}
                      <div className="flex items-center">
                        <div>
                          <button
                            onClick={openFirstModal}
                            disabled={paymentModal}
                            className="flex items-center gap-1 cursor-pointer bg-[#403730] text-white text-sm font-semibold px-[12px] py-2.5 hover:bg-[#2c241f] transition"
                          >
                            <Gavel className="w-4 h-4" />
                            Bid online{" "}
                            {selectedValue !== "None" ? selectedValue : ""}
                          </button>
                        </div>
                        <div>
                          <Dropdown
                            menu={{
                              items: items.map((item) => ({
                                ...item,
                                label: (
                                  <span className="custom-dropdown-item">
                                    {item.label}
                                  </span>
                                ),
                              })),
                              onClick: handleMenuClick,
                            }}
                            placement="top"
                            trigger={["click"]}
                          >
                            <Button onClick={(e) => e.preventDefault()}>
                              <span className="flex">
                                <ChevronDown className="" />
                              </span>
                            </Button>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" relative ">
                    <img
                      src="/homeSliderImage.jpg"
                      className=" lg:w-[532px] w-[100%] block mx-auto  rounded-2xl lg:h-[630px] mb-6  "
                      alt=""
                    />
                    <div className="absolute top-0 ml-3 mt-4 px-2 py-1 text-sm text-[#263234] bg-white rounded ">
                      <button>Featured</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" bg-[#ecebea]  lg:h-[70vh] lg:hidden block rounded-2xl my-4 ">
              <div className=" lg:w-[1036px] w-full      ">
                <div className="  bg-white shadow  rounded-2xl  flex lg:flex-row flex-col lg:justify-between px-3 py-3 gap-6  ">
                  <div className=" lg:w-[433px]  ">
                    <h1 className=" font-semibold lg:text-5xl text-2xl lg:leading-12 text-black lg:pb-4  ">
                      Capturing the first light of day in a serene landscape
                    </h1>
                    <p className=" lg:mt-4 text-[#263234] lg:text-xl ">
                      Estimated price :
                      <span className=" text-[#263234] font-bold ">
                        {" "}
                        $59-$200
                      </span>
                    </p>
                    <div className="flex items-center gap-1 mt-1 ">
                      {/* icon */}
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
                          d="M9 2C9 1.44772 9.44772 1 10 1H14C14.5523 1 15 1.44772 15 2C15 2.55228 14.5523 3 14 3H10C9.44772 3 9 2.55228 9 2Z"
                          fill="#4B5557"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.7071 10.2929C16.0976 10.6834 16.0976 11.3166 15.7071 11.7071L12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071C10.9024 14.3166 10.9024 13.6834 11.2929 13.2929L14.2929 10.2929C14.6834 9.90237 15.3166 9.90237 15.7071 10.2929Z"
                          fill="#4B5557"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 7C8.13401 7 5 10.134 5 14C5 17.866 8.13401 21 12 21C15.866 21 19 17.866 19 14C19 10.134 15.866 7 12 7ZM3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14C21 18.9706 16.9706 23 12 23C7.02944 23 3 18.9706 3 14Z"
                          fill="#4B5557"
                        />
                      </svg>
                      <p className=" text-[#263234] lg:text-xl font-semibold ">
                        07:03: <span>39sec left </span>
                      </p>
                    </div>
                    <div className="flex items-center lg:gap-3 gap-1.5 lg:mt-6 mt-2.5 ">
                      <div>
                        <img
                          src="./sliderImg-2.jpg"
                          className=" w-12 h-12  rounded-full "
                          alt=""
                        />
                      </div>
                      <div>
                        <h1 className=" text-sm font-semibold text-[#263234] ">
                          Illena D’cruz
                        </h1>
                        <p className=" text-[#4B5557] text-xs ">Contributor</p>
                      </div>
                    </div>
                    <div className="bg-[#e9ebeb] mt-6 lg:p-6 p-2.5 rounded-lg max-w-2xl mx-auto shadow-md">
                      <p className=" text-lg leading-relaxed">
                        I am honored to donate Whispers of Dawn to this auction
                        in support of Healing and Hope for Women. This
                        initiative empowers women facing adversity, providing
                        them with the resources to rebuild their lives. We can
                        create a masterpiece of change.
                      </p>
                    </div>

                    <div className="flex lg:flex-row flex-col items-center justify-between mt-8 gap-4">
                      {/* Price & Bids */}
                      <div className="text-gray-900 text-xl font-bold">
                        $1,80{" "}
                        <span className="text-gray-500 text-sm">(12 bids)</span>
                      </div>

                      {/* Bid Button */}
                      <div className="flex items-center">
                        <div>
                          <button
                            onClick={openFirstModal}
                            disabled={paymentModal}
                            className="flex items-center gap-1 cursor-pointer bg-[#403730] text-white text-sm font-semibold px-[12px] py-2.5 hover:bg-[#2c241f] transition"
                          >
                            <Gavel className="w-4 h-4" />
                            Bid online{" "}
                            {selectedValue !== "None" ? selectedValue : ""}
                          </button>
                        </div>
                        <div>
                          <Dropdown
                            menu={{
                              items: items.map((item) => ({
                                ...item,
                                label: (
                                  <span className="custom-dropdown-item">
                                    {item.label}
                                  </span>
                                ),
                              })),
                              onClick: handleMenuClick,
                            }}
                            placement="top"
                            trigger={["click"]}
                          >
                            <Button onClick={(e) => e.preventDefault()}>
                              <span className="flex">
                                <ChevronDown className="" />
                              </span>
                            </Button>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" relative ">
                    <img
                      src="/homeSliderImage.jpg"
                      className=" lg:w-[532px] w-[100%] block mx-auto  rounded-2xl lg:h-[630px] mb-6  "
                      alt=""
                    />
                    <div className="absolute top-0 ml-3 mt-4 px-2 py-1 text-sm text-[#263234] bg-white rounded ">
                      <button>Featured</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* First Modal Buyer Info Modal Start */}
            <Modal
              title={
                <span className=" lg:text-2xl text-[#263234] font-semibold leading-8 ">
                  Buyer Info
                </span>
              }
              open={buyerInfoModal}
              onCancel={handleCancel}
              footer={null}
              closable={false}
            >
              <BuyerInfoModal setPaymentModal = {setPaymentModal} setBuyerInfoModal = {setBuyerInfoModal} />
            </Modal>

            {/* First Modal Buyer Info Modal End */}

            {/* Second Modal Payment modal start */}
            <Modal
              open={paymentModal}
              footer={null}
              closable={false}
              width={400}
            >
              <BitPaymentModal setBuyerInfoModal = {setBuyerInfoModal} setPaymentModal = {setPaymentModal} />
              
              
            </Modal>
          </div>
        </div>
      </div>
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

export default AuctionSlider;
