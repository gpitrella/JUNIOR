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
                    <h5>Contacto</h5>
                    <h5>Proyectos</h5>
                    <img src={logo} alt="logo Junior footer" />
                    <h5>Finalizados</h5>
                    <Link to='/about'><h5>About JR</h5></Link>
                </div>
            </div>
        </div>
	)
};
