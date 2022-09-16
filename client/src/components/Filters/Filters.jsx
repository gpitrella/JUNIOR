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
    if (filterReducer[field] === newValue) return;
    dispatch(updateStatusFilter({ field, newValue }));
    if (newValue === "All") {
      dispatch(getAllProjects());
    } else {
      dispatch(updateFilterProjects(generateQueryWithState({ ...filterReducer, [field]: newValue })));
    }
  }

  let handleChangeSelectResetPage = function(field, newValue) {
    if (filterReducer[field] === newValue) return;
    dispatch(updateStatusFilter({ field, newValue }));
    if (newValue === "All") {
      dispatch(getAllProjects());
    } else {
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
        // disabled = {searchState.loading}
        // valueSelected = {searchState.status}
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
        handleValue = {handleChangeSelect}
        name = {"payment"}
      />
      <h4 className = {s.label}>Order: </h4>
      <CustomSelect
        disabled={false}
        valueSelected={"ascending"}
        // disabled = {searchState.loading}
        // valueSelected = {searchState.order}
        values = {["ascending", "descending"]}
        handleValue = {handleChangeSelect}
        name = {"order"}
      />
    </span>
  )
}