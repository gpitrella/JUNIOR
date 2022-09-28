import React from 'react';
// import ImageLoader from '../ImageLoader/ImageLoader';
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
    // <div className = {`${s.cardContainer} ${s.gradientBorder}`}>
    //   <div className = {s.imageContainer}>
    //     <img src = {img} alt = {name} />
    //   </div>
    //   <div className = {s.detailsContainer}>
    //     <span className = {`${s.title}`}>{name}</span>
    //     <div className = {s.containerRibbon}>
    //       <div className = {`${s.containerLink} ${s.linkedin}`} onClick = {() => handleClick(linkedin)}>
    //         <Linkedin />
    //       </div>
    //       <div className = {`${s.containerLink} ${s.email}`} onClick = {handleClickEmail}>
    //         <Email />
    //       </div>
    //       <div className = {`${s.containerLink} ${s.github}`} onClick = {() => handleClick(github)}>
    //         <Github />
    //       </div>
    //     </div>
    //   </div>
    // </div>
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