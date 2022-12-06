import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './NavBar.css';
import logo from '../../assets/logo.png';
import { changeLenguage } from '../../redux/actions/generalActions.js';
import CustomSelect from '../CustomSelect/CustomSelect';

const Menu = ({handleSignOut, user}) => {
	const { lenguage } = useSelector((state) => state.homepageReducer);
	const [lenguageIn, setLenguageIn] = React.useState(lenguage);
	const dispatch = useDispatch(); 
	let handleChangeSelectLenguage = function(name, value) {
		setLenguageIn(value)
		dispatch(changeLenguage(value))
	}
	return (
		<>
			<Link to='/projects'><p>Proyectos</p></Link>
			<Link to='/about'><p>Sobre JR</p></Link>
			<Link to='/tools'><p>Herramientas</p></Link>
			<Link to='/developers'><p>Developers</p></Link>
            {user?.user && <p id='btnLogOutNavbar'><a onClick={(e) => handleSignOut(e)}>LogOut</a></p> }
			<CustomSelect
				disabled={false}
				valueSelected={lenguageIn}
				// disabled = {searchState.loading}
				// valueSelected = {searchState.orderBy}
				values = {["Español", "English", "Italiano"]}
				handleValue = {handleChangeSelectLenguage}
				name = {"lenguage"}
			/>
		</>
)}


const SignBtns = ({ user }) => {


	
	return (
		<>
			{!user?.user 
				? (<Link to="/login" className="links_profile_user">
						<button className="btn" type="button">LogIn</button>
            		</Link>)
				: ( <>
						<img src={user.user.image} alt={user?.user.name} className="imageNavbarLogin"/>
						<Link to="/miperfil" className="links_profile_user">
							<button className="btn" type="button">Mi Perfil</button>
						</Link>
				  	</>)
			}
	
		</>
)}

export default function Navbar ({ handleSignOut }) {
	const [toggleMenu, setToggleMenu] = useState(false) // Use for controll the mini menu
	const [stickyNavbar, setStickyNavbar] = useState(false)
	const location = useLocation();
	const { user } = useSelector((state) => state.homepageReducer);

	// SCROLL DOWN NAVBAR
	window.onscroll = (e) => {
		e.preventDefault();
		scrollFunction()
	};
	const scrollFunction = () => {
		if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
			setStickyNavbar(true);
		} else {
			setStickyNavbar(false);
		}
	};	

	React.useEffect(() => {
		setToggleMenu(false)
	  }, [location.pathname]);
	

	return (
		<div className={ stickyNavbar ? "navbarSticky" : "navbar" } id="navbarTop">
			<div className="navbar-links_logo">
				<Link to='/home'>
					<img src={logo} id="logoNavbar" alt="Logo Junior" />
				</Link>
			</div>
			<div className="navbar-links">
				<div className="navbar-links_main_container">
					<div className="navbar-links_container">
						<Menu handleSignOut={handleSignOut} user={user}/>
					</div>
				</div>
			</div>

			<div className="navbar-sign">
				<SignBtns user={user} />
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
							<Menu handleSignOut={handleSignOut} user={user}/>
						</div>

						<div className="navbar-menu_container-links-sign">
							<SignBtns user={user}/>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}