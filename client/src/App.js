// import React from 'react';
import React, { Suspense } from 'react';
import styled from 'styled-components';
import {
  Blog, 
  Features, 
  Footer, 
  Header,
  Possibility, 
  WhatGPT3
} from './containers'
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
      <Brand /> 
      <WhatGPT3 /> 
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
      
    </div>
  );
}

export default App;
