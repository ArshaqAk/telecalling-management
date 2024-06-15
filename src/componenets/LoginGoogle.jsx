import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { storeToken } from '../Redux/studentsSlice';
const LoginGoogle = () => {
    const navigate = useNavigate();
    const dispatch =useDispatch()
  return (
                <GoogleLogin
                  onSuccess={credentialResponse => {
                    const credentialResponseDecoded = jwtDecode(credentialResponse.credential)
                    if(credentialResponseDecoded.email == 'adacodesolutions@gmail.com'){
                      // dispatch(storeToken(user.accessToken));
                        sessionStorage.setItem('userToken', true);
                        navigate('/home')
                    }
                    else{
                      console.log('else part');
                    }
                  }}
                      onError={() => {
                        console.log('Login Failed');
                        
                    }}
                />

  )
}

export default LoginGoogle
