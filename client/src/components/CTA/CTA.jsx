import React from 'react';
import styled from './Cta.module.scss';
import { Link } from 'react-router-dom';

/**
 * A click to action
 * @return {element} a click to action component
 */
const CTA = () => {
	return (
		<div className={styled.main_container_cta}>
			<div className={styled.cta} id="empezar">
				<div className={styled.ctacontent}>
					<p>Empeza ya a sumar Experiencia.</p>
					<h3>Busca los proyectos & sumate a las ideas más atractivas.</h3>
				</div>
				<div className={styled.ctabtn} data-aos="zoom-out" data-aos-delay="100">
					<Link to="/projects"><button className={styled.btn} type="button" >Buscar</button></Link>
				</div>
			</div>
		</div>
	)
}

export default CTA
