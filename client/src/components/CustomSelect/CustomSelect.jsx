import React from 'react';
import ModalPickOption from '../ModalPickOption/ModalPickOption';

import s from './CustomSelect.module.css';

export default function CustomSelect({valueSelected, values, handleValue, name, disabled}) {

  let [ showOptions, setShowOptions ] = React.useState(false);

  let handleOpenSelect = function() {
    if (!disabled) setShowOptions(!showOptions);
  }

  let handlePickOption = function(value) {
    handleValue(name, value);
    setShowOptions(false);
  }

  return (
    <div className = {s.containerGlobal}>
      <div className = {`${s.container} ${valueSelected === "Español" || valueSelected === "English" || valueSelected === "Italiano" ? s.optionFlagsContainer : ''}`} onClick = {handleOpenSelect}>
        <div className = {`${s.selectSelectedZone} ${valueSelected === "Español" || valueSelected === "English" || valueSelected === "Italiano" ? s.optionFlags : ''}`}>
          <span className = {s.selectSelected}>
            { valueSelected === "Español"
                  ? <img src="https://flagcdn.com/w40/es.webp" alt='flag spanish'/>
                  : valueSelected === "English"
                      ? <img src="https://flagcdn.com/w40/gb-eng.webp" alt='flag english'/>
                      : valueSelected === "Italiano"
                          ? <img src="https://flagcdn.com/w40/it.webp" alt='flag italy'/>
                          : valueSelected
            }          
          </span>
          <div className = {`${s.triangle} ${showOptions ? s.open : ''}`}></div>
        </div>
      </div>
      <ModalPickOption 
        name = { name }
        style = {s.modalPickOptionStyle}
        values = {values}
        show = {showOptions}
        handleClose = {handleOpenSelect}
        handlePickOption = {handlePickOption}
      />
    </div>
  );
}