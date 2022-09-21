import React from 'react';
import SectionLink from '../SectionLink/SectionLink';
import SidebarTitle from '../SidebarTitle/SidebarTitle';
import World from '../SVG/World';
import Stars from '../SVG/Stars';
import Info from '../SVG/Info';

import s from './Links.module.css';

export default function Links({ showAsFooter = false }) {
  return (
    <div id="componentLinks" className = {`${showAsFooter ? s.containerAsFooter : s.container}`}>
      {
        !showAsFooter &&
        <SidebarTitle title = {"Buscar Proyectos"} />
      }
      <SectionLink
        title = {"Hall of Fame"}
        path = {"/home"}
        icon = {Stars}
        showVertical = {showAsFooter}
      />
      <SectionLink
        title = {"All Players"}
        path = {"/projects"}
        icon = {World}
        showVertical = {showAsFooter}
      />
      <SectionLink
        title = {"About"}
        path = {"/about"}
        icon = {Info}
        showVertical = {showAsFooter}
      />
    </div>
  );
}