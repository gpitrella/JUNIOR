import * as React from 'react';
import Button from '@mui/material/Button';
import ModalTool from '../../ModalTool/ModalTool';
import { designTool } from '../../../lib/constants';
import { Link } from 'react-router-dom';
import s from './DesignTool.module.css';


export default function Code() {

  return (
    <div className={s.container_component_main} >
    <div className={s.main_box_personalinformation}>
      <h1 className={s.gradient__text}> HERRAMIENTAS </h1>
      <h2 className={`${s.title_personalinformation} ${s.gradient__text}`}> Herramientas de Diseño </h2>
      <p className={s.textDescriptionCodeTool}>
          Una de las claves para que una aplicación o sitio web sea atractivo para el usuario es el diseño, la funcionacionalidad
          y por su puesto la utilidad del mismo. Te brindamos a continuación una serie de herramientas de diseño para que 
          puedas utilizarlas para diseñar tus proyectos o elementos del mismo.
			</p>
      <div>
        {
          designTool?.length === 0 
             ? <h3>Todavía no hay Herramientas sumadas, ANIMATE y suma una. 🔧 </h3>
             : designTool.map((tool) => {
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
    </div>
  );
}
