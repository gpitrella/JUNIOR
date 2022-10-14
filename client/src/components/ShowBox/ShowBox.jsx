import React from 'react';
import Loading from '../SVG/Loading';
import NotFound from '../SVG/NotFound';
import Retry from '../SVG/Retry';

import s from './ShowBox.module.css';

export default function ShowBox({ type, message = "Loading", retryCB = null }) {
  return (
    <div className = {s.container}>
      <div className = {s[type]} onClick = {retryCB}>
      {
        type === "LOADING" &&
        <Loading />
      }
      {
        type === "NOTFOUND" &&
        <NotFound />
      }
      {
        type === "RETRY" &&
        <Retry />
      }
      </div>
      <span className = {s.spanMessage}>{message}</span>
    </div>
  );
}