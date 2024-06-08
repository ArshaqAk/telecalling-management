import React from 'react'
import logo from '../assets/logo.png'
import '../styles/components/header.css'
const Header = () => {
  return (
    <>
    <div className="navbar-container">
      <div className="logo-container">
        <img src={logo} alt="" />
      </div>
      <div className="header">
          <h4>TELECALL  MANAGEMENT</h4>
      </div>
    </div>
    </>
  )
}

export default Header
