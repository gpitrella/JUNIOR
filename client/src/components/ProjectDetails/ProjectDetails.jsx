import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { getProjectById } from '../../redux/actions/projectsActions';
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
console.log(project)
  useEffect(() => {
    dispatch(getUserById(project.userId))
  }, [dispatch, project.userId]);

  const { user } = useSelector(state => state.usersReducer);

  // Desplegable:
  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
    <div className={s.projects_view_content}>
        <h1 className={s.gradient__text}> PROYECTO </h1>
         <p>Detalles del proyecto</p>
    </div> 

        <Card sx={{ display: 'flex', backgroundColor: 'gray', marginLeft: 53, marginTop: 10, width: 900, justifyContent: "space-between", borderRadius: 5 }}>
            <CardContent>
              <Stack sx={{ bgcolor: 'white', borderRadius: 5, width:'100%' }}>
                  
                  <Typography component="div" variant="h5" padding={2}>
                    { project.title }
                  </Typography>

                  <Typography component="div" variant="h6" padding={2}>
                    Autor: {user.name}
                  </Typography>
              </Stack>
              
              <br/>
              <Stack sx={{ bgcolor: 'white', borderRadius: 5, width:'100%' }}>
                <Typography padding={2}>{ project.description }</Typography>
              </Stack>
              
              <br/>
              <Stack sx={{ bgcolor: 'white', borderRadius: 5, width:'100%' }}>
                <Typography component="div" padding={2}>Colaboradores: </Typography>
                <Typography component="div" padding={2}>Lista de Colaboradors Aqui</Typography>
              </Stack>
              
              <br/>

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

              
                <div>
                <IconButton aria-label="previous">
                  <GitHubIcon sx={{ height: 40, width: 40 }}/>
                  <Typography component="div" padding={2}>{ project.gitHubUrl }</Typography>
                </IconButton>
                </div>
                <br />
                <IconButton aria-label="next">
                  <WhatsAppIcon sx={{ height: 40, width: 40 }}/>
                  <Typography component="div" padding={2}>{ project.wspUrl }</Typography>  
                </IconButton>  
              

                <Typography variant="subtitle1" color="text.secondary" component="div">
                    <span className='titleTechs'>Techs: </span>{ 
                        project?.tech?.length > 0 && project?.tech.map(element => {
                          return (<span key={Math.random()}>{`${element.charAt(0).toUpperCase() + element.slice(1)}, `} </span>)
                        })
                      }
                  </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                  <Typography>Estado: {project.status}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                  <Typography>Tipo Proyecto : {project.payment}</Typography>
                </Box>

                <Stack sx={{ borderRadius: 1}} direction="row" spacing={2} width="100%">

                  <Box display='flex' width="100%" height="70%" alignItems='end' justifyContent='center' padding={2}>
                      <Button variant='contained' color='info' startIcon={<ArrowBackIosNewIcon/>} href="/projects">Volver</Button>
                  </Box>       
                  
                  <Box display='flex'>
                  <CardMedia
                      component="img"
                      sx={{ 
                        position: "center",
                        width: 60,
                        height: 60,
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
                width: 200,
                height: 200,
                borderBottomLeftRadius: 100,
                borderTopLeftRadius: 100,
              }}
              src={project.image}
              alt={project.title}
            />

        </Card>




    </>
  );
}