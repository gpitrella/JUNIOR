import * as React from 'react';
import Card from '@mui/material/Card';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import s from './CardProfile.module.css';


export default function CardProfile ({ img, name, link, width }) {

   return (
        <Card id='individual_box_myprofile' sx={{ width: 200, height: 200, bgcolor: "rgba(32, 32, 36, 0.8)", borderRadius: 3 }}>
          <CardActionArea >
            <Link to={link}>
              <div className={s.personal_informacion} style={{width: `100%`, textAlign: 'center'}}>
                  <img src={img} alt={name} width={`${width}px`} ></img>
              </div>
            </Link>
          </CardActionArea>
          <CardActions >
            <Link to={link}>
              <Button id='button_myprofile' size="small" color="primary">
                  { name }
              </Button>
            </Link>
          </CardActions>
        </Card>
    )
}