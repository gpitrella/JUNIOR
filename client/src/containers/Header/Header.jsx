
import React, { useState, Suspense } from 'react';
import Alert from "../../components/Alert";

import './Header.css';
import people from '../../assets/people.png';
// import ai from '../../assets/ai.png';
import Lottie from 'react-lottie';
import simpleRoquet from '../../assets/simple_rocket.json';

// import { Canvas } from '@react-three/fiber';
// import Box from '../../assets/Box/Box';
// import { OrbitControls } from '@react-three/drei';
// // import Rocket from '../../components/Rocket/Rocket.js';
// import Plane from '../../assets/Plane/Plane';

/**
 * Page Header component
 * @return {element} Header component
 */
const Header = () => {
	const [isAlertShowing, setIsAlertShowing] = useState(false) // Controll the Alert component
	const [email, setEmail] = useState("") // Controll email input

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: simpleRoquet,
		rendererSettings: {
		  preserveAspectRatio: "xMidYMid slice"
		}
	  };
	/**
	 * Validate if an email is correct
	 * @param  {string} email email to check
	 * @return {boolean}       true if the email is correct, otherwise false
	 */
	const validateEmail = (email) => email.match(
    	/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  	)

	/**
	 * Email input controller
	 */
	const onEmailInputChanged = (evt) => setEmail(evt.target.value)

	/**
	 * Email button controller
	 */
	const onEmailBtnClicked = () => {
		if (email && validateEmail(email)) {
			setIsAlertShowing(true)

			// Starts a time out for quit alert after 10 seconds
			setTimeout(() => setIsAlertShowing(false), 10000);
		} else {
			setEmail("Bad email!")
		}
	}

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
						{/* <input type="email" placeholder="Your Email Address" value={email} onChange={onEmailInputChanged} /> */}
						<button className="btn btn_start" type="button" onClick={onEmailBtnClicked}>Empezar</button>
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
}

export default Header