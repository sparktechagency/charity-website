import React from 'react'
import ServiceBanner from './ServiceBanner'
import ArtSection from './ArtSection'
import { LuxerySection } from './LuxerySection'

const ServicePage = () => {
  return (
    <div className=' max-w-[1512px] mx-auto ' >
        <ServiceBanner></ServiceBanner>
        <ArtSection></ArtSection>
        <LuxerySection></LuxerySection>
    </div>
  )
}

export default ServicePage