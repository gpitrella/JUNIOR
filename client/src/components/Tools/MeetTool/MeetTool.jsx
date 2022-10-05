import * as React from 'react';
import { CardActionArea, CardActions } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import ModalTool from '../../ModalTool/ModalTool';
import { meetTool } from '../../../lib/constants';
import { Link } from 'react-router-dom';
import s from './MeetTool.module.css';


export default function Code() {

  return (
    <div className={s.main_box_personalinformation}>
      <h1 className={s.gradient__text}> HERRAMIENTAS </h1>
      <h2 className={`${s.title_personalinformation} ${s.gradient__text}`}> Plataformas de Reunion Virtual  </h2>
      <p className={s.textDescriptionCodeTool}>
          Otra de las claves para la realización de un proyecto y una organización es la comunicación continua 
          entre sus miembros o colaboradores para poder coordinar, organizar y definir tareas o metas a cumplir. 
          Acontinuación te compartimos diferentes herramientas para que puedas comunicarte y reunirte virtualmente 
          con tus colaboradores o miembros del proyecto. 
			</p>
      <div>
        {
          meetTool?.length === 0 
             ? <h3>Todavía no hay plataformas sumadas, ANIMATE y suma una. 🔧 </h3>
             : meetTool.map((tool) => {
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
