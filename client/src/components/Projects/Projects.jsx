import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Pagina from "../Pagina/Pagina.jsx";
import CardProject from '../CardProject/CardProject';
import { getAllProjects, getAllTechs } from '../../redux/actions/projectsActions.js';
import { closeMessageMustLogin, openMessageMustLogin, openModalInfoCollaborator, closeModalInfoCollaborator } from '../../redux/actions/generalActions.js';
import loottie from '../../assets/astronaut-notebook.json'
import ModalMessage from '../ModalMessage/ModalMessage';
import ModalCollaborate from '../ModalCollaborate/ModalCollaborate';
import notastronaut from '../../assets/notastronaut.png';
import { messagePopUp } from '../../lib/constants';

import s from './Projects.module.css';
import { style } from '@mui/system';

export default function Projects() {

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.homepageReducer);
  const { allProjects, pagina, numberAllProjects  } = useSelector(state => state.projectsReducer);
  
  let currentPage = 0;
  currentPage = pagina;

  React.useEffect(()=> {
    dispatch(getAllProjects());
    dispatch(getAllTechs());
    return () => {
      dispatch(closeMessageMustLogin())
      dispatch(closeModalInfoCollaborator())
    };
  }, [])

  //? paginado
  const maxpage = Math.ceil(allProjects?.length / 3);

  const projectsToShow = () => {
    const projectShow = allProjects?.slice(
      (currentPage - 1) * 3,
      (currentPage - 1) * 3 + 3
    );
    return projectShow;
  };

  function handleOpenMessageLogin(idProject) {
    if(!user?.user) {
      dispatch(openMessageMustLogin({ open: true, msg: 2 }));
    } else {
      dispatch(openModalInfoCollaborator(idProject))
    }
  }

  return (
        <>
          <div className = {s.containerProjects}>
            <Sidebar />
              { !projectsToShow()?.length  
                  ? <div className = {s.withoutCardsStore}>
                      <h2>Sin Proyectos con estos filtros</h2>
                      <h2>aprovecha y crea el primero. </h2>  
                      <img className={s.lottieWithOutProject} src={notastronaut} alt='Icono sin Projectos' />    
                    </div>
                  : <div className = {s.producCardsStore}>
                      <div className={s.projects_view_content}>
                        <h1 className={s.gradient__text}> PROYECTOS </h1>
                        <p> Busca, crea y sumate a los proyectos desafiantes que más te atraigan.	</p>
                      </div>    
                                                 
                      <div className={s.detailsProjects} >
                        <p> Total Projectos: {numberAllProjects}	</p>
                        <p> Projectos Filtrados: {allProjects.length}	</p>
                        <Pagina currentPage={currentPage} maxpage={maxpage}></Pagina>

                      </div>
                      {
                        projectsToShow()?.length > 0 && projectsToShow()?.map(project => {
                          return (<CardProject key={project?._id} project={project} handleOpenMessageLogin={handleOpenMessageLogin}/>)
                        })
                      }
                    </div>
              }
          </div>
          <ModalMessage message={messagePopUp}/>
          <ModalCollaborate />
    </>
  );
};