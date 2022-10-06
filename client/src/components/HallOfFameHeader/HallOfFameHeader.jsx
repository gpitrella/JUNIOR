import React from 'react';
import HallOfFamePortrait from '../HallOfFamePortrait/HallOfFamePortrait';
import Crown from '../SVG/Crown';

import s from './HallOfFameHeader.module.css';

export default function HallOfFameHeader({ first, second, third }) {
  return (
    <div className = {s.container}>
      <div className = {s.containerCrown}>
        <Crown opacity={1}/>
      </div>
      <HallOfFamePortrait 
        avatar={third}
        position = {3}
        gridPositionStyle = {s.thirdPlace}
      />
      <HallOfFamePortrait 
        avatar={first}
        position = {1}
        gridPositionStyle = {s.firstPlace}
        large = {true}
      />
      <HallOfFamePortrait 
        avatar={second}
        position = {2}
        gridPositionStyle = {s.secondPlace}
      />
    </div>
  );
}