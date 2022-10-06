import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Lottie from 'react-lottie';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Pagina from "../Pagina/pagina";
import CardProject from '../CardProject/CardProject';
import { getAllProjects, getAllTechs } from '../../redux/actions/projectsActions.js';
import { closeMessageMustLogin, openMessageMustLogin, openModalInfoCollaborator, closeModalInfoCollaborator } from '../../redux/actions/generalActions.js';
import notProject from '../../assets/astronautnotproject.json';
import ModalMessage from '../ModalMessage/ModalMessage';
import ModalCollaborate from '../ModalCollaborate/ModalCollaborate';
import { messagePopUp } from '../../lib/constants';

import s from './Projects.module.css';

export default function Projects() {

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.homepageReducer);
  // const [ dispatching, setDispatching ] = React.useState(false);
  // const [ queryName, setqueryName ] = React.useState('');
  // const params = useParams();
  const { allProjects, pagina  } = useSelector(state => state.projectsReducer);
  
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

  const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: notProject,
		rendererSettings: {
		  preserveAspectRatio: "xMidYMid slice"
		}
	};

  function handleOpenMessageLogin() {
    if(!user?.user) {
      dispatch(openMessageMustLogin({ open: true, msg: 2 }));
    } else {
      dispatch(openModalInfoCollaborator())
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
                      <Lottie options={defaultOptions} height={400} width={400} />  
                    </div>
                  : <div className = {s.producCardsStore}>
                      <Pagina currentPage={currentPage} maxpage={maxpage}></Pagina>
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
}

// {
//   "title": "Cuidado de Mascotas",
//   "description": "App para ",
//   "gitHubUrl":"https://github.com/gpitrella/PruebaTIPS",
//   "wspUrl":"https://api.whatsapp.com/send?phone=542614607020&text=Hola, Quiero sumarme al proyecto!",
//   "image": "https://sirenascarwash.com/assets/img/blog/p3-pet-friendly.jpg",
//   "tech": ["React", "Redux", "Express", "Sequelize", "PostgreSQL"],
//   "userId": "62fa59f0a41323e6e7f40705",
//   "payment": false,
//   "status": "finish"
// }