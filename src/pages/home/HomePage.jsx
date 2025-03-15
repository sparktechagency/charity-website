import React from 'react'
import { Banner } from './Banner'
import { MissionVission } from './MissionVission'

const HomePage = () => {
  return (
    <div  >
        <Banner></Banner>
        <div className=' bg-[#ecebea] ' >
          <MissionVission></MissionVission>
        </div>
    </div>
  )
}

export default HomePage