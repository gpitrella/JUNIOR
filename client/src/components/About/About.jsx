import React from 'react';
import { detailabout, detailaboutEN, detailaboutIT, developers } from '../../lib/constants';
import CardDeveloper from '../CardDeveloper/CardDeveloper';
import { useSelector } from "react-redux";

import s from './About.module.css';

export default function AboutView() {
  const { lenguage } = useSelector((state) => state.homepageReducer);
  return (
    <>
    	<div className={`${s.aboutview} ${s.section__padding}`}>
				<div className={s.aboutview_content}>
					<h1 className={s.gradient__text}>
            {detailabout.title}
					</h1>
					<p>
          { lenguage === "EN" 
                    ? detailaboutEN.description.p1
                    : lenguage === "IT"
                          ? detailaboutIT.description.p1
                          : detailabout.description.p1
            } 
					</p>
          <p>
          { lenguage === "EN" 
                    ? detailaboutEN.description.p2
                    : lenguage === "IT"
                          ? detailaboutIT.description.p2
                          : detailabout.description.p2
            } 
					</p>
          <p>
          { lenguage === "EN" 
                    ? detailaboutEN.description.p3
                    : lenguage === "IT"
                          ? detailaboutIT.description.p3
                          : detailabout.description.p3
            } 
					</p>
          <p>
          { lenguage === "EN" 
                    ? detailaboutEN.description.p4
                    : lenguage === "IT"
                          ? detailaboutIT.description.p4
                          : detailabout.description.p4
            } 
					</p>
        </div>
      </div>
      <div className={s.aboutDevelopers}>
        <h1 className={s.gradient__text}>
        { lenguage === "EN" 
                    ? "Developers"
                    : lenguage === "IT"
                          ? "Sviluppatori"
                          : "Desarrolladores"
            }  </h1>

      </div>


      <div className = {s.cardsContainer}>
        {
          developers && developers.map(developer => 
            <CardDeveloper 
              key = {developer.id}
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