import * as React from 'react';
import Card from '@mui/material/Card';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Lottie from 'lottie-react';
import code from './assetsTools/code.png';
import organization from './assetsTools/network.png';
import design from './assetsTools/webDesign.png';
import youtube from './assetsTools/youtube.png';
import cv from './assetsTools/cv.png';
import meet from './assetsTools/videoconference.png';
import interfaceDevelop from './assetsTools/web-development.png';
import front from './assetsTools/programming.png';
import back from './assetsTools/backend.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import './Tools.css';
import cssVars from '@mui/system/cssVars';


export default function Tools() {
  const [displayUserAdmin, setDisplayUserAdmin] = React.useState(false);
  const { user } = useSelector((state) => state.homepageReducer);
  
  const dispatch = useDispatch(); 
  // const openFavorite = () => {
  //     dispatch(showFavs())
  // };

  React.useEffect(() => {
    // dispatch(getProjectsByUser(user?.user._id))
    if(user?.user){
      if(user.user?.admin){
        setDisplayUserAdmin(true);
      }
    }
  },[user]);

  function defaultOptions(file) {
    return {
        loop: true,
        autoplay: true,
        animationData: file,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    }
  }; 

  return (
    <div className="myprofile_view_content">
      <h1 className="gradient__text">
          HERRAMIENTAS
			</h1>
      <p>
          En esta Sección vas a poder encontrar diferentes herramientas utiles para tu desarrollo profesional, que puedes aplicarla
          a los diferentes proyectos o te serviran de ayuda para potenciar tus conocimientos. Si conoces alguna herramienta 
          que pueda servir a otros y no se encuentra en esta sección, ponte en contacto con los desarrolladores de JUNIOR y la agregamos.
			</p>
      <div className='main_box_tools'>
        <Card id='individual_box_myprofile' sx={{ width: 200, height: 200, bgcolor: "rgba(32, 32, 36, 0.8)", borderRadius: 3 }}>
            <Link to='/tools/codeo' className='box_img_tools'>
              <CardActionArea>
                  <img src={code} alt='code tool' style={{width: "100px", padding: "10px"}} />
              </CardActionArea>
            </Link>
          <CardActions >
            <Link to='/tools/codeo'>
              <Button id='button_myprofile' size="small" color="primary">
                  TOOLS PARA CODEAR
              </Button>
            </Link>
          </CardActions>
        </Card>
  
        <Card id='individual_box_myprofile' sx={{ display: 'block', width: 200, height: 200, bgcolor: "rgba(32, 32, 36, 0.8)", borderRadius: 3 }}>
          <Link to='/tools/organizacion' className='box_img_tools'>
            <CardActionArea sx={{ paddingTop: 1 }}>
              <img src={organization} alt='organization tool' style={{width: "100px", padding: "10px"}} />
            </CardActionArea>
          </Link>
          <CardActions >
            <Link to='/tools/organizacion'>
              <Button id='button_myprofile' size="small" color="primary" >
                TOOLS DE ORGANIZACION
              </Button>
            </Link>
          </CardActions>
        </Card>

        <Card id='individual_box_myprofile' sx={{ display: 'block', width: 200, height: 200, bgcolor: "rgba(32, 32, 36, 0.8)", borderRadius: 3 }}>
          <Link to='/tools/design' className='box_img_tools'>  
            <CardActionArea sx={{ paddingTop: 2, paddingBottom: 0.5 }}>
              <img src={design} alt='organization tool' style={{width: "100px", padding: "10px"}} />
            </CardActionArea>
          </Link>
          <CardActions >
            <Link to='/tools/design'>
              <Button id='button_myprofile' size="small" color="primary" >
                 TOOLS DE DISEÑO
              </Button>
            </Link>
          </CardActions>
        </Card>

        <Card id='individual_box_myprofile' sx={{ width: 200, height: 200, bgcolor: "rgba(32, 32, 36, 0.8)", borderRadius: 3 }}>
            <Link to='/tools/youtube' className='box_img_tools'>
              <CardActionArea sx={{ paddingTop: 1 }}>
                  <img src={youtube} alt='organization tool' style={{width: "100px", padding: "10px"}} />
              </CardActionArea>
            </Link>
          <CardActions >
            <Link to='/tools/youtube'>
              <Button id='button_myprofile' size="small" color="primary">
                  YOUTUBE CHANNELS
              </Button>
            </Link>
          </CardActions>
        </Card>
  
        <Card id='individual_box_myprofile' sx={{ display: 'block', width: 200, height: 200, bgcolor: "rgba(32, 32, 36, 0.8)", borderRadius: 3 }}>
          <Link to='/tools/cv' className='box_img_tools'>
            <CardActionArea sx={{ paddingTop: 2 }}>
               <img src={cv} alt='organization tool' style={{width: "100px", padding: "10px"}} />
            </CardActionArea>
          </Link>
          <CardActions >
            <Link to='/tools/cv'>
              <Button id='button_myprofile' size="small" color="primary" >
                 TIPS PARA CV
              </Button>
            </Link>
          </CardActions>
        </Card>

        <Card id='individual_box_myprofile' sx={{ display: 'block', width: 200, height: 200, bgcolor: "rgba(32, 32, 36, 0.8)", borderRadius: 3 }}>
          <Link to='/tools/meet' className='box_img_tools'>  
            <CardActionArea sx={{ paddingTop: 1 }}>
              <img src={meet} alt='organization tool' style={{width: "100px", padding: "10px"}} />
            </CardActionArea>
          </Link>
          <CardActions >
            <Link to='/tools/meet'>
              <Button id='button_myprofile' size="small" color="primary" >
                 PLATFORM MEET
              </Button>
            </Link>
          </CardActions>
        </Card>

        <Card id='individual_box_myprofile' sx={{ display: 'block', width: 200, height: 200, bgcolor: "rgba(32, 32, 36, 0.8)", borderRadius: 3 }}>
          <Link to='/tools/idlive'>  
            <CardActionArea sx={{ paddingTop: 1 }} className='box_img_tools'>
              <img src={interfaceDevelop} alt='organization tool' style={{width: "100px", padding: "10px"}} />
            </CardActionArea>
          </Link>
          <CardActions >
            <Link to='/tools/idlive'>
              <Button id='button_myprofile' size="small" color="primary" >
                 INTERFASE DE DESARROLLO
              </Button>
            </Link>
          </CardActions>
        </Card>

        <Card id='individual_box_myprofile' sx={{ display: 'block', width: 200, height: 200, bgcolor: "rgba(32, 32, 36, 0.8)", borderRadius: 3 }}>
          <Link to='/tools/frontdeploy' className='box_img_tools'>  
            <CardActionArea sx={{ paddingTop: 1 }}>
               <img src={front} alt='organization tool' style={{width: "100px", padding: "10px"}} />
            </CardActionArea>
          </Link>
          <CardActions >
            <Link to='/tools/frontdeploy'>
              <Button id='button_myprofile' size="small" color="primary" >
                 FRONT DEPLOY
              </Button>
            </Link>
          </CardActions>
        </Card>

        <Card id='individual_box_myprofile' sx={{ display: 'block', width: 200, height: 200, bgcolor: "rgba(32, 32, 36, 0.8)", borderRadius: 3 }}>
          <Link to='/tools/backdeploy' className='box_img_tools'>  
            <CardActionArea sx={{ paddingTop: 1 }}>
                <img src={back} alt='organization tool' style={{width: "100px", padding: "10px"}} />
            </CardActionArea>
          </Link>
          <CardActions >
            <Link to='/tools/backdeploy'>
              <Button id='button_myprofile' size="small" color="primary" >
                 BACK DEPLOY
              </Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
