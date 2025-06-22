import React from "react";
import PodcastBanner from "./PodcastBanner";
import PodcastContact from "./PodcastContact";

const PodcastPage = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <PodcastBanner></PodcastBanner>
      <PodcastContact></PodcastContact>
    </div>
  );
};

export default PodcastPage;
