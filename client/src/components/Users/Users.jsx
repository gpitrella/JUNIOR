import React from 'react';
// import PlayerIcon from '../PlayerIcon/PlayerIcon';
// import Trophy from '../SVG/Trophy';
// import Crown from '../SVG/Crown';
// import Hexagon from '../SVG/Hexagon';
import CastleIcon from '@mui/icons-material/Castle';
import StarsIcon from '@mui/icons-material/Stars';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HexagonIcon from '@mui/icons-material/Hexagon';

import { numberWithCommas } from '../../lib/util';

import s from './users.module.css';

export default function HallOfFameRow({ id, nickname, status, ranking, avatar, index }) {
  return (
    <div className = {`${s.container} ${index === 1 ? s.first : index <= 3 ? s.second : ''}`}>
      <div className = {s.containerIndex}>
      {
        index <= 3 &&
        <>
          <div className = {s.containerHexagon}>
            <HexagonIcon /> 
          </div>
          <div className = {s.containerTrophy}>
          {
            index !== 1 && <EmojiEventsIcon /> 
          }
          {
            index === 1 && <CastleIcon /> 
          }
          </div>
        </>
      }
        <span className = {s.spanIndex}>{index}</span>
      </div>
      <StarsIcon avatar = {avatar} nickname = {nickname} />
      <span className = {s.spanNickname}>{nickname}</span>
      <span className = {s.spanId}>{id}</span>
      <span className = {`${s.spanStatus} ${s[status]}`}>{status}</span>
      <span className = {s.spanRanking}>{ranking} pts</span>
    </div>
  );
}