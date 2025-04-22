import React, { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import { Button, Form, Input, Modal, Select, Upload, Dropdown } from "antd";
import { ChevronDown, Gavel, Quote } from "lucide-react";
import {
  AppleOutlined,
  CreditCardOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import { InputNumber } from "antd";
import Dragger from "antd/es/upload/Dragger";
import Checkbox from "antd/es/checkbox/Checkbox";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { showSuccessAlert } from "../../helper/showSuccessAlert";
import AggrementPage from "../aggrement/AggrementPage";
const HomeSlider = () => {
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

  const donateFull = Form.useWatch("donateFull", form);

  console.log(!donateFull);

  // first slider start

  // 1st modal start

  const [isModal, setIsModal] = useState(false);
  const [secondModalOpen, setSecondModalOpen] = useState(false);

  const submitActionDetails = (values) => {
    console.log("Form Values:", values);
    setSecondModalOpen(true);
    setIsModal(false);
    form.resetFields();
  };

  const cancleFirstModal = () => {
    setIsModal(false);
    form.resetFields();
  };

  const backFirstModal = () => {
    setSecondModalOpen(false);
    setThirdModalOpen(true);
  };

  // first modal end

  // 2nd modal start
  const openSecondModal = () => {
    setSecondModalOpen(true);
    setIsModal(false);
  };
  // 2nd modal end

  // 3rd modal start

  const [thirdModalOpen, setThirdModalOpen] = useState(false);

  const handleSubmit = (values) => {
    console.log(values);
    console.log(`form submitted`);
    showSuccessAlert();
    setSecondModalOpen(false);
    setThirdModalOpen(false);
    setIsModal(false);
    Form.resetFields();
    console.log(`event tigger`);
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

  useEffect(() => {
    document.body.style.overflow =
      isModal || secondModalOpen || thirdModalOpen ? "hidden" : "auto";
  }, [isModal, secondModalOpen, thirdModalOpen]);

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

  console.log(`selectedItem is ${selectedValue}`);

  // first modal start

  const openFirstModal = () => {
    if (selectedValue && selectedValue !== "None") {
      setFirstModal(true);
    } else {
      console.log("No bid selected, modal won't open.");
    }
  };

  const handleCancel = () => {
    setFirstModal(false);
  };

  const submitBuyerInfo = (values) => {
    console.log(values);
    setFirstModal(false);
    setSecondModal(true);
    console.log("ishan");
  };

  // first modal end

  // 2nd modal start

  const handleSecondCancelModal = () => {
    console.log("Second modal opened: ");
    setSecondModal(false);
    setFirstModal(true);
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
      firstModal || secondModal ? "hidden" : "auto";
  }, [firstModal, secondModal]);

  // 2nd slide end

  // react captcha

  const [verified, isVerified] = useState(false);

  function onChange(e) {
    console.log("Captcha value:", e);
    isVerified(true);
  }

  return (
    <div className=" bg-[#ecebea] py-4 mb-5   ">
      <div className=" max-w-[1512px] mx-auto ">
        {/* large device  */}
        <div className="relative hidden lg:flex ">
          <Slider {...settings} className="w-full">
            {/* 1st slide  */}
            <div>
              <div>
                <div className="relative lg:w-[715px] w-full">
                  <img
                    src="/auctionBg-img.jpg"
                    className="w-full h-[75vh] object-cover rounded-2xl "
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
                        onClick={() => setIsModal(true)}
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

            <div>
              <div className=" bg-[#ecebea] ml-5  rounded-2xl ">
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
                              disabled={secondModal}
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
                      onClick={() => setIsModal(true)}
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
          <div>
            <div className=" bg-[#ecebea] ml-5 border-2 border-red lg:h-[70vh] hidden lg:flex rounded-2xl ">
              <div className="  w-full      ">
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
                            disabled={secondModal}
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
                    <div className="bg-[#e9ebeb]  mt-6 lg:p-6 p-2.5 rounded-lg max-w-2xl shadow-md">
                      <p className=" text-lg leading-relaxed">
                        I am honored to donate Whispers of Dawn to this auction
                        in support of Healing and Hope for Women. This
                        initiative empowers women facing adversity, providing
                        them with the resources to rebuild their lives. We can
                        create a masterpiece of change.
                      </p>
                    </div>

                    <div className="flex flex-col  justify-between mt-8 gap-4">
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
                            disabled={secondModal}
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

            {/* First Modal */}
            <Modal
              title={
                <span className=" lg:text-2xl text-[#263234] font-semibold leading-8 ">
                  Buyer Info
                </span>
              }
              open={firstModal}
              onCancel={handleCancel}
              footer={null}
              closable={false}
            >
              <p className="text-[#263234] mt-4 mb-6 text-[16px] ">
                Please input your real data so that we can reach to you. Thank
                you.
              </p>

              <Form form={form} layout="vertical">
                <Form.Item
                  style={{ marginBottom: "0px" }}
                  label={
                    <span className=" font-medium text-sm text-[#263234] ">
                      Name
                    </span>
                  }
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your name!",
                    },
                  ]}
                >
                  <Input
                    style={{
                      border: "1px solid #A6ABAC ",
                      padding: " 10px 14px ",
                      color: "#818889",
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                    placeholder="Enter your name"
                  />
                </Form.Item>

                <Form.Item
                  style={{ marginBottom: "0px", marginTop: "16px" }}
                  label={
                    <span className=" font-medium text-sm text-[#263234] ">
                      Contact Number
                    </span>
                  }
                  name="contact"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your contact number!",
                    },
                  ]}
                >
                  <Input
                    style={{
                      border: "1px solid #A6ABAC ",
                      padding: " 10px 14px ",
                      color: "#818889",
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                    placeholder="Enter contact number"
                  />
                </Form.Item>

                <Form.Item
                  style={{ marginBottom: "0px", marginTop: "16px" }}
                  label={
                    <span className=" font-medium text-sm text-[#263234] ">
                      Email
                    </span>
                  }
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your email!",
                    },
                  ]}
                >
                  <Input
                    style={{
                      border: "1px solid #A6ABAC ",
                      padding: " 10px 14px ",
                      color: "#818889",
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                    placeholder="Enter your email"
                  />
                </Form.Item>

                <Form.Item
                  style={{ marginTop: "12px" }}
                  name="agree"
                  valuePropName="checked"
                  rules={[
                    { required: true, message: "Please agree to the terms!" },
                  ]}
                >
                  <Checkbox
                    style={{
                      color: "#263234",
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                  >
                    I agree to the{" "}
                    <span onClick={openDonateTermModal} className="underline">
                      terms & conditions
                    </span>{" "}
                  </Checkbox>
                </Form.Item>

                <div className="flex flex-col lg:flex-row md:flex-row justify-end  lg:gap-5   ">
                  <Button className="missionModalBtn1 " onClick={handleCancel}>
                    Cancel
                  </Button>
                  <div>
                    <Button
                      onClick={submitBuyerInfo}
                      className="missionModalBtn2"
                      htmlType="submit"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </Form>
            </Modal>

            {/* Second Modal */}
            <Modal
              open={secondModal}
              footer={null}
              closable={false}
              width={400}
            >
              <h1 className="text-[#263234] font-semibold text-2xl leading-8 mb-4 block ">
                Choose a payment getway
              </h1>
              <div className="flex items-center">
                <div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_179849_6497"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_179849_6497)">
                      <path
                        d="M10.95 15.55L16.6 9.9L15.175 8.475L10.95 12.7L8.85 10.6L7.425 12.025L10.95 15.55ZM12 22C9.68333 21.4167 7.77083 20.0875 6.2625 18.0125C4.75417 15.9375 4 13.6333 4 11.1V5L12 2L20 5V11.1C20 13.6333 19.2458 15.9375 17.7375 18.0125C16.2292 20.0875 14.3167 21.4167 12 22Z"
                        fill="#658A30"
                      />
                    </g>
                  </svg>
                </div>
                <div>
                  <h1 className="text-[#263234] text-[16px] ">
                    You won’t be charged until won the bid <br /> called.
                  </h1>
                </div>
                {/* Form Start */}
              </div>
              <div className="mt-4">
                <Form layout="vertical">
                  {/* Card number  */}

                  <Form.Item
                    style={{ marginBottom: "0px" }}
                    label={
                      <span className=" text-[#414651] text-[14px] font-medium ">
                        Enter your card number
                      </span>
                    }
                  >
                    <Input
                      className="py-3 px-4 hover:outline-none focus:outline-none placeholder:text-[16px] w-full"
                      placeholder="Enter your card number"
                      maxLength={19} // 16 digits + optional spaces
                      style={{
                        border: "1px solid #D5D7DA",
                        outline: "none",
                      }}
                    />
                  </Form.Item>

                  {/* Choose payment method  */}

                  <Form.Item
                    style={{ marginBottom: "20px", marginTop: "12px" }}
                    label={
                      <span className="text-[#414651] text-[14px] font-medium ">
                        Choose a payment method
                      </span>
                    }
                  >
                    <Select
                      placeholder="Select Payment Method"
                      style={{
                        width: "100%",
                        backgroundColor: "#f9f9f9",
                        borderRadius: "1px solid #414651  ",
                        height: "45px",
                        // fontFamily:"cursive",
                        fontWeight: "500px",
                      }}
                      className="shadow-sm hover:shadow-md focus:shadow-md transition-all"
                    >
                      <Option
                        style={{ fontSize: "14px", fontWeight: "600" }}
                        value="card"
                      >
                        <CreditCardOutlined className="mr-2 * " /> Card
                      </Option>
                      <Option
                        style={{ fontSize: "14px", fontWeight: "600" }}
                        value="apple"
                      >
                        <AppleOutlined className="mr-2" /> Apple Pay
                      </Option>
                      <Option
                        style={{ fontSize: "14px", fontWeight: "600" }}
                        value="google"
                      >
                        <GoogleOutlined className="mr-2" /> Google Pay
                      </Option>
                      <Option
                        style={{ fontSize: "14px", fontWeight: "600" }}
                        value="paypal"
                      >
                        <span className=" flex items-center gap-3  ">
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
                          </svg>{" "}
                          PayPal
                        </span>
                      </Option>
                    </Select>
                  </Form.Item>

                  {/* Modal Buttons */}

                  <div className="flex flex-col lg:flex-row md:flex-row lg:justify-end lg:gap-8 ">
                    <Button
                      onClick={handleSecondCancelModal}
                      className="missionModalBtn1"
                    >
                      Back
                    </Button>

                    <Button
                      // onClick={handleSubmitModal}
                      className="missionModalBtn2"
                    >
                      Save my card
                    </Button>
                  </div>
                </Form>
              </div>
            </Modal>
          </div>
        </div>
      </div>

      {/* 1st slider modal  */}

      {/* First Modal */}
      <Modal
        centered
        open={isModal}
        closable={false} // Removes close (X) icon
        width={600}
        footer={null}
      >
        <div className="  ">
          <h1 className=" text-[#263234] font-semibold text-2xl leading-8 ">
            Auction details
          </h1>
          <div className=" flex items-center gap-2 mt-4  ">
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
                  d="M8 18C8 17.4477 8.44772 17 9 17H15C15.5523 17 16 17.4477 16 18C16 18.5523 15.5523 19 15 19H9C8.44772 19 8 18.5523 8 18Z"
                  fill="#F5851E"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9 22C9 21.4477 9.44772 21 10 21H14C14.5523 21 15 21.4477 15 22C15 22.5523 14.5523 23 14 23H10C9.44772 23 9 22.5523 9 22Z"
                  fill="#F5851E"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.05025 3.05025C8.36301 1.7375 10.1435 1 12 1C13.8565 1 15.637 1.7375 16.9497 3.05025C18.2605 4.36103 18.9978 6.13813 19 7.99162C19.0123 8.78605 18.8568 9.57416 18.5438 10.3045C18.2326 11.0306 17.7727 11.6833 17.1937 12.2206C16.5443 12.8733 16.2066 13.456 16.0735 14.1807C15.9738 14.7238 15.4525 15.0833 14.9093 14.9835C14.3662 14.8838 14.0067 14.3625 14.1065 13.8193C14.3324 12.589 14.9311 11.6547 15.7929 10.7929C15.8026 10.7831 15.8126 10.7736 15.8227 10.7643C16.2017 10.4154 16.5026 9.99017 16.7055 9.51666C16.9085 9.04315 17.0089 8.53205 17.0001 8.01696L17 8C17 6.67392 16.4732 5.40215 15.5355 4.46447C14.5979 3.52678 13.3261 3 12 3C10.6739 3 9.40215 3.52678 8.46447 4.46447C7.52678 5.40215 7 6.67392 7 8C7 8.79486 7.16385 9.74236 8.19272 10.7785C9.06407 11.5822 9.65861 12.6414 9.89067 13.8043C9.99874 14.3459 9.6473 14.8726 9.10569 14.9807C8.56409 15.0887 8.03741 14.7373 7.92933 14.1957C7.77899 13.4423 7.39218 12.7564 6.82519 12.238C6.8142 12.2279 6.80343 12.2176 6.79289 12.2071C5.29462 10.7088 5 9.20145 5 8C5 6.14348 5.7375 4.36301 7.05025 3.05025Z"
                  fill="#F5851E"
                />
              </svg>
            </span>
            <div>
              <h1 className=" text-[16px] text-[#263234] leading-6 ">
                Please input your auction details to help buyer find out exactly
                their needs.
              </h1>
            </div>
          </div>
          {/* step */}
          <div>
            <p className=" text-[#263234] text-sm font-semibold mt-4 ">
              Step 1 of 3
            </p>
          </div>
          {/* step */}
          <div className="flex gap-3.5 mt-2.5 mb-6 ">
            <div className=" w-[33%] h-1.5 bg-[#457205] "></div>
            <div className=" w-[33%] h-1.5 bg-[#E9EBEB] "></div>
            <div className=" w-[33%] h-1.5 bg-[#E9EBEB] "></div>
          </div>

          <Form form={form} onFinish={submitActionDetails} layout="vertical">
            {/* Auction title */}
            <Form.Item
              name="title"
              label="Auction title"
              style={{ marginBottom: "0px" }}
              rules={[
                { required: true, message: "Please enter Auction title" },
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
            {/* Description */}
            <Form.Item
              style={{ marginBottom: "0px", marginTop: "8px" }}
              name="description"
              label="Item Description"
              rules={[
                {
                  required: true,
                  message: "Please enter the item description!",
                },
                {
                  min: 6,
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
            <Form.Item
              style={{ marginTop: "18px" }}
              name="image"
              valuePropName="fileList"
              getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
              rules={[
                {
                  required: true,
                  message: "Please upload an image!",
                },
              ]}
            >
              <Dragger
                accept=".jpg,.jpeg,.png,.pdf"
                beforeUpload={() => false} // Prevent automatic upload
                multiple={false}
                showUploadList={true}
              >
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

            {/* Receive Percentage */}
            <Form.Item
              name="percentage"
              label={
                <span className="text-sm text-[#263234] font-medium">
                  I want to receive
                </span>
              }
              style={{ marginBottom: 0, marginTop: "16px" }}
            >
              <Select
                style={{
                  width: "100%",
                  height: "50px",
                  borderRadius: "5px",
                  outline: 0,
                  border: "none",
                }}
                placeholder="30% of net value"
                defaultValue={"30%"}
                disabled={donateFull}
              >
                <Option value="30%">30%</Option>
              </Select>
            </Form.Item>

            {/* Donation Checkbox */}
            <Form.Item
              name="donateFull"
              valuePropName="checked"
              style={{ marginBottom: 0 }}
            >
              <Checkbox>I want to donate 100%.</Checkbox>
            </Form.Item>

            {/* Terms Checkbox */}
            <Form.Item
              name="agreeTerms"
              valuePropName="checked"
              style={{ marginBottom: 0 }}
            >
              <Checkbox>
                I agree with Virtue Hope's{" "}
                <span onClick={openDonateTermModal} className="underline">
                  terms & conditions.
                </span>
              </Checkbox>
            </Form.Item>

            {/* captcha  */}
            <div className="   my-5 ">
              <Form.Item>
                <ReCAPTCHA
                  sitekey="6Len-w8rAAAAAE68L5bXR-wOuwmID9i0xVW1Eqp1"
                  onChange={onChange}
                />
              </Form.Item>
            </div>
            {/* Modal Buttons */}
            <div className=" flex flex-col md:flex-row md:justify-end justify-start  lg:flex-row  lg:justify-end mt-5 mb-2">
              <Button onClick={cancleFirstModal} className="  navBtn1  ">
                Cancel
              </Button>
              <Button
                disabled={!verified}
                className="navBtn2"
                onClick={openSecondModal}
              >
                Proceed next step
              </Button>
            </div>
          </Form>
        </div>
      </Modal>

      {/* Second Modal */}

      <div className=" ">
        <Modal
          centered
          open={secondModalOpen}
          closable={false}
          footer={null}
          width={600}
        >
          <div className="  ">
            <h1 className=" text-[#263234] font-semibold text-2xl leading-8 ">
              Personal details
            </h1>
            <div className=" flex items-center gap-2 mt-4  ">
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
                    d="M8 18C8 17.4477 8.44772 17 9 17H15C15.5523 17 16 17.4477 16 18C16 18.5523 15.5523 19 15 19H9C8.44772 19 8 18.5523 8 18Z"
                    fill="#F5851E"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 22C9 21.4477 9.44772 21 10 21H14C14.5523 21 15 21.4477 15 22C15 22.5523 14.5523 23 14 23H10C9.44772 23 9 22.5523 9 22Z"
                    fill="#F5851E"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.05025 3.05025C8.36301 1.7375 10.1435 1 12 1C13.8565 1 15.637 1.7375 16.9497 3.05025C18.2605 4.36103 18.9978 6.13813 19 7.99162C19.0123 8.78605 18.8568 9.57416 18.5438 10.3045C18.2326 11.0306 17.7727 11.6833 17.1937 12.2206C16.5443 12.8733 16.2066 13.456 16.0735 14.1807C15.9738 14.7238 15.4525 15.0833 14.9093 14.9835C14.3662 14.8838 14.0067 14.3625 14.1065 13.8193C14.3324 12.589 14.9311 11.6547 15.7929 10.7929C15.8026 10.7831 15.8126 10.7736 15.8227 10.7643C16.2017 10.4154 16.5026 9.99017 16.7055 9.51666C16.9085 9.04315 17.0089 8.53205 17.0001 8.01696L17 8C17 6.67392 16.4732 5.40215 15.5355 4.46447C14.5979 3.52678 13.3261 3 12 3C10.6739 3 9.40215 3.52678 8.46447 4.46447C7.52678 5.40215 7 6.67392 7 8C7 8.79486 7.16385 9.74236 8.19272 10.7785C9.06407 11.5822 9.65861 12.6414 9.89067 13.8043C9.99874 14.3459 9.6473 14.8726 9.10569 14.9807C8.56409 15.0887 8.03741 14.7373 7.92933 14.1957C7.77899 13.4423 7.39218 12.7564 6.82519 12.238C6.8142 12.2279 6.80343 12.2176 6.79289 12.2071C5.29462 10.7088 5 9.20145 5 8C5 6.14348 5.7375 4.36301 7.05025 3.05025Z"
                    fill="#F5851E"
                  />
                </svg>
              </span>
              <div>
                <h1>
                  Help us to collecting your auction item by providing your
                  information <br /> accurate.
                </h1>
              </div>
            </div>
            {/* step */}
            <div>
              <p className=" text-[#263234] text-sm font-semibold mt-4 ">
                Step 2 of 3
              </p>
            </div>
            {/* step */}
            <div className="flex gap-3.5 mt-2.5 mb-6 ">
              <div className=" w-[33%] h-1.5 bg-[#457205] "></div>
              <div className=" w-[33%] h-1.5 bg-[#457205] "></div>
              <div className=" w-[33%] h-1.5 bg-[#E9EBEB] "></div>
            </div>

            <Form layout="vertical" className=" p-6   rounded-lg">
              {/* Name Field */}
              <Form.Item
                style={{ marginBottom: "0px" }}
                label={
                  <span className=" text-sm text-[#263234] font-medium ">
                    Name
                  </span>
                }
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please enter your name!",
                  },
                ]}
              >
                <Input
                  style={{
                    padding: "12px 14px",
                    border: "1px solid #A6ABAC ",
                    fontSize: "14px",
                  }}
                  placeholder="Enter your name"
                />
              </Form.Item>

              {/* Email Field */}
              <Form.Item
                style={{ marginBottom: "0px", marginTop: "10px" }}
                label={
                  <span className=" text-sm text-[#263234] font-medium ">
                    Email
                  </span>
                }
                rules={[
                  {
                    required: true,
                    message: "Please enter your email!",
                    type: "email",
                  },
                ]}
                name="email"
              >
                <Input
                  style={{
                    padding: "12px 14px",
                    border: "1px solid #A6ABAC ",
                    fontSize: "14px",
                    marginBottom: "0px",
                  }}
                  placeholder="Enter your email address"
                />
              </Form.Item>

              {/* Contact Number Field */}
              <Form.Item
                style={{ marginBottom: "0px", marginTop: "10px" }}
                label="Contact number"
                name="contact"
                rules={[
                  {
                    required: true,
                    message: "Please enter your contact number!",
                  },
                ]}
              >
                <InputNumber
                  style={{
                    padding: "8px 14px",
                    border: "1px solid #A6ABAC",
                    fontSize: "14px",
                    marginBottom: "0px",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                  placeholder={"Uk +123"}
                  controls={false} // Hides the increment/decrement buttons
                />
              </Form.Item>

              {/* City Dropdown */}
              <Form.Item
                style={{ marginBottom: "0px" }}
                label={
                  <span className=" text-sm text-[#263234] font-medium mt-3 ">
                    City
                  </span>
                }
                name="city"
              >
                <Select
                  style={{
                    width: "100%",
                    height: "50px", // Better for consistent spacing
                    borderRadius: "5px",
                    outline: 0,
                    border: "none", // Removes border from Select
                  }}
                  dropdownStyle={{}}
                  placeholder="City name"
                >
                  <Option value="london">London</Option>
                  <Option value="manchester">Manchester</Option>
                  <Option value="birmingham">Birmingham</Option>
                </Select>
              </Form.Item>

              {/* Address Field */}
              <Form.Item
                label={
                  <span className=" text-sm text-[#263234] font-medium mt-3 ">
                    Address
                  </span>
                }
                name="address"
              >
                <Input
                  style={{
                    padding: "12px 14px",
                    border: "1px solid #A6ABAC",
                    fontSize: "14px",
                    marginBottom: "0px",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                  placeholder="Enter your location"
                />
              </Form.Item>

              <Form.Item
                style={{ marginTop: "18px" }}
                name="image"
                valuePropName="fileList"
                getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
                rules={[
                  {
                    required: true,
                    message: "Please upload an image!",
                  },
                ]}
              >
                <Dragger
                  accept=".jpg,.jpeg,.png,.pdf"
                  beforeUpload={() => false} // Prevent automatic upload
                  multiple={false}
                  showUploadList={true}
                >
                  <div className="flex items-center gap-4 ">
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
                    <p className="ant-upload-text">
                      Upload your photo of drag & drop here.
                    </p>
                  </div>
                </Dragger>
              </Form.Item>
              <div className="flex flex-col lg:flex-row md:flex-row lg:justify-end lg:gap-8 ">
                <Button
                  onClick={() => {
                    setSecondModalOpen(false);
                    setIsModal(true);
                  }}
                  className="missionModalBtn1"
                >
                  Back
                </Button>

                <Button onClick={backFirstModal} className="missionModalBtn2">
                  Next
                </Button>
              </div>
            </Form>
          </div>
        </Modal>
      </div>

      {/* Third Modal */}

      {!donateFull && (
        <Modal
          title=""
          visible={thirdModalOpen}
          // onCancel={handleCancel}
          footer={null}
          width={400}
          closable={false}
        >
          <h1 className=" text-[#263234] text-2xl font-semibold leading-8 ">
            Get paid
          </h1>
          <div className="flex items-center gap-2 mt-4 ">
            <div>
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
                  d="M8 18C8 17.4477 8.44772 17 9 17H15C15.5523 17 16 17.4477 16 18C16 18.5523 15.5523 19 15 19H9C8.44772 19 8 18.5523 8 18Z"
                  fill="#F5851E"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9 22C9 21.4477 9.44772 21 10 21H14C14.5523 21 15 21.4477 15 22C15 22.5523 14.5523 23 14 23H10C9.44772 23 9 22.5523 9 22Z"
                  fill="#F5851E"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.05025 3.05025C8.36301 1.7375 10.1435 1 12 1C13.8565 1 15.637 1.7375 16.9497 3.05025C18.2605 4.36103 18.9978 6.13813 19 7.99162C19.0123 8.78605 18.8568 9.57416 18.5438 10.3045C18.2326 11.0306 17.7727 11.6833 17.1937 12.2206C16.5443 12.8733 16.2066 13.456 16.0735 14.1807C15.9738 14.7238 15.4525 15.0833 14.9093 14.9835C14.3662 14.8838 14.0067 14.3625 14.1065 13.8193C14.3324 12.589 14.9311 11.6547 15.7929 10.7929C15.8026 10.7831 15.8126 10.7736 15.8227 10.7643C16.2017 10.4154 16.5026 9.99017 16.7055 9.51666C16.9085 9.04315 17.0089 8.53205 17.0001 8.01696L17 8C17 6.67392 16.4732 5.40215 15.5355 4.46447C14.5979 3.52678 13.3261 3 12 3C10.6739 3 9.40215 3.52678 8.46447 4.46447C7.52678 5.40215 7 6.67392 7 8C7 8.79486 7.16385 9.74236 8.19272 10.7785C9.06407 11.5822 9.65861 12.6414 9.89067 13.8043C9.99874 14.3459 9.6473 14.8726 9.10569 14.9807C8.56409 15.0887 8.03741 14.7373 7.92933 14.1957C7.77899 13.4423 7.39218 12.7564 6.82519 12.238C6.8142 12.2279 6.80343 12.2176 6.79289 12.2071C5.29462 10.7088 5 9.20145 5 8C5 6.14348 5.7375 4.36301 7.05025 3.05025Z"
                  fill="#F5851E"
                />
              </svg>
            </div>
            <div>
              <p className="text-[#263234]">
                Once your auction is sold out, you will get paid and donation
                amount will be funded to the Virtue Hope.
              </p>
            </div>
          </div>
          {/* step */}
          <div>
            <p className=" text-[#263234] text-sm font-semibold mt-4 ">
              Step 3 of 3
            </p>
          </div>
          {/* step */}
          <div className="flex gap-3.5 mt-2.5 mb-6 ">
            <div className=" w-[33%] h-1.5 bg-[#457205] "></div>
            <div className=" w-[33%] h-1.5 bg-[#457205] "></div>
            <div className=" w-[33%] h-1.5 bg-[#457205] "></div>
          </div>
          {/* Form Start */}
          <Form form={form} onFinish={handleSubmit} layout="vertical">
            {/* Card Number */}
            <Form.Item
              name="cardNumber"
              label={
                <span className="text-[#414651] text-[14px] font-medium">
                  Enter your card number
                </span>
              }
              rules={[{ required: true, message: "Card number is required" }]}
              style={{ marginBottom: "0px" }}
            >
              <Input
                className="py-3 px-4 placeholder:text-[16px] w-full"
                placeholder="Enter your card number"
                maxLength={19}
                style={{
                  border: "1px solid #D5D7DA",
                  outline: "none",
                }}
              />
            </Form.Item>

            {/* Payment Method */}
            <Form.Item
              name="paymentMethod"
              label={
                <span className="text-[#414651] text-[14px] font-medium">
                  Choose a payment method
                </span>
              }
              rules={[
                { required: true, message: "Please select a payment method" },
              ]}
              style={{ marginBottom: "20px", marginTop: "12px" }}
            >
              <Select
                placeholder="Select Payment Method"
                bordered={false}
                style={{
                  width: "100%",
                  backgroundColor: "#f9f9f9",
                  height: "45px",
                  fontWeight: "500",
                }}
                className="shadow-sm hover:shadow-md focus:shadow-md transition-all"
              >
                <Option value="card">
                  <CreditCardOutlined className="mr-2" /> Card
                </Option>
                <Option value="apple">
                  <AppleOutlined className="mr-2" /> Apple Pay
                </Option>
                <Option value="google">
                  <GoogleOutlined className="mr-2" /> Google Pay
                </Option>
                <Option value="paypal">
                  <span className="flex items-center gap-1">
                    {/* Your PayPal SVG here */}
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
                    PayPal
                  </span>
                </Option>
              </Select>
            </Form.Item>

            {/* Modal Buttons */}
            <div className="flex flex-col lg:flex-row md:flex-row lg:justify-end lg:gap-8">
              <Button
                onClick={() => {
                  setThirdModalOpen(false);
                  setSecondModalOpen(true);
                }}
                className="missionModalBtn1"
              >
                Go Back
              </Button>

              <Button
                htmlType="submit"
                onClick={handleSubmit}
                className="missionModalBtn2"
              >
                Complete process
              </Button>
            </div>
          </Form>
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
