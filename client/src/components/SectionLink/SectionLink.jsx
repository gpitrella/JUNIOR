import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import s from './SectionLink.module.css';

export default function SectionLink({ title, path, icon, showVertical }) {

  const location = useLocation();

  let isActive = function() {
    return location.pathname === path;
  }

  return (
    <Link to = {path} style = {{textDecoration: 'none'}}>
      <div className = {`${s.containerLink} ${isActive() ? s.isActive : ''} ${showVertical ? s.verticalLink : ''}`}>
        { icon({ style: s.styleSVG }) }
        <h4 className = {s.label}>{title}</h4>
      </div>
    </Link>
  );
}