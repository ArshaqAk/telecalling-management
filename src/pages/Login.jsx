import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import '../styles/pages/login.css'
import { app } from '../Firebase/firebaseConfigure';
const Login = () => {
    const navigate=useNavigate()
    const [loginDetails,setLoginDetails]=useState({
        email:'',
        password:''
    })
    const [showpassword,setShowpassword]=useState(false)
    const togglepassword=()=>{
        setShowpassword(!showpassword)
    }

    //login
    const auth = getAuth(app);
    const handleLogin=()=>{
        signInWithEmailAndPassword(auth, loginDetails.email, loginDetails.password)
        .then((userCredential) => {
            const user = userCredential.user;
            // console.log(user);
            alert('Login successful')
            navigate('/home')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.log(errorMessage);
            alert("Invalid Details")
        });
    }

  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-4"></div>
            <div className="col-lg-4 col-sm-12 login-colum">
                <div className="login-box text-center">
                    <h1 className="header">Login</h1>
                    <input onChange={(e)=>setLoginDetails({...loginDetails,email:e.target.value})} className='form-control my-1 login_input_fleld' type="email" placeholder='Email' />
                    <div className="password_container">
                    <input onChange={(e)=>setLoginDetails({...loginDetails,password:e.target.value})} className='form-control my-1 login_input_fleld' type={showpassword? "text" : "password"} placeholder='Password'/>
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
