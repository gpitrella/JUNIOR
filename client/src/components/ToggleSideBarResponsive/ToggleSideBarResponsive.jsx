import React from 'react';
import { useLocation } from 'react-router-dom';
import filterIcon from '../../assets/filterIcon.png';
import s from './ToggleSideBarResponsive.module.css';

export default function ToggleSideBarResponsive({ showSideBar, handler }) {

  const location = useLocation();

  let isActive = function() {
    return location.pathname === '/projects';
  }

  if (isActive()) return (
    <div className={showSideBar ? s.notShowSidebar : s.showSidebar }>
      <button className = {s.btnShowSidebarResponsive} onClick = {handler}>
        <img src={filterIcon} alt="icon Filter" className={s.iconFilter}/>
        <span className = {s.spanInfo}> Filtros </span>
      </button>
    </div>
  );
}
