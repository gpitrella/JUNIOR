import * as React from 'react';
import Card from '@mui/material/Card';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Lottie from 'react-lottie';
import { getProjectsByUser } from '../../redux/actions/projectsActions';
import personalInformation from '../../assets/personalInformation.json';
import team from '../../assets/team.json';
import projectPersonal from '../../assets/projectPersonal.json';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import './MyProfile.css';

export default function MyProfile({handleSignOut}) {
  const [displayUserAdmin, setDisplayUserAdmin] = React.useState(false);
  const { user } = useSelector((state) => state.homepageReducer);
  
  const dispatch = useDispatch(); 
  // const openFavorite = () => {
  //     dispatch(showFavs())
  // };

  React.useEffect(() => {
    dispatch(getProjectsByUser(user?.user._id, user?.token))
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
          MI PERFIL
			</h1>
      <p>
          En esta Sección vas a poder editar toda tu información personal, te recomendamos completar tus datos de contacto
          para que puedan comunicarse facilmente con vos para colaborar. Además tendrás acceso a los proyectos con los que estas 
          colaborando o editar proyectos que publicaste.
			</p>
      <div className='main_box_pyProfile'>
        <Card id='individual_box_myprofile' sx={{ width: 200, height: 200, bgcolor: "rgba(32, 32, 36, 0.8)", borderRadius: 3 }}>
          <CardActionArea >
            <Link to='/miperfil/personalinformation'>
              <Lottie className='personal_informacion'
                options={defaultOptions(personalInformation)}
                height={130}
                width={130}
              />
            </Link>
          </CardActionArea>
          <CardActions >
            <Link to='/miperfil/personalinformation'>
              <Button id='button_myprofile' size="small" color="primary">
                  Información Personal
              </Button>
            </Link>
          </CardActions>
        </Card>
  
        <Card id='individual_box_myprofile' sx={{ display: 'block', width: 200, height: 200, bgcolor: "rgba(32, 32, 36, 0.8)", borderRadius: 3 }}>
          <Link to='/miperfil/colaboraciones'>
            <CardActionArea sx={{ paddingLeft: 3 }}>
              <Lottie className='personal_informacion'
                    options={defaultOptions(team)}
                    height={150}
                    width={150}
                  />
            </CardActionArea>
          </Link>
          <CardActions >
            <Link to='/miperfil/colaboraciones'>
              <Button id='button_myprofile' size="small" color="primary" >
                Colaboraciones
              </Button>
            </Link>
          </CardActions>
        </Card>

        <Card id='individual_box_myprofile' sx={{ display: 'block', width: 200, height: 200, bgcolor: "rgba(32, 32, 36, 0.8)", borderRadius: 3 }}>
          <Link to='/miperfil/misproyectos'>  
            <CardActionArea sx={{ paddingTop: 2, paddingBottom: 0.5 }}>
              <Lottie className='personal_informacion'
                    options={defaultOptions(projectPersonal)}
                    height={130}
                    width={130}
                  />
            </CardActionArea>
          </Link>
          <CardActions >
            <Link to='/miperfil/misproyectos'>
              <Button id='button_myprofile' size="small" color="primary" >
                Mis Proyectos
              </Button>
            </Link>
          </CardActions>
        </Card>
      </div>
      <div className='positionBtnLoutProfile'>
        <button className="btn btnLogOutProfile" type="button" onClick={(e) => handleSignOut(e)}>LogOut</button>
      </div>
    </div>
  );
}
