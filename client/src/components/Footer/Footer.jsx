import React from 'react';
import './Footer.scss';
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
        <div>
        <div id="horizon">
            <div className="glow"></div>
        </div>
        <div id="earth">
        </div>
            <div id="footer_link">
                <div id="subtitle">
                    <span>
                        LISTO <span></span>
                    </span>
                    <span>
                        PARA <span></span>
                    </span>
                    <span>
                        EMPEZAR
                    </span>
                </div>
                <div id="footer_main_links">
                    <Link to='/contactus'><h5>Contacto</h5></Link>
                    <Link to='/projects'><h5>Proyectos</h5></Link>
                    <a href="#home"><img src={logo} alt="logo Junior footer" /></a>
                    <Link to='/tools'><h5>Herramientas</h5></Link>
                    <Link to='/about'><h5>Sobre JR</h5></Link>
                </div>
            </div>
        </div>
	)
};
