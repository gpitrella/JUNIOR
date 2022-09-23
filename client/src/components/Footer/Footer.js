import React from 'react';
import './Footer.scss';
import logo from "../../assets/logo.png"

/**
 * Features of GPT3
 * @return {element} a component that shows GPT3 features
 */
const Footer = () => {
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
                    <h5>Nosotros</h5>
                </div>
            </div>
        </div>
	)
}

export default Footer;
