import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import PlayerIcon from '../PlayerIcon/PlayerIcon';
import Linkedin from '../SVG/Linkedin';
import Github from '../SVG/Github';
import Email from '../SVG/Email';

import s from './HallOfFameRow.module.css';

export default function HallOfFameRow({ name, collaborations, image, index, email, github, linkedin, techs }) {
  const { sendInvitationToProject } = useSelector((state) => state.projectsReducer);
  let handleClick = function(link) {
    window.open(link, '_blank');
  }

  return (
    <div className = {`${s.container}`/*` ${index === 1 ? s.first : index <= 3 ? s.second : ''}`*/}>
      <div className = {s.containerIndex}>
        <span className = {s.spanIndex}>{index}</span>
      </div>
      <PlayerIcon avatar = {image} name = {name} />
      <span className = {s.spanNickname}>{name}</span>
      {/* <span className = {s.spanId}>{id}</span> */}
      <span className = {s.spanNickname}>{collaborations.length > 0 ? "COLABORANDO" : "FREE"}</span>
      
      <div className={s.contactInfo}>
            <span className = {s.spanContact}>
            <a href={`mailto:${email}`} className = {`${s.containerLink} ${s.email}`}>
              <Email />
            </a>
            { linkedin !== "No especificado" &&
              <div className = {`${s.containerLink} ${s.linkedin}`} onClick = {() => handleClick(linkedin)}>
                <Linkedin />
              </div>
            }
            { github !== "No especificado" &&
              <div className = {`${s.containerLink} ${s.github}`} onClick = {() => handleClick(github)}>
                <Github />
              </div>  
            }
            </span>
            { sendInvitationToProject &&
              <div>
                <Button id={s.btn_invitation} variant="contained">
                    Invitar
                </Button>
              </div>
            }
        </div>
    </div>
  );
}