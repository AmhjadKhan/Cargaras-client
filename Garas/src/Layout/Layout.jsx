import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from '../PAGES/ShearedPage/Navber'
import Footer from '../PAGES/ShearedPage/Footer'

const Layout = () => {
  return (
    <div>
        <Navber />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout