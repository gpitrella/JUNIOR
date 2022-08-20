import React from 'react';
import styled from './Cta.module.css';

/**
 * A click to action
 * @return {element} a click to action component
 */
const CTA = () => {
	return (
		<div className={styled.cta}>
			<div className={styled.ctacontent}>
				<p>Empeza ya a sumar Experiencia.</p>
			    <h3>Busca los proyectos & sumate a las ideas más atractivas.</h3>
			</div>
			<div className={styled.ctabtn} data-aos="zoom-out" data-aos-delay="100">
				<button className={styled.btn} type="button" onClick={() => {window.location = '#home'}}>Buscar</button>
			</div>
		</div>
	)
}

export default CTA
