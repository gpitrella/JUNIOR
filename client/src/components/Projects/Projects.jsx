import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
import Lottie from 'react-lottie';
import Sidebar from '../Sidebar/Sidebar.jsx';
import CardProject from '../CardProject/CardProject';
import { getAllProjects, getAllTechs } from '../../redux/actions/projectsActions.js';
import { closeMessageMustLogin } from '../../redux/actions/generalActions.js';
import notProject from '../../assets/astronautnotproject.json';
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
  // React.useEffect(() => {

  //   let idTimeOut = setTimeout(() => {

  //     if (params.discount) handleUpdateFilter('discount', true);
  //     if (params.category) handleUpdateFilter('category', params.category);
  //     if (params.brand) handleUpdateFilter('brand', [params.brand]);

  //     dispatch(getBrandsToStore());
  //     dispatch(getCategoriesToStore());

  //   }, Math.random() * 400 + 1000);

  //   return () => {
  //     dispatch(closeStore());
  //     setqueryName('');
  //     setDispatching(false);
  //     clearTimeout(idTimeOut);
  //   }
  // }, [])

  // // React.useEffect(() => {
  // //   if (params && params.name) {
  // //     handleUpdateFilter('name', params.name);
  // //     console.log('Actualizo el filtro por nombre.');
  // //   }
  // // }, [params.name]);

  // // React.useEffect(() => {
  // //   if (!showStore) return;
  // //   console.log('Empiezo a cargar los productos con el filtro.', filter);
  // //   dispatch(getProductsWithFiltersAndPaginate(buildFilter(filter)));
  // //   dispatch(setShowLoading());
  // // }, [showStore]);

  // React.useEffect(() => {   
  //   if (params.name !== queryName) setqueryName(params.name)
  // }, [params.name])

  // React.useEffect(() => {
  //   if (!showStore || (dispatching && params.name === queryName)) return;

  //   if (params && params.name) {
  //     handleUpdateFilter('name', params.name);
  //     dispatch(getProductsWithFiltersAndPaginate(buildFilter({
  //       ...filter,
  //       name: params.name,
  //       page: 1,
  //     })));
  //   }
  //   else {
  //     dispatch(getProductsWithFiltersAndPaginate(buildFilter({
  //       ...filter,
  //       category: params.category ? params.category : 'None',
  //       brand: params.brand ? [params.brand] : [],
  //       discount: params.discount ? params.discount : false,
  //       page: 1,
  //       name: ''
  //     })));
  //   }
  //   dispatch(setShowLoading());
  //   setDispatching(true);
  // }, [showStore, params.name]);

  // let handleUpdateFilter = function(property, value) {
  //   let newFilter = { 
  //     ...filter,
  //     [property]: value,
  //     page: 1
  //   }
  //   if (property !== 'name') newFilter.name = '';
  //   dispatch(updateFilter(newFilter));
  // }

  // if (!showStore) {
  //   return (
  //     <div className = {s.container}>
  //       <div className = {s.imageContainer}>
  //         <div className = {s.loadingContainer}>
  //           {/* <Loading /> */} <h1>Cargando</h1>
  //         </div>
  //       </div>
  //       <span className = {s.spanLoading}>Loading Store</span>
  //     </div>
  //   )
  // }

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
                          return (<CardProject key={project?._id} project={project}/>)
                        })
                      }
                    </div>
              }
          </div>
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