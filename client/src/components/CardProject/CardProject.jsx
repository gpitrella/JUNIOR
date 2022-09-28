import * as React from 'react';
import { useTheme } from '@mui/material/styles';
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
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import HandshakeIcon from '@mui/icons-material/Handshake';

// Desplegable
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

import s from './CardProject.module.css';

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




export default function MediaControlCard({ project }) {
  const theme = useTheme();

  // Desplegable:
  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Card sx={{ display: 'flex', margin: 5, width: 800, justifyContent: "center", borderRadius: 5 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: 600 }}>
        <CardContent sx={{ flex: '1 0 auto' }}>

          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <Typography component="div" variant="h5">
              { project.title }
            </Typography>
            { project?.payment === true ?
            <MonetizationOnIcon sx={{ height: 30, width: 30, margin: 1, color: '#388e3c' }}/> :
            <HandshakeIcon sx={{ height: 30, width: 30, margin: 1, color: '#2196f3' }}/>
            }
          </Box>
          

            <div>
              <Accordion onChange={handleChange('panel1')} sx={{ borderColor: 'white' }}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{ backgroundColor: 'white' }}>
                  <Typography>Descripción </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                     { project.description }
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            <Typography variant="subtitle1" color="text.secondary" component="div">
                <span>Status: </span>{ 
                    project?.status
                }
            </Typography>
            
          
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            <GitHubIcon sx={{ height: 40, width: 40 }}/>
          </IconButton>
          <IconButton aria-label="next">
            <WhatsAppIcon sx={{ height: 40, width: 40 }}/>
          </IconButton>
            <Typography variant="subtitle1" color="text.secondary" component="div">
                <span>Tech: </span>{ 
                    project?.tech?.length > 0 && project?.tech.map(element => {
                    return (<span key={Math.random()}>{`${element}, `} </span>)
                  })
                }
            </Typography>
        </Box>
      </Box>
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
  );
}

// {
//   "title": "Cuidado de Mascotas",
//   "description": "App para ",
//   "gitHubUrl":"https://github.com/gpitrella/PruebaTIPS",
//   "wspUrl":"https://api.whatsapp.com/send?phone=542614607020&text=Hola, Quiero sumarme al proyecto!",
//   "image": "https://sirenascarwash.com/assets/img/blog/p3-pet-friendly.jpg",
//   "newtech": ["React", "Redux", "Express", "Sequelize", "PostgreSQL"],
//   "userId": "62fa59f0a41323e6e7f40705",
//   "payment": false,
//   "status": "finish"
// }