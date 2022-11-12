import React from 'react';
import HallOfFameRow from '../HallOfFameRow/HallOfFameRow';
import { useSelector, useDispatch } from 'react-redux';
import ModalInvitationProject from '../ModalInvitationProject/ModalInvitationProject';
import { enableInvitationToProject } from '../../redux/actions/projectsActions.js';
import Pagina from "../Pagina/Pagina.jsx";
import Button from '@mui/material/Button';
import s from './HallOfFameRows.module.css';

export default function HallOfFameRows({ users }) {
  const { pagina } = useSelector(state => state.projectsReducer);
  const { user } = useSelector((state) => state.homepageReducer);
  const dispatch = useDispatch();
  // Paginado:
  let currentPage = 0;
  currentPage = pagina;
  const maxpage = Math.ceil(users?.length / 25);

  const developerToShow = () => {
    const developerShow = users?.slice(
      (currentPage - 1) * 25,
      (currentPage - 1) * 25 + 25
    );
    return developerShow;
  };

  function handleInvitation(e) {
    e.preventDefault();
    dispatch(enableInvitationToProject())
  }
  
  return (
    <div className = {s.container}>
      <div className={s.hofrows_content}>
      <h1 className={s.gradient__text}>
          DEVELOPERS
			</h1>
      <p>
          En la sección de DEVELOPERS podrás encontrar a todos los Desarrolladores inscriptos a JUNIOR e identificarlos
          por su nombre, las tecnologías que usa y si se encuentra activo en algún proyecto dentro de la plataforma
          y también su contacto para poder ubicarlos fuera de la aplicación.
			</p>
      </div>
      <div className={s.detailsProjects} >
        <div className = {s.totalandfilterproject}>
            <p> Total Developers: {users && users.length}	</p>
        </div>
        <Pagina currentPage={currentPage} maxpage={maxpage}></Pagina>
        { user?.user && user.user?.projects?.length > 0 &&
          <Button id={s.btn_developersInvitation} variant="contained" onClick={(e) => handleInvitation(e)}>
              Invitar Colaboradores
          </Button>
        }

      </div>
      {        
        users && users.length > 0 && developerToShow().map((user, index) => 

          <HallOfFameRow
            id = {user._id}
            name = {user.name}
            collaborations = {user.collaborations}
            image = {user.image}
            index = {index + 1 + (25 * (currentPage - 1))}
            email = {user.email}
            linkedin = {user.linkedin}
            github = {user.github}
            key = {`hall-of-fame-user-${user.name}-${index}`}
          />
        )
      }
      <ModalInvitationProject />
    </div>
  );
}