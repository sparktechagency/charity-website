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
import toast from "react-hot-toast";

const AuctionSlider = () => {
  const [form] = Form.useForm();
  const [sliderData, setSliderData] = useState([]);
  const [loading, setLoading] = useState(false);
  const axiosPublic = useAxiosPublic();
  const authId = localStorage.getItem(`authId`);

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
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Bearer added
    },
  };
  const handleBidSubmit = async (index, bidPrice) => {
    try {
      setLoading(true);
      const auctionId = sliderData[index]?.id;

      if (!auctionId) {
        toast.error("Auction ID not found!");
        return;
      }

      const res = await axiosPublic.post(`/bit-contributor?auction_id=${auctionId}`, {
        bit_online: bidPrice,
      },config);

      console.log(`auction bit data is ${res}`)

      if (res.data.success) {
        toast.success("Bid submitted successfully!");
        console.log("Bid response:", res.data);
        // You can refresh data here if needed
      } else {
        toast.error(res.data.message || "Failed to submit bid");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

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

    handleBidSubmit(index, price); // 👈 Call API
  };

  const handleCustomBidSet = (index) => {
    const newSelectedBids = [...selectedBids];
    newSelectedBids[index] = customBids[index];
    setSelectedBids(newSelectedBids);

    const newCustomBids = [...customBids];
    newCustomBids[index] = "";
    setCustomBids(newCustomBids);

    setShowBids((prevState) => prevState.map(() => false));

    handleBidSubmit(index, selectedBids[index]); // 👈 Call API with selected custom bid
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
      <div className=" hidden lg:flex ">
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
                            <button className="flex items-center gap-2 cursor-pointer bg-[#403730] text-white text-sm font-semibold px-2 py-2.5 hover:bg-[#2c241f] transition w-fit">
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
                                      onChange={(e) =>
                                        handleBidChange(index, e)
                                      }
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
      </div>
      {/* small device */}
      <div className=" lg:hidden ">
        <div className="flex flex-col gap-y-7">
          {sliderData.map((slide, index) => (
            <div key={slide.id}>
              <div className="bg-[#ecebea] px-4 rounded-2xl">
                <div className="">
                  <div className="bg-white shadow rounded-2xl flex  flex-col py-6 gap-6">
                    {/* LEFT SECTION */}
                    <div className="">
                      <div className="">
                        <h1 className="font-semibold lg:text-5xl text-2xl lg:leading-12 text-black lg:pb-4">
                          {
                            "Capturing the first light of day in a serene landscape"
                          }
                        </h1>
                      </div>
                      <p className="lg:mt-4 text-[#263234] ">
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
                      <div className="bg-[#e9ebeb] mt-6 lg:p-6 p-2.5 rounded-lg  mx-auto shadow-md">
                        <p className="text-lg leading-relaxed">
                          {slide?.quote ||
                            "I am honored to donate Whispers of Dawn to this auction in support of Healing and Hope for Women. This initiative empowers women facing adversity, providing them with the resources to rebuild their lives. We can create a masterpiece of change."}
                        </p>
                        {/* <div className="lg:ml-20 -mt-9">
                        <Quote className="text-gray-600 w-6 h-6" />
                      </div> */}
                      </div>

                      {/* Bid Section and Price */}
                      <div className=" my-4 flex flex-col gap-y-5 ">
                        {/* Price Button */}
                        <div>
                          <button className=" flex items-center gap-3    ">
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
                        <div className="relative flex flex-col w-full">
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
                                      onChange={(e) =>
                                        handleBidChange(index, e)
                                      }
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
        </div>
      </div>
    </>
  );
};

export default AuctionSlider;
