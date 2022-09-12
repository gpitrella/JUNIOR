import React, { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import jwt_decode from "jwt-decode";
import { getUser } from './redux/actions/generalActions';
import styled from 'styled-components';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import {
  Background
} from './containers';
// import SideBar from './containers/SideBar/SideBar';

import Store from './components/Store/Store';
import Home from './containers/Home/Home';
// import { Navbar } from './components';
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
// ?-- Auth width Google
  //const [ user, setUser ] = useState({});
  const dispatch = useDispatch()
  const { auser } = useSelector((state) => state.homepageReducer);

 

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    //setUser(userObject);
    dispatch(getUser(userObject));
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event) {
    //setUser({}); -- aca va la accion para borrar auser
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "442763437096-mbm8s7rhocjbjg29r94k37bgm5fevm7i.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme:"outline", size: "large"}
    );

    google.accounts.id.prompt();
    
  }, []);
   
  //console.log(user, 'dsp de useEffect App.js');
  
  
// ?-- End Auth


  return (

    <>
     
        <div className="App">

        <div id="signInDiv"></div>
        { Object.keys(auser).length !== 0 &&
          <button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
        }
        
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

    <BrowserRouter>
        <div className="App">
            <Background />
          <div className="gradient__bg">
                {/* <Navbar /> */}
              <Routes>
                <Route exact path="/" element={<LandingPage />}/>
                <Route exact path="/home" element={<Home />}/>
                <Route exact path="/filter" element={<Store />} />
              </Routes>
          </div>          
        </div>
    </BrowserRouter>
    </>
  );
}

export default App;