import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/login.css'
const Login = () => {
    const navigate=useNavigate()
    const [showpassword,setShowpassword]=useState(false)
    const togglepassword=()=>{
        setShowpassword(!showpassword)
    }

    //login
    const handleLogin=()=>{
        navigate('/home')
    }

  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-4"></div>
            <div className="col-lg-4 col-sm-12 login-colum">
                <div className="login-box text-center">
                    <h1 className="header">Login</h1>
                    <input className='form-control my-1' type="email" placeholder='Email' />
                    <div className="password_container">
                    <input className='form-control my-1' type={showpassword? "text" : "password"} placeholder='Password'/>
                    <span className='eye' onClick={togglepassword}>{showpassword?<FaEye/> :<FaEyeSlash/>}</span>
                    </div>
                    <button className='btn btn-outline-dark w-25 my-3' onClick={handleLogin}>Login</button>
                </div>
            </div>
            <div className="col-4"></div>
        </div>
    </div>
    </>
  )
}

export default Login
