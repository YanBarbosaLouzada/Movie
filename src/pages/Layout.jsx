import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import './Layout.css'
import NavbarTwo from '../components/navbartwo/NavbarTwo'

function Layout() {
  const [busca, setBusca] = useState("");

  return (
    <div className='layout'>
      <div className='navbar'>
        <Navbar />
      </div>

      <div className='content'>
        <NavbarTwo busca={busca} setBusca={setBusca} />
        <Outlet context={{ busca }} />
      </div>
    </div>
  )
}

export default Layout
