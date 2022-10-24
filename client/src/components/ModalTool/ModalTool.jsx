import * as React from 'react';
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import s from './ModalTool.module.css';


export default function ModalTool({ tool }) {

    return (
        <div className={s.detailsMainTools}>
            <Card id='individual_box_Tool' sx={{ bgcolor: "rgba(32, 32, 36, 0.8)", borderRadius: 3 }}>
                <CardActionArea >
                    <a href={tool.link} target="_blank">
                        <img src={ tool.image } alt={ tool.name } className={s.imgTools} />
                    </a>
                </CardActionArea>
            </Card>
            <div className={s.detailsTools}>
                <h3 >Descripción: </h3>
                <p> { tool.description }</p>
                <a href={tool.link} >
                </a>
            </div>
        </div>
    )
}
