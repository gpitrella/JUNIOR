import React from 'react';

import s from './ModalPickOption.module.css';

export default function ModalPickOption({ name, style, values, show, handleClose, handlePickOption }) {
  return (
    <>
      <div className = {`${name === 'tech' ? s.optionDropdown : ''} ${s.containerOptions} ${show ? s.showOptions : ''} ${style} ${values.includes("ES" || "EN" || "IT") ? s.optionFlags : ''}`}>
      {
        values && values.length > 0 && values.map((value, index) => 
          <span 
            className = {s.selectOption}
            onClick = {() => handlePickOption(value)}
            key = {`select-option-${value}-${index}`}
          >          
            {
              value === "ES"
                  ? <img src="https://flagcdn.com/w40/es.webp" alt='flag spanish' width="90%"/>
                  : value === "EN"
                      ? <img src="https://flagcdn.com/w40/gb-eng.webp" alt='flag english' width="90%"/>
                      : value === "IT"
                          ? <img src="https://flagcdn.com/w40/it.webp" alt='flag italy' width="90%"/>
                          : value
              }          
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