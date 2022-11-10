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
import { sendCollaborate, clearDataProject } from '../../redux/actions/projectsActions.js';

import { useNavigate } from "react-router-dom";
import './ModalInvitationProject.css';

export default function ModalInvitationProject() {
    // Cartel desplegable de Login
    const dispatch = useDispatch();
    
    const { modalInvitationProject } = useSelector((state) => state.homepageReducer);
    const { user, idProject } = useSelector((state) => state.homepageReducer);
    const { newCollaborate, errorsProject } = useSelector((state) => state.projectsReducer);
    const [errors, setErrors] = React.useState({});
    const [ infoCollaborador, setInfoCollaborador ] = React.useState({
      idProject: idProject,
      idUserCollaborator: user?.user?._id,
      email: user?.user?.email,
      linkedin: '',
      text: '',
      number: '',
      github: ''
    });

    React.useEffect(() => {
      if(infoCollaborador.idProject === '') {
        setInfoCollaborador({
          ...infoCollaborador,
          idProject: idProject
        })
      }

      return () => {
        dispatch(clearDataProject())
      }
    }, [idProject]);

    const handleCloseInfo = (e) => {
        e.preventDefault();
        dispatch(closeModalInfoCollaborator());
        dispatch(clearDataProject());
    };

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
      });
    };

    const handleSubmit = (e) => { 
      e.preventDefault();
      dispatch(sendCollaborate(infoCollaborador))
    }

    return (
      <>
      { modalInvitationProject && 
          <div className='main_modal_collaborador'>
            <div className='container_modal_collaborador' >
            <BootstrapDialogTitle className='button_close_collaborate'>
              🚀Enviar Invitación a Projecto:
               <button className="btnCollaboratorClose" onClick={(e) => handleCloseInfo(e)}> X </button>
            </BootstrapDialogTitle>
            { !newCollaborate.message && errorsProject === '' ? 
            <div>
            <DialogContent dividers>
                <Typography gutterBottom>
                    Te felicitamos por tus ganas de crecer y sumar colaboradores. 🚀 Te solicitamos a continuación tu información
                    de contacto para que podamos enviarsela al futuro colaborador del proyecto y puedan comunicarse para avanzar con 
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

              <div className={`form__group`} id='linkedin'>
                <label htmlFor="linkedin" className='labelInfoCollaborator'>GitHub: </label>
                <input
                  type={'text'}
                  className='formInputCollaborator'
                  id='github'
                  name = {'github'}
                  placeholder='Ingresar GitHub'
                  value = {infoCollaborador.github}
                  onChange={(e) => handleChange(e)}
                />                 
                <p className='form__input-error'>{errors?.github}</p>
              </div>

              <div className={`form__group`} id='whatsApp'>
                <label htmlFor="number" className='labelInfoCollaborator'>Contacto: </label>
                <input
                  type={'text'}
                  className='formInputCollaborator'
                  id='number'
                  name = {'number'}
                  placeholder='Numero de contacto (WhatsApp)'
                  value = {infoCollaborador.number}
                  onChange={(e) => handleChange(e)}
                />                 
                <p className='form__input-error'>{errors?.whatsApp}</p>
              </div>

              <div className={`form__group`} id='coverLetter'>
                <label htmlFor="text" className='labelInfoCollaborator'>Mensaje: </label>
                <textarea 
                  rows="5" 
                  type={'textarea'}
                  className='formInputTextArea'
                  id='text'
                  name = {'text'}
                  placeholder='Comentale al futuro Colaborador la idea del proyecto y tus ganas de sumarlo al proyecto, las Techs del proyecto y cualquier otra información que consideres relevante.'
                  value = {infoCollaborador.text}
                  onChange={(e) => handleChange(e)}
                />                 
                <p className='form__input-error'>{errors?.coverLetter}</p>
              </div>
            </form>
            <DialogActions>
                <button className="btnCollaborator" type='submit' onClick={(e) => handleSubmit(e)}>
                    Enviar Invitación
                </button>
            </DialogActions>
            </div>
            : newCollaborate.message ? <div className='successSend'> 
                ✅ Felicitaciones ya enviamos al futuro colaborador todos tus datos para que
                puedan contactarse y pueda ser parte del proyecto. Contactalo así podes empezar
                a sumar experiencia rápido.   
                </div> 
              : <div className='successSend'> 
                ❌ Hubo algún error al enviar la información al enviar, intentalo nuevamente.
                Cualquier inconveniente ponete en contacto con nosotros.
                <p> -- { typeof(errorsProject) === 'string' && errorsProject} </p>
                </div> } 
            </div>
         </div> }
         </>
    )
};