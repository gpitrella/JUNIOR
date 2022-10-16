import React from 'react';
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import './Footer.scss';

export default function Footer() {
	return (
        <div>
        <div id="horizon">
            <div className="glow"></div>
        </div>
        <div id="earth">
        </div>
            <div id="footer_link">
                 <div id="footer_main_links">
                    <div className="footer_leftside">
                        <h4 className='title_footer_leftside'>Main Pages</h4>
                        <Link to='/'><h5>Landing Page</h5></Link>
                        <Link to='/home'><h5>Home</h5></Link>
                        <Link to='/projects'><h5>Proyectos</h5></Link>
                        <Link to='/halloffame'><h5>Usuarios</h5></Link>
                        <Link to='/tools'><h5>Herramientas</h5></Link>
                    </div>
                    <a href="#home"><img src={logo} alt="logo Junior footer" /></a>
                    <div className="footer_leftside">
                        <h4 className='title_footer_leftside'>Links</h4>
                        <Link to='/contactus'><h5>Contacto</h5></Link>
                        <Link to='/login'><h5>Login</h5></Link>
                        <Link to='/about'><h5>Sobre JR</h5></Link>
                    </div>
                </div>
                <div className="footer_copyrigth">
                    <p>Copyright © 2022 JUNIOR, All rights reserved.</p>
                </div>
            </div>
        </div>
	)
};