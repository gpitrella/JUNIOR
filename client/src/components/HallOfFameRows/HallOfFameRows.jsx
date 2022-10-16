import React from 'react';
import HallOfFameRow from '../HallOfFameRow/HallOfFameRow';
import s from './HallOfFameRows.module.css';

export default function HallOfFameRows({ users }) {
  
  
  return (
    <div className = {s.container}>
      <div className={s.hofrows_content}>
      <h1 className={s.gradient__text}>
          USERS
			</h1>
      <p>
          En la sección de USUARIOS podrás encontrar a todos los Desarrolladores inscriptos a JUNIOR e identificarlos
          por su nombre, las tecnologías que usa y si se encuentra activo en algún proyecto dentro de la plataforma
          y también su contacto para poder ubicarlos fuera de la aplicación.
			</p>
      </div>
      {
        
        users && users.length > 0 && users.map((user, index) => 

          <HallOfFameRow
            id = {user.id}
            name = {user.name}
            collaborations = {user.collaborations}
            image = {user.image}
            index = {index + 1}
            email = {user.email}
            linkedin = {user.linkedin}
            github = {user.github}
            key = {`hall-of-fame-user-${user.name}-${index}`}
          />

        )
      }
    </div>
  );
}