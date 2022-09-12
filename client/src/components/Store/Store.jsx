import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
import SideBar from '../../containers/SideBar/SideBar';
import { Navbar } from '../../components';
import CardProject from '../../components/CardProject/CardProject';
// import FilterPanel from '../FilterPanel/FilterPanel';
// import OrderPanel from '../OrderPanel/OrderPanel';
// import Pagination from '../Pagination/Pagination';
// import ShowResultCount from '../ShowResultCount/ShowResultCount';
// import ProductCardsStore from '../ProductCardsStore/ProductCardsStore';
// import LoadingStore from '../LoadingStore/LoadingStore';
// import { closeStore, getBrandsToStore, getCategoriesToStore, getProductsWithFiltersAndPaginate,
//           setShowLoading, updateFilter } from '../../redux/actions';
// import { buildFilter, buildPathWithFilter } from '../../util';

import s from './Store.module.css';
// import Navbar from '../NavBar/NavBar';
// import Loading from '../SVG/Loading';


const projectsEjemplos = [
  {
    _id: "62fa5fe7bf6d1699d7f3e224",
    title: "Proyecto con Logeo",
    description: "Primer proyecto creado una vez logeado.",
    gitHubUrl: "https://github.com/singhkshitij/My-Landing-Page",
    image: "https://www.iata.org/contentassets/d7c512eb9a704ba2a8056e3186a31921/cargo_live_animals_parrot.jpg?w=330&h=200&mode=crop&scale=both&v=20191213012337",
    tech: ["React", "Redux", "Express", "Sequelize"],
    user: "62fa59f0a41323e6e7f40705",
    createdAt: "2022-08-15T15:01:59.908+00:00",
    updatedAt: "2022-08-15T15:01:59.908+00:00"
  },
  {
    _id: "62fa5fe7bf6d1699d7f3e224",
    title: "Segundo Proyecto con Logeo",
    description: "Segundo proyecto creado una vez logeado.",
    gitHubUrl: "https://github.com/singhkshitij/My-Landing-Page",
    image: "https://i.pinimg.com/564x/50/61/94/5061940a1eeb9ed87977a575254895a3.jpg",
    tech: ["React", "Express", "MongoDB"],
    user: "62fa59f0a41323e6e7f40705",
    createdAt: "2022-08-15T15:01:59.908+00:00",
    updatedAt: "2022-08-15T15:01:59.908+00:00"
  },
]

export default function Store() {

  // const dispatch = useDispatch();
  // // const { showLoading, showError, showStore, products, noProducts, filter, results } = useSelector(state => state.storepage);
  // const [ dispatching, setDispatching ] = React.useState(false);
  // const [ queryName, setqueryName ] = React.useState('');
  // const params = useParams();

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
        <Navbar />
    <div className = {s.container}>

      <div>
        {/* <div className = {s.containerTitle}> // FILTROS APLICADOS EN LA APP
        {
          filter && buildPathWithFilter(filter).map((element, index) => 
            <><span className = {s.arrow}>{'/'}</span><span className = {s.path}> {element} </span></>       
          )
        }
        </div> */}
        <div className = {s.filterPanel}>
          <SideBar />
        </div>
        {/* <div className = {s.subHeaderZone}> // DEVUELVE LA CANTIDAD DE PRODUCTOS ENCONTRADOS Y LOS FILTROS DE CATEGORIAS

          <ShowResultCount loading = {showLoading} results = {results} page = {filter.page} pages = {filter.pages} />

          <div className = {s.orderPanel}>
            <OrderPanel />
          </div>

        </div> */}
        {/* <div className = {s.pagination}> // PAGINACION DE PROJECTOS
          <Pagination />
        </div> */}
        <div className = {s.producCardsStore}>
          {
            projectsEjemplos.length > 0 && projectsEjemplos.map(project => {
              return (<CardProject project={project}/>)
            })

          }
            {/* <ProductCardsStore products = {products}/> */}
          </div>
        {/* {
          !showLoading && !showError && products && products.length > 0 &&
          <div className = {s.producCardsStore}>
            <CardProject />
            <ProductCardsStore products = {products}/>
          </div>
        } */}
        {/* <LoadingStore loading = {showLoading} error = {showError} noResults = {noProducts}/>
        <div className = {s.paginationBottom}>
          <Pagination />
        </div> */}
      </div>
    </div>
    </>
  );
}