import * as React from 'react';
import Button from '@mui/material/Button';
import ModalTool from '../../ModalTool/ModalTool';
import { backPage } from '../../../lib/constants';
import { Link } from 'react-router-dom';
import s from './BackDeploy.module.css';


export default function BackDeploy() {

  return (
    <div className={s.main_box_personalinformation}>
      <h1 className={s.gradient__text}> HERRAMIENTAS </h1>
      <h2 className={`${s.title_personalinformation} ${s.gradient__text}`}> Deployado de Back End </h2>
      <p className={s.textDescriptionCodeTool}>
          Te brindamos diferentes herramientas para que puedas deployar tus proyectos en esta sección desde el Back End.
			</p>
      <div>
        {
          backPage?.length === 0 
             ? <h3>Todavía no hay Herramientas sumadas, ANIMATE y suma una. 🔧 </h3>
             : backPage.map((tool) => {
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
