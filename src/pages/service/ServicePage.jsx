import React from 'react'
import ServiceBanner from './ServiceBanner'
import ArtSection from './ArtSection'

const ServicePage = () => {
  return (
    <div className=' max-w-[1512px] mx-auto ' >
        <ServiceBanner></ServiceBanner>
        <ArtSection></ArtSection>
    </div>
  )
}

export default ServicePage