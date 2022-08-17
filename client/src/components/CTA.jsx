import React from 'react'

import './cta.css'

/**
 * A click to action
 * @return {element} a click to action component
 */
const CTA = () => {
	return (
		<div className="gpt3__cta">
			<div className="gpt3__cta-content">
				<p>Request Early Access to Get Started</p>
			    <h3>Register Today & start exploring the endless possibilities.</h3>
			</div>
			<div className="gpt3__cta-btn" data-aos="zoom-out" data-aos-delay="100">
				<button className="btn" type="button" onClick={() => {window.location = '#home'}}>Get Started</button>
			</div>
		</div>
	)
}

export default CTA
