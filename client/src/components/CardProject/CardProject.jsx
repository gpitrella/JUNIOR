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

export default function MediaControlCard({ project }) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', margin: 5 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            { project.title }
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            <span>Descripción: </span>{ project.description }
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
              <span>Tech: </span>{ 
                  project.tech.length > 0 && project.tech.map(element => {
                  return (<span>{`${element}, `} </span>)
                })
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
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ 
          position: "right",
          width: 200,
          borderBottomLeftRadius: 80,
          borderTopLeftRadius: 80,
        }}
        src={project.image}
        alt={project.title}
      />
    </Card>
  );
}