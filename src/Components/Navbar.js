import React, { useState, useContext } from 'react'
import ReactDOM from 'react-dom'
import { NavbarBrand, NavItem } from 'reactstrap'
import './Navbar.css'
import Menu from './Menu'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/auth-context'
import Logo from '../images/Logo.png'
import Nodal from './Nodal'
const Navbar = () => {

	const [drawerIsOpen, setDrawerIsOpen] = useState(false)
	const auth = useContext(AuthContext)

	const openDrawer = () => {

		setDrawerIsOpen(!drawerIsOpen)
	}

	const closeDrawer = () => {

		setDrawerIsOpen(false)
	}

	const token = localStorage.getItem("token")

	const content = (
		<nav
			className='fixed navbar navbar-expand-md navbar-light bg-light p-1 d-flex align-items-center justify-content-between'
			style={{ height: '65px' }}>
			<NavLink className='navbar-brand' to='/' onClick={closeDrawer}>
				<img src={Logo} style={{ width: '150px' }} alt='Logo' />
			</NavLink>
			<button className='navbar-toggler' onClick={openDrawer}>
				<span className='navbar-toggler-icon'></span>
			</button>

			<ul className='d-none d-md-flex list-unstyled m-0 align-items-center'>
				<li>
					<NavItem className='mx-3'>
						<NavLink to='/' style={{ fontWeight: 'bold' }}>
							Home
						</NavLink>
					</NavItem>
				</li>
				<li>
					{(token != null) && (
						<NavItem className='mx-3'>
							<NavLink to='/account' style={{ fontWeight: 'bold' }}>
								My Account
							</NavLink>
						</NavItem>
					)}
				</li>
				<li>
					<NavItem className='mx-3'>
						<NavLink to='/about' style={{ fontWeight: 'bold' }}>
							AboutUs
						</NavLink>
					</NavItem>
				</li>
				<li>
					<NavItem className='mx-3'>
						<NavLink to='/contact' style={{ fontWeight: 'bold' }}>
							ContactUs
						</NavLink>
					</NavItem>
				</li>
				<li>
					{!(token != null) && (
						<NavItem className='mx-3'>
							<NavLink to='/login' style={{ fontWeight: 'bold' }}>
								Login
							</NavLink>
						</NavItem>
					)}
				</li>
				<li>
					{!(token != null) && (
						<NavItem className='mx-3 text-dark'>
							<NavLink to='/register' style={{ fontWeight: 'bold' }}>
								SignUp
							</NavLink>
						</NavItem>
					)}
				</li>
				{(token != null) && <Nodal />}
			</ul>

			{drawerIsOpen && <Menu onLinkClick={closeDrawer} drawer={openDrawer} />}
		</nav>
	)

	return ReactDOM.createPortal(content, document.getElementById('navbar'))
}

export default Navbar
