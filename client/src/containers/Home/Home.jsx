
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
import { useDispatch } from 'react-redux';
import { getAllProjects, getAllTechs } from '../../redux/actions/projectsActions.js';
import { CTA, Brand } from '../../components';

export default function Home () {

  const dispatch = useDispatch();

  React.useEffect(()=> {
    dispatch(getAllProjects());
    dispatch(getAllTechs());
  }, [])
  
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
};