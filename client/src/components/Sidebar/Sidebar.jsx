import React from 'react';
import Links from '../Links/Links';
import Filters from '../Filters/Filters';
import ToggleSideBarResponsive from '../ToggleSideBarResponsive/ToggleSideBarResponsive';

import s from './Sidebar.module.scss';

export default function Sidebar() {  
  const [ showSidebarResponsive, setShowSidebarResponsive ] = React.useState(false);
  
  return (
    <>
      <div id="debar" className = {`${s.container} ${showSidebarResponsive ? s.showSidebarResponsive : ''}`}>
        <Links />
        <Filters />
        {
          showSidebarResponsive && 
          <button className = {s.btnCloseSideBarResponsive} onClick = {() => setShowSidebarResponsive(false)}>Close</button>
        }
      </div>
      <ToggleSideBarResponsive showSideBar = {showSidebarResponsive} handler = {() => setShowSidebarResponsive(true)} />
      <Links showAsFooter = {true}/>
    </>
  )
}