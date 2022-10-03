
import React, { useState } from 'react';
import Alert from "../../components/Alert";

import './Header.css';
import people from '../../assets/people.png';
import Lottie from 'react-lottie';
import simpleRoquet from '../../assets/simple_rocket.json';


export default function Header() {
	const [isAlertShowing, setIsAlertShowing] = useState(false) // Controll the Alert component

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: simpleRoquet,
		rendererSettings: {
		  preserveAspectRatio: "xMidYMid slice"
		}
	  };


	return (
		<>
			<Alert show={isAlertShowing} handler={() => setIsAlertShowing(false)} />
			<div className="gpt3__header section__padding" id="home">
				<div className="gpt3__header-content">
					<h1 className="gradient__text">
						De JUNIOR para Juniors
					</h1>
					<p>
						¿Sos Desarrollador y queres ganar Experiencia? Sumala colaborando y desarrollando los proyectos más desafiantes. 
						En JUNIOR vas a encontrar todas las herramientas para potenciar tu carrera como desarrollador.
					</p>

					<div className="gpt3__header-content__input">
						<button className="btn btn_start" type="button"><a href="#empezar">Empezar</a></button>
					</div>

					<div className="gpt3__header-content__people">
						<img src={people} alt="People" />
						<p>+1.600 personas ya sumaron experiencia a sus carrera</p>
					</div>

				</div>
				
				<div className="gpt3__header-image" data-aos="fade-in" data-aos-delay="0" data-aos-duration="300">
					{/* <img src={ai} alt="AI" /> */}
					<Lottie 
						options={defaultOptions}
						height={450}
						width={450}
					/>
					{/* <Canvas className='canvas_box'>
						<OrbitControls enableZoom={false} />
						<ambientLight intensity={0.5} />
						<directionalLight position={[-2, 5, 2]} intensity={1} />
						<Suspense fallback={null}>
							<Box />	
						 </Suspense>
					</Canvas> */}
				</div>
			</div>
		</>
	)
};