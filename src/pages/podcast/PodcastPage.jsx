import React from "react";
import PodcastBanner from "./PodcastBanner";
import PodcastContact from "./PodcastContact";
import { Helmet } from "react-helmet-async";

const PodcastPage = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Helmet>
        <title>Virtuehope | Podcast</title>
      </Helmet>
      <PodcastBanner></PodcastBanner>
      <PodcastContact></PodcastContact>
    </div>
  );
};

export default PodcastPage;
