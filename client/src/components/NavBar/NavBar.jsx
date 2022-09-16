import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../assets/logo.png';



const Menu = () => {
	return (
		<>
			<Link to='/projects'><p>Proyectos</p></Link>
			<p><a href="#features">About JR</a></p>
			{/* <p><a href="#possibility">Open AI</a></p>
			<p><a href="#blog">Library</a></p> */}
		</>
)}

const SignBtns = () => {
	return (
		<>
			<p>Bienvenido</p>
			<button className="btn" type="button">Login</button>
		</>
)}

/**
 * Navigation bar
 * @return {element} App navigation bar
 */
const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false) // Use for controll the mini menu
	const [stickyNavbar, setStickyNavbar] = useState(false)

	window.onscroll = function() {scrollFunction()};
	function scrollFunction() {
		if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
			setStickyNavbar(true);
		} else {
			setStickyNavbar(false);
		}
	  }

	return (
		<div className={ stickyNavbar ? "navbarSticky" : "navbar" }>
			<div className="navbar-links_logo">
				<Link to='/home'>
					<img src={logo} id="logoNavbar" alt="Logo Junior" />
				</Link>
			</div>
			<div className="navbar-links">
				<div className="navbar-links_main_container">
					<div className="navbar-links_container">
						<Menu />
					</div>
				</div>
			</div>

			<div className="navbar-sign">
				<SignBtns />
			</div>

			<div className="navbar-menu">
				{/* Choose when and how to show the mini menu */}
				{toggleMenu
					? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
					: <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
				}
				{toggleMenu && (
					<div className="navbar-menu_container scale-up-center">
						<div className="navbar-menu_container-links">
							<Menu />
						</div>

						<div className="navbar-menu_container-links-sign">
							<SignBtns />
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Navbar