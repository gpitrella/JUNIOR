import * as React from 'react';
import { CardActionArea, CardActions } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import ModalTool from '../../ModalTool/ModalTool';
import { codePage } from '../../../lib/constants';
import { Link } from 'react-router-dom';
import s from './Code.module.css';


export default function Code() {

  return (
    <div className={s.main_box_personalinformation}>
      <h1 className={s.gradient__text}> TOOLS </h1>
      <h2 className={`${s.title_personalinformation} ${s.gradient__text}`}> Herramientas para Codear </h2>
      <p className={s.textDescriptionCodeTool}>
          Te brindamos un detalle general de diferentes plataformas gratuitas en donde puedes practicar y mejorar con el lenguaje 
          de programación que más te gusta, por intermedio de ejercicios y desafios prácticos.
			</p>
      <div>
        {
          codePage?.length === 0 
             ? <h3>Todavía no hay Herramientas sumadas, ANIMATE y suma una. 🔧 </h3>
             : codePage.map((tool) => {
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
