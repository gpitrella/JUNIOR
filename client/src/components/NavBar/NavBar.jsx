import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

import './NavBar.css'
// import logo from '../assets/logo.svg'
import logo from '../../assets/Logo-JR.jpg'

/**
 * Menu where site links are
 * @return {element} site links  
 */
const Menu = () => (
	<>
		<p><a href="#home">Home</a></p>
		<p><a href="#wgpt3">Proyectos</a></p>
		<p><a href="#features">Finalizados</a></p>
		{/* <p><a href="#possibility">Open AI</a></p>
		<p><a href="#blog">Library</a></p> */}
	</>
)

/**
 * Buttons for simulate signs functionalities
 * @return {element} Sign buttons 
 */
const SignBtns = () => (
	<>
		<p>Sign in</p>
		<button className="btn" type="button">Sign up</button>
	</>
)

/**
 * Navigation bar
 * @return {element} App navigation bar
 */
const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false) // Use for controll the mini menu

	return (
		<div className="gpt3__navbar">
			<div className="gpt3__navbar-links">
				<div className="gpt3__navbar-links_logo">
					<img src={logo} alt="GPT3 logo" />
				</div>
				<div className="navbar-links_main_container">
					<div className="gpt3__navbar-links_container">
						<Menu />
					</div>
				</div>
			</div>

			<div className="gpt3__navbar-sign">
				<SignBtns />
			</div>

			<div className="gpt3__navbar-menu">
				{/* Choose when and how to show the mini menu */}
				{toggleMenu
					? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
					: <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
				}
				{toggleMenu && (
					<div className="gpt3__navbar-menu_container scale-up-center">
						<div className="gpt3__navbar-menu_container-links">
							<Menu />
						</div>

						<div className="gpt3__navbar-menu_container-links-sign">
							<SignBtns />
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Navbar