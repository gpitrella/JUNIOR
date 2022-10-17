import * as React from 'react';
import { CardActionArea, CardActions } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import ModalTool from '../../ModalTool/ModalTool';
import { youtubeTool } from '../../../lib/constants';
import { Link } from 'react-router-dom';
import s from './YouTubeTool.module.css';
import { style } from '@mui/system';


export default function Code() {

  return (
    <div className={s.container_component_main} >
      <div className={s.main_box_personalinformation}>
        <h1 className={s.gradient__text}> HERRAMIENTAS </h1>
        <h2 className={`${s.title_personalinformation} ${s.gradient__text}`}> Canales de YouTube  </h2>
        <p className={s.textDescriptionCodeTool}>
            Una de las plataformas más utilizadas actualmentes para aprender es YouTube, seguramente la has utilizado. Te
            compartimos algunos canales utililes para adquirir más conocimientos de Programación.
        </p>
        <div>
          {
            youtubeTool?.length === 0 
              ? <h3>Todavía no hay canales sumados, ANIMATE y suma uno. 🔧 </h3>
              : youtubeTool.map((tool) => {
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
