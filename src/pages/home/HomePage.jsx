import React from 'react'
import { Banner } from './Banner'
import { MissionVission } from './MissionVission'
import Faq from './Faq'
import HelpSection from './HelpSection'
import HomeSlider from './HomeSlider'
import PodcastStory from './PodcastStory'

const HomePage = () => {
  return (
    <div  >
        <Banner></Banner>
        <div className=' bg-[#ecebea]   ' >
          <MissionVission></MissionVission>
          <HomeSlider></HomeSlider>
          <PodcastStory></PodcastStory>
          <HelpSection></HelpSection>
          <Faq></Faq>
        </div>
    </div>
  )
}

export default HomePage