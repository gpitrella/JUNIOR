import React from 'react'
import styled from './Feature.module.css'

/**
 * A feature of GPT3
 * @param  {string} props.title the feature title
 * @param  {string} props.text  the feature text
 * @return {element}             a GPT3 feature component 
 */
const Feature = ({ title, text }) => {
	return (
		<div className={styled.featurescontainer__feature}>
			<div className={styled.featurescontainer__featuretitle}>
				<div />
				<h1>{title}</h1>
			</div>
			<div className={styled.featurescontainer_featuretext}>
				<p>{text}</p>
			</div>
		</div>
	)
}

export default Feature