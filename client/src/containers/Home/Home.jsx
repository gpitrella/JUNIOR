
import React from 'react';
import {
    Header,
    Possibility, 
  } from '../../containers';
  import Features from '../../containers/Features/Features';
  import Features2 from '../../containers/Features2/Features2';
  import Footer from '../../components/Footer/Footer';
  import { Navbar } from '../../components';
 
  import { CTA, Brand } from '../../components';
/**
 * Page Header component
 * @return {element} Header component
 */
const Home = () => {


	return (
		<>
            <Navbar />
			      <Header />
            <CTA />
            <Features />
            <Brand />
            <Features2 />
            <Possibility />
            <Footer />
		</>
	)
}

export default Home;