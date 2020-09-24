import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'

const SuccessPage = () => {
	return (
		<div className='text-center'>
			<h2> Thank you for Choosing Us! </h2>
			<NavLink
				to='/account'
				className='border rounded m-3 '
				style={{ backgroundColor: '#1B1B30', color: 'white' }}>
				See Appointment Details
			</NavLink>
			<h3> YuMedic </h3>
			<p className='m-1'> Wishes You and Your Family Good Health </p>
			<p className='m-1'> Get Well Soon! </p>
			<div className='d-flex justify-content-center'>
				<img
					src='https://i.ibb.co/hFJnBtL/download.jpg'
					style={{ height: '100px', margin: '10px', marginRight: '50px' }}
				/>
				<img
					src='https://i.ibb.co/hFJnBtL/download.jpg'
					style={{ height: '100px', margin: '10px', marginLeft: '50px' }}
				/>
			</div>
		</div>
	)
}

export default SuccessPage
