import React from "react";
import AboutBanner from "./AboutBanner";
import AboutMissionVission from "./AboutMissionVission";
import Team from "./Team";

const AboutPage = () => {
  return (
    <div className=" max-w-[1512px] mx-auto ">
      <AboutBanner></AboutBanner>
      <AboutMissionVission></AboutMissionVission>
      <Team></Team>
    </div>
  );
};

export default AboutPage;
