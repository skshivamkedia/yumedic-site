import React, { Fragment, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import Doctor from '../images/Doctor.png'
import Btn from './Button'
import DT from '../Components/DT'
import { AuthContext } from '../context/auth-context'

const Booking = (props) => {
	const locality = {
		color: 'rgb(150,150,150)',
		fontSize: '1.1em',
	}

	const auth = useContext(AuthContext)

	const onBookingSelect = () => {
		auth.docId = props.docId
		auth.hospitalId = props.hospitalId
		console.log(`docId${auth.docId} hospitalId${auth.hospitalId}`)
		auth.cost = props.fee
		const doctorSelected = {
			docId: props.docId,
			hospitalId: props.hospitalId,
			cost: props.fee,
			docName: props.dName,
		}
		localStorage.setItem('docSelected', JSON.stringify(doctorSelected))
	}


	return (
		<Fragment>
			<div className='d-flex align-items-center m-2 rounded p-2 bg-white'>
				<div>
					<img
						src={props.photo}
						alt='Doctor'
						style={{ width: '100px', borderRadius: '50%' }}
					/>
				</div>
				<div>
					<p className='m-0'>{props.dName} </p>
					<p className='d-block m-0'> {props.speciality} </p>
					<p
						className='d-inline-block rounded m-0 '
						style={{ fontWeight: '500' }}>
						Fee {props.fee}
					</p>
					<p className='m-0'>
						{props.hospitalName} {props.city}
					</p>
					{/* <p className='m-0'>
						{props.avgReviews}({props.numberReviews})
					</p> */}
					{/* <p> {props.description} </p> */}
					{/* <p
						className='m-0'
						style={{ color: 'rgb(71,123,117)', textAlign: 'center' }}>
						View all Availability & emsp; & emsp; View Profile
					</p> */}
				</div>
				<NavLink
					to='/booking'
					onClick={onBookingSelect}
					className='bg-primary btn align-self-end m-0 text-light'
					style={{ position: 'absolute', right: '15px' }}>
					Next
				</NavLink>
				{/* <DT /> */}
			</div>
		</Fragment>
	)
}

export default Booking
