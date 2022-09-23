import React from 'react';

import s from './GeneralModal.module.css';

export default function GeneralModal({ confirm = false, handleConfirm, cancel = false, handleCancel, title, content, 
  disableConfirm = false, disableAll = false }) {
  return (
    <div className = {s.globalContainer}>
      <div className = {s.container}>

        <div className = {s.banner}>
          <label className = {s.title}>{title}</label>
          {
            cancel && <label className = {s.btnClose} onClick = {handleCancel}>X</label>
          }
        </div>

        <div className = {s.mainZone}>
          {content}
        </div>

        <div className = {s.options}>
          {
            cancel && <button className = {s.btn} onClick = {handleCancel} disabled = {disableAll}>Cancel</button>
          }
          {
            confirm && 
            <button className = {s.btn} onClick = {handleConfirm} disabled = {disableAll || disableConfirm}>
              Confirm
            </button>
          }
        </div>
      </div>
    </div>
  );
}