import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SidebarTitle from '../SidebarTitle/SidebarTitle';
import CustomSelect from '../CustomSelect/CustomSelect';
import { getAllProjects, updateFilterProjects, updateStatusFilter } from '../../redux/actions/projectsActions.js';
import { generateQueryWithState } from '../../lib/util';


import s from './Filters.module.css';

export default function Filters() {
  const location = useLocation();
  const dispatch = useDispatch();
  const filterReducer = useSelector((state) => state.filterReducer);

  const allNameTechs = filterReducer?.allTechs.map((tech) => {
    return tech.name.charAt(0).toUpperCase() + tech.name.slice(1);
  })

  // console.log(filterTechs);
  let handleChangeSelect = function(field, newValue) {
    // if (filterReducer[field] === newValue) return;
    // dispatch(updateStatusFilter({ field, newValue }));
    // if (newValue === "All") {
    //   dispatch(getAllProjects());
    // } else {
    //   dispatch(updateFilterProjects(generateQueryWithState({ ...filterReducer, [field]: newValue })));
    // }
  }

  let handleChangeSelectResetPage = function(field, newValue) {
    if (filterReducer[field] === newValue) return;
    dispatch(updateStatusFilter({ field, newValue }));
    if (newValue === "All") {
      dispatch(getAllProjects());
    } else {
      console.log('lo que devuelve el generador:',generateQueryWithState({ ...filterReducer, [field]: newValue }))
      dispatch(updateFilterProjects(generateQueryWithState({ ...filterReducer, [field]: newValue })));
    }
  }

  let isActive = function() {
    return location.pathname === '/projects';
  }
  
  if (isActive()) return (
    <span id="componentFilters">
      <SidebarTitle title = {"Filtros"} />
      <h4 className = {s.label}>Techs Usadas </h4>
      <CustomSelect
        disabled={false}
        valueSelected={filterReducer?.tech}
        values = {allNameTechs?.concat("All")}
        handleValue = {handleChangeSelectResetPage}
        name = {"tech"}
      />
      <h4 className = {s.label}>Tipo Proyecto: </h4>
      <CustomSelect
        disabled={false}
        valueSelected={filterReducer?.payment}
        // disabled = {searchState.loading}
        // valueSelected = {searchState.orderBy}
        values = {["All", "Remunerado", "Colaborativo"]}
        handleValue = {handleChangeSelectResetPage}
        name = {"payment"}
      />
      <h4 className = {s.label}>Status: </h4>
      <CustomSelect
        disabled={false}
        valueSelected={filterReducer?.status}
        // disabled = {searchState.loading}
        // valueSelected = {searchState.orderBy}
        values = {["All", "En Desarrollo", "Finalizado"]}
        handleValue = {handleChangeSelectResetPage}
        name = {"status"}
      />
      <h4 className = {s.label}>Ordenar Por: </h4>
      <CustomSelect
        disabled={false}
        valueSelected={filterReducer?.order}
        // disabled = {searchState.loading}
        // valueSelected = {searchState.order}
        values = {["Fecha Creación", "Fecha Actualización", "Titulo"]}
        handleValue = {handleChangeSelectResetPage}
        name = {"order"}
      />
      <h4 className = {s.label}>Ordenar: </h4>
      <CustomSelect
        disabled={false}
        valueSelected={filterReducer?.orderby}
        // disabled = {searchState.loading}
        // valueSelected = {searchState.order}
        values = {["Ascendente", "Descendente"]}
        handleValue = {handleChangeSelectResetPage}
        name = {"orderby"}
      />
    </span>
  )
}