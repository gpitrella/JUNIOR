import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardProject from '../../CardProject/CardProject';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { getProjectsByUser, enableInvitationToProject } from '../../../redux/actions/projectsActions.js';
import './MyProjects.css'


export default function MyProjects() {
  const { user } = useSelector((state) => state.homepageReducer);
  const { projectByUser } = useSelector((state) => state.projectsReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  function handleOpenMessageLogin() {
    // if(!user?.user) {
    //   dispatch(openMessageMustLogin({ open: true, msg: 2 }));
    // } else {
    //   dispatch(openModalInfoCollaborator())
    // }
  }

  function handleInvitation(e) {
    e.preventDefault();
    dispatch(enableInvitationToProject())
    navigate('/developers')
  }

  React.useEffect(() => {
    dispatch(getProjectsByUser(user?.user._id, user?.token))
  },[user]);

  return (
    <div className='main_box_personalinformation'>
      <h1 className="gradient__text"> MI PERFIL </h1>
      <h2 className='title_personalinformation gradient__text'> Mis Proyectos </h2>
      <div>
        {
          user?.user.projects?.length === 0 && projectByUser?.length === 0
             ? <h3>Todavía no creaste ningún Proyecto, ANIMATE y crea uno. 🚀 </h3>
             : projectByUser.map(project => {
            return (
              <div className='myproyectsEdit' key={project?._id}>
                  <div className='positionButtonEdit'>
                    <Link to={`/miperfil/editproyecto/${project?._id}`}>
                        <Button id='btn_personalinformationEditProject' variant="contained">
                            Editar Proyecto
                        </Button>
                    </Link>
                    <Button id='btn_personalinformationEditProject' variant="contained" onClick={(e) => handleInvitation(e)}>
                        Invitar Colaboradores
                    </Button>
                  </div>
                <CardProject key={project?._id} project={project} handleOpenMessageLogin={handleOpenMessageLogin}/>
              </div>
              )
          })
        }
      </div>
      <Link to={`/miperfil`}>
        <Button id='btn_personalinformation' variant="contained"> Mi Perfil </Button>
      </Link>
    </div>
  );
}
