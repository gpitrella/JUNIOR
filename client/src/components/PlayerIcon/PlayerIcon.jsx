import React from 'react';
import ImageLoader from '../ImageLoader/ImageLoader';

import s from './PlayerIcon.module.css';

export default function PlayerIcon({ avatar, nickname, minimize = true, showNickName = false, handleClick = null }) {
  return (
    <div className = {s.container}>
      <div className = {`${s.spanNickname} ${showNickName ? s.showNickName : ''}`}>{`Logged as ${nickname}`}</div>
      <div id="playerIcon" className = {`${s.containerAvatar} ${!minimize ? s.large : ''} ${handleClick ? s.clickable : ''}`} onClick = {handleClick}>
        <ImageLoader image = {avatar} alt = {nickname} />
      </div>
    </div>
  );
}