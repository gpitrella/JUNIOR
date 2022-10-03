import * as React from 'react';
import { CardActionArea, CardActions } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import ModalTool from '../../ModalTool/ModalTool';
import { cvTool } from '../../../lib/constants';
import { Link } from 'react-router-dom';
import s from './CvTool.module.css';


export default function Code() {

  return (
    <div className={s.main_box_personalinformation}>
      <h1 className={s.gradient__text}> TOOLS </h1>
      <h2 className={`${s.title_personalinformation} ${s.gradient__text}`}> Tips para el CV  </h2>
      <p className={s.textDescriptionCodeTool}>
          Te compartimos algunos Tips para que tengas en cuenta a la hora de redactar tu CV. Ten en cuenta que son 
          recomendaciones que pueden ayudarte a mejorar la primera impresión que tiene el reclucador con respecto a 
          tu perfil.
			</p>
      <div>
        {
          cvTool?.length === 0 
             ? <h3>Todavía no hay Tips para el CV, ANIMATE y suma uno. 🔧 </h3>
             : cvTool.map((tool) => {
            return (
                <div className={s.main_box_code} >
                  <ModalTool tool={tool} key={tool.id}/>
                </div>
              )
          })
        }
      </div>
      <Link to={`/tools`}>
        <Button id='btn_personalinformation' variant="contained"> Tools </Button>
      </Link>
    </div>
  );
}
