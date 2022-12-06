import React from 'react';

import s from './ModalPickOption.module.css';

export default function ModalPickOption({ name, style, values, show, handleClose, handlePickOption }) {
  return (
    <>
      <div className = {`${name === 'tech' ? s.optionDropdown : ''} ${s.containerOptions} ${show ? s.showOptions : ''} ${style} ${values.includes("Español" || "English" || "Italiano") ? s.optionFlags : ''}`}>
      {
        values && values.length > 0 && values.map((value, index) => 
          <span 
            className = {s.selectOption}
            onClick = {() => handlePickOption(value)}
            key = {`select-option-${value}-${index}`}
          >          
            {
              value === "Español"
                  ? <img src="https://flagcdn.com/w40/es.webp" alt='flag spanish'/>
                  : value === "English"
                      ? <img src="https://flagcdn.com/w40/gb-eng.webp" alt='flag english'/>
                      : value === "Italiano"
                          ? <img src="https://flagcdn.com/w40/it.webp" alt='flag italy' />
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