// import React from 'react';
import React from 'react';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import {
  Background
} from './containers';
// import SideBar from './containers/SideBar/SideBar';

import Store from './components/Store/Store';
import Home from './containers/Home/Home';
import { Navbar } from './components';
import AOS from 'aos'; // Animations on scrolling dependency

// For mark CSS classes I'm using the BEM (Block Element Modifier) notation 
import './App.css';
import 'aos/dist/aos.css'; // Animations on scrolling styles
import LandingPage from './components/LandingPage/LandingPage';

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
                <Route exact path="/" element={<LandingPage />}/>
                <Route exact path="/home" element={<Home />}/>
                <Route exact path="/filter" element={<Store />} />
              </Routes>
            <Background />
          </div>          
        </div>
    </BrowserRouter>
  );
}

export default App;