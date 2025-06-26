import React from 'react'
import ServiceBanner from './ServiceBanner'
import ArtSection from './ArtSection'
import { LuxerySection } from './LuxerySection'
import SupportSection from './SupportSection'
import { Helmet } from 'react-helmet-async'

const ServicePage = () => {
  window.scrollTo(0, 0);
  return (
    <div className='  ' >
      <Helmet>
        <title>Virtuehope | Service</title>
      </Helmet>
      <ServiceBanner></ServiceBanner>
      <ArtSection></ArtSection>
      <LuxerySection></LuxerySection>
      <SupportSection></SupportSection>
    </div>
  )
}

export default ServicePage