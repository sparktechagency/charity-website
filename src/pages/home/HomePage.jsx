import React from "react";
import { MissionVission } from "./MissionVission";
import Faq from "./Faq";
import HelpSection from "./HelpSection";
import PodcastStory from "./PodcastStory";
import HomeSlider from "./HomeSlider";
import Banner from "./Banner";
import { Helmet } from "react-helmet-async";
const HomePage = () => {
  window.scrollTo(0, 0)
  return (
    <div>
      <Helmet>
        <title>Virtuehope | Home</title>
      </Helmet>

      <Banner></Banner>
      <div className=" bg-[#ecebea]   ">
        <MissionVission></MissionVission>
        <HomeSlider></HomeSlider>

        <PodcastStory></PodcastStory>
        <HelpSection></HelpSection>
        <Faq></Faq>
      </div>
    </div>
  );
};

export default HomePage;
