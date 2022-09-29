import React from 'react';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { closeModalInfoCollaborator } from '../../redux/actions/generalActions.js';

import { useNavigate } from "react-router-dom";
import './ModalCollaborate.css';

export default function ModalCollaborate() {
    // Cartel desplegable de Login
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { modalInfoCollaborator } = useSelector((state) => state.homepageReducer);
    const [errors, setErrors] = React.useState({});
    const [infoCollaborador, setInfoCollaborador] = React.useState({
      linkedin: '',
      whatsApp:'',
      coverLetter: '',
    });

    React.useEffect(() => {
      return dispatch(closeModalInfoCollaborator());
    }, []);

    console.log(infoCollaborador);

    const handleCloseInfo = () => {
        dispatch(closeModalInfoCollaborator());
    };

    const handleOpenPageLogin = () => {
        navigate('/login');
    }

    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
          padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
          padding: theme.spacing(1),
        },
    }));

    const BootstrapDialogTitle = (props) => {
        const { children, onClose, ...other } = props;
      
        return (
          <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
              <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            ) : null}
          </DialogTitle>
        );
      };
      
      BootstrapDialogTitle.propTypes = {
        children: PropTypes.node,
        onClose: PropTypes.func.isRequired,
      };

    const handleChange = (e) => {
      e.preventDefault();
      setInfoCollaborador({
        ...infoCollaborador,
        [e.target.name]: e.target.value
      })
    };

    const handleSubmit = (e) => { 
      e.preventDefault();
      // ENVIAR INFORMAIÓN POR MAIL AL CREADOR DEL PROYECTO
    }

    return (
        <BootstrapDialog
            sx={{ borderRadius: '15px' }}
            onClose={handleCloseInfo}
            aria-labelledby="customized-dialog-title"
            open={modalInfoCollaborator}
        >
            <BootstrapDialogTitle onClose={handleCloseInfo}>
               👏Listo/a para Colaborar :
            </BootstrapDialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom>
                    Te felicitamos por tus ganas de crecer y colaborar. 🚀 Te solicitamos a continuación tu información
                    de contacto para que podamos enviarsela al creador del proyecto y puedan comunicarse para avanzar con 
                    el proyecto. 
                </Typography>
            </DialogContent>
            <form className='formCollaborator' id='form' >
              <div className={`form__group`} id='linkedin'>
                <label htmlFor="linkedin" className='labelInfoCollaborator'>Linkedin: </label>
                <input
                  type={'text'}
                  className='formInputCollaborator'
                  id='linkedin'
                  name = {'linkedin'}
                  placeholder='Ingresar Linkedin'
                  value = {infoCollaborador.linkedin}
                  onChange={(e) => handleChange(e)}
                />                 
                <p className='form__input-error'>{errors?.linkedin}</p>
              </div>

              <div className={`form__group`} id='whatsApp'>
                <label htmlFor="linkedin" className='labelInfoCollaborator'>Contacto: </label>
                <input
                  type={'text'}
                  className='formInputCollaborator'
                  id='whatsApp'
                  name = {'whatsApp'}
                  placeholder='Numero de contacto (WhatsApp)'
                  value = {infoCollaborador.whatsApp}
                  onChange={(e) => handleChange(e)}
                />                 
                <p className='form__input-error'>{errors?.whatsApp}</p>
              </div>

              <div className={`form__group`} id='coverLetter'>
                <label htmlFor="linkedin" className='labelInfoCollaborator'>Mensaje: </label>
                <textarea 
                  rows="5" 
                  type={'textarea'}
                  className='formInputTextArea'
                  id='linkedin'
                  name = {'coverLetter'}
                  placeholder='Comentale al Creador/a del proyecto tus ganas de colaborar, el área en el que te especializas o te gustaría trabajar, las Techs que conoces o cualquier otra información que consideres relevante.'
                  value = {infoCollaborador.coverLetter}
                  onChange={(e) => handleChange(e)}
                />                 
                <p className='form__input-error'>{errors?.coverLetter}</p>
              </div>
            </form>
            <DialogActions>
                <button className="btnCollaborator" type='submit' onClick={(e) => handleSubmit(e)}>
                    Quiero Colaborar
                </button>
            </DialogActions>
        </BootstrapDialog>
    )
};