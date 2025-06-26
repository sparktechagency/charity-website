import React from "react";
import AboutBanner from "./AboutBanner";
import AboutMissionVission from "./AboutMissionVission";
import Team from "./Team";
import { Helmet } from "react-helmet-async";

const AboutPage = () => {
  window.scrollTo(0, 0);
  return (
    <div className="  mx-auto ">
      <Helmet>
        <title>Virtuehope | About</title>
      </Helmet>
      <AboutBanner></AboutBanner>
      <AboutMissionVission></AboutMissionVission>
      <Team></Team>
    </div>
  );
};

export default AboutPage;
