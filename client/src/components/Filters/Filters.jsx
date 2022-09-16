import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SidebarTitle from '../SidebarTitle/SidebarTitle';
import CustomSelect from '../CustomSelect/CustomSelect';
// import { searchPlayers, updateFilter, updateFilterResetPage } from '../../redux/action/searchPlayersActions';
// import { generateQueryWithState } from '../../lib/util';

import s from './Filters.module.css';

export default function Filters() {
  const location = useLocation();
  const dispatch = useDispatch();
  // const searchState = useSelector((state) => state.search);

  let handleChangeSelect = function(field, newValue) {
    // if (searchState[field] === newValue) return;
    // dispatch(updateFilter({ field, newValue }));
    // dispatch(searchPlayers(generateQueryWithState({ ...searchState, [field]: newValue })));
  }

  let handleChangeSelectResetPage = function(field, newValue) {
    // if (searchState[field] === newValue) return;
    // dispatch(updateFilterResetPage({ field, newValue }));
    // dispatch(searchPlayers(generateQueryWithState({ ...searchState, [field]: newValue, currentPage: 1 })));
  }

  let isActive = function() {
    return location.pathname === '/projects';
  }
  
  if (isActive()) return (
    <span id="componentFilters">
      <SidebarTitle title = {"Filtros"} />
      <h4 className = {s.label}>Tech Usada </h4>
      <CustomSelect
        disabled={true}
        valueSelected={"oro"}
        // disabled = {searchState.loading}
        // valueSelected = {searchState.status}
        values = {["all", "oro", "plata", "bronce"]}
        handleValue = {handleChangeSelectResetPage}
        name = {"status"}
      />
      <h4 className = {s.label}>Ordenar Fecha: </h4>
      <CustomSelect
        disabled={true}
        valueSelected={["ranking", "nickname"]}
        // disabled = {searchState.loading}
        // valueSelected = {searchState.orderBy}
        values = {["ranking", "nickname"]}
        handleValue = {handleChangeSelect}
        name = {"orderBy"}
      />
      <h4 className = {s.label}>Order: </h4>
      <CustomSelect
        disabled={true}
        valueSelected={["ascending", "descending"]}
        // disabled = {searchState.loading}
        // valueSelected = {searchState.order}
        values = {["ascending", "descending"]}
        handleValue = {handleChangeSelect}
        name = {"order"}
      />
    </span>
  )
}