import * as React from 'react';
import Button from '@mui/material/Button';
import ModalTool from '../../ModalTool/ModalTool';
import { frontPage } from '../../../lib/constants';
import { Link } from 'react-router-dom';
import s from './FrontDeploy.module.css';

export default function FrontDeploy() {

  return (
    <div className={s.container_component_main} >
    <div className={s.main_box_personalinformation}>
      <h1 className={s.gradient__text}> HERRAMIENTAS </h1>
      <h2 className={`${s.title_personalinformation} ${s.gradient__text}`}> Deployado de Front End </h2>
      <p className={s.textDescriptionCodeTool}>
          Te brindamos diferentes herramientas para que puedas deployar tus proyectos en esta sección desde el Front End.
			</p>
      <div>
        {
          frontPage?.length === 0 
             ? <h3>Todavía no hay Herramientas sumadas, ANIMATE y suma una. 🔧 </h3>
             : frontPage.map((tool) => {
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
