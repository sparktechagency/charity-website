import React, { useEffect, useState } from "react";
import { Button, Form, Input, Modal, Select, Upload, Dropdown } from "antd";
import { ChevronDown, Gavel, Quote } from "lucide-react";
import {
  AppleOutlined,
  CreditCardOutlined,
  GoogleOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Radio, Card, Space } from "antd";
import { InputNumber } from "antd";
import Dragger from "antd/es/upload/Dragger";
import Checkbox from "antd/es/checkbox/Checkbox";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { showSuccessAlert } from "../../helper/showSuccessAlert";
import { FaCcMastercard } from "react-icons/fa";
import AggrementPage from "../aggrement/AggrementPage";

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

  const items = [
    { key: "1", label: "$25" },
    { key: "2", label: "$30" },
    { key: "3", label: "$40" },
    { key: "4", label: "$50" },
    { key: "5", label: "None" },
  ];

  const [selectedValue, setSelectedValue] = useState(null);
  const [firstModal, setFirstModal] = useState(false);
  const [secondModal, setSecondModal] = useState(false);

  const handleMenuClick = (e) => {
    const selectedItem = items.find((item) => item.key === e.key);
    if (selectedItem) {
      setSelectedValue(selectedItem.label);
    }
  };

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
    form.resetFields();
  };

  const handleSubmitBuyerInfo = (values) => {
    console.log("Buyer info submitted: ", values);
    console.log("Form submitted!");
    setSecondModal(true);
    setFirstModal(false);
    form.resetFields();
  };

  // first modal end

  // 2nd modal start

  const openSecondModal = () => {
    console.log(`ishan`);
    setSecondModal(true);
    setFirstModal(false);
    document.body.style.overflow = "hidden"; // Disable scrolling
  };
  const handleSecondCancelModal = () => {
    console.log("Second modal opened: ");
    setSecondModal(false);
    setFirstModal(true);
  };

  const handleSubmitModal = async (e) => {
    setSecondModal(false);
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
      firstModal || secondModal ? "hidden" : "auto";
  }, [firstModal, secondModal]);

  // 2nd slide end

  return (
    <div className=" bg-[#ecebea] py-10 mb-5    ">
      <div className=" max-w-[1512px] mx-auto ">
        {/* large device  */}
        <div className="relative hidden lg:flex ">
          <Slider {...settings} className="w-full">
            {/* 1st slide  */}
            <div>
              <div className=" bg-[#ecebea] ml-5 lg:h-[70vh] hidden lg:flex rounded-2xl ">
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

                      <div className="flex lg:flex-row flex-col items-center justify-between mt-8 gap-4">
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
                      </div>

                      <div className="flex lg:flex-row flex-col items-center justify-between mt-8 gap-4">
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

              <Form
                form={form}
                onFinish={handleSubmitBuyerInfo}
                layout="vertical"
              >
                <Form.Item
                  style={{ marginBottom: "0px" }}
                  rules={[
                    {
                      required: true,
                      message: "Please enter your name!",
                    },
                  ]}
                  label={
                    <span className=" font-medium text-sm text-[#263234] ">
                      Name
                    </span>
                  }
                  name="name"
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
                  rules={[
                    {
                      required: true,
                      message: "Please enter your contact number!",
                    },
                  ]}
                  name="contact"
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
                  rules={[
                    {
                      required: true,
                      message: "Please enter your email!",
                      type: "email",
                    },
                  ]}
                  label={
                    <span className=" font-medium text-sm text-[#263234] ">
                      Email
                    </span>
                  }
                  name="email"
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
                    <span onClick={openDonateTermModal} className="underline">terms & conditions</span>{" "}
                  </Checkbox>
                </Form.Item>

                <div className="flex flex-col lg:flex-row md:flex-row md:ml-32 md:gap-16 lg:justify-end  lg:gap-5   ">
                  <div className="  ">
                    <Button
                      className=" missionModalBtn1"
                      onClick={handleCancel}
                    >
                      Cancel
                    </Button>
                  </div>
                  <div>
                    <Button className=" missionModalBtn2" htmlType="submit">
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
                  {/* Card Number */}
                  <Form.Item
                    name="cardNumber"
                    label={
                      <span className="text-[#414651] text-[14px] font-medium">
                        Enter your card number
                      </span>
                    }
                    rules={[
                      { required: true, message: "Card number is required" },
                    ]}
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
                      {
                        required: true,
                        message: "Please select a payment method",
                      },
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
                        <span className="flex items-center gap-3">
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
                  <div className="flex flex-col lg:flex-row md:flex-row lg:justify-end gap-16  lg:gap-5   ">
                    <div className="  ">
                      <Button
                        className=" missionModalBtn1"
                        onClick={handleSecondCancelModal}
                      >
                        Back
                      </Button>
                    </div>
                    <div>
                      <Button
                        className=" missionModalBtn2"
                        onClick={handleSubmitModal}
                      >
                        Save my card
                      </Button>
                    </div>
                  </div>
                </Form>
              </div>
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
