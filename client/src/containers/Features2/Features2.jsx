import React from 'react';
import Feature from '../../components/Feature/Feature.jsx';
import { useLottie } from "lottie-react";
import astronaut2 from '../../assets/astronaut.json';
import styled from './Features2.module.css';

// Data to put in features
const featuresData = [
	{
		title: '1. Publica tu Proyecto:',
		text: 'Agrega el proyecto a la App con todos los detalles que estas buscando.',
	},
	{
		title: '2. Encontra Colaboradores:',
		text: 'Comenzá tu proyecto y los colaboradores van ir aportando valor a tu proyecto.',
	},
	{
		title: '3. Suma la Experiencia a tu CV:',
		text: 'Te lo dijimos era fácil, ya puedes sumar tu experiencia en tu CV y aspirar a mejores oportunidades.',
	},
];

export default function Features2 () {

	// Lottie
	const options = {
		animationData: astronaut2,
		loop: true
	};	
	const { View } = useLottie(options);

	return (
		<div className={`${styled.features} ${styled.section__padding}`} id={styled.features}>
			<div className={styled.features_main}>
				<div className={styled.features_heading}>
					<h1 className={styled.gradient__text}>
						Tenes una idea / proyecto para desarrollar, perfecto seguí estos pasos:
					</h1>
				</div>
				<div className={styled.features_container}>
					{featuresData.map((feature, idx) => (
						<Feature title={feature.title} text={feature.text} key={idx} />	
					))}
				</div>
			</div>
			<div className={styled.lottie_austronauta2} >
				{ View }
			</div>

		</div>
	)
};