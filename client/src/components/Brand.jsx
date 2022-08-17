import React from 'react'

import './brand.css'
import {
	google,
	slack,
	atlassian,
	dropbox,
	shopify
} from './imgImporter' 

/**
 * Collaborating brands
 * @return {element} A set of brands with their logo
 */
const Brand = () => {
	return (
		<div className="gpt3__brand section__padding">
			<div><img src={google} alt="Google brand" /></div>
			<div><img src={slack} alt="Slack brand" /></div>
			<div><img src={atlassian} alt="Atlassian brand" /></div>
			<div><img src={dropbox} alt="Dropbox brand" /></div>
			<div><img src={shopify} alt="Shopify brand" /></div>
		</div>
	)
}

export default Brand