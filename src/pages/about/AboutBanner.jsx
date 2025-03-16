import React from "react";
import { Typography } from "antd";
const { Paragraph } = Typography;
const AboutBanner = () => {
  return (
    <div>
      <div className="lg:mt-10 mt-3 max-w-[960px] mx-auto ">
        <Paragraph
          style={{ color: "#403730", fontWeight: "600", textAlign: "center" }}
        >
          About us
        </Paragraph>
        <h1
        className=" lg:text-5xl text-3xl text-[#403730]  text-center  font-semibold "
          
        >
          Guidelines and Resources
        </h1>
        <div className="max-w-[800px] mx-auto " >
          <p className=" text-justify lg:text-center lg:mt-6 mb-10 p-2 lg:mb-24 " >
            Virtue Hope is a compassionate organization based in the UK.
            dedicated to supporting abused women. Along with supporting domestic
            violence charities. We will provide essential respite, therapy, and
            emotional support to aid in trauma recovery. Our programs foster a
            nurturing environment where women can heal, regain their confidence,
            and reclaim their lives. All the funds raised or donated and
            reinvested into the purpose. We believe in the power of community
            and compassion to transform lives, helping each woman find her
            strength and voice once again.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
