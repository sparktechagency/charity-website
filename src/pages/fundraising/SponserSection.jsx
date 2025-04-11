import React from "react";

export const SponserSection = () => {
  return (
    <div className=" bg-[#ecebea] py-5 ">
      <div className=" max-w-[1480px] shadow mx-auto bg-white ">
        <div className=" max-w-[1216px] mx-auto md:py-24 py-8  ">
          <p className="text-center text-[#4B5557] text-[16px] leading-6 font-medium ">
            Our partners & sponsors
          </p>
          <div className=" flex justify-center items-center md:justify-between mt-8 gap-3.5  flex-col md:flex-row md:px-3.5  ">
            {/* 1st partner */}
            <div className="flex flex-row items-center gap-3.5 ">
              <span>
                <img src="/sponser/logo-1.png" />
              </span>
            </div>

            {/* 2nd partner */}
            <div className="flex gap-3.5 items-center ">
              <img src="/sponser/logo-2.png"/>
            </div>

            {/* 3nd partner */}
            <div className="flex items-center gap-3.5 ">
              <span>
                <svg
                  width="45"
                  height="44"
                  viewBox="0 0 45 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.2143 31.4294C24.893 31.4294 31.9285 24.3939 31.9285 15.7151C31.9285 14.7315 31.8382 13.769 31.6653 12.8355C30.7318 12.6626 29.7693 12.5723 28.7857 12.5723C20.1069 12.5723 13.0714 19.6078 13.0714 28.2866C13.0714 29.2701 13.1618 30.2326 13.3347 31.1662C14.2682 31.339 15.2307 31.4294 16.2143 31.4294Z"
                    fill="#717680"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.3347 31.1653C6.03118 29.8127 0.5 23.4095 0.5 15.7143C0.5 7.03553 7.53553 0 16.2143 0C23.9095 0 30.3128 5.53118 31.6653 12.8347C30.7318 12.6618 29.7693 12.5714 28.7857 12.5714C20.107 12.5714 13.0714 19.607 13.0714 28.2857C13.0714 29.2693 13.1618 30.2318 13.3347 31.1653Z"
                    fill="#717680"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.2142 31.4279C24.893 31.4279 31.9285 24.3923 31.9285 15.7136C31.9285 14.73 31.8381 13.7675 31.6652 12.834C38.9687 14.1866 44.4999 20.5898 44.4999 28.285C44.4999 36.9638 37.4644 43.9993 28.7856 43.9993C21.0905 43.9993 14.6872 38.4681 13.3346 31.1646C14.2681 31.3375 15.2306 31.4279 16.2142 31.4279Z"
                    fill="#A4A7AE"
                  />
                </svg>
              </span>
              <p className=" font-bold text-[#535862] text-xl ">Circooles</p>
            </div>

            {/* 4th partner */}
            <div className="flex gap-3.5 items-center ">
              <span>
                <svg
                  width="45"
                  height="44"
                  viewBox="0 0 45 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.25 0C10.0997 0 0.25 9.84974 0.25 22C0.25 34.1503 10.0997 44 22.25 44C33.151 44 42.2002 36.0716 43.9458 25.6667H43.7879C42.1598 31.9925 36.4174 36.6667 29.5833 36.6667C21.4832 36.6667 14.9167 30.1002 14.9167 22C14.9167 13.8998 21.4832 7.33333 29.5833 7.33333C36.4174 7.33333 42.1598 12.0075 43.7879 18.3333H43.9458C42.2002 7.92838 33.151 0 22.25 0Z"
                    fill="#A4A7AE"
                  />
                  <path
                    d="M0.25 22C0.25 9.84974 10.0997 0 22.25 0C33.151 0 42.2002 7.92838 43.9458 18.3333H29.1213C27.4931 12.0075 21.7507 7.33333 14.9167 7.33333C6.81649 7.33333 0.25 13.8998 0.25 22Z"
                    fill="#717680"
                  />
                  <path
                    d="M0.25 22C0.25 34.1503 10.0997 44 22.25 44C33.151 44 42.2002 36.0716 43.9458 25.6667H29.1213C27.4931 31.9925 21.7507 36.6667 14.9167 36.6667C6.81649 36.6667 0.25 30.1002 0.25 22Z"
                    fill="#717680"
                  />
                </svg>
              </span>
              <p className=" font-bold text-[#535862] text-xl ">Catalog</p>
            </div>

            {/* 5th partner */}
            <div className="flex gap-3.5 items-center ">
              <span>
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22 34.4667C28.8851 34.4667 34.4667 28.8851 34.4667 22C34.4667 15.1149 28.8851 9.53333 22 9.53333C15.1148 9.53333 9.53333 15.1149 9.53333 22C9.53333 28.8851 15.1148 34.4667 22 34.4667ZM22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84973 0 0 9.84974 0 22C0 34.1503 9.84973 44 22 44Z"
                    fill="#717680"
                  />
                  <path
                    d="M22.2515 22.4823C24.5426 20.1913 28.2572 20.1913 30.5483 22.4823L41.9562 33.8903C44.2473 36.1814 44.2473 39.896 41.9562 42.1871C39.6652 44.4781 35.9506 44.4781 33.6595 42.1871L22.2515 30.7791C19.9605 28.488 19.9605 24.7734 22.2515 22.4823Z"
                    fill="#A4A7AE"
                  />
                  <path
                    d="M25.4548 33.9825L32.7002 41.2279C36.1754 39.2897 39.0707 36.4367 41.0603 32.9946L33.8743 25.8086C32.6121 29.748 29.4439 32.8344 25.4548 33.9825Z"
                    fill="#717680"
                  />
                </svg>
              </span>
              <p className=" font-bold text-[#535862] text-xl ">Quotient</p>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};
