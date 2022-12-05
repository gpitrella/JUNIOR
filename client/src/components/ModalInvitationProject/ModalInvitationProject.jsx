import React from 'react';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { closeModalInfoCollaborator } from '../../redux/actions/generalActions.js';
import { sendInvitationToProject, clearDataProject } from '../../redux/actions/projectsActions.js';
import validateInvitation from './validateInvitation.jsx';
import './ModalInvitationProject.css';


export default function ModalInvitationProject() {
    // Cartel desplegable de Login
    const dispatch = useDispatch();
    
    const { modalInvitationProject } = useSelector((state) => state.homepageReducer);
    const { user, idUserToInvite } = useSelector((state) => state.homepageReducer);
    const { sendInvitation, errorsProject, projectByUser } = useSelector((state) => state.projectsReducer);
    const [ selectProject, setSelectProject] = React.useState('');
    const [ infoCollaborador, setInfoCollaborador ] = React.useState({
      idProject: '',
      idUserToInvite: '',
      linkedin: user.user?.linkedin === '' ? '' : user.user?.linkedin,
      text: '',
      number: user.user?.phone === '' ? '' : user.user?.phone,
      github: user.user?.github === '' ? '' : user.user?.github
    });

    const [errors, setErrors] = React.useState({
      linkedin: "Agrega tu linkedin",
      text: "Agrega una nota para el colaborador",
      github: "Agrega un URL valida a tu proyecto de GitHub",
      number: "Agrega una numero de contacto",
    });


  const handleChangeProject = (event) => {
    event.preventDefault();
    setSelectProject(event.target.value);
    setInfoCollaborador({
      ...infoCollaborador,
      idProject: event.target.value
    })
  }; 

    React.useEffect(() => {
    
        setInfoCollaborador({
          ...infoCollaborador,
          idUserToInvite: idUserToInvite
        })
      

      return () => {
        setInfoCollaborador({
          ...infoCollaborador,
          idUserToInvite: ''
        })
        dispatch(clearDataProject())
      }
    }, [idUserToInvite]);

    const handleCloseInfo = (e) => {
        e.preventDefault();
        setInfoCollaborador({
            idProject: '',
            idUserToInvite: '',
            linkedin: user.user?.linkedin === '' ? '' : user.user?.linkedin,
            text: '',
            number: user.user?.phone === '' ? '' : user.user?.phone,
            github: user.user?.github === '' ? '' : user.user?.github
        })
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
      setErrors(validateInvitation({
        ...infoCollaborador,
        [e.target.name]: e.target.value
      }, errors))
      // if (!errors.title || !errors.description || !errors.image || !errors.gitHubUrl || !errors.newtech) {
      //   document.getElementById('form__msn').classList.remove('form__msn-activo')
      // }
    };

    const handleSubmit = (e) => { 
      e.preventDefault();
      dispatch(sendInvitationToProject(infoCollaborador))
    }

    

    return (
      <>
      { modalInvitationProject && 
          <div className='main_modal_collaborador' >
            <div className='container_modal_collaborador' style={!sendInvitation.message && errorsProject === '' ? {height: '750px', marginTop: '100px'} : { height: '250px', marginTop: '150px'} }>
            { !sendInvitation.message && errorsProject === '' ? 
            <div className="mainContainerPopUpInvitation">
            <BootstrapDialogTitle className='button_close_collaborate'>
              🚀Enviar Invitación a Projecto:
               <button className="btnCollaboratorClose" onClick={(e) => handleCloseInfo(e)}> X </button>
            </BootstrapDialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom>
                    Te felicitamos por tus ganas de crecer y sumar colaboradores. 🚀 Te solicitamos a continuación tu información
                    de contacto para que podamos enviarsela al futuro colaborador del proyecto y puedan comunicarse para avanzar con 
                    el proyecto. 
                </Typography>
            </DialogContent>
            <form className='formCollaborator' id='form' >
              <Box sx={{ textAlign: 'center', margin: '10px'}}>
                <FormControl sx={{ width: '70%' }}>
                  <InputLabel id="demo-simple-select-label">Proyecto: </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectProject}
                    label="selectProject"
                    onChange={handleChangeProject}
                  >
                    { 
                      projectByUser.length > 0 && projectByUser.map((project)=> {
                        return (<MenuItem key={project._id} value={project._id}> {project.title} </MenuItem>)
                      })
                    }
                  </Select>
                </FormControl>
              </Box>
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
              </div>
                <p id='form__input-error' className='display_form__input-error'>{errors?.text}</p>
            </form>
            <DialogActions>
                <button className="btnCollaborator" type='submit' onClick={(e) => handleSubmit(e)}>
                    Enviar Invitación
                </button>
            </DialogActions>
            </div>
            : sendInvitation.message ? 
                <div>
                  <BootstrapDialogTitle className='button_close_collaborate'>
                    🚀Enviar Invitación a Projecto:
                    <button className="btnCollaboratorClose" onClick={(e) => handleCloseInfo(e)}> X </button>
                  </BootstrapDialogTitle>   

                  <div className='successSend'> 
                    ✅ Felicitaciones ya enviamos al futuro colaborador todos tus datos para que
                    puedan contactarse y pueda ser parte del proyecto. Contactalo así podes empezar
                    a sumar experiencia rápido.   
                  </div> 
                </div>
              : 
                <div>
                  <BootstrapDialogTitle className='button_close_collaborate'>
                    🚀Enviar Invitación a Projecto:
                    <button className="btnCollaboratorClose" onClick={(e) => handleCloseInfo(e)}> X </button>
                  </BootstrapDialogTitle>                

                  <div className='successSend'> 
                  ❌ Hubo algún error al enviar la información, intentalo nuevamente.
                  Cualquier inconveniente ponete en contacto con nosotros.
                  <p> -- { typeof(errorsProject) === 'string' && errorsProject} </p>
                  </div> 
                </div>
                } 
            </div>
         </div> }
         </>
    )
};