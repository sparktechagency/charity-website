import React from "react";
import { Button, Flex } from "antd";

const JoinVoenture = () => {
  return (
    <div className="bg-[#ecebea] ">
      <div className=" max-w-[1480px] max-h-[608px] rounded-2xl shadow mx-auto bg-[#2D2722] ">
        <div className=" lg:py-[128px] py-10 lg:ml-[130px] text-center lg:text-start ">
          <p className=" text-xl lg:text-2xl text-white leading-8 ">
            Join with us
          </p>
          <h1 className=" text-3xl lg:text-7xl text-white leading-14 lg:leading-20 font-semibold ">
            Become a <br /> volunteer
          </h1>
          <div className=" block mx-auto " >
            <Button className=" block mx-auto applayBtn lg:mt-12 mt-5 hover:bg-[#6A55441A] px-3 ">
              Apply now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinVoenture;
