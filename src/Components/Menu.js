import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/auth-context'
import { NavItem } from 'reactstrap'
import Nodal from './Nodal'
import './Menu.css'

const Menu = (props) => {
	const auth = useContext(AuthContext)
	console.log(props)
	window.onscroll = () => {
		props.onLinkClick()
	}

	const menu = (
		<div
			id='navbarMenu'
			className='p-3 text-light d-flex align-items-stretch justify-content-between'>
			<ul
				className='navbar-nav ml-auto mr-auto justify-content-between text-center align-items-stretch'
				style={{ minHeight: '100%' }}>
				{auth.isLoggedIn && (
					<NavItem>
						<NavLink
							to='/account'
							onClick={props.onLinkClick}
							style={{ fontWeight: 'bold' }}>
							My Account
						</NavLink>
					</NavItem>
				)}
				<NavItem>
					<NavLink
						to='/contact'
						onClick={props.onLinkClick}
						style={{ fontWeight: 'bold' }}>
						ContactUs
					</NavLink>
				</NavItem>
				{!auth.isLoggedIn && (
					<NavItem>
						<NavLink
							to='/login'
							onClick={props.onLinkClick}
							style={{ fontWeight: 'bold' }}>
							Login
						</NavLink>
					</NavItem>
				)}
				{!auth.isLoggedIn && (
					<NavItem>
						<NavLink
							to='/register'
							onClick={props.onLinkClick}
							style={{ fontWeight: 'bold' }}>
							SignUp
						</NavLink>
					</NavItem>
				)}
				<NavItem>
					<NavLink
						to='/about'
						onClick={props.onLinkClick}
						style={{ fontWeight: 'bold' }}>
						AboutUs and ContactUs
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						to='/faqs'
						onClick={props.onLinkClick}
						style={{ fontWeight: 'bold' }}>
						FAQs
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						to='/refunds'
						onClick={props.onLinkClick}
						style={{ fontWeight: 'bold' }}>
						Refunds & Cancellations
					</NavLink>
				</NavItem>

				{auth.isLoggedIn && <Nodal onLinkClick={props.onLinkClick} />}
			</ul>
		</div>
	)

	return ReactDOM.createPortal(menu, document.getElementById('menu'))
}

export default Menu
