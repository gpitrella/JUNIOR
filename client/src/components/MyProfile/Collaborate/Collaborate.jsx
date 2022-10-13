import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardProject from '../../CardProject/CardProject';
import Button from '@mui/material/Button';
import { getCollaborationByUser } from '../../../redux/actions/projectsActions';
import { Link } from 'react-router-dom';
import './Collaborate.css'


export default function Collaborate() {
  const { user } = useSelector((state) => state.homepageReducer);
  const { projectCollaborateByUser } = useSelector((state) => state.projectsReducer);
  const dispatch = useDispatch();
  

  React.useEffect(() => {
    dispatch(getCollaborationByUser(user?.user._id));
  },[user]);

  function handleOpenMessageLogin() {
    // if(!user?.user) {
    //   dispatch(openMessageMustLogin({ open: true, msg: 2 }));
    // } else {
    //   dispatch(openModalInfoCollaborator())
    // }
  }

  return (
    <div className='main_box_personalinformation'>
      <h1 className="gradient__text"> MI PERFIL </h1>
      <h2 className='title_personalinformation gradient__text'> Mis Colaboraciones </h2>
      <div>
        {
          user?.user?.collaborations?.length === 0 && projectCollaborateByUser?.length === 0
             ? <h3>Todavía no te summaste a ningún Proyecto, ANIMATE y suma experiencia. 🚀 </h3>
             : projectCollaborateByUser.map(project => {
            return (<CardProject key={project?._id} project={project} handleOpenMessageLogin={handleOpenMessageLogin}/>)
          })
        }
      </div>
      <Link to={`/miperfil`}>
        <Button id='btn_personalinformation' variant="contained"> Mi Perfil </Button>
      </Link>
    </div>
  );
}
