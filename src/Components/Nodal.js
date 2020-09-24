import React, { useState, useContext } from 'react'
import { Button, NavLink } from 'reactstrap'
import Modal from './Modal'
import { AuthContext } from '../context/auth-context'
import { useHistory } from 'react-router-dom'

const Nodal = (props) => {
	const history = useHistory()
	const auth = useContext(AuthContext)
	const [show, setShow] = useState(false)

	const handleClose = () => {
		setShow(false)
		console.log('cancel')
	}
	const handleShow = () => {
		setShow(true)
		console.log('Works')
	}
	const handleLogout = () => {
		auth.isLoggedIn = false
		localStorage.clear()
		setShow(false)
		history.push('/')
		auth.logout()
	}
	return (
		<li>
			<NavLink
				className='border-0 '
				style={{ fontWeight: 'bold' }}
				onClick={handleShow}>
				Logout
			</NavLink>
			{show && <Modal onCancel={handleClose} onLogout={handleLogout} />}
		</li>
	)
}
export default Nodal
