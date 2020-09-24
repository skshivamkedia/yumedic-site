import React, { useContext } from 'react'
import { Container, Col, Row, Button } from 'reactstrap'
import MobileStoreButton from 'react-mobile-store-button'
import moment from 'moment'
import { AuthContext } from '../context/auth-context'

import { NavLink } from 'react-router-dom'
const Footer = () => {
	const auth = useContext(AuthContext)

	let searchFilter = JSON.parse(localStorage.getItem("filter"))
	if (searchFilter == null)
		searchFilter = {}



	const setSpecialisation = (event) => {
		auth.setValueFunc("specialisation", event.target.name)
		searchFilter.hospitalId = null
		searchFilter.specialisation = event.target.name
		console.log(searchFilter)
		localStorage.setItem('filter', JSON.stringify(searchFilter))
	}







	const buttons = {
		height: '50px',
	}

	const list = {
		listStyle: 'none',
	}

	const style = {
		color: 'white',
		backgroundColor: 'rgb(0,19,51)',
		paddingTop: '30px',
	}

	const playstoreLink =
		'https://play.google.com/store/apps/details?id=io.yu.medic&hl=en_IN'

	return (
		<div style={style}>
			<Container>
				<Row>
					<Col className='p-0'>
						<ul style={list}>
							<li>
								<h5 style={{ fontWeight: 'bold' }}>YuMedic</h5>
							</li>
							<li>
								<NavLink to='/'>Home</NavLink>
							</li>
							<li>
								<NavLink to='/about'>About Us</NavLink>
							</li>

							<li>
								<NavLink to='/contact'>Contact Us</NavLink>
							</li>
						</ul>
					</Col>
					<Col className='p-0'>
						<ul style={list}>
							<li>
								<h5 style={{ fontWeight: 'bold' }}>Top Specialities</h5>
							</li>
							<li>
								<NavLink
									to='/search'
									onClick={setSpecialisation}
									name='General Physician'>
									General Physician
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/search'
									onClick={setSpecialisation}
									name='Cardiology'>
									Cardiology
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/search'
									onClick={setSpecialisation}
									name='Child Specialist'>
									Child Specialities
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/search'
									onClick={setSpecialisation}
									name='General Surgeon'>
									Surgeon
								</NavLink>
							</li>
							<li>
								<NavLink to='/search' onClick={setSpecialisation} name='Dental'>
									Dental
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/search'
									onClick={setSpecialisation}
									name='Gynaecologist'>
									Gynaecologist
								</NavLink>
							</li>
						</ul>
					</Col>
					<Col className='p-0'>
						<ul style={list}>
							<li>
								<h5 style={{ fontWeight: 'bold' }}>Get On Board</h5>
							</li>
							<li>I am a Doctor</li>
							<li>We are a Hospital</li>
							<li className='d-none d-lg-block'>
								<MobileStoreButton
									store='android'
									url={playstoreLink}
									linkProps={{ title: 'Android Store Button' }}
									style={buttons}
								/>
							</li>
							<li className='d-none d-lg-block'>
								<input
									type='number'
									placeholder='+91 9999999999'
									style={{ borderRadius: '4px' }}
									className='inputField'
								/>{' '}
								<Button style={{ height: '34px' }} className='inputButton'>
									Send
								</Button>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
			<div
				style={{
					backgroundColor: 'black',
					color: 'white',
					textAlign: 'center',
					height: '52px',
				}}>
				Copyright YuMedic 2020
			</div>
			<div>
				<a href='https://www.facebook.com/yumedic1/' style={{ fontSize: "28px" }}>
					<i class='fab fa-facebook'></i>
				</a>
				<a href='https://www.facebook.com/yumedic1/' style={{ fontSize: "28px" }}>
					<i class='fab fa-facebook'></i>
				</a>
				<a href='https://www.facebook.com/yumedic1/' style={{ fontSize: "28px" }}>
					<i class='fab fa-facebook'></i>
				</a>
			</div>
		</div>
	)
}

export default Footer
