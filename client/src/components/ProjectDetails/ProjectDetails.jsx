import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { clearProject, getProjectById, getProjectCollaborators } from '../../redux/actions/projectsActions';
import { getUserById } from '../../redux/actions/usersActions';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import s from './ProjectDetails.module.css';
import { Button, Stack } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import rocketProject from '../../assets/rocketProject.png';

// Desplegable
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


export default function ProjectDetail() {
  const theme = useTheme();

  const dispatch = useDispatch();

  const {id} = useParams();


useEffect(() => {
    dispatch(getProjectById(id))
  },[dispatch, id]);
  
  const { project } = useSelector(state => state.projectsReducer);

  useEffect(() => {
    dispatch(getUserById(project?.userId))
  }, [dispatch, project?.userId]);

  const { user } = useSelector(state => state.usersReducer);
  
  // traigo usuarios colaboradores
  useEffect(() => {
    dispatch(getProjectCollaborators(id))
  }, [dispatch, id]);

  const { projectCollaborators } = useSelector(state => state.projectsReducer)

  // Desplegable:
  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handlegoback = () => {
    dispatch(clearProject())
  }

  return (
    <>
    <div className={s.container_details}>
        <div className={s.projects_view_content}>
            <h1 className={s.gradient__text}> PROYECTO </h1>
            <p>Detalles del proyecto</p>
        </div> 

        <Card sx={{ display: 'flex',
                    flexWrap: 'wrap',
                     backgroundColor: 'gray',
                     width: {
                      xs: 250, 
                      sm: 450, 
                      md: 600, 
                      lg: 750, 
                      xl: 900, 
                    },
                     justifyContent: "space-between",
                     borderRadius: 5 }}>
            <CardContent sx={{
                              display: 'flex',
                              width: '10%',
                              margin: '2rem',
                              padding: '1rem',
                              flexBbasis: '0',
                              flexGrow: '99',
                              backgroundCcolor: 'white',
                              gap: '0.5rem',
                              flexWrap: 'wrap',
                            }}>
              <Stack sx={{ bgcolor: 'white', borderRadius: 5, width:'100%' }}>
                  
                  <Typography component="div" variant="h5" padding={1}>
                    { project?.title }
                  </Typography>

                  <Typography component="div" variant="h6" padding={1}>
                    Autor: {user?.name}
                  </Typography>
              </Stack>
              
              <br/>
              <Stack sx={{ bgcolor: 'white', borderRadius: 5, width:'100%' }}>
                <Typography padding={2}>{ project?.description }</Typography>
              </Stack>
              
              <br/>
              <Stack sx={{ bgcolor: 'white', borderRadius: 5, width:'100%' }}>
                {/* <Typography component="div" padding={2}>Colaboradores: </Typography>
                <Typography component="div" padding={2}>Lista de Colaboradors Aqui</Typography> */}
                <Accordion onChange={handleChange('panel1')} sx={{backgroundColor: 'gray'}}>
                  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{ backgroundColor: 'gray', minHeight: 30, height: 30 }}>
                    <Typography sx={{backgroundColor: 'gray'}}>Colaboradores: </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ color: 'white', backgroundColor: '#424242' }}>
                      { projectCollaborators?.length > 0 
                          ? projectCollaborators?.map((coder) => {
                            return (
                                <Typography key={Math.random()} sx={coder.status ? { fontSize: '14px', color: '#bae492' } : { fontSize: '14px' }}  >
                                  { `${!coder.status ? '🔧' : '✅' } ${coder.name} ${!coder.status ? '' : '- CODING' }` }
                                </Typography>
                            )
                              })
                          : <Typography>-- Colaboradores coordinan con el Creador del Proyecto.</Typography>
                      }
                  </AccordionDetails>
              </Accordion>
              </Stack>
              
              <Stack sx={{ bgcolor: 'white', borderRadius: 5, width:'100%' }}>
              <Accordion onChange={handleChange('panel1')} sx={{backgroundColor: 'gray'}}>
                  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{ backgroundColor: 'gray', minHeight: 30, height: 30 }}>
                    <Typography sx={{backgroundColor: 'gray'}}>Tareas Pendientes: </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ color: 'white', backgroundColor: '#424242' }}>
                      { project?.tasks?.length > 0 
                          ? project?.tasks?.map((task) => {
                            return (
                                <Typography key={Math.random()} sx={task.status ? { fontSize: '14px', color: '#bae492' } : { fontSize: '14px' }}  >
                                  { `${!task.status ? '🔧' : '✅' } ${task.task} ${!task.status ? '' : '- DONE' }` }
                                </Typography>
                            )
                              })
                          : <Typography>-- Puntos de colaboración a coordinar con el Creador del Proyecto.</Typography>
                      }
                  </AccordionDetails>
              </Accordion>
              </Stack>
              <Stack direction="row"
                     justifyContent="center"
                     alignItems="center"
                     spacing={1}
                     padding="0.2rem"
                      sx={{ bgcolor: 'white', borderRadius: 5, width:'100%' }}>
                  
                  
                  <Box sx={{ alignItems: 'center', pl: 2, pb: 3 }}>
                    <GitHubIcon sx={{ height: 35, width: 35 }}/>
                  </Box>

                  <Box sx={{ alignItems: 'center', pl: 1, pb: 1, typography: 'caption', overflow: 'hidden' }}>
                  <a href={`${project?.gitHubUrl}`} target="_blank">
                    <Typography component="div" padding={1}>{ project?.gitHubUrl }</Typography>
                  </a>
                  </Box>    
                  
                  
              </Stack>  
                <Stack padding="0.2rem" sx={{ bgcolor: 'white', borderRadius: 5, width:'100%' }}>      
                  <IconButton aria-label="next">
                    <WhatsAppIcon sx={{ height: 35, width: 35 }}/>
                    <Box sx={{ alignItems: 'center', pl: 1, pb: 1 }}>
                    { project?.wspUrl ?  
                    <Typography component="div" padding={1}>{ project?.wspUrl }</Typography>  
                    : <Typography component="div" padding={1} color="red">Debe Ingresar Whatsapp</Typography>
                    }
                    </Box>
                  </IconButton>  
                </Stack>      
                <Stack sx={{ bgcolor: 'white', borderRadius: 5, width:'100%' }}>
                <Typography variant="subtitle1" color="text.primary" component="div">
                    <span className='titleTechs'>Techs: </span>{ 
                        project?.tech?.length > 0 && project?.tech.map(element => {
                          return (<span key={Math.random()}>{`${element.charAt(0).toUpperCase() + element.slice(1)}, `} </span>)
                        })
                      }
                </Typography>
                </Stack>
                <Stack sx={{ display: 'flex', bgcolor: 'white', borderRadius: 5, width:'100%' }}>
                  <Box sx={{ alignItems: 'center', pl: 1, pb: 1 }}>
                    <Typography>Estado: {project?.status}</Typography>
                  </Box>
                  
                  <Box sx={{ alignItems: 'center', pl: 1, pb: 1 }}>
                    <Typography>Tipo Proyecto : { `${project?.payment ? 'Remunerado' : 'Colaborativo' }` } </Typography>
                  </Box>
                </Stack>

                <Stack sx={{ borderRadius: 1}} direction="row" spacing={2} width="100%" marginTop="1rem">

                  <Box display='flex' width="100%" height="70%" alignItems='end' justifyContent='center' padding={2}>
                      <Button variant='contained' color='info' startIcon={<ArrowBackIosNewIcon/>} onClick={handlegoback} href="/projects">Volver</Button>
                  </Box>       
                  
                  <Box display='flex'>
                  <CardMedia
                      component="img"
                      sx={{ 
                        position: "center",
                        width: 50,
                        height: 50,
                        // borderBottomLeftRadius: 100,
                        // borderTopLeftRadius: 100,
                      }}
                      src={rocketProject}
                      alt='rocketproject'
                      />
                  </Box>    

                </Stack>

            </CardContent>

            <CardMedia
              component="img"
              sx={{ 
                position: "right",
                width: 150,
                height: 150,
                borderBottomLeftRadius: 100,
                borderTopLeftRadius: 100,
              }}
              src={project?.image}
              alt={project?.title}
            />

        </Card>

      </div>
    </>
  );
}