import React from 'react';
import { detailabout, developers } from '../../lib/constants';
import CardDeveloper from '../CardDeveloper/CardDeveloper';

import s from './About.module.css';

export default function AboutView() {

  return (
    <>
    	<div className={`${s.aboutview} ${s.section__padding}`}>
				<div className={s.aboutview_content}>
					<h1 className={s.gradient__text}>
            {detailabout.title}
					</h1>
					<p>
            {detailabout.description.p1}
					</p>
          <p>
            {detailabout.description.p2}
					</p>
          <p>
            {detailabout.description.p3}
					</p>
          <p>
            {detailabout.description.p4}
					</p>
        </div>
      </div>
      <div className={s.aboutDevelopers}>
        <h1 className={s.gradient__text}>Developers: </h1>

      </div>


      <div className = {s.cardsContainer}>
        {
          developers && developers.map(developer => 
            <CardDeveloper 
              key = {developer.key}
              id = {developer.id}
              name = {developer.name}
              linkedin = {developer.linkedin}
              github = {developer.github}
              email = {developer.email}
              img = {developer.img}
            />
          )
        }
      </div>
    </>
  );
}