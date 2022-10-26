import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import s from './CardProject.module.scss';
import iconpayment from '../../assets/money.png';
import teamwork from '../../assets/teamwork.png';
import { Link } from 'react-router-dom';
// Desplegable
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

// CSS Material UI
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


export default function CardProject({ project, handleOpenMessageLogin }) {
  const theme = useTheme();

  // Desplegable:
  const [ expanded, setExpanded] = React.useState('panel1');
  const [ anchorCard, setAnchorCard ] = React.useState(window.screen.width > 1150 ? 800 : window.screen.width <= 550 ? 380 : 650);
  const [ fontSize, setFontSize ] = React.useState(window.screen.width > 1150 ? 25 : 20);
  const [ anchorImg, setAnchorImg ] = React.useState(window.screen.width > 700 ? 200 : 100)
  const [ displayImg, setDisplayImg ] = React.useState(window.screen.width > 550 ? true : false)
  const [anchorEl, setAnchorEl] = React.useState(null); // Desplegable WhatsApp
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleClickOpen = (e) => {
    e.preventDefault();
    handleOpenMessageLogin(project._id)
  }

  // Window Resize Events
  window.addEventListener('resize', () => {
    if(window.screen.width > 1150) {
      if(anchorCard < 800) {
        setAnchorCard(800)
        setFontSize(25)
        setAnchorImg(200)
        setDisplayImg(true)
      }  
    }

    if( 700 < window.screen.width < 1150) {
      if(anchorCard > 650) {
        setAnchorCard(650)
        setFontSize(20)
        setAnchorImg(200)
        setDisplayImg(true)
      } 
    }

    if(550 < window.screen.width < 700) {
      if(anchorCard > 550) {
        setAnchorCard(550)
        setFontSize(18)
        setAnchorImg(100)
        setDisplayImg(true)
      }  
    }
    if(window.screen.width < 550) {
      if(anchorCard > 380) {
        setAnchorCard(380)
        setFontSize(16)
        setDisplayImg(false)
      }  
    }
  });


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const idWathsApp = open ? 'simple-popover' : undefined;

  
  return (
    <>
    <Card sx={{ display: 'flex', margin: 5, width: anchorCard, justifyContent: "space-between", zIndex: "10000", borderRadius: 5, backgroundColor: '#202024', boxShadow: '2px 3px 5px #96969680' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: 600, color: 'white' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <div className={s.card_content_top}>
          <Link to={`/projects/${project._id}`}>
            <Typography component="div" variant="h5" sx={{ fontSize: fontSize }}>
              { project?.title.charAt(0).toUpperCase() + project?.title.toLowerCase().slice(1) }
              </Typography>
          </Link>    
              <div className={s.buttonandprojecttype} >
                { project?.payment               
                    ? <span><img src={teamwork} alt="collaborate project" style={{width: "30px", margin: "0px 10px"}}/> <img src={iconpayment} alt="collaborate project" style={{width: "30px", margin: "0px 10px"}} /> </span>
                    : <img src={teamwork} alt="collaborate project" style={{width: "30px", margin: "0px 10px"}}/>
                }
                { project?.status === 'develop' ? <button className={s.btnCardProject} onClick={(e) => handleClickOpen(e)} type="button"> Colaborar </button> : '' }
              </div>
          </div>
          <Accordion onChange={handleChange('panel1')} sx={{ color: 'white', borderColor: '#202024', backgroundColor: '#202024' }}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{ color: 'white', backgroundColor: 'none', minHeight: 30, height: 30 }}>
              <Typography>Descripción: </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ color: 'white', backgroundColor: '#202024' }}>
              <Typography>
                  { project.description }
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion onChange={handleChange('panel1')} sx={{ color: 'white', borderColor: '#202024', backgroundColor: '#202024' }}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" className='svgiconCardProject' sx={{ color: 'white', backgroundColor: '#202024', minHeight: 30, height: 30 }}>
              <Typography>Tareas Pendientes: </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ color: 'white', backgroundColor: '#202024' }}>
                { project?.tasks.length > 0 
                    ? project?.tasks.map((task) => {
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
                
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ color: 'white', marginLeft: '40px' }}>
                <span>Status: </span><span style={project?.status === "finish" ? { fontSize: '14px', color: '#8dde40' } : { fontSize: '14px', color: '#ffff00' }}>{ project?.status === "finish" ? 'Terminado' : 'En Desarrollo' }</span>
          </Typography>
          
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <a href={ project?.gitHubUrl } target="_blank" rel="noopener noreferrer">
            <IconButton aria-label="previous">
              <GitHubIcon sx={{ height: window.screen.width < 500 ? 25 : 35, width: window.screen.width < 500 ? 25 : 35, color: 'white' }}/>
            </IconButton>
          </a>

          <IconButton aria-label="next" aria-describedby={idWathsApp} onClick={handleClick}>
            <WhatsAppIcon sx={{ height: window.screen.width < 500 ? 25 : 35, width: window.screen.width < 500 ? 25 : 35, color: 'white' }}/>
          </IconButton>
          <Popover
            id={idWathsApp}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            sx={{ fontSize: 10 }}
          >
            <Typography sx={{ p: 2 }}>Contacto Creador: { project.wspUrl }</Typography>
          </Popover>

          <a href={ project?.deployment } target="_blank" rel="noopener noreferrer">
            <IconButton aria-label="previous">
              <LiveTvIcon sx={{ height: window.screen.width < 500 ? 25 : 35, width: window.screen.width < 500 ? 25 : 35, color: 'white' }}/>
            </IconButton>
          </a>

          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ color: 'white' }}>
            <span className='titleTechs'>Techs: </span>{ 
                project?.tech?.length > 0 && project?.tech.map(element => {
                return (<span key={Math.random()}>{`${element.charAt(0).toUpperCase() + element.slice(1)}, `} </span>)
              })
            }
        </Typography>

        </Box>
      </Box> 
      { displayImg &&
        <CardMedia
          component="img"
          sx={{ 
            position: "right",
            width: anchorImg,
            height: anchorImg,
            borderBottomLeftRadius: 100,
            borderTopLeftRadius: 100,
            backgroundColor: '#202024'
          }}
          src={project.image}
          alt={project.title}
        />
      }
    </Card>
    </>
  );
}
