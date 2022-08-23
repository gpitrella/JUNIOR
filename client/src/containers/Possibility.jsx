import React from 'react'
import possibilityImg from '../assets/possibility.png'

import './possibility.css'

/**
 * The possibilities of GPT3
 * @return {element} a component that shows GPT3 possibilities
 */
const Possibility = () => {
	return (
		<div className="possibility" id="possibility">
			<div className="possibilityImage" data-aos="fade-right" data-aos-delay="350">
				<img src={possibilityImg} alt="Person with idea" />
			</div>
			<div className="possibility-content">
				<h4>Tambien podes tener un proyecto sin ser Desarrollador</h4>
			    <h1 className="gradient__text">¿NO sos Desarrollar? <br /> Pero tenes un proyecto para desarrollar.</h1>
			    <p>
					Contactanos y vas a tener a los mejores Juniors disponibles para llevar tus proyectos a la realidad.
				</p>
				<h4>Registrate y carga tu proyecto como Generador de Ideas.</h4>
			</div>
		</div>
	)
}

export default Possibility