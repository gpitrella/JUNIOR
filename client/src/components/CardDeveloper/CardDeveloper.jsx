import React from 'react';
import Linkedin from '../SVG/Linkedin';
import Github from '../SVG/Github';
import Email from '../SVG/Email';

import './CardDeveloper.css';

export default function CardDeveloper({ id, name, linkedin, github, email, img }) {

  let handleClick = function(link) {
    window.open(link, '_blank');
  }

  let handleClickEmail = function() {
    window.open(email);
  }
  
  return (
    <div class="card-wrapper">
    <div class="card-front">
        <div class="card-links">
          <span class="fa fa-instagram"></span>
          <span class="fa fa-link"></span>
        </div>
        <div class="card-user">
          <img src={img} alt="User Card by Ashish Mehra"/>
          <span>{name} </span>
          <span id="labelFullStackDeveloper">Full Stack Developer </span>
          <div className="user-info">
            <span>
              <div className = "containerLink linkedin" onClick = {() => handleClick(linkedin)}>
                <Linkedin />
              </div>
            </span>
            <span>
              <div className = "containerLink email" onClick = {handleClickEmail}>
                <Email />
              </div>
            </span>
            <span>
              <div className = "containerLink github" onClick = {() => handleClick(github)}>
                <Github />
              </div>
            </span>
          </div>
        </div>
    </div>
        <div class="card-back"></div>
        </div>
  
  );
}