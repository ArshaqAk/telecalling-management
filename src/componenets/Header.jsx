import React from 'react'
import logo from '../assets/logo.png'
import { getAuth, signOut } from "firebase/auth";
import '../styles/components/header.css'
import { app } from '../Firebase/firebaseConfigure';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate=useNavigate()
  const location = useLocation();
  const isHomepage = location.pathname === '/home'
  //signout
  const auth = getAuth(app);
  const handleSignout=()=>{
    signOut(auth).then(() => {
      alert('Signout successful')
      navigate('/')
    }).catch((error) => {
      alert('Signout unsuccessful')
      console.log(error);
    });
    
  }
  return (
    <>
    <div className="navbar-container">
      <div className='d-flex align-items-center'>
      <div className="logo-container">
        <img src={logo} alt="" />
      </div>
      <div className="header">
          <h4>TELECALL  MANAGEMENT</h4>
      </div>

      </div>
      {
        isHomepage && (
          <div className="signout-div">
          <button onClick={handleSignout} className='btn btn-danger btn-sm me-2'>Signout</button>
        </div>
        )
      }
    </div>
    </>
  )
}

export default Header
