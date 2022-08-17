import React from 'react'

import './feature.css'

/**
 * A feature of GPT3
 * @param  {string} props.title the feature title
 * @param  {string} props.text  the feature text
 * @return {element}             a GPT3 feature component 
 */
const Feature = ({ title, text }) => {
	return (
		<div className="gpt3__features-container__feature">
			<div className="gpt3__features-container__feature-title">
				<div />
				<h1>{title}</h1>
			</div>
			<div className="gpt3__features-container_feature-text">
				<p>{text}</p>
			</div>
		</div>
	)
}

export default Feature