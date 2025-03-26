import React from "react";

const AuctionBanner = () => {
  return (
    <div className="pt-20" >
      <div className="relative w-full h-[50vh] lg:h-[90vh] bg-[url('/auctionBg-img.jpg')] bg-cover bg-center flex items-center">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        {/* Content */}
        <div className="relative  lg:mt-48 z-10 w-full max-w-6xl mx-auto px-4 flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* Heading */}
          <h1 className="text-[#ECEBEA]  text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Empower women to <br />
            <span className="font-bold">buy & list your</span> <br />
            auctions
          </h1>

          {/* Button */}
          <button className="mt-4 sm:mt-6 cursor-pointer text-[#403730] bg-[#FFFFFF] font-bold text-sm sm:text-base hover:bg-[#403730] hover:text-white transition-all duration-500 rounded px-6 py-2.5">
            Contribute your Auction
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuctionBanner;
