
import React, { useState } from 'react';
import Alert from "../../components/Alert";
import './Header.css';
import people from '../../assets/people.png';
import { useLottie } from "lottie-react";
import simpleRoquet from '../../assets/simple_rocket.json';


export default function Header() {
	const [isAlertShowing, setIsAlertShowing] = useState(false) // Controll the Alert component

    // Lottie
    const options = {
        animationData: simpleRoquet,
        loop: true
      };
    const { View } = useLottie(options);


	return (
		<>
			<Alert show={isAlertShowing} handler={() => setIsAlertShowing(false)} />
			<div className="header section__padding" id="home">
				<div className="header-content">
					<h1 className="gradient__text">
						De JUNIOR para Juniors
					</h1>
					<p>
						¿Sos Desarrollador y queres ganar Experiencia? Sumala colaborando y desarrollando los proyectos más desafiantes. 
						En JUNIOR vas a encontrar todas las herramientas para potenciar tu carrera como desarrollador.
					</p>

					<div className="header-content__input">
						<button className="btn btn_start" type="button"><a href="#empezar">Empezar</a></button>
					</div>

					<div className="header-content__people">
						<img src={people} alt="People" />
						<p>+1.600 personas ya sumaron experiencia a sus carrera</p>
					</div>

				</div>
				
				<div className="header-image" >
					{ View } 
				</div>
			</div>
		</>
	)
};