import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { validatePassword, validatePassword2 } from './validate';
// import { updatePassword } from '../../redux/actions';
import './UpdatePassword.css'
import { useLocation, useNavigate } from 'react-router-dom';

import s from './UpdatePassword.module.css';

export default function UpdatePassword() {
    const [redirect, setRedirect] = useState({ value: false })
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const search = useLocation().search;
    const token = new URLSearchParams(search).get('token');
    console.log(token);
    const [ input, setInput ] = useState({
        password: '',
        password2:''
    })

    // const history = useHistory()

    const [errorsPasword, setErrorsPassword] = useState({})
    const [errorsPassword2, setErrorsPassword2] = useState({})

    const handleChange = (e) => {
        e.preventDefault();
        setInput({...input,[e.target.name]: e.target.value})
        setErrorsPassword(validatePassword({...input,[e.target.name]: e.target.value}))
        setErrorsPassword2(validatePassword2({...input,[e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(updatePassword(input.password, token))
        setErrorsPassword(validatePassword({...input,[e.target.name]: e.target.value}))
        setErrorsPassword2(validatePassword2({...input,[e.target.name]: e.target.value}))
        navigate('/login')
        
    }

  return (
    <div className="login">

        <div className = {`update__wrapper ${s.updateContainer}`}>

            <div className='update__group'>
                <h1 className="update__title">Restore Password</h1>
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
                <p className = {`update__input-error ${s.errorMsg}`}>{errorsPasword.password}</p>
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
                <p className = {`update__input-error ${s.errorMsg}`}>{errorsPassword2.password2}</p>
            </div>

            <div className='update__group' >
                <button type='submit' className="update__btn" onClick={(e) => handleSubmit(e)} >Submit</button>
            </div>

        </div>
        
    </div>
  )
}
