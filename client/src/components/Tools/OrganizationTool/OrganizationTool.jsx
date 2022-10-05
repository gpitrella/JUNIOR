import * as React from 'react';
import { CardActionArea, CardActions } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import ModalTool from '../../ModalTool/ModalTool';
import { organizationTool } from '../../../lib/constants';
import { Link } from 'react-router-dom';
import s from './OrganizationTool.module.css';


export default function Code() {

  return (
    <div className={s.main_box_personalinformation}>
      <h1 className={s.gradient__text}> HERRAMIENTAS </h1>
      <h2 className={`${s.title_personalinformation} ${s.gradient__text}`}> Herramientas de Organización </h2>
      <p className={s.textDescriptionCodeTool}>
          Consideramos que una de las claves para el exito de todo proyecto o meta es la organización por lo que 
          te brindamos a continuación una serie de herramientas gratuitas en donde puedas establecer tareas, responsabilidades y
          te ayudaran a completar tu proyecto o alcanzar tu meta.
			</p>
      <div>
        {
          organizationTool?.length === 0 
             ? <h3>Todavía no hay Herramientas sumadas, ANIMATE y suma una. 🔧 </h3>
             : organizationTool.map((tool) => {
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
