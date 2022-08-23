import React from 'react';
import styled from './Brand.module.css';
import {
	html,
	js,
	postgre,
	structure,
	typescript,
} from './imgImporter' 

/**
 * Collaborating brands
 * @return {element} A set of brands with their logo
 */
const Brand = () => {
	return (
		<div className={styled.brand}>
			<div><img src={html} alt="HTML brand" className={styled.img_brands}/></div>
			<div><img src={js} alt="Js brand" className={styled.img_brands}/></div>
			<div><img src={postgre} alt="Postgre brand" className={styled.img_brands}/></div>
			<div><img src={structure} alt="Structure brand" className={styled.img_brands}/></div>
			<div><img src={typescript} alt="TS brand" className={styled.img_brands}/></div>
		</div>
	)
}

export default Brand