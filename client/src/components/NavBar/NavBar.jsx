import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
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

const SignBtns = ({handleSignOut, user}) => {
	
	return (
		<>
			{!user.user 
				? (<Link to="/login" className="links_profile_user">
						<button className="btn" type="button">LogIn</button>
            		</Link>)
				: ( <>
						<p>Bienvenido {user?.user?.name}</p>
						<button className="btn" type="button" onClick={(e) => handleSignOut(e)}>LogOut</button>
				  	</>)
			}
	
		</>
)}

/**
 * Navigation bar
 * @return {element} App navigation bar
 */
export default function Navbar ({ handleSignOut }) {
	const [toggleMenu, setToggleMenu] = useState(false) // Use for controll the mini menu
	const [stickyNavbar, setStickyNavbar] = useState(false)
	const { user } = useSelector((state) => state.homepageReducer);
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
				<SignBtns handleSignOut={handleSignOut} user={user}/>
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