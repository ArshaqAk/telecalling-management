import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import '../styles/pages/login.css';
import { app } from '../Firebase/firebaseConfigure';
import { useDispatch } from 'react-redux';
import { storeToken } from '../Redux/studentsSlice';
import { FcGoogle } from "react-icons/fc";
import { FiLogIn } from "react-icons/fi";
import login_img from '../assets/login.png'
import LoginGoogle from '../componenets/LoginGoogle';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: ''
  });
  const [showpassword, setShowpassword] = useState(false);

  const togglepassword = () => {
    setShowpassword(!showpassword);
  };

  const auth = getAuth(app);

  //login
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, loginDetails.email, loginDetails.password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(storeToken(user.accessToken));
        sessionStorage.setItem('userToken', true);
        navigate('/home');
      })
      .catch((error) => {
        alert("Invalid Details");
      });
  };

  //google login
  const handleGoogleLogin = ()=>{
   
  }

  return (
    <div className="container-fluid">
      <div className="login-page-container">
      <div className="row mt-5">
        <div className="col-2"></div>
        <div className="col-lg-8 col-sm-12 login-colum mt-4">
            <h2 className="header">Telecalling Management</h2>
            <p className='head_paragraph text-center'>All in one user management Utility Handcrafted by Adacode solutions  </p>
          <div className="login-box text-center">
            <div className="row w-100 ">
              
              <div className="col-lg-5 col-sm-12  d-flex flex-column align-items-center justify-content-center">
                <img className='login-img ' src={login_img} alt="" />
                <span className='mt-2 mb-5  w-100  d-flex justify-content-center'><LoginGoogle/></span>
              </div>
              <div className="col-lg-7 col-sm-12  d-flex flex-column align-items-center justify-content-center">
                <input onChange={(e) => setLoginDetails({ ...loginDetails, email: e.target.value })} className='form-control mb-1 login_input_fleld ' type="email" placeholder='Email' />
                <div className="password_container">
                <input onChange={(e) => setLoginDetails({ ...loginDetails, password: e.target.value })} className='form-control my-1 login_input_fleld' type={showpassword ? "text" : "password"} placeholder='Password' />
                  <span className='eye' onClick={togglepassword}>{showpassword ? <FaEye /> : <FaEyeSlash />}</span>
                </div>
                <div className="login_buttons d-flex flex-column align-items-center justify-content-center  w-100 mb-1">
                  <button className='btn btn-outline-dark w-50 btn-lg mt-2 border border-1 border-dark btn-block ms-2 d-flex align-items-center justify-content-center' onClick={handleLogin}><span className='me-1'>Login</span> <FiLogIn /></button>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="col-2"></div>
      </div>

      </div>
    </div>
  );
};

export default Login;
