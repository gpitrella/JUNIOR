import React from 'react';
import Linkedin from '../SVG/Linkedin';
import Github from '../SVG/Github';
import Email from '../SVG/Email';

import s from './CardDeveloper.module.css';

export default function CardDeveloper({ id, name, linkedin, github, email, img }) {

  let handleClick = function(link) {
    window.open(link, '_blank');
  }

  let handleClickEmail = function() {
    window.open(email);
  }
  
  return (
    <div class={s.card_wrapper}>
      <div class={s.card_front}>
          <div class={s.card_user}>
            <img src={img} alt="Developer Junior"/>
            <span>{name}</span>
            <span id="labelFullStackDeveloper">Full Stack Developer </span>
            <div className={s.user_info}>
              <span>
                <div className = {`${s.containerLink} ${s.linkedin}`} onClick = {() => handleClick(linkedin)}>
                  <Linkedin />
                </div>
              </span>
              <span>
                <div className = {`${s.containerLink} ${s.email}`} onClick = {handleClickEmail}>
                  <Email />
                </div>
              </span>
              <span>
                <div className = {`${s.containerLink} ${s.github}`} onClick = {() => handleClick(github)}>
                  <Github />
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
  
  );
}