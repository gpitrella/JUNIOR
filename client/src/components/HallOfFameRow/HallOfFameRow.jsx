import React from 'react';
import PlayerIcon from '../PlayerIcon/PlayerIcon';
import Linkedin from '../SVG/Linkedin';
import Github from '../SVG/Github';
import Email from '../SVG/Email';


import { numberWithCommas } from '../../lib/util';

import s from './HallOfFameRow.module.css';

export default function HallOfFameRow({ nickname, status, avatar, index, email, github, linkedin }) {

  let handleClick = function(link) {
    window.open(link, '_blank');
  }

  let handleClickEmail = function() {
    window.open(email);
  }

  return (
    <div className = {`${s.container} ${index === 1 ? s.first : index <= 3 ? s.second : ''}`}>
      <div className = {s.containerIndex}>
        <span className = {s.spanIndex}>{index}</span>
      </div>
      <PlayerIcon avatar = {avatar} name = {nickname} />
      <span className = {s.spanNickname}>{nickname}</span>
      {/* <span className = {s.spanId}>{id}</span> */}
      <span className = {s.spanNickname}>{status}</span>
      <span className = {s.spanContact}>
        <div className = {`${s.containerLink} ${s.email}`} onClick = {() => handleClickEmail(email)}>
          <Email />
        </div>  
        <div className = {`${s.containerLink} ${s.linkedin}`} onClick = {() => handleClick(linkedin)}>
          <Linkedin />
        </div>   
        <div className = {`${s.containerLink} ${s.github}`} onClick = {() => handleClick(github)}>
          <Github />
        </div>  
      </span>
    </div>
  );
}