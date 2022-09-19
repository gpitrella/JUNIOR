import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../redux/actions";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { validateUsername, validateEmail, validatePassword, validatePassword2 } from './validate';
import './SignUp.css'
import { Snackbar, Alert } from '@mui/material';

import s from './SignUp.module.css';

export default function SignUp() {

    const [ input, setInput ] = useState({
        username: '',
        email: '',
        password: '',
        password2:''
    })
    const { logInError } = useSelector((state) => state.general)

    const [errors, setErrors] = useState({})
    const [errorsEmail, setErrorsEmail] = useState({})
    const [errorsPasword, setErrorsPassword] = useState({})
    const [errorsPassword2, setErrorsPassword2] = useState({})
    const [openEmail, setOpenEmail] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        setInput({...input,[e.target.name]: e.target.value})
        setErrors(validateUsername({...input,[e.target.name]: e.target.value}))
        setErrorsEmail(validateEmail({...input,[e.target.name]: e.target.value}))
        setErrorsPassword(validatePassword({...input,[e.target.name]: e.target.value}))
        setErrorsPassword2(validatePassword2({...input,[e.target.name]: e.target.value}))
    }

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signUp(input.username, input.email, input.password))
        setErrors(validateUsername({...input,[e.target.name]: e.target.value}))
        setErrorsEmail(validateEmail({...input,[e.target.name]: e.target.value}))
        setErrorsPassword(validatePassword({...input,[e.target.name]: e.target.value}))
        setErrorsPassword2(validatePassword2({...input,[e.target.name]: e.target.value}))
      }

      const handleCloseEmail = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenEmail(false);
      };

      React.useEffect(() => {
        // console.log(logInError)
        if(logInError.status === 404){
            setOpenEmail(true)
            errorsEmail.email = "Email aready used"
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
                    <p className = {`signup__input-error ${s.errorMsg}`}>{errorsEmail.email}</p>
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
                    <p className = {`signup__input-error ${s.errorMsg}`}>{errorsPasword.password}</p>
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
                    <p className = {`signup__input-error ${s.errorMsg}`}>{errorsPassword2.password2}</p>
                </div>
                
                <div className='signup__group' >
                <button type='submit' className="signup__btn" onClick={(e) => handleSubmit(e)} >Sign Up</button>
                </div>
                <p className="signup__text">Already a user? <Link to='/login' className="link">Log In</Link></p>

                <Snackbar autoHideDuration={4000} open={openEmail} onClose={handleCloseEmail}>
                    <Alert onClose={handleCloseEmail} severity="error" sx={{ width: '100%' }}>
                        This email has already benn used
                    </Alert>
                </Snackbar>
        </div>
    </div>
  )
}
