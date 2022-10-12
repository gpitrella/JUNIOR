import React from 'react';

import s from './HallOfFamePortrait.module.css';

export default function HallOfFamePortrait({ avatar, position, gridPositionStyle, large = false}) {
  return (
    <>
      <div className = {`${s.containerAvatar} ${large ? s.large : ''} ${gridPositionStyle}`}>
        <img src = {avatar} alt = {`avatar-${position}-place`} className = {s.avatar}/>
      </div>
      <div className = {`${s.containerNumber} ${large ? s.large : ''} ${gridPositionStyle}`}>
        {position}
      </div>
    </>
  );
}