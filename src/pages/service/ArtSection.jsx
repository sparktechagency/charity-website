import React from "react";

const ArtSection = () => {
  return (
    <>
      <div className="" >
        <div className=" hidden   lg:block pt-4 ">
          <div className="relative max-w-[1520px] mx-auto    ">
            <div>
              <h1 className=" lg:text-[124px] text-2xl leading-none p-2 ">
                Art & antique <br />
              </h1>
              <span className=" lg:text-7xl   ">auction</span>
            </div>
            <div className="flex justify-center">
              <img src="./art-2.png" alt="" />
            </div>

            <div className="  absolute right-0 top-0 mx-auto ">
              <div>
                <img src="./art-1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* small device  */}
      <div className=" lg:hidden block mb-3.5 ">
        <div>
          <h1 className="  text-2xl leading-none p-2 text-center ">
            Art & antique auction
          </h1>
        </div>
        <div className="">
          <img src="./art-2.png" className=" block mx-auto mb-5 mt-3 " alt="" />
        </div>
        <div>
          <img src="./art-1.png" className=" block mx-auto " alt="" />
        </div>
      </div>
    </>
  );
};

export default ArtSection;
