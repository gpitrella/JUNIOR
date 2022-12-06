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
    <div className = {`${valueSelected === "ES" || valueSelected === "EN" || valueSelected === "IT" ? s.containerGlobalFlag : s.containerGlobal}`}>
      <div className = {`${s.container} ${valueSelected === "ES" || valueSelected === "EN" || valueSelected === "IT" ? s.optionFlagsContainer : ''}`} onClick = {handleOpenSelect}>
        <div className = {`${s.selectSelectedZone} ${valueSelected === "ES" || valueSelected === "EN" || valueSelected === "IT" ? s.optionFlags : ''}`}>
          <span className = {s.selectSelected}>
            { valueSelected === "ES"
                  ? <img src="https://flagcdn.com/w40/es.webp" alt='flag spanish' width="25px"/>
                  : valueSelected === "EN"
                      ? <img src="https://flagcdn.com/w40/gb-eng.webp" alt='flag EN' width="25px"/>
                      : valueSelected === "IT"
                          ? <img src="https://flagcdn.com/w40/it.webp" alt='flag italy' width="25px"/>
                          : valueSelected
            }          
          </span>
          <div className = {`${s.triangle} ${showOptions ? s.open : ''}`}></div>
        </div>
      </div>
      <ModalPickOption 
        name = { name }
        style = {`${valueSelected === "ES" || valueSelected === "EN" || valueSelected === "IT" ? s.modalPickOptionStyleFlag : s.modalPickOptionStyle}`}
        values = {values}
        show = {showOptions}
        handleClose = {handleOpenSelect}
        handlePickOption = {handlePickOption}
      />
    </div>
  );
}