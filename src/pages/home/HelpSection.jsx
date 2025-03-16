import React from "react";

const HelpBanner = () => {
  return (
    <div className="max-w-[1480px] mx-auto bg-gradient-to-r from-gray-100 to-white rounded-lg p-8 flex flex-col md:flex-row items-center">
      <div className="flex-1">
        <h4 className="text-lg text-gray-500">Discover</h4>
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          The way to <br /> help
        </h1>
      </div>
      <div className="flex-1">
        <img
          src="./help-banner.png"
          alt="Help Banner"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default HelpBanner;
