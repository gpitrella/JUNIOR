import React from 'react';
import Feature from '../../components/Feature.jsx';
import Lottie from 'react-lottie';
import astronaut from '../../assets/astronaut-notebook.json';
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

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: astronaut,
	rendererSettings: {
	  preserveAspectRatio: "xMidYMid slice"
	}
};

/**
 * Features of GPT3
 * @return {element} a component that shows GPT3 features
 */
const Features = () => {
	return (
		<div className="features section__padding" id="features">
			<div className="lotties_notebook_astronaut">
				<Lottie
					options={defaultOptions}
					height={400}
					width={400}
				/>
			</div>
			<div className="features-main">
				<div className="features-heading">
					<h1 className="gradient__text">
						¿Como empezas a ganar experiencia? Fácil, seguí estos simples pasos:
					</h1>
				</div>
				<div className="features-container">
					{featuresData.map((feature, idx) => (
						<Feature title={feature.title} text={feature.text} key={idx} />	
					))}
				</div>
			</div>
		</div>
	)
}

export default Features;