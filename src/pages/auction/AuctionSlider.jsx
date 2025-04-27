import { ChevronDown, ChevronUp, Gavel, Quote } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import { Radio } from "antd";
import { FaCcMastercard } from "react-icons/fa";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

// const sliderData = [
//   {
//     id: 1,
//     title: "The ancient statue of Sri Lanka",
//     estimatedPrice: "$59-$200",
//     uploadDate: "2025-04-25T10:00:00Z", // 25th April
//     contributor: {
//       name: "Illena D’cruz",
//       role: "Contributor",
//       image: "./sliderImg-2.jpg",
//     },
//     quote:
//       "I am honored to donate Whispers of Dawn to this auction in support of Healing and Hope for Women. This initiative empowers women facing adversity, providing them with the resources to rebuild their lives. We can create a masterpiece of change.",
//     bids: 12,
//     image: "/sliderImg-3.jpg",
//     total_bits: 3,
//     max_bit_online: 500,
//   },
//   {
//     id: 2,
//     title: "Capturing the first light of day in a serene landscape",
//     estimatedPrice: "$59-$200",
//     uploadDate: "2025-04-20T12:30:00Z", // 26th April
//     contributor: {
//       name: "Illena D’cruz",
//       role: "Contributor",
//       image: "./sliderImg-2.jpg",
//     },
//     quote:
//       "I am honored to donate Whispers of Dawn to this auction in support of Healing and Hope for Women. This initiative empowers women facing adversity, providing them with the resources to rebuild their lives. We can create a masterpiece of change.",
//     bids: 12,
//     image: "/homeSliderImage.jpg",
//     total_bits: 4,
//     max_bit_online: 700,
//   },
//   {
//     id: 3,
//     title: "Capturing the first light of day in a serene landscape",
//     estimatedPrice: "$59-$200",
//     uploadDate: "2025-04-23T09:15:00Z", // 27th April
//     contributor: {
//       name: "Illena D’cruz",
//       role: "Contributor",
//       image: "./sliderImg-2.jpg",
//     },
//     quote:
//       "I am honored to donate Whispers of Dawn to this auction in support of Healing and Hope for Women. This initiative empowers women facing adversity, providing them with the resources to rebuild their lives. We can create a masterpiece of change.",
//     bids: 12,
//     image: "/homeSliderImage.jpg",
//     total_bits: 5,
//     max_bit_online: 800,
//   },
// ];

const AuctionSlider = () => {
  const [form] = Form.useForm();
  const [sliderData, setSliderData] = useState([]);
  const [loading, setLoading] = useState(false);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let res = await axiosPublic.get(`/get-bit-auction`);
        if (res.data.success) {
          setSliderData(res.data.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  // States for each slide's bid selection and bid visibility
  const [selectedBids, setSelectedBids] = useState(
    new Array(sliderData.length).fill("") // Initializes an empty array for selected bids
  );
  const [showBids, setShowBids] = useState(
    new Array(sliderData.length).fill(false) // Initializes the visibility of bids
  );
  const [customBids, setCustomBids] = useState(
    new Array(sliderData.length).fill("") // Initializes empty custom bids for each slide
  );

  // 1st modal use state
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 2nd modal useState
  const [paymentModal, setPaymentMethodModal] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const bidPrices = ["£100", "£150", "£200", "£250", "£300"];

  const handleBidChange = (index, e) => {
    const newCustomBids = [...customBids];
    newCustomBids[index] = e.target.value;
    setCustomBids(newCustomBids);
  };

  const handleBidToggle = (index) => {
    const newShowBids = [...showBids];
    newShowBids[index] = !newShowBids[index];
    setShowBids(newShowBids);
  };

  const handleBidSelect = (index, price) => {
    const newSelectedBids = [...selectedBids];
    newSelectedBids[index] = price;
    setSelectedBids(newSelectedBids);
    setShowBids((prevState) => prevState.map(() => false));
  };

  const handleCustomBidSet = (index) => {
    const newSelectedBids = [...selectedBids];
    newSelectedBids[index] = customBids[index];
    setSelectedBids(newSelectedBids);
    const newCustomBids = [...customBids];
    newCustomBids[index] = "";
    setCustomBids(newCustomBids);
    setShowBids((prevState) => prevState.map(() => false));
  };

  // 1st modal start buyer info

  const handleModalOpen = (index) => {
    if (selectedBids[index]) {
      setSelectedPrice(selectedBids[index]);
      setIsModalOpen(true); // Open the modal
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const submitBuyerModal = (values) => {
    setPaymentMethodModal(true);
    setIsModalOpen(false);
    console.log(values);
  };

  // first modal end

  // 2nd modal start

  const handlePaymentModalClose = () => {
    setIsModalOpen(true);
    setPaymentMethodModal(false);
  };

  // 2nd modal end

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

  // date time calculate start

  const [timeLeft, setTimeLeft] = useState([]);

  // Function to calculate time left based on the updated_at timestamp
  const calculateTimeLeft = (updated_at) => {
    const now = new Date();
    const endTime = new Date(updated_at).getTime() + 7 * 24 * 60 * 60 * 1000; // 7 days after the upload
    const difference = endTime - now.getTime();

    if (difference <= 0) {
      return "Auction ended";
    }

    const days = Math.floor(difference / (1000 * 3600 * 24));
    const hours = Math.floor((difference % (1000 * 3600 * 24)) / (1000 * 3600));
    const minutes = Math.floor((difference % (1000 * 3600)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s left`;
  };

  // Set interval to update countdown every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(
        sliderData.map((slide) => calculateTimeLeft(slide.updated_at))
      );
    }, 1000); // Update every second

    return () => clearInterval(interval); // Clean up on unmount
  }, [sliderData]); // Re-run effect if sliderData changes

  // date time calculate end

  // modal scroll offf

  useEffect(() => {
    document.body.style.overflow =
      isModalOpen || paymentModal ? "hidden" : "auto";
  }, [isModalOpen, paymentModal]);

  if (sliderData.length === 0) {
    return (
      <div>
        <motion.div
          className="flex h-[50vh] w-full items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="flex flex-col items-center text-center gap-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5,
            }}
          >
            <Loader2 className="animate-spin text-[#403730] w-10 h-10" />
            <h1 className="text-2xl font-semibold text-[#403730]">
              Loading Auction data...
            </h1>
            <p className="text-gray-500 text-sm max-w-xs">
              Please wait while we fetch the data
            </p>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <Slider {...settings} className="w-full">
        {sliderData.map((slide, index) => (
          <div key={slide.id}>
            <div className="bg-[#ecebea] ml-5 hidden lg:flex rounded-2xl">
              <div className="lg:w-[1036px] w-full">
                <div className="bg-white shadow rounded-2xl flex lg:flex-row flex-col lg:justify-between px-6 py-6 gap-6">
                  {/* LEFT SECTION */}
                  <div className="lg:w-[433px]">
                    <div className="  h-44 ">
                      <h1 className="font-semibold lg:text-5xl text-2xl lg:leading-12 text-black lg:pb-4">
                        {
                          "Capturing the first light of day in a serene landscape"
                        }
                      </h1>
                    </div>
                    <p className="lg:mt-4 text-[#263234] lg:text-xl">
                      Estimated price :
                      <span className="text-[#263234] font-bold">
                        {" "}
                        {slide.budget}$
                      </span>
                    </p>

                    {/* Countdown */}
                    <div className="flex items-center gap-1 mt-1">
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
                        </span>
                      </div>
                      <div>
                        <p className="text-[#263234] lg:text-xl font-semibold">
                          {timeLeft[index] || "time"}
                        </p>
                      </div>
                    </div>

                    {/* Contributor */}
                    <div className="flex items-center lg:gap-3 gap-1.5 lg:mt-6 mt-2.5">
                      <img
                        src={`http://137.59.180.219:8000/${slide?.profile}  `}
                        className="w-12 h-12 rounded-full"
                        alt=""
                      />
                      <div>
                        <h1 className="text-sm font-semibold text-[#263234]">
                          {slide?.name}
                        </h1>
                        <p className="text-[#4B5557] text-xs">
                          {"Contributor"}
                        </p>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="bg-[#e9ebeb] mt-6 lg:p-6 p-2.5 rounded-lg max-w-2xl mx-auto shadow-md  h-56 ">
                      <p className="text-lg leading-relaxed">
                        {slide?.quote ||
                          "I am honored to donate Whispers of Dawn to this auction in support of Healing and Hope for Women. This initiative empowers women facing adversity, providing them with the resources to rebuild their lives. We can create a masterpiece of change."}
                      </p>
                      <div className="lg:ml-20 -mt-9">
                        <Quote className="text-gray-600 w-6 h-6" />
                      </div>
                    </div>

                    {/* Bid Section and Price */}
                    <div className="flex my-12 flex-row justify-between gap-6">
                      {/* Price Button */}
                      <div>
                        <button className=" flex items-center gap-3  ">
                          <p className=" text-[#263234] font-bold text-3xl ">
                            ${slide.max_bit_online}
                          </p>{" "}
                          <span className=" text-xl text-[#4B5557] ">
                            {" "}
                            ({slide.total_bits}bids){" "}
                          </span>
                        </button>
                      </div>

                      {/* Bid Button and Dropdown */}
                      <div className="relative flex flex-col items-end w-full">
                        <div className="flex">
                          <button
                            onClick={() => handleModalOpen(index)} // Pass the entire slide object to the modal
                            className="flex items-center gap-2 cursor-pointer bg-[#403730] text-white text-sm font-semibold px-4 py-2.5 hover:bg-[#2c241f] transition w-fit"
                          >
                            {selectedBids[index]
                              ? selectedBids[index]
                              : slide.price}{" "}
                            {/* Show selected bid or price */}
                          </button>
                          <button
                            onClick={() => handleBidToggle(index)} // Toggle only this slide
                            className="flex items-center gap-2 cursor-pointer bg-[#403730] text-white text-sm font-semibold px-4 py-2.5 hover:bg-[#2c241f] transition w-fit"
                          >
                            Bid online
                            <Gavel className="w-4 h-4" />
                            {showBids[index] ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            )}
                          </button>
                        </div>

                        {/* Bid Price Options */}
                        {showBids[index] && (
                          <AnimatePresence>
                            {showBids && ( // showBidOptions ta state hisabe manage korte hobe
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3, type: "spring" }}
                                className="absolute bottom-full right-0 mt-4 flex flex-col w-48"
                              >
                                {/* Map through the bid prices */}
                                {slide?.bit_prices.map((price) => (
                                  <button
                                    key={price}
                                    onClick={() =>
                                      handleBidSelect(index, price)
                                    }
                                    className="bg-white border flex flex-row border-gray-300 text-sm px-4 py-2 hover:scale-105 rounded-lg hover:bg-gray-100 transition"
                                  >
                                    {price}
                                  </button>
                                ))}

                                {/* Custom Bid Input */}
                                <div className="flex flex-row items-center my-3 gap-2 mt-3">
                                  <input
                                    type="number"
                                    placeholder="Enter custom bid"
                                    value={customBids[index]}
                                    onChange={(e) => handleBidChange(index, e)}
                                    className="border border-gray-300 text-sm px-4 hover:outline-none focus:outline-none py-2 rounded-lg w-32"
                                  />
                                  <button
                                    onClick={() => handleCustomBidSet(index)}
                                    className="bg-[#403730] text-white text-sm font-semibold px-4 py-2 rounded-lg"
                                  >
                                    Set
                                  </button>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* RIGHT IMAGE SECTION */}
                  <div className="relative">
                    <img
                      src={`http://137.59.180.219:8000/${slide?.image}  `}
                      className="lg:w-[532px] w-[100%] block mx-auto rounded-2xl lg:h-[630px] mb-6"
                      alt=""
                    />
                    <div className="absolute top-0 ml-3 mt-4 px-2 py-1 text-sm text-[#263234] bg-white rounded">
                      <button>Featured</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* buyer modal information*/}
      <Modal
        title={
          <span className=" text-[#263234] text-2xl font-semibold ">
            Buyer Info
          </span>
        }
        visible={isModalOpen}
        onCancel={handleModalClose}
        footer={false}
      >
        <div>
          <p className="text-[#263234] mt-4 mb-6 text-[16px] ">
            Please input your real data so that we can reach to you. Thank you.
          </p>

          <Form form={form} onFinish={submitBuyerModal} layout="vertical">
            <Form.Item
              style={{ marginBottom: "0px" }}
              label={
                <span className="font-medium text-sm text-[#263234]">Name</span>
              }
              name="name"
              rules={[{ required: true, message: "Please enter your name!" }]}
            >
              <Input
                style={{
                  border: "1px solid #A6ABAC",
                  padding: "10px 14px",
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
                <span className="font-medium text-sm text-[#263234]">
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
                  border: "1px solid #A6ABAC",
                  padding: "10px 14px",
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
                <span className="font-medium text-sm text-[#263234]">
                  Email
                </span>
              }
              name="email"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input
                style={{
                  border: "1px solid #A6ABAC",
                  padding: "10px 14px",
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
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error("Please agree to the terms!")),
                },
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
                <span
                  // onClick={openDonateTermModal}
                  className="underline cursor-pointer"
                >
                  terms & conditions
                </span>
              </Checkbox>
            </Form.Item>

            <div className="flex flex-col lg:flex-row md:flex-row md:ml-32 md:gap-16 lg:justify-end lg:gap-5">
              <Button
                className="missionModalBtn1"
                onClick={handleModalClose}
                type="default"
              >
                Cancel
              </Button>
              <Button
                className="missionModalBtn2"
                type="primary"
                htmlType="submit"
              >
                Next
              </Button>
            </div>
          </Form>
        </div>
      </Modal>

      {/* payment modal  */}

      <Modal
        title={
          <span className=" text-[#263234] text-2xl font-semibold ">
            Choose a payment getway
          </span>
        }
        visible={paymentModal}
        onCancel={handlePaymentModalClose}
        footer={false}
        closable={false}
      >
        <div>
          <div>
            {/* Form Start */}
            <Form form={form} layout="vertical">
              <Form.Item name="donation">
                <Radio.Group className="w-full">
                  <div className="flex flex-col gap-4">
                    {/* card */}
                    <Radio
                      value="card"
                      className="w-full px-2! pl-2 h-[56px]  border border-[#A6ABAC] rounded-lg cursor-pointer "
                    >
                      <h1 className="block mt-3.5 text-[16px]  text-[#263234] leading-6 font-medium">
                        Card
                      </h1>
                      <span className="block lg:ml-[360px] md:ml-[245px] ml-[158px] -mt-6 ">
                        {/* Apple Pay Icon */}
                        <FaCcMastercard className=" text-2xl " />
                      </span>
                    </Radio>
                    {/* Apple Pay */}
                    <Radio
                      value="apple_pay"
                      className="w-full pl-2  h-[56px]  border border-[#A6ABAC]  rounded-lg cursor-pointer "
                    >
                      <h1 className="block mt-3.5 text-[16px]  text-[#263234] leading-6 font-medium">
                        With Apple Pay
                      </h1>
                      <span className="block lg:ml-[360px] md:ml-[220%] ml-[145%] -mt-6 ">
                        {/* Apple Pay Icon */}
                        <svg
                          width="20"
                          height="24"
                          viewBox="0 0 20 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_180689_8357)">
                            <path
                              d="M19.3735 8.18824C17.7349 9.17647 16.7229 10.8706 16.7229 12.7529C16.7229 14.8706 18.0241 16.8 20 17.6C19.6145 18.8235 19.0361 19.9529 18.3133 20.9882C17.253 22.4471 16.1446 23.9529 14.506 23.9529C12.8675 23.9529 12.3855 23.0118 10.4578 23.0118C8.57831 23.0118 7.90361 24 6.36145 24C4.81928 24 3.75904 22.6353 2.55422 20.9412C0.963856 18.5882 0.0481928 15.8588 0 12.9882C0 8.32941 3.08434 5.83529 6.16867 5.83529C7.80723 5.83529 9.15663 6.87059 10.1687 6.87059C11.1325 6.87059 12.6747 5.78824 14.506 5.78824C16.4337 5.74118 18.2651 6.63529 19.3735 8.18824ZM13.6386 3.81176C14.4578 2.87059 14.8916 1.69412 14.9398 0.470588C14.9398 0.329412 14.9398 0.141176 14.8916 0C13.494 0.141176 12.1928 0.8 11.2771 1.83529C10.4578 2.72941 9.9759 3.85882 9.92771 5.08235C9.92771 5.22353 9.92771 5.36471 9.9759 5.50588C10.0723 5.50588 10.2169 5.55294 10.3133 5.55294C11.6145 5.45882 12.8193 4.8 13.6386 3.81176Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_180689_8357">
                              <rect width="20" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </Radio>

                    {/* Google Pay */}
                    <Radio
                      value="google_pay"
                      className="w-full pl-2 px-2! h-[56px]  border border-[#A6ABAC] rounded-lg cursor-pointer "
                    >
                      <h1 className="block mt-3.5 text-[16px] text-[#263234] leading-6 font-medium">
                        With Google Pay
                      </h1>
                      <span className="lg:ml-[360px] md:ml-[200%] ml-[132%] block -mt-6 ">
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

                    {/* paypal Pay */}
                    <Radio
                      // onClick={handlePaypalPayment}
                      value="paypal_pay"
                      className="w-full pl-2 px-2! h-[56px]  border border-[#A6ABAC] rounded-lg cursor-pointer "
                    >
                      <h1 className="block mt-3.5 text-[16px] text-[#263234] leading-6 font-medium">
                        PayPal Pay
                      </h1>
                      <span className="block  lg:ml-[360px] md:ml-[242px] ml-[140%] -mt-6 ">
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
                        </svg>
                      </span>
                    </Radio>
                  </div>
                </Radio.Group>
              </Form.Item>

              {/* Modal Buttons */}
              <div className=" flex flex-col md:flex-row md:justify-end  lg:flex-row justify-center lg:justify-end mt-5 mb-2">
                <Button
                  onClick={handlePaymentModalClose}
                  type="text"
                  className=" missionModalBtn1 border! "
                >
                  Back
                </Button>
                {/* <Button onClick={"handlieClickNextStep"} className="missionModalBtn2">
            Proceed next step
          </Button> */}
              </div>
            </Form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AuctionSlider;
