import React from 'react';
import Feature from '../../components/Feature.jsx';
import './Features.css';

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

/**
 * Features of GPT3
 * @return {element} a component that shows GPT3 features
 */
const Features = () => {
	return (
		<div className="gpt3__features section__padding" id="features">
			<div className="gpt3__features-heading">
				<h1 className="gradient__text">
				   ¿Como empezas a ganar experiencia? Fácil, seguí estos simples pasos:
				</h1>
				<p>Cada vez más cerca de tu meta.</p>
			</div>
			<div className="gpt3__features-container">
				{featuresData.map((feature, idx) => (
					<Feature title={feature.title} text={feature.text} key={idx} />	
				))}
			</div>
		</div>
	)
}

export default Features;