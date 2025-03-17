import React from "react";

export const LuxerySection = () => {
  return (
    <div className=" bg-[#ecebea] lg:mt-16   py-4 p-2 lg:p-0">
      <div className=" max-w-[1480px] mx-auto ">
        <div className=" flex lg:flex-row flex-col py-4 items-center lg:justify-between gap-5  ">
          <div className=" lg:max-w-[635px]  " >
            <img src="./luxery-img-3.png" className="lg:max-w-[635px] lg:h-[569px] " alt="" />
          </div>
          <div className=" lg:max-w-[825px]  rounded-2xl lg:h-[569px]  lg:py-20 py-4 lg:pl-16 pl-4 lg:pr-[86px] pr-4 bg-white mx-auto " >
              <h1 className=" lg:text-[124px] mt-3 text-5xl leading-none  ">
                Therapeutic
                <br />
              </h1>
              <span className=" lg:text-7xl text-3xl    ">wellbeing</span>
              <p className=" text-justify lg:text-start lg:mt-6 mt-2 text-lg text-[#263234] leading-7 " >
                Our therapeutic wellbeing sessions offer a safe space for women
                to explore their feelings and experiences. With trained and
                empathetic counsellors, yoga teachers and other professionals
                you will navigate the complexities of trauma and begin to
                understand your emotions. Through personalised sessions, we aim
                to empower you, helping you find your voice and regain control
                of your life. You will learn coping strategies and gain insights
                that pave the way for healing by and personal growth. Take the
                courageous step towards recovery and discover the strength
                within you through our supportive wellness approach.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};
