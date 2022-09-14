
import React from 'react';
import {
    Header,
    Possibility, 
  } from '../../containers';
  import Features from '../../containers/Features/Features';
  import Features2 from '../../containers/Features2/Features2';
  import Footer from '../../components/Footer/Footer';
  import { Navbar } from '../../components';
  import styled from './Home.module.css';
 
  import { CTA, Brand } from '../../components';
/**
 * Page Header component
 * @return {element} Header component
 */
const Home = () => {


	return (
		<div className={styled.gradient__bg}>
            <Navbar />
			      <Header />
            <CTA />
            <Features />
            <Brand />
            <Features2 />
            <Possibility />
            <Footer />
		</div>
	)
}

export default Home;