import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import jwt_decode from "jwt-decode";
import { getUser, logOut, signinGoogle } from './redux/actions/generalActions';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Background } from './containers';
import { useLocation } from 'react-router-dom';
import Projects from './components/Projects/Projects';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import Home from './containers/Home/Home';
import AOS from 'aos'; // Animations on scrolling dependency
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import MyProfile from './components/MyProfile/MyProfile';
import PersonalInformation from './components/MyProfile/PersonalInformation/PersonalInformation';
import MyPurchases from './components/MyProfile/MyPurchases/MyPurchases';
import CreateProject from './components/CreateProject/CreateProject';

// For mark CSS classes I'm using the BEM (Block Element Modifier) notation 
import './App.css';
import 'aos/dist/aos.css'; // Animations on scrolling styles
import LandingPage from './components/LandingPage/LandingPage.jsx';

// Setting up animations on scrolling
AOS.init({
  delay: 100,
  duration: 500,
  offset: 30,
  once: true,
});

export default function App() {
  // ?-- Auth width Google
  //const [ user, setUser ] = useState({});
  const dispatch = useDispatch()
  const location = useLocation();
  const { user } = useSelector((state) => state.homepageReducer);

  function handleCallbackResponse(response) {
    // var userObject = jwt_decode(response.credential);
    //setUser(userObject);
    // dispatch(getUser(userObject));
    // dispatch(signinGoogle(userObject));
    // document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(e) {
    //setUser({}); -- aca va la accion para borrar auser
    e.preventDefault();
    dispatch(logOut());
    // document.getElementById("signInDiv").hidden = false;
  }

  function handleGoogle(){
    /* global google */
    //   google.accounts.id.initialize({
    //   client_id: "744815306098-6j8n1eua04vepnaccbsj45crs1v7cr4b.apps.googleusercontent.com",
    //   callback: handleCallbackResponse
    // });

    // google.accounts.id.renderButton(
    //   document.getElementById("signInDiv"),
    //   { theme:"filled_blue", size: "large"}
    // );

    // google.accounts.id.prompt();
    
  };
   
  // console.log(user, 'dsp de useEffect App.js');
  
  
// ?-- End Auth



  React.useEffect(() => {
    dispatch(getUser());
  }, []);


  return (
     <React.Fragment>
      
        <div className="App"></div>
        {/* { location.pathname !== '/' && <Navbar handleSignOut={handleSignOut}/> } */}
        <Background />
        <div className="gradient__bg"></div>
            <Routes>
                <Route exact path="/" element={<LandingPage />}/>
                {/* <Route exact path="/background" />
                <Route exact path="/login" element={ user.user ? <Navigate to="/home"/> : <LogIn handleGoogle={handleGoogle} /> }  />
                <Route exact path="/signup" element={ user.user ? <Navigate to="/home"/> : <SignUp/> } />
                <Route exact path="/home" element={<Home />}/>
                <Route exact path="/projects" element={<Projects />} />
                <Route exact path="/crearproyecto" element={<CreateProject />} />
                <Route exact path="/miperfil" element={ user.user ? <MyProfile/> : <LogIn handleGoogle={handleGoogle} />} />             
                <Route exact path ="/miperfil/personalinformation" element= { user.user ? <PersonalInformation /> : <LogIn handleGoogle={handleGoogle} />}/>
                <Route exact path ="/miperfil/mypurchases" element=  { user.user ? <MyPurchases /> : <LogIn/>} /> */}
                <Route exact path='*' component={<Navigate to="/"/>} />
          </Routes> 
        {/* { location.pathname !== '/' && <Footer /> } */}
    </React.Fragment>
  );
}