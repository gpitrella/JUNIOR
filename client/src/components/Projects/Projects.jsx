import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
import Lottie from 'react-lottie';
import Sidebar from '../Sidebar/Sidebar.jsx';
import CardProject from '../CardProject/CardProject';
import { getAllProjects, getAllTechs } from '../../redux/actions/projectsActions.js';
import { closeMessageMustLogin, openMessageMustLogin } from '../../redux/actions/generalActions.js';
import notProject from '../../assets/astronautnotproject.json';
import ModalMessage from '../ModalMessage/ModalMessage';
import { messagePopUp } from '../../lib/constants';

import s from './Projects.module.css';

export default function Projects() {

  const dispatch = useDispatch();
  const { allProjects  } = useSelector(state => state.projectsReducer);
  // const [ dispatching, setDispatching ] = React.useState(false);
  // const [ queryName, setqueryName ] = React.useState('');
  // const params = useParams();

  React.useEffect(()=> {
    dispatch(getAllProjects());
    dispatch(getAllTechs());
    return () => {
      dispatch(closeMessageMustLogin());
    };
  }, [])

  const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: notProject,
		rendererSettings: {
		  preserveAspectRatio: "xMidYMid slice"
		}
	};

  function handleOpenMessageLogin() {
    dispatch(openMessageMustLogin({ open: true, msg: 2 }));
  }

  return (
        <>
          <div className = {s.containerProjects}>
            <Sidebar />
              { allProjects?.length === 0 
                  ? <div className = {s.withoutCardsStore}>
                      <h2>Sin Proyectos con estos filtros</h2>
                      <h2>aprovecha y crea el primero. </h2>             
                      <Lottie options={defaultOptions} height={400} width={400} />  
                    </div>
                  : <div className = {s.producCardsStore}>
                      {
                        allProjects?.length > 0 && allProjects.map(project => {
                          return (<CardProject key={project?._id} project={project} handleOpenMessageLogin={handleOpenMessageLogin}/>)
                        })
                      }
                    </div>
              }
          </div>
          <ModalMessage message={messagePopUp}/>
    </>
  );
}

// {
//   "title": "Cuidado de Mascotas",
//   "description": "App para ",
//   "gitHubUrl":"https://github.com/gpitrella/PruebaTIPS",
//   "wspUrl":"https://api.whatsapp.com/send?phone=542614607020&text=Hola, Quiero sumarme al proyecto!",
//   "image": "https://sirenascarwash.com/assets/img/blog/p3-pet-friendly.jpg",
//   "newtech": ["React", "Redux", "Express", "Sequelize", "PostgreSQL"],
//   "userId": "62fa59f0a41323e6e7f40705",
//   "payment": false,
//   "status": "finish"
// }