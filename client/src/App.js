// import React from 'react';
import React, { Suspense } from 'react';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import {
  Blog,  
  Footer, 
  Header,
  Possibility, 
  WhatGPT3,
  Background
} from './containers';
import Features from './containers/Features/Features';
import Features2 from './containers/Features2/Features2';
// import SideBar from './containers/SideBar/SideBar';
import Store from './components/Store/Store';
import Home from './containers/Home/Home';
import { CTA, Brand, Navbar } from './components';
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
    <BrowserRouter>
     
        <div className="App">
          <div className="gradient__bg">
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/filter" element={<Store />} />
          </Routes>
            {/* <Route path="/" element={<CTA />} />
            <Route path="/" element={<Features />} />
            <Route path="/" element={<Brand />} />
            <Route path="/" element={<Features2 />} />
            <Route path="/" element={<Possibility />} /> */}
        <Background />
          </div>
          {/* <WhatGPT3 />  */}
          {/* <CTA />
          <Features />
          <Brand /> 
          <Features2 />
          <Possibility /> */}
          {/* <Blog /> */}
          {/* <Footer /> */}
          
        </div>
        
    </BrowserRouter>
  );
}

export default App;


// return (
//   <React.Fragment>
//       <div className="App">          
//       </div>
//       <Route path="/" exact component={Welcome}/>
//       <Route path="/videogame" component={NavBar} />
//       {/* <Route path="/videogame" component={LateralNavBar} /> */}
//       <Route path="/videogame" exact component={Home} />
//       <Switch>
//         <Route path="/videogame/creategame" component={CreateGame}/>
//         <Route path="/videogame/:idVideogame" component={GameDetail} />
//       </Switch>
        
//   </React.Fragment>