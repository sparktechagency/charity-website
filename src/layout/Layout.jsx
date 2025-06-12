import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import CookieConsent from '../pages/cookie/CookieConsent'

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <CookieConsent></CookieConsent>
    </div>
  )
}

export default Layout