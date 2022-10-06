import React from 'react';
import HallOfFameRow from '../HallOfFameRow/HallOfFameRow';
import s from './HallOfFameRows.module.css';

export default function HallOfFameRows({ players }) {
  
  
  return (
    <div className = {s.container}>      
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