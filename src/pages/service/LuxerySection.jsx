import React from "react";

export const LuxerySection = () => {
  return (
    <div className="bg-[#ecebea] lg:mt-16 py-4 p-2 lg:p-0">
      <div className="max-w-[1480px] mx-auto">
        {/* First Row with Images and Text */}
        <div className="flex flex-col lg:flex-row py-4 items-center lg:justify-between gap-5">
          <div className="relative w-full lg:w-[629px] h-[300px] lg:h-[569px]">
            {/* Background Image */}
            <img
              src="./luxery-img-1.jpg"
              className="w-full h-full object-cover rounded-2xl opacity-110"
              alt=""
            />
            {/* Left & Right Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 rounded-2xl"></div>
            {/* Bottom Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent rounded-2xl"></div>
            {/* Text Content */}
            <h1 className="absolute text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold bottom-16 left-5 lg:left-16 text-white">
              Luxury <br /> retreats
            </h1>
          </div>

          <div className="relative w-full lg:w-[831px] h-[300px] lg:h-[569px]">
            {/* Background Image */}
            <img
              src="./luxery-img-1.jpg"
              className="w-full h-full object-cover rounded-2xl opacity-110"
              alt=""
            />
            {/* Bottom Gradient Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 via-black/100 to-transparent rounded-b-2xl"></div>
            {/* Text Content */}
            <h1 className="absolute text-3xl sm:text-4xl lg:text-5xl font-semibold lg:bottom-48 bottom-40 lg:left-16 left-5 text-white">
              Respite
            </h1>
            <p className="absolute font-semibold text-sm sm:text-lg lg:text-xl bottom-5 lg:left-16 left-5 text-white">
              Our respite care program offers a safe, supportive space for women
              to relax, recharge, and focus on well-being. With comfortable
              accommodations and compassionate staff, we provide a healing
              retreat that fosters hope and personal growth.
            </p>
          </div>
        </div>

        {/* Second Row with Image and Text */}
        <div className="flex flex-col lg:flex-row py-4 items-center lg:justify-between gap-5">
          <div className="lg:max-w-[635px] w-full">
            <img
              src="./luxery-img-3.png"
              className="w-[100%] lg:max-w-[635px] lg:h-[569px]"
              alt=""
            />
          </div>
          <div className="max-w-[825px] w-full rounded-2xl lg:h-[569px] lg:py-20 py-4 lg:pl-16 pl-4 lg:pr-[86px] pr-4 bg-white mx-auto">
            <h1 className="lg:text-[124px] text-4xl sm:text-5xl leading-none mt-3">
              Therapeutic <br />
            </h1>
            <span className="lg:text-7xl w-full text-3xl">wellbeing</span>
            <p className="text-justify lg:text-start lg:mt-6 mt-2 text-lg text-[#263234] leading-7">
              Our therapeutic wellbeing sessions offer a safe space for women to
              explore their feelings and experiences. With trained and
              empathetic counselors, yoga teachers, and other professionals, you
              will navigate the complexities of trauma and begin to understand
              your emotions. Through personalized sessions, we aim to empower
              you, helping you find your voice and regain control of your life.
              You will learn coping strategies and gain insights that pave the
              way for healing and personal growth. Take the courageous step
              towards recovery and discover the strength within you through our
              supportive wellness approach.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
