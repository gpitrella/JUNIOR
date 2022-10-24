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
      <div className = {s.container} onClick = {handleOpenSelect}>
        <div className = {s.selectSelectedZone}>
          <span className = {s.selectSelected}>{valueSelected}</span>
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