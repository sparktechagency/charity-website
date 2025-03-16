import React from 'react'
import { Banner } from './Banner'
import { MissionVission } from './MissionVission'
import { PodcastStory } from './PodcastStory'
import Faq from './Faq'

const HomePage = () => {
  return (
    <div  >
        <Banner></Banner>
        <div className=' max-w-[1512px] bg-[#ecebea]  mx-auto ' >
          <MissionVission></MissionVission>
          <PodcastStory></PodcastStory>
          <Faq></Faq>
        </div>
    </div>
  )
}

export default HomePage