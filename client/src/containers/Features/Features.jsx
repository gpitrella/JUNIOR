import React from 'react';
import Feature from '../../components/Feature.jsx';
import { useLottie } from "lottie-react";
import astronaut from '../../assets/astronaut-notebook.json';
import styled from './Features.module.css';

// Data to put in features
const featuresData = [
	{
		title: '1. Elegi un Proyecto:',
		text: 'Selección el proyecto que más te atraiga por tecnología, desafío o impacto.',
	},
	{
		title: '2. Empeza a Colaborar:',
		text: 'Comenzá a colaborar con las tareas que todavía están pendientes en el proyecto.',
	},
	{
		title: '3. Suma la Experiencia a tu CV:',
		text: 'Te lo dijimos era fácil, ya puedes sumar tu experiencia en tu CV y aspirar a mejores oportunidades.',
	},
];


export default function Features () {
	// Lottie
	const options = {
		animationData: astronaut,
		loop: true
	};	
	const { View } = useLottie(options);

	return (
		<div className={`${styled.features} ${styled.section__padding}`} id={styled.features}> 
			<div id={styled.lotties_notebook_astronaut}>
				{ View }
			</div>
			<div className={styled.features_main}>
				<div className={styled.features_heading}>
					<h1 className={styled.gradient__text}>
						¿Como empezas a ganar experiencia? Fácil, seguí estos simples pasos:
					</h1>
				</div>
				<div className={styled.features_container}>
					{featuresData.map((feature, idx) => (
						<Feature title={feature.title} text={feature.text} key={idx} />	
					))}
				</div>
			</div>
		</div>
	)
};