import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../redux/actions/generalActions";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { validateUsername, validateEmail, validatePassword, validatePassword2 } from './validate';
import { Snackbar, Alert } from '@mui/material';
import './SignUp.css';

import s from './SignUp.module.css';

export default function SignUp() {

    const dispatch = useDispatch();
    const { logInError } = useSelector((state) => state.homepageReducer)
    const [openEmail, setOpenEmail] = useState(false);
    const [ input, setInput ] = useState({
        username: '',
        email: '',
        password: '',
        password2:''
    })

    const [errors, setErrors] = useState({
        username: "Add a username",
        email: "Add an email",
        password: "Add a password",
        password2: "Repeat password"
    })

    const handleChange = (e) => {
        e.preventDefault();
        setInput({...input,[e.target.name]: e.target.value})
        setErrors(validateUsername({...input,[e.target.name]: e.target.value}, errors))
        setErrors(validateEmail({...input,[e.target.name]: e.target.value}, errors))
        setErrors(validatePassword({...input,[e.target.name]: e.target.value}, errors))
        setErrors(validatePassword2({...input,[e.target.name]: e.target.value}, errors))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateUsername({...input,[e.target.name]: e.target.value}, errors))
        setErrors(validateEmail({...input,[e.target.name]: e.target.value}, errors))
        setErrors(validatePassword({...input,[e.target.name]: e.target.value}, errors))
        setErrors(validatePassword2({...input,[e.target.name]: e.target.value}, errors))
        if(Object.keys(errors).length === 0) {
            dispatch(signUp(input.username, input.email, input.password, input.password2))
        }
      }

      const handleCloseEmail = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenEmail(false);
      };

      React.useEffect(() => {
        if(logInError.status === 404){
            setOpenEmail(true)
            errors.email = logInError?.data.msg
            document.getElementById('email').classList.add('signup__group-incorrecto')
            document.getElementById('email').classList.remove('signup__group-correcto')
            document.querySelector('#email .signup__input-error').classList.add('signup__input-error-activo')
        }
        if(logInError.status === 401){
            setOpenEmail(true)
            errors.password = logInError?.data.msg
            document.getElementById('email').classList.add('signup__group-incorrecto')
            document.getElementById('email').classList.remove('signup__group-correcto')
            document.querySelector('#email .signup__input-error').classList.add('signup__input-error-activo')
        }
      },[logInError]); 
    
    return (

    <div className="login">
        <div className = {`signup__wrapper ${s.signUpContainer}`}>

                <div className='signup__group'>
                    <h1 className="signup__title">Sign Up</h1>
                </div>

                <div className='signup__group' id='username'>
                    <input
                    type="text"
                    name={"username"}
                    id={"username"}
                    value={input.username}
                    placeholder="Username"
                    onChange={(e) => handleChange(e)}
                    className = {`signup__input ${s.input}`}
                    />
                    <p className = {`signup__input-error ${s.errorMsg}`}>{errors.username}</p>
                </div>

                <div className='signup__group' id='email'>
                    <input
                    type="email"
                    name={"email"}
                    id={"email"}
                    value={input.email}
                    placeholder="Email"
                    onChange={(e) => handleChange(e)}
                    className = {`signup__input ${s.input}`}
                    />
                    <p className = {`signup__input-error ${s.errorMsg}`}>{errors.email}</p>
                </div>

                <div className='signup__group' id='password'>
                    <input
                    type="password"
                    name={"password"}
                    value={input.password}
                    placeholder="Password"
                    onChange={(e) => handleChange(e)}
                    className = {`signup__input ${s.input}`}
                    />
                    <p className = {`signup__input-error ${s.errorMsg}`}>{errors.password}</p>
                </div>

                <div className='signup__group' id='password2'>
                    <input
                    type="password"
                    name={"password2"}
                    value={input.password2}
                    placeholder="Repeat your password"
                    onChange={(e) => handleChange(e)}
                    className = {`signup__input ${s.input}`}
                    />
                    <p className = {`signup__input-error ${s.errorMsg}`}>{errors.password2}</p>
                </div>
                
                <div className='signup__group' >
                <button type='submit' className="signup__btn" onClick={(e) => handleSubmit(e)} >Sign Up</button>
                </div>
                <p className="signup__text">¿Ya tienes cuenta? <Link to='/login' className="link">Log In</Link></p>

                <Snackbar autoHideDuration={4000} open={openEmail} onClose={handleCloseEmail}>
                    <Alert onClose={handleCloseEmail} severity="error" sx={{ width: '100%' }}>
                        This email has already benn used
                    </Alert>
                </Snackbar>
        </div>
    </div>
  )
}