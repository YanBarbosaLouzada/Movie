import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import './Layout.css'
import NavbarTwo from '../components/navbartwo/NavbarTwo'
function Layout() {
  return (
    <div className='layout'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='content'>
        <div className='navbar-two'>
          <NavbarTwo />
        </div>
        <Outlet />
      </div>

    </div>
  )
}

export default Layout
