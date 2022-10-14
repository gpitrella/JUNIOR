import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { openMessageMustLogin } from '../../redux/actions/generalActions';

import s from './SectionLink.module.css';

export default function SectionLink({ title, path, icon, showVertical }) {

  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.homepageReducer);

  let isActive = function() {
    return location.pathname === path;
  }

  function handleOpenMessageLogin() {
    dispatch(openMessageMustLogin({ open: true, msg: 1 }));
  }


  return (
    <>
      { !user.user 
          ? <span onClick={handleOpenMessageLogin} style = {{textDecoration: 'none'}}>
              <div className = {`${s.containerLink} ${isActive() ? s.isActive : ''} ${showVertical ? s.verticalLink : ''}`}>
                <img src={icon} alt='rocket Project' className={s.styleIconRocket} />
                <h4 className = {s.label}>{title}</h4>
              </div>
            </span>
          : <Link to = {path} style = {{textDecoration: 'none'}}>
              <div className = {`${s.containerLink} ${isActive() ? s.isActive : ''} ${showVertical ? s.verticalLink : ''}`}>
                <img src={icon} alt='rocket Project' className={s.styleIconRocket} />
                <h4 className = {s.label}>{title}</h4>
              </div>
            </Link>
      }    
    
    </>
  );
}