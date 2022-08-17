import React from 'react'

import './footer.css'
import gpt3Logo from '../assets/logo.svg'

/**
 * Footer section of the page
 * @return {element} a footer section
 */
const Footer = () => {
	return (
		<div className="gpt3__footer section__padding">
			<div className="gpt3__footer-heading">
				<h1 className="gradient__text">Do you want to step in to the future before others</h1>
			</div>

			<div className="btn gpt3__footer-btn" onClick={() => {window.location = '#home'}} data-aos="zoom-in">
				<p>Request Early Access</p>
			</div>

			<div className="gpt3__footer-links">
				<div className="gpt3__footer-links_logo">
					<img src={gpt3Logo} alt="GPT3 brand" />
					<p>Crechterwoord K12 182 DK Alknjkcb &copy;, <br /> All Rights Reserved.</p>
				</div>
				<div className="gpt3__footer-links_div">
					<h4>Links</h4>
			        <a href="#">Overons</a>
			        <a href="#">Social Media</a>
			        <a href="#">Counters</a>
			        <a href="#">Contact</a>
				</div>
				<div className="gpt3__footer-links_div">
					<h4>Company</h4>
					<a href="#">Terms & Conditions </a>
					<a href="#">Privacy Policy</a>
					<a href="#">Contact</a>
				</div>
				<div className="gpt3__footer-links_div">
					<h4>Get in touch</h4>
					<a href="#">Crechterwoord K12 182 DK Alknjkcb</a>
					<a href="#">085-132567</a>
					<a href="#">info@payme.net</a>
				</div>
			</div>

			<div className="gpt3__footer-copyright">
				<p>&copy;2021 GPT-3. All rights reserved.</p>
			</div>
		</div>
	)
}

export default Footer