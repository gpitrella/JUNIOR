import React from 'react';
import s from './SidebarTitle.module.css';

export default function SidebarTitle({ title }) {  
  return (
    <div className = {s.containerTitle}>    
      <div className = {s.separator}></div>
      <h3 className = {s.title}>{title}</h3>
      <div className = {s.separator}></div>
    </div>
  )
}