
import React from 'react';
import {
    Header,
    Possibility, 
  } from '../../containers';
  import Features from '../../containers/Features/Features';
  import Features2 from '../../containers/Features2/Features2';
 
  import { CTA, Brand } from '../../components';
/**
 * Page Header component
 * @return {element} Header component
 */
const Home = () => {


	return (
		<>
			<Header />
            <CTA />
            <Features />
            <Brand />
            <Features2 />
            <Possibility />
		</>
	)
}

export default Home;