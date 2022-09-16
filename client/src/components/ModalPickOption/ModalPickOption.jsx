import React from 'react';

import s from './ModalPickOption.module.css';

export default function ModalPickOption({ style, values, show, handleClose, handlePickOption }) {
  return (
    <>
      <div className = {`${s.containerOptions} ${show ? s.showOptions : ''} ${style}`}>
      {
        values && values.length > 0 && values.map((value, index) => 
          <span
            className = {s.selectOption}
            onClick = {() => handlePickOption(value)}
            key = {`select-option-${value}-${index}`}
          >
            {value}
          </span>
        )
      }
      </div>
      {
        show &&
        <div className = {s.helperCloseOptions} onClick = {handleClose}></div>
      }
    </>
  );
}