import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import jwt_decode from "jwt-decode";
import { logOut, signinGoogle, loadStorage } from './redux/actions/generalActions';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { Background } from './containers';
import Projects from './components/Projects/Projects';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import SendEmail from './components/UpdatePassword/SendEmail/SendEmail';
import UpdatePassword from './components/UpdatePassword/UpdatePassword.jsx';
import Home from './containers/Home/Home';
import AOS from 'aos'; // Animations on scrolling dependency
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import MyProfile from './components/MyProfile/MyProfile';
import PersonalInformation from './components/MyProfile/PersonalInformation/PersonalInformation';
import MyProjects from './components/MyProfile/MyProjects/MyProjects';
import Collaborate from './components/MyProfile/Collaborate/Collaborate';
import CreateProject from './components/CreateProject/CreateProject';
import EditProject from './components/EditProject/EditProject';
import About from './components/About/About';
import Tools from './components/Tools/Tools';
import Codeo from './components/Tools/Code/Code';
import OrganizationTool from './components/Tools/OrganizationTool/OrganizationTool';
import DesignTool from './components/Tools/DesignTool/DesignTool';
import YouTuveTool from './components/Tools/YouTubeTool/YouTubeTool';
import MeetTool from './components/Tools/MeetTool/MeetTool';
import CvTool from './components/Tools/CvTool/CvTool';
import IdLiveTool from './components/Tools/IdLive/IdLive';
import FrontDeploy from './components/Tools/FrontDeploy/FrontDeploy';
import BackDeploy from './components/Tools/BackDeploy/BackDeploy';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import ContactUsForm from './components/ContactUs/ContacUsForm.jsx';
import './App.css';
import 'aos/dist/aos.css'; // Animations on scrolling styles
import FAQs from './components/FAQs/FAQs';
import HallOfFameView from './components/HallOfFameView/HallOfFameView';
import dotenv from "dotenv";
dotenv.config()

const REACT_APP_GOOGLE = process.env.REACT_APP_GOOGLE;

// For mark CSS classes I'm using the BEM (Block Element Modifier) notation 

// Setting up animations on scrolling
AOS.init({
  delay: 100,
  duration: 500,
  offset: 30,
  once: true,
});

export default function App() {
  // ?-- Auth width Google
  // const [ user, setUser ] = useState({});
  const dispatch = useDispatch()
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.homepageReducer);

  function handleCallbackResponse(response) {
    var userObject = jwt_decode(response.credential);
    // setUser(userObject);
    // dispatch(getUser(userObject));
    dispatch(signinGoogle(userObject));
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(e) {
    //setUser({}); -- aca va la accion para borrar auser
    e.preventDefault();
    dispatch(logOut());
    if(location.pathname.includes("miperfil")) {
      navigate('/home');
    }
  }

  function handleGoogle(){
    /* global google */
      google.accounts.id.initialize({
      client_id: REACT_APP_GOOGLE,
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme:"filled_blue", size: "large"}
    );

    google.accounts.id.prompt();    
  };
  // ?-- End Auth Google

  React.useEffect(() => {
    dispatch(loadStorage());
  }, []);

  return (
     <React.Fragment>
      
        <div className="App"></div>
        { location.pathname !== '/' && <Navbar handleSignOut={handleSignOut}/> }
        <Background />
        <div className="gradient__bg"></div>
            <Routes>
                <Route exact path="/" element={<LandingPage />}/>
                <Route exact path="/background" />
                <Route exact path="/login" element={ user.user ? <Navigate to="/home"/> : <LogIn handleGoogle={handleGoogle} /> }  />
                <Route exact path="/signup" element={ user.user ? <Navigate to="/home"/> : <SignUp/> } />
                <Route exact path="/sendemail" element={ <SendEmail />  } />
                <Route exact path="/newpassword" element = { user.user ? <UpdatePassword /> : <LogIn handleGoogle={handleGoogle} /> } />
                <Route exact path="/home" element={<Home />}/>
                <Route exact path="/projects" element={<Projects />} />
                <Route exact path="/developers" element={<HallOfFameView />} />
                <Route exact path="/About" element={<About />} />
                <Route exact path="/crearproyecto" element={ user.user ? <CreateProject /> : <LogIn handleGoogle={handleGoogle} /> } />
                <Route exact path="/contactus" element={<ContactUsForm />} />
                <Route exact path="/miperfil" element={ user.user ? <MyProfile handleSignOut={handleSignOut}/> : <LogIn handleGoogle={handleGoogle} />} />             
                <Route exact path ="/miperfil/personalinformation" element= { user.user ? <PersonalInformation /> : <LogIn handleGoogle={handleGoogle} />}/>
                <Route exact path ="/miperfil/colaboraciones" element= { user.user ? <Collaborate /> : <LogIn handleGoogle={handleGoogle} />}/>
                <Route exact path ="/miperfil/misproyectos" element=  { user.user ? <MyProjects /> : <LogIn handleGoogle={handleGoogle}/>} />
                <Route exact path ="/miperfil/editproyecto/:id" element=  { user.user ? <EditProject /> : <LogIn handleGoogle={handleGoogle}/>} />
                <Route exact path ="/tools" element= {<Tools />}  />
                <Route exact path ="/tools/codeo" element= {<Codeo />}  />
                <Route exact path ="/tools/organizacion" element= {<OrganizationTool />}  />
                <Route exact path ="/tools/design" element= {<DesignTool />}  /> 
                <Route exact path ="/tools/youtube" element= {<YouTuveTool />}  />
                <Route exact path ="/tools/meet" element= {<MeetTool />}  /> 
                <Route exact path ="/tools/cv" element= {<CvTool />}  />  
                <Route exact path ="/tools/idlive" element= {<IdLiveTool />} /> 
                <Route exact path ="/tools/frontdeploy" element= {<FrontDeploy />} /> 
                <Route exact path ="/tools/backdeploy" element= {<BackDeploy />} />   
                <Route exact path="/faqs" element= {<FAQs />} />         
                <Route exact path='*' component={<Navigate to="/home"/>} />
          </Routes> 
        { location.pathname !== '/' && <Footer /> }
    </React.Fragment>
  );
}

