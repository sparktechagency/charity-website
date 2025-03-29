import React from "react";
import { Typography } from "antd";
const { Paragraph } = Typography;
const AboutBanner = () => {
  const donationOptions = [
    {
      title: "Art and Antique Auctions",
    },
    {
      title: "Donated Luxury Goods",
    },

    {
      title:
        "Original books and creative works, including the upcoming Sandalwood Trilogy,",
    },
    {
      title:
        "written and published specifically to raise awareness and funding for survivors",
    },
    {
      title: "Social media campaigns, podcasts, and community events",
    },
    {
      title:
        "We believe in the power of compassion, creativity, and community to transform lives, ",
    },
    {
      title:
        "helping each woman find her strength, her voice, and her hope once again.",
    },
  ];
  return (
    <div>
      <div className="pt-16 max-w-[960px] mx-auto ">
        <Paragraph
          style={{ color: "#403730", fontWeight: "600", textAlign: "center" }}
        >
          About us
        </Paragraph>
        <div className="max-w-[960px] mx-auto lg:mt-6 mb-10  lg:mb-24 ">
          <h1 className=" lg:text-5xl text-3xl text-[#403730]  text-center  font-semibold ">
            Healing through support and compassion
          </h1>
            <p className=" mt-6 ml-7  ">
              Virtue Hope C.I.C. is a UK-based social enterprise committed to
              supporting women survivors of abuse and trauma. In collaboration
              with other organisations, we provide vital respite, art therapy,
              counselling, and emotional support to aid in the journey of
              healing and recovery. As a Community Interest Company, we have no
              shareholders. Every donation and every pound raised is reinvested
              directly into our mission. We are currently fundraising to open
              our first therapeutic wellbeing retreat in Cornwall, which will
              offer a sanctuary of healing, creativity, and support. This
              retreat will be the first of many safe spaces we aim to establish
              across the UK and beyond. To support our mission, we raise funds
              through a variety of purpose-led initiatives
            </p>
          <div className=" ml-8  " >
            <span className=" mt-5 block " >including:</span>

            <ul className="ml-5" >
              {donationOptions.map((item, index) => (
                <li key={index} className="mb-2">
                  <li className=" list-disc text-xl leading-8 mt-4 " >{item.title}</li>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;

// 
