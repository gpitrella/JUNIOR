import React from 'react'
import possibilityImg from '../assets/possibility.png'

import './possibility.css'

/**
 * The possibilities of GPT3
 * @return {element} a component that shows GPT3 possibilities
 */
const Possibility = () => {
	return (
		<div className="gpt3__possibility section__padding" id="possibility">
			<div className="gpt3__possibility-image" data-aos="fade-right" data-aos-delay="350">
				<img src={possibilityImg} alt="GPT3 possibilities" />
			</div>
			<div className="gpt3__possibility-content">
				<h4>Request Early Access to Get Started</h4>
			    <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
			    <p>
					Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
				</p>
				<h4>Request Early Access to Get Started</h4>
			</div>
		</div>
	)
}

export default Possibility