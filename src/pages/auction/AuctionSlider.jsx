import React from "react";
import { Quote } from "lucide-react";
import { Gavel, ChevronDown } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function AuctionSlider() {
  return (
    <>
      <div className=" bg-[#ecebea] lg:p-4  w-full ">
        <div className="p-3 max-w-[1512px] mx-auto ">
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide>
              <div className="flex lg:flex-row flex-col gap-6 ">
                <div className=" p-[26px] bg-white shadow  rounded-2xl max-w-[1036px] flex flex-col lg:flex-row lg:justify-between  gap-6  ">
                  <div className=" max-w-[433px]  ">
                    <h1 className=" font-semibold lg:text-5xl text-2xl lg:leading-12 text-black lg:pb-4 pb-1 ">
                      The ancient statue <br /> of Sri Lanka
                    </h1>
                    <p className=" lg:mt-4 text-[#263234] lg:text-xl ">
                      Estimated price :{" "}
                      <span className=" text-[#263234] font-bold ">
                        $999-$2,000
                      </span>{" "}
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
                          src="./slider-img-1.jpg"
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
                    <div className="bg-[#e9ebeb] mt-6 lg:p-6 p-3 rounded-lg max-w-2xl mx-auto shadow-md">
                      <p className=" text-lg leading-relaxed">
                      I am privileged to donate The Ancient Statue of Sri Lanka to this auction, supporting Healing and Hope for Women. This piece reflects the resilience of history, much like the strength of the women this cause uplifts.
                      </p>
                      <p className=" text-lg leading-relaxed mt-4">
                        Your bid or donation can make a profound impact. Let us
                        come together to preserve both heritage and hope.
                      </p>

                      {/* Quote Icon */}
                      <div className=" lg:ml-40 ml-[20%] -mt-7  ">
                        <Quote className="text-gray-600 w-6 h-6" />
                      </div>
                    </div>

                    <div className="flex lg:flex-row flex-col items-center justify-between mt-8 gap-4">
                      {/* Price & Bids */}
                      <div className="text-gray-900 text-xl font-bold">
                        $1,800{" "}
                        <span className="text-gray-500 text-sm">(2 bids)</span>
                      </div>

                      {/* Bid Button */}
                      <button className="flex items-center gap-1   bg-[#403730] text-white text-sm font-semibold px-8 py-2.5 rounded-md shadow-md hover:bg-[#2c241f] transition">
                        <Gavel className="w-4 h-4" />
                        Bid online
                        <ChevronDown className="w-4 h-4  ml-12 " />
                      </button>
                    </div>
                  </div>
                  <div className=" relative ">
                    <img
                      src="/sliderImg-3.jpg"
                      className=" lg:w-[532px] lg:h-[650px] rounded "
                      alt=""
                    />
                    <div className="absolute top-0 ml-3 mt-4 px-2 py-1 text-sm text-[#263234] bg-white rounded ">
                      <button>Featured</button>
                    </div>
                  </div>
                </div>
                <div className=" p-[26px] bg-white shadow  rounded-2xl max-w-[1036px] flex flex-col lg:flex-row lg:justify-between  gap-6  ">
                  <div className=" max-w-[433px]  ">
                    <h1 className=" font-semibold lg:text-5xl text-2xl lg:leading-12 text-black lg:pb-4 pb-1 ">
                      Capturing the first <br /> ight of day in a <br />
                      serene landscape
                    </h1>
                    <p className=" lg:mt-4 text-[#263234] lg:text-xl ">
                      Estimated price :{" "}
                      <span className=" text-[#263234] font-bold ">
                        $59-$2,00
                      </span>{" "}
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
                          src="/sliderImg-2.jpg"
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
                    <div className="bg-[#e9ebeb] mt-6 lg:p-6 p-3 rounded-lg max-w-2xl mx-auto shadow-md">
                      <p className=" text-lg leading-relaxed">
                      I am honored to donate Whispers of Dawn to this auction in support of Healing and Hope for Women. This initiative empowers women facing adversity, providing them with the resources to rebuild their lives. We can create a masterpiece of change.
                      </p>
                    </div>

                    <div className="flex lg:flex-row flex-col items-center justify-between mt-8 gap-4">
                      {/* Price & Bids */}
                      <div className="text-gray-900 text-xl font-bold">
                        $1,800{" "}
                        <span className="text-gray-500 text-sm">(2 bids)</span>
                      </div>

                      {/* Bid Button */}
                      <button className="flex items-center gap-1   bg-[#403730] text-white text-sm font-semibold px-8 py-2.5 rounded-md shadow-md hover:bg-[#2c241f] transition">
                        <Gavel className="w-4 h-4" />
                        Bid online
                        <ChevronDown className="w-4 h-4  ml-12 " />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex lg:flex-row flex-col gap-6 ">
                <div className=" p-[26px] bg-white shadow  rounded-2xl max-w-[1036px] flex flex-col lg:flex-row lg:justify-between  gap-6  ">
                  <div className=" max-w-[433px]  ">
                    <h1 className=" font-semibold lg:text-5xl text-2xl lg:leading-12 text-black lg:pb-4 pb-1 ">
                      The ancient statue <br /> of Sri Lanka
                    </h1>
                    <p className=" lg:mt-4 text-[#263234] lg:text-xl ">
                      Estimated price :{" "}
                      <span className=" text-[#263234] font-bold ">
                        $999-$2,000
                      </span>{" "}
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
                          src="./slider-img-1.jpg"
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
                    <div className="bg-[#e9ebeb] mt-6 lg:p-6 p-3 rounded-lg max-w-2xl mx-auto shadow-md">
                      <p className=" text-lg leading-relaxed">
                      I am privileged to donate The Ancient Statue of Sri Lanka to this auction, supporting Healing and Hope for Women. This piece reflects the resilience of history, much like the strength of the women this cause uplifts.
                      </p>
                      <p className=" text-lg leading-relaxed mt-4">
                        Your bid or donation can make a profound impact. Let us
                        come together to preserve both heritage and hope.
                      </p>

                      {/* Quote Icon */}
                      <div className=" lg:ml-40 ml-[20%] -mt-7  ">
                        <Quote className="text-gray-600 w-6 h-6" />
                      </div>
                    </div>

                    <div className="flex lg:flex-row flex-col items-center justify-between mt-8 gap-4">
                      {/* Price & Bids */}
                      <div className="text-gray-900 text-xl font-bold">
                        $1,800{" "}
                        <span className="text-gray-500 text-sm">(2 bids)</span>
                      </div>

                      {/* Bid Button */}
                      <button className="flex items-center gap-1   bg-[#403730] text-white text-sm font-semibold px-8 py-2.5 rounded-md shadow-md hover:bg-[#2c241f] transition">
                        <Gavel className="w-4 h-4" />
                        Bid online
                        <ChevronDown className="w-4 h-4  ml-12 " />
                      </button>
                    </div>
                  </div>
                  <div className=" relative ">
                    <img
                      src="/sliderImg-3.jpg"
                      className=" lg:w-[532px] lg:h-[650px] rounded "
                      alt=""
                    />
                    <div className="absolute top-0 ml-3 mt-4 px-2 py-1 text-sm text-[#263234] bg-white rounded ">
                      <button>Featured</button>
                    </div>
                  </div>
                </div>
                <div className=" p-[26px] bg-white shadow  rounded-2xl max-w-[1036px] flex flex-col lg:flex-row lg:justify-between  gap-6  ">
                  <div className=" max-w-[433px]  ">
                    <h1 className=" font-semibold lg:text-5xl text-2xl lg:leading-12 text-black lg:pb-4 pb-1 ">
                      Capturing the first <br /> ight of day in a <br />
                      serene landscape
                    </h1>
                    <p className=" lg:mt-4 text-[#263234] lg:text-xl ">
                      Estimated price :{" "}
                      <span className=" text-[#263234] font-bold ">
                        $999-$2,000
                      </span>{" "}
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
                          src="./slider-img-1.jpg"
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
                    <div className="bg-[#e9ebeb] mt-6 lg:p-6 p-3 rounded-lg max-w-2xl mx-auto shadow-md">
                      <p className=" text-lg leading-relaxed">
                      I am honored to donate Whispers of Dawn to this auction in support of Healing and Hope for Women. This initiative empowers women facing adversity, providing them with the resources to rebuild their lives. We can create a masterpiece of change.
                      </p>
                    </div>

                    <div className="flex lg:flex-row flex-col items-center justify-between mt-8 gap-4">
                      {/* Price & Bids */}
                      <div className="text-gray-900 text-xl font-bold">
                        $1,800{" "}
                        <span className="text-gray-500 text-sm">(2 bids)</span>
                      </div>

                      {/* Bid Button */}
                      <button className="flex items-center gap-1   bg-[#403730] text-white text-sm font-semibold px-8 py-2.5 rounded-md shadow-md hover:bg-[#2c241f] transition">
                        <Gavel className="w-4 h-4" />
                        Bid online
                        <ChevronDown className="w-4 h-4  ml-12 " />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>


            

            
          </Swiper>
        </div>
      </div>
    </>
  );
}
