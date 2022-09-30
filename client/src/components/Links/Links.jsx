import React from 'react';
import SectionLink from '../SectionLink/SectionLink';
import SidebarTitle from '../SidebarTitle/SidebarTitle';
import ModalMessage from '../ModalMessage/ModalMessage';
import { messagePopUp } from '../../lib/constants';
import rocketProject from '../../assets/rocketProject.png';
import s from './Links.module.css';

export default function Links({ showAsFooter = false }) {

  return (
    <div id="componentLinks" className = {`${showAsFooter ? s.containerAsFooter : s.container}`}>
      {
        !showAsFooter &&
        <SidebarTitle title = {"Proyectos"} />
      }
      <SectionLink
        title = {"Crear Proyecto"}
        path = {"/crearproyecto"}
        icon = {rocketProject}
        showVertical = {showAsFooter}
      />
      <ModalMessage message={messagePopUp}/>
    </div>
  );
}