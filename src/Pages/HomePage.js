import React, { useContext, useEffect } from 'react'
import Testimonials from '../Components/Carousel'
import Specialities from '../Components/Specialities'
import Hospitals from '../Components/Hospitals'
import SearchOptions from '../Components/SearchOptions'

import Doctor from '../Components/Doctor'
// import './App.css';
import Download from '../Components/Download'
import { Container, Row } from 'reactstrap'

import Bones from '../images/Bones and Joints.png'
import Cardiology from '../images/Cardilogy.png'
import Child from '../images/Child Specialist.png'
import Dental from '../images/Dental.png'
import Eye from '../images/Eye Specialist.png'
import Physician from '../images/General Physician.png'
import Gynae from '../images/Gynaecologist.png'
import Neurology from '../images/Neurology.png'
import Skin from '../images/Skin and Hair.png'
import Surgeon from '../images/Surgeon.png'
import { NavLink } from 'react-router-dom'
import moment from 'moment'
import { AuthContext } from '../context/auth-context'

function HomePage(props) {
	const auth = useContext(AuthContext)
	console.log(auth)
	try {
		const token = props.match.params.token
		const uid = props.match.params.id

		localStorage.setItem('token', token)
		localStorage.setItem('uid', uid)
		auth.login(uid, token)
	} catch (error) {
		console.log(error)
	}

	auth.docId = null
	auth.city = null
	auth.hospitalId = null
	auth.specialisation = null
	auth.name = null
	auth.date = moment().format('MM/DD/YYYY')
	auth.time = null


	let searchFilter = JSON.parse(localStorage.getItem("filter"))
	if (searchFilter == null)
		searchFilter = {}

	const setSpecialisation = (event) => {
		auth.setValueFunc("specialisation", event.target.name)
		auth.setValueFunc("hospitalId", null)
		searchFilter.hospitalId = null
		searchFilter.specialisation = event.target.name
		localStorage.setItem('filter', JSON.stringify(searchFilter))
	}

	const setHospital = (event) => {
		auth.values.hospitalId = event.target.name
		auth.values.specialisation = null
		searchFilter.specialisation = null
		searchFilter.hospitalId = event.target.id
		localStorage.setItem('filter', JSON.stringify(searchFilter))
	}

	const styleSpecialities = {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		marginBottom: '34px',
		textAlign: 'center',
	}

	const styleHospitals = {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		marginBottom: '34px',
	}

	return (
		<div>
			<SearchOptions />

			<Container>
				<h3 style={{ color: 'rgb(71,123,117)', fontWeight: 'bold' }}>
					Search by Specialities
				</h3>
			</Container>
			<br />
			<Container style={styleSpecialities}>
				<Row className='justify-content-center'>
					<div className='text-center' name='General Physician'>
						<NavLink
							className='text-decoration-none'
							to='/search'
							onClick={setSpecialisation}
							name='General Physician'>
							<Specialities
								name='General Physician'
								spe='General Physician'
								img={Physician}
							/>
						</NavLink>
					</div>
					<div className='text-center' name='Cardiology'>
						<NavLink
							className='text-decoration-none'
							to='/search'
							onClick={setSpecialisation}
							name='Cardiology'>
							<Specialities
								name='Cardiology'
								spe='Cardiology'
								img={Cardiology}
							/>
						</NavLink>
					</div>
					<div className='text-center' name='Child Specialist'>
						<NavLink
							className='text-decoration-none'
							to='/search'
							onClick={setSpecialisation}
							name='Child Specialist'>
							<Specialities
								name='Child Specialist'
								spe='Child Specialist'
								img={Child}
							/>
						</NavLink>
					</div>
					<div className='text-center' name='General Surgeon'>
						<NavLink
							className='text-decoration-none'
							to='/search'
							onClick={setSpecialisation}
							name='General Surgeon'>
							<Specialities
								name='General Surgeon'
								spe='General Surgeon'
								img={Surgeon}
							/>
						</NavLink>
					</div>
					<div className='text-center' name='Dental'>
						<NavLink
							className='text-decoration-none'
							to='/search'
							onClick={setSpecialisation}
							name='Dental'>
							<Specialities name='Dental' spe='Dental' img={Dental} />
						</NavLink>
					</div>
					<div className='text-center' name='Nephrology'>
						<NavLink
							className='text-decoration-none'
							to='/search'
							onClick={setSpecialisation}
							name='Nephrology'>
							<Specialities
								name='Nephrology'
								spe='Nephrology'
								img={Neurology}
							/>
						</NavLink>
					</div>
					<div className='text-center' name='Gynaecologist'>
						<NavLink
							className='text-decoration-none'
							to='/search'
							onClick={setSpecialisation}
							name='Gynaecologist'>
							<Specialities
								name='Gynaecologist'
								spe='Gynaecologist'
								img={Gynae}
							/>
						</NavLink>
					</div>
					<div className='text-center' name='Skin and Hair'>
						<NavLink
							className='text-decoration-none'
							to='/search'
							onClick={setSpecialisation}
							name='Skin and Hair'>
							<Specialities
								name='Skin and Hair'
								spe='Skin and Hair'
								img={Skin}
							/>
						</NavLink>
					</div>
					<div className='text-center' name='Bones and Joints'>
						<NavLink
							className='text-decoration-none'
							to='/search'
							onClick={setSpecialisation}
							name='Bones and Joints'>
							<Specialities
								name='Bones and Joints'
								spe='Bones and Joints'
								img={Bones}
							/>
						</NavLink>
					</div>
					<div className='text-center' name='Eye Specialist'>
						<NavLink
							className='text-decoration-none'
							to='/search'
							onClick={setSpecialisation}
							name='Eye Specialist'>
							<Specialities
								name='Eye Specialist'
								spe='Eye Specialist'
								img={Eye}
							/>
						</NavLink>
					</div>
				</Row>
			</Container>
			<br />
			<Container>
				<h3 style={{ color: 'rgb(71,123,117)', fontWeight: 'bold' }}>
					Search by Hospitals
				</h3>
			</Container>
			<div style={styleHospitals}>
				<div className='text-center' id='5f43f5a86e2fc1623cda5cf0'>
					<NavLink
						className='text-decoration-none'
						to='/search'
						onClick={setHospital}
						id='5f43f5a86e2fc1623cda5cf0'>
						<Hospitals
							id='5f43f5a86e2fc1623cda5cf0'
							name='Asarfi Hospital'
							img={Physician}
						/>
					</NavLink>
				</div>
				<div className='text-center' id='5f43f5a86e2fc1623cda5cf1'>
					<NavLink
						className='text-decoration-none'
						to='/search'
						onClick={setHospital}
						id='5f43f5a86e2fc1623cda5cf1'>
						<Hospitals
							id='5f43f5a86e2fc1623cda5cf1'
							name='PatliPutra Hospital'
							img={Skin}
						/>
					</NavLink>
				</div>
				<div className='text-center' id='5f43f5a86e2fc1623cda5cf2'>
					<NavLink
						className='text-decoration-none'
						to='/search'
						onClick={setHospital}
						id='5f43f5a86e2fc1623cda5cf2'>
						<Hospitals
							id='5f43f5a86e2fc1623cda5cf2'
							name='Pragati Hospital'
							img={Skin}
						/>
					</NavLink>
				</div>
				<div className='text-center' name=''>
					<NavLink
						className='text-decoration-none'
						to='/search'
						onClick={setHospital}
						name=''>
						<Hospitals name='Alom Hospital' img={Bones} />
					</NavLink>
				</div>
				<div className='text-center' name=''>
					<NavLink
						className='text-decoration-none'
						to='/search'
						onClick={setHospital}
						name=''>
						<Hospitals name='Contacare Eyes Hospital' img={Neurology} />
					</NavLink>
				</div>
			</div>
			<Testimonials />
			<Doctor />
			<Download />
		</div>
	)
}

export default HomePage
