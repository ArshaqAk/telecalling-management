import React from 'react'
import logo from '../assets/logo.png'
import { getAuth, signOut } from "firebase/auth";
import '../styles/components/header.css'
import { app } from '../Firebase/firebaseConfigure';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { storeToken } from '../Redux/studentsSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const location = useLocation();
  const isHomepage = location.pathname === '/home'
  //signout
  const auth = getAuth(app);
  const handleSignout=()=>{
    signOut(auth).then(() => {
      alert('Signout successful')
      // dispatch(storeToken(false))
      // sessionStorage.setItem('userToken', false);
      sessionStorage.removeItem('userToken');
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
          <button onClick={handleSignout} className='btn btn-outline-dark btn-sm me-2 '>S<span className='text-lowercase'>ignout</span></button>
        </div>
        )
      }
    </div>
    </>
  )
}

export default Header
