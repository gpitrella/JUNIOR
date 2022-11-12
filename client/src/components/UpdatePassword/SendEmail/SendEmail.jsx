import React from 'react';
import { useState } from 'react';
import { validateEmail } from '../../LogIn/validate';
import { useSelector, useDispatch } from 'react-redux';
import { sendEmail, cleanSendEmail, cleanLogInError } from '../../../redux/actions/generalActions';
import { Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import s from './SendEmail.module.css';
import { style } from '@mui/system';


export default function SendEmail() {

    const navigate = useNavigate();
    const [ input, setInput ] = useState({
        email: '',
    })
    const { logInError, passRecoveryMessage } = useSelector((state) => state.homepageReducer)

    const [errors, setErrors] = useState({email: "Add email"})

    const [openEmail, setOpenEmail] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);


    const dispatch = useDispatch()

    const handleCloseEmail = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenEmail(false);
      };

      const handleCloseSuccess = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenSuccess(false);
      };

    const handleChange = (e) => {
        e.preventDefault();
        setInput({...input,[e.target.name]: e.target.value})
        setErrors(validateEmail({...input,[e.target.name]: e.target.value}, errors))
    }


      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(sendEmail(input.email))
        setErrors(validateEmail({...input,[e.target.name]: e.target.value}, errors))
        setInput({
          email: '',
        })
      }

      const handleCloseSendEmail = (e) => {
        e.preventDefault();
        dispatch(cleanSendEmail);
        dispatch(cleanLogInError);
        navigate('/login');
      };

      React.useEffect(() => {
        if(logInError === 'User not found'){
          setOpenEmail(true)
          errors.email = "Unregistered Email"
          document.getElementById('email').classList.add('login__group-incorrecto')
          document.getElementById('email').classList.remove('login__group-correcto')
          document.querySelector('#email .login__input-error').classList.add('login__input-error-activo')
        } 
        if (passRecoveryMessage.message){
          setOpenSuccess(true)
        }
      },[logInError, passRecoveryMessage]); 

  return (
    <div className='login'>
        <div className = {`login__wrapper ${s.loginContainer}`}>
        <button type="text" className={s.closePopup} onClick={(e) => handleCloseSendEmail(e)}> X </button>

            <div className={`login__group ${s.login__group_sendEmail}`}>
            <h1 className={s.login__title_send}>Olvidaste el Password</h1>
            </div>
            { !passRecoveryMessage?.message 
                 ? <div>
                      <div className={`login__group ${s.login__group_boxSendEmail}`} id='email'>
                      <p className='login__text'>Ingresa tu email para recuperar Password.</p>
                          <input
                          type="email"
                          id="email"
                          name={"email"}
                          value={input.email}
                          placeholder="Email"
                          onChange={(e) => handleChange(e)}
                          className = {`login__input ${s.input}`}
                          />
                          <p className = {`login__input-error ${s.errorMsg}`}>{errors.email}</p>
                      </div>
                      <div className={`login__group ${s.login__group_boxSendEmail}`} >
                          <button type='submit' className="login__btn" onClick={(e) => handleSubmit(e)} >Enviar</button>
                      </div>
                    </div>
                : <p className='login__text'> ✅ { passRecoveryMessage.message }</p>
            }

            <Snackbar autoHideDuration={4000} open={openEmail} onClose={handleCloseEmail}>
                <Alert onClose={handleCloseEmail} severity="error" sx={{ width: '100%' }}>
                    Email No registrado
                </Alert>
            </Snackbar>

            <Snackbar autoHideDuration={4000} open={openSuccess} onClose={handleCloseSuccess}>
                <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
                    Chequea el tu email para recuperar el password.
                </Alert>
            </Snackbar>

        </div>
    </div>
  )
}
