import React from 'react'
import { Banner } from './Banner'
import { MissionVission } from './MissionVission'
import { PodcastStory } from './PodcastStory'

const HomePage = () => {
  return (
    <div  >
        <Banner></Banner>
        <div className=' max-w-[1512px]  mx-auto ' >
          <MissionVission></MissionVission>
          <PodcastStory></PodcastStory>
        </div>
    </div>
  )
}

export default HomePage