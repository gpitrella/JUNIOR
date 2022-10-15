import * as React from 'react';
import Card from '@mui/material/Card';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { getProjectsByUser, getCollaborationByUser } from '../../redux/actions/projectsActions';
import personalInformation from '../../assets/personalInformation.json';
import team from '../../assets/team.json';
import projectPersonal from '../../assets/projectPersonal.json';
import { useDispatch, useSelector } from "react-redux";
import CardProfile from './CardProfile/CardProfile';
import s from './MyProfile.module.css';

export default function MyProfile({ handleSignOut }) {
  const { user } = useSelector((state) => state.homepageReducer);
  const dispatch = useDispatch(); 
  
  React.useEffect(() => {
    if(user?.user) {
      dispatch(getProjectsByUser(user?.user._id, user?.token));
      dispatch(getCollaborationByUser(user?.user._id));
    }
  },[user]);
  
  return (
    <div className={s.myprofile_view_content}>
      <h1 className={s.gradient__text}>
          MI PERFIL
			</h1>
      <p>
          En esta Sección vas a poder editar toda tu información personal, te recomendamos completar tus datos de contacto
          para que puedan comunicarse facilmente con vos para colaborar. Además tendrás acceso a los proyectos con los que estas 
          colaborando o editar proyectos que publicaste.
			</p>
      <div className={s.main_box_pyProfile}>
        <CardProfile lottie={personalInformation} name={"Personal Information"} link={"/miperfil/personalinformation"} width={130} marginLeft={35}/>
        <CardProfile lottie={team} name={"Colaboraciones"} link={"/miperfil/colaboraciones"} width={220} marginLeft={0}/>
        <CardProfile lottie={projectPersonal} name={"Mis Proyectos"} link={"/miperfil/misproyectos"} width={130} marginLeft={35}/>
      </div>
      <div className={s.positionBtnLoutProfile}>
        <button className={`${s.btn} ${s.btnLogOutProfile}`} type="button" onClick={(e) => handleSignOut(e)}>LogOut</button>
      </div>
    </div>
  );
}
