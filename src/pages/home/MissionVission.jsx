import React from "react";

export const MissionVission = () => {
  return (
    <div className="py-5 px-4 max-w-[1512px] mx-auto bg-[#ecebea] ">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-10">
          {/* Left Side - Image */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full  z-0"></div>
            <img
              src="/img-2.png"
              alt="Supportive Women"
              className="relative z-10 w-full h-auto object-cover"
            />
          </div>

          {/* Right Side - Text */}
          <div className=" bg-white shadow lg:pt-[127px] lg:px-[64px] p-4 rounded-2xl  ">
            <h3 className=" lg:text-3xl text-xl font-thin text-[#403730]  ">
              Our mission & vision
            </h3>
            <h1 className="  font-bold text-[#403730] text-3xl lg:text-[60px] lg:mt-2">
              Healing support for  abused women
            </h1>
            <p className="text-[#263234] pt-2 lg:pt-6 lg:pb-12 pb-6 leading-6 ">
            Our respite care program offers a safe and supportive environment for women to take a much-needed break from their daily stressors. We provide comfortable accommodations where you can relax, reflect, and recharge. This is not just a getaway; it is an opportunity to step away from the chaos and focus on your well-being. Our compassionate staffs are dedicated to ensuring you feel welcomed and valued, allowing you to embrace the healing process. Join us for a time of rejuvenation that fosters hope and encourages personal growth.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button className="bg-[#403730] text-white py-3 px-6 rounded-md font-medium hover:bg-[#2E2A26]">
                Support survivors
              </button>
              <button className="bg-[#F6F6F7] text-gray-800 py-3 ml-4 px-6 rounded-md font-bold ">
                Become a volunteer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
