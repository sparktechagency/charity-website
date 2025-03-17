import React from 'react'
import { Banner } from './Banner'
import { MissionVission } from './MissionVission'
import { PodcastStory } from './PodcastStory'
import Faq from './Faq'
import HelpSection from './HelpSection'
import HomeSlider from './HomeSlider'

const HomePage = () => {
  return (
    <div  >
        <Banner></Banner>
        <div className=' max-w-[1512px] bg-[#ecebea]  mx-auto ' >
          <MissionVission></MissionVission>
          <HomeSlider></HomeSlider>
          <PodcastStory></PodcastStory>
          {/* <HelpSection></HelpSection> */}
          <Faq></Faq>
        </div>
    </div>
  )
}

export default HomePage