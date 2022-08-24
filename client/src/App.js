// import React from 'react';
import React, { Suspense } from 'react';
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
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
// ?-- Auth width Google
  const [ user, setUser ] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
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
   
  console.log(user, 'dsp de useEffect App.js');


// ?-- End Auth


  return (
    <BrowserRouter>
     
        <div className="App">

        <div id="signInDiv"></div>
        { Object.keys(user).length !== 0 &&
          <button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
        }
        
        { user &&
          <div>
            <img src={user.picture}></img>
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
          </div>  

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