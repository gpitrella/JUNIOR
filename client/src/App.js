// import React from 'react';
import React, { Suspense } from 'react';
import styled from 'styled-components';
import {
  Blog,  
  Footer, 
  Header,
  Possibility, 
  WhatGPT3
} from './containers';
import Features from './containers/Features/Features';
import Features2 from './containers/Features2/Features2';
import { CTA, Brand, Navbar } from './components'
import AOS from 'aos'; // Animations on scrolling dependency

// For mark CSS classes I'm using the BEM (Block Element Modifier) notation 
import './App.css';
import 'aos/dist/aos.css'; // Animations on scrolling styles

// Setting up animations on scrolling
AOS.init({
  delay: 100,
  duration: 500,
  offset: 30,
  once: true,
});

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />  
      </div>
      {/* <WhatGPT3 />  */}
      <CTA />
      <Features />
      <Brand /> 
      <Features2 />
      <Possibility />
      <Blog />
      <Footer />
      
    </div>
  );
}

export default App;
