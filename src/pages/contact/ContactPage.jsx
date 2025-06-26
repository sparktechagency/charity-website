import React from 'react'
import ContactBanner from './ContactBanner'
import ContactWay from './ContactWay'
import ContactFrom from './ContactFrom'
import { Helmet } from 'react-helmet-async'

const ContactPage = () => {
  window.scrollTo(0, 0);
  return (
    <div className='pt-20' >
      <Helmet>
        <title>Virtuehope | Contact</title>
      </Helmet>
      <ContactBanner></ContactBanner>
      <ContactWay></ContactWay>
      <ContactFrom></ContactFrom>
    </div>
  )
}

export default ContactPage