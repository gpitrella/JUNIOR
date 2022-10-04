import * as React from 'react';
import { CardActionArea, CardActions } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import ModalTool from '../../ModalTool/ModalTool';
import { idLivePage } from '../../../lib/constants';
import { Link } from 'react-router-dom';
import s from './IdLive.module.css';


export default function IdLive() {



  return (
    <div className={s.main_box_personalinformation}>
      <h1 className={s.gradient__text}> HERRAMIENTAS </h1>
      <h2 className={`${s.title_personalinformation} ${s.gradient__text}`}> Interfases de Desarrollo </h2>
      <p className={s.textDescriptionCodeTool}>
          Te brindamos diferentes interfases de desarrollo que te ayudaran a generar código, 
          editarlo en línea y crear prototipos para ejecutar en el navegador web. Son herramientas ideales para crear
          prototipos, modelos para aplicar posteriormente a tus proyectos.
			</p>
      <div>
        {
          idLivePage?.length === 0 
             ? <h3>Todavía no hay Herramientas sumadas, ANIMATE y suma una. 🔧 </h3>
             : idLivePage.map((tool) => {
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
