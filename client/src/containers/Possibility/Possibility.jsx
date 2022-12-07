import React from 'react';
import possibilityImg from '../../assets/possibility.png';
import s from './Possibility.module.css';

export default function Possibility () {
	return (
		<div className={s.main_container_possibility}>
			<div className={s.possibility} id="possibility">
				<div className={s.possibilityImage} data-aos="fade-right" data-aos-delay="350">
					<img src={possibilityImg} alt="Person with idea" />
				</div>
				<div className={s.possibility_content}>
					<h4>Tambien podes tener un proyecto sin ser Desarrollador</h4>
					<h1 className='gradient__text'>¿NO sos Desarrollador? Pero tenes un proyecto para desarrollar.</h1>
					<p>
						Contactanos y vas a tener a los mejores Juniors disponibles para llevar tus proyectos a la realidad.
					</p>
					<h4>Registrate y carga tu proyecto como Generador de Ideas.</h4>
				</div>
			</div>
		</div>
	)
};