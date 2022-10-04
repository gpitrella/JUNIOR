import * as React from 'react';
import Card from '@mui/material/Card';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Lottie from 'react-lottie';
import code from '../../assets/code.json';
import organization from '../../assets/organization.json';
import design from '../../assets/design.json';
import youtube from '../../assets/youtube.json';
import cv from '../../assets/cv.json';
import meet from '../../assets/meet.json';
import interfaceLottie from '../../assets/interface.json';
import front from '../../assets/front.json';
import back from '../../assets/back.json';
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
          <CardActionArea >
            <Link to='/tools/codeo'>
              <Lottie className='personal_informacion'
                options={defaultOptions(code)}
                height={130}
                width={130}
              />
            </Link>
          </CardActionArea>
          <CardActions >
            <Link to='/tools/codeo'>
              <Button id='button_myprofile' size="small" color="primary">
                  TOOLS PARA CODEAR
              </Button>
            </Link>
          </CardActions>
        </Card>
  
        <Card id='individual_box_myprofile' sx={{ display: 'block', width: 200, height: 200, bgcolor: "rgba(32, 32, 36, 0.8)", borderRadius: 3 }}>
          <Link to='/tools/organizacion'>
            <CardActionArea sx={{ paddingTop: 1 }}>
              <Lottie className='personal_informacion'
                    options={defaultOptions(organization)}
                    height={120}
                    width={120}
                  />
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
          <Link to='/tools/design'>  
            <CardActionArea sx={{ paddingTop: 2, paddingBottom: 0.5 }}>
              <Lottie className='personal_informacion'
                    options={defaultOptions(design)}
                    height={130}
                    width={130}
                  />
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
          <CardActionArea sx={{ paddingTop: 1 }}>
            <Link to='/tools/youtube'>
              <Lottie className='personal_informacion'
                options={defaultOptions(youtube)}
                height={130}
                width={130}
              />
            </Link>
          </CardActionArea>
          <CardActions >
            <Link to='/tools/youtube'>
              <Button id='button_myprofile' size="small" color="primary">
                  YOUTUBE CHANNELS
              </Button>
            </Link>
          </CardActions>
        </Card>
  
        <Card id='individual_box_myprofile' sx={{ display: 'block', width: 200, height: 200, bgcolor: "rgba(32, 32, 36, 0.8)", borderRadius: 3 }}>
          <Link to='/tools/cv'>
            <CardActionArea sx={{ paddingTop: 2 }}>
              <Lottie className='personal_informacion'
                    options={defaultOptions(cv)}
                    height={120}
                    width={120}
                  />
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
          <Link to='/tools/meet'>  
            <CardActionArea sx={{ paddingTop: 1 }}>
              <Lottie className='personal_informacion'
                    options={defaultOptions(meet)}
                    height={130}
                    width={130}
                  />
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
            <CardActionArea sx={{ paddingTop: 1 }}>
              <Lottie className='personal_informacion'
                    options={defaultOptions(interfaceLottie)}
                    height={130}
                    width={130}
                  />
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
          <Link to='/tools/frontdeploy'>  
            <CardActionArea sx={{ paddingTop: 1 }}>
              <Lottie className='personal_informacion'
                    options={defaultOptions(front)}
                    height={130}
                    width={130}
                  />
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
          <Link to='/tools/backdeploy'>  
            <CardActionArea sx={{ paddingTop: 1 }}>
              <Lottie className='personal_informacion'
                    options={defaultOptions(back)}
                    height={130}
                    width={130}
                  />
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
