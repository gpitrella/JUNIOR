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
        {
          showSidebarResponsive && 
          <div className = {s.mainBtnCloseSideBarResponsive}>
            <button className = {s.btnCloseSideBarResponsive} onClick = {() => setShowSidebarResponsive(false)}>X</button>
          </div>     
        }
        <Links />
        <Filters />
      </div>
      <ToggleSideBarResponsive showSideBar = {showSidebarResponsive} handler = {() => setShowSidebarResponsive(true)} />
      <Links showAsFooter = {true}/>
    </>
  )
}