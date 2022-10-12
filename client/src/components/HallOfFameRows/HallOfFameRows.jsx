import React from 'react';
import HallOfFameRow from '../HallOfFameRow/HallOfFameRow';
import s from './HallOfFameRows.module.css';

export default function HallOfFameRows({ players }) {
  
  
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
        
        players && players.length > 0 && players.map((player, index) => 

          <HallOfFameRow
            id = {player.id}
            nickname = {player.nickname}
            status = {player.status}
            ranking = {player.ranking}
            avatar = {player.avatar}
            index = {index + 1}
            github = {player.github}
            email = {player.email}
            linkedin = {player.linkedin}
            key = {`hall-of-fame-player-${player.nickname}-${index}`}
          />

        )
      }
    </div>
  );
}