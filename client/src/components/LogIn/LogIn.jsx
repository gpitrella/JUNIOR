import React from 'react';
import Google from "./google.png";
import { useDispatch, useSelector } from "react-redux";
// import { logIn, openPageLoader } from "../../redux/actions";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { BASE_URL  } from '../../redux/actions/actiontype';
import jwt_decode from "jwt-decode";
import { logIn } from '../../redux/actions/generalActions';
import { validateEmail, validatePassword } from "./validate.jsx";
import { Snackbar, Alert } from '@mui/material';
import './LogIn.css'

import s from './Login.module.css';


export default function LogIn({handleGoogle}) {
  const [redirect, setRedirect] = useState({ value: false })
  const dispatch = useDispatch();
  // const [checkMailPassword, setCheckMailPassword] = useState(false)
  const { auser } = useSelector((state) => state.homepageReducer);
  // const { user, logInError } = useSelector((state) => state.general)
  const [errorsEmail, setErrorsEmail] = useState({})
  const [errorsPassword, setErrorsPassword] = useState({})
  const [openPassword, setOpenPassword] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  const [openBanned, setOpenBanned] = useState(false);
  

  const google = () => {
    window.open(`${BASE_URL}/auth/google`, "_self");
  };

  const handleClosePassword = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenPassword(false);
  };

  const handleCloseEmail = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenEmail(false);
  };

  const handleCloseBanned = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenBanned(false);
  };

  const [ input, setInput ] = useState({
      email: '',
      password: ''
  })

    const handleChange = (e) => {
        e.preventDefault();
        setInput({...input,[e.target.name]: e.target.value})
        setErrorsEmail(validateEmail({...input,[e.target.name]: e.target.value}))
        setErrorsPassword(validatePassword({...input,[e.target.name]: e.target.value}))
        
    }
    

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(input.email, input.password))
    setErrorsEmail(validateEmail({...input,[e.target.name]: e.target.value}))
    setErrorsPassword(validatePassword({...input,[e.target.name]: e.target.value}))
  }

  const handleGoogleLogin = () => { 
      window.open("http://localhost:4001/auth/google", "_self");
  }

  // React.useEffect(() => {
  //   // console.log(logInError)
  //   if(logInError.status === 401){
  //     setOpenPassword(true)
  //     errorsPassword.password = "Wrong password"
  //     document.getElementById('password').classList.add('login__group-incorrecto')
  //     document.getElementById('password').classList.remove('login__group-correcto')
  //     document.querySelector('#password .login__input-error').classList.add('login__input-error-activo')
  //   } else if(logInError.status === 404){
  //     setOpenEmail(true)
  //     errorsEmail.email = "Unregistered Email"
  //     document.getElementById('email').classList.add('login__group-incorrecto')
  //     document.getElementById('email').classList.remove('login__group-correcto')
  //     document.querySelector('#email .login__input-error').classList.add('login__input-error-activo')
  //   } else if(logInError.status === 405){
  //     setOpenBanned(true)
  //     document.getElementById('email').classList.add('login__group-incorrecto')
  //     document.getElementById('email').classList.remove('login__group-correcto')
  //     document.querySelector('#email .login__input-error').classList.add('login__input-error-activo')
  //     document.getElementById('password').classList.add('login__group-incorrecto')
  //     document.getElementById('password').classList.remove('login__group-correcto')
  //     document.querySelector('#password .login__input-error').classList.add('login__input-error-activo')
  //   }
  // },[logInError]); 

  
  // React.useEffect(() => {
  //   if (redirect && redirect.value) dispatch(openPageLoader());
  // }, [redirect]);


  return (

    <div className="login">
      <div className = {`login__wrapper ${s.loginContainer}`}>

        <div className='login__group'>
          <h1 className="login__title">Sign In</h1>
        </div>

        <div className='login__group' id='email'>
            <input
            type="email"
            id="email"
            name={"email"}
            value={input.email}
            placeholder="Email"
            onChange={(e) => handleChange(e)}
            className = {`login__input ${s.input}`}
            />
            <p className = {`login__input-error ${s.errorMsg}`}>{errorsEmail.email}</p>
        </div>

        <div className='login__group' id='password'>
            <input
            type="password"
            id='password'
            name={"password"}
            value={input.password}
            placeholder="Password"
            onChange={(e) => handleChange(e)}
            className = {`login__input ${s.input}`}
            />
            <p className = {`login__input-error ${s.errorMsg}`}>{errorsPassword.password}</p>
        </div>
        <div className='login__group' >
          <button type='submit' className="login__btn" onClick={(e) => handleSubmit(e)} >Log In</button>
        </div>
        <p className="login__text"><Link to='/sendemail' className="link">Forgot password?</Link></p>
          {/* {checkMailPassword.value ? (<p className='danger'>Something was wrong. Please check email or password.</p>) : null} */}
          
          {redirect?.value ? <Navigate push to={'/'} underline="none" /> : null}

          <div className="login__group">
            <div className="login_lines">
          <div className="or">OR</div>
          </div>
          </div>
          <div className='login__group' >
            <button type='submit' className="login__btn" onClick={handleGoogleLogin} >Google</button>
          </div>
          <div className='login__google' >
              <div id="signInDiv"></div>
          </div>
          <p className="login__text">No tienes cuenta? <Link to='/signup' className="link">Sign up aqui!</Link></p>

          <Snackbar autoHideDuration={4000} open={openPassword} onClose={handleClosePassword}>
          <Alert onClose={handleClosePassword} severity="error" sx={{ width: '100%' }}>
              Wrong password
          </Alert>
          </Snackbar>

          <Snackbar autoHideDuration={4000} open={openEmail} onClose={handleCloseEmail}>
          <Alert onClose={handleCloseEmail} severity="error" sx={{ width: '100%' }}>
              Unregistered Email
          </Alert>
          </Snackbar>

          <Snackbar autoHideDuration={4000} open={openBanned} onClose={handleCloseBanned}>
          <Alert onClose={handleCloseEmail} severity="error" sx={{ width: '100%' }}>
              YOU ARE BANNED!!!
          </Alert>
          </Snackbar>

      </div>
    </div>
  );
};