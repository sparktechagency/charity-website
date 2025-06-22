import React from "react";
import AuctionBanner from "./AuctionBanner";
import AuctionSlider from "./AuctionSlider";
import AutionSliderTwo from "./AutionSliderTwo";
import BidSection from "./BidSection";

const AuctionPage = () => {
  window.scrollTo(0, 0);
  return (
    <div className="bg-[#ecebea]" >
      <AuctionBanner></AuctionBanner>
      <AuctionSlider></AuctionSlider>
      <AutionSliderTwo></AutionSliderTwo>
      <BidSection></BidSection>
    </div>
  );
};

export default AuctionPage;
