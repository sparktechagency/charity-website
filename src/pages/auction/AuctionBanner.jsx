import React from "react";

const AuctionBanner = () => {
  return (
    <div>
      <div className="pt-20">
        <div className="relative max-w-full lg:h-[90vh] h-[50vh]  -z-0    bg-[url('/auctionBg-img.jpg')] opacity-100 bg-cover bg-center">
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="  max-w-6xl mx-auto lg:p-0 p-2 ">
            <div>
              <h1 className=" absolute lg:bottom-32 bottom-10 text-[#ECEBEA] text-3xl lg:text-5xl pb-8  ">
                Empower women to <br />{" "}
                <span className=" font-bold ">buy & listing your</span> <br />{" "}
                auctions
              </h1>
              <button className="absolute lg:bottom-20 bottom-5 text-[#403730] bg-[#FFFFFF] font-bold text-sm hover:bg-[#403730] hover:text-white transition-all duration-500 rounded px-6 py-2.5 ">
                Contribute your Auction
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionBanner;
