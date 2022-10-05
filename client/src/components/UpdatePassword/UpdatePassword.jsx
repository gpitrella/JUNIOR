import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { validatePassword, validatePassword2 } from './validate.jsx';
import { updatePassword } from '../../redux/actions/generalActions';
import { cleanSendEmail, cleanLogInError, logOut } from '../../redux/actions/generalActions';
import './UpdatePassword.css'
import { useLocation, useNavigate } from 'react-router-dom';

import s from './UpdatePassword.module.css';

export default function UpdatePassword() {
    const [redirect, setRedirect] = useState({ value: false })
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const search = useLocation().search;
    const token = new URLSearchParams(search).get('token');
    const [ input, setInput ] = useState({
        password: '',
        password2:''
    })

    const [errors, setErrors] = useState({
        password: "Add new password",
        password2: "Add new password"
    })

    const handleChange = (e) => {
        e.preventDefault();
        setInput({...input,[e.target.name]: e.target.value})
        setErrors(validatePassword({...input,[e.target.name]: e.target.value}, errors))
        setErrors(validatePassword2({...input,[e.target.name]: e.target.value}, errors))
    }

    const handleSubmit = (e) => {
        setErrors(validatePassword({...input,[e.target.name]: e.target.value}, errors))
        setErrors(validatePassword2({...input,[e.target.name]: e.target.value}, errors))
        e.preventDefault();
        if(Object.keys(errors).length === 0) {
            dispatch(updatePassword(input.password, token))
            navigate('/login');
        }
        
    }

    const handleCloseSendEmail = (e) => {
        e.preventDefault();
        dispatch(cleanSendEmail);
        dispatch(cleanLogInError);
        dispatch(logOut())
        navigate('/login');
      };

  return (
    <div className="login">
        <div className = {`update__wrapper ${s.updateContainer}`}>
        <button type="text" className={s.closePopup} onClick={(e) => handleCloseSendEmail(e)}> X </button>

            <div className='update__group'>
                <h1 className="update__title">Restablecer Password</h1>
            </div>

            <div className='update__group' id='password'>
                <input
                    type="password"
                    name={"password"}
                    value={input.password}
                    placeholder="Password"
                    onChange={(e) => handleChange(e)}
                    className = {`update__input ${s.input}`}
                />
                <p className = {`update__input-error ${s.errorMsg}`}>{errors.password}</p>
            </div>

            <div className='update__group' id='password2'>
                <input
                    type="password"
                    name={"password2"}
                    value={input.password2}
                    placeholder="Repeat your password"
                    onChange={(e) => handleChange(e)}
                    className = {`update__input ${s.input}`}
                />
                <p className = {`update__input-error ${s.errorMsg}`}>{errors.password2}</p>
            </div>

            <div className='update__group' >
                <button type='submit' className="update__btn" onClick={(e) => handleSubmit(e)}>Restablecer </button>
            </div>

        </div>
        
    </div>
  )
}
