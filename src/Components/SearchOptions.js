import React, { useState, useContext, useEffect } from 'react'
import {
	Nav,
	NavItem,
	NavbarBrand,
	Navbar,
	ButtonDropdown,
	DropdownMenu,
	DropdownToggle,
	DropdownItem,
	Button,
	Container,
	NavbarToggler,
	Collapse,
} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/auth-context'
import './SearchOptions.css'

const SearchOptions = () => {
	let searchFilter = JSON.parse(localStorage.getItem('filter'))
	const auth = useContext(AuthContext)
	const [isOpen] = useState(false)
	const [dropdownOpen, setOpen] = useState(false)
	const toggle = () => setOpen(!dropdownOpen)

	const [fields, setFields] = useState({
		city: '',
		docName: '',
		specialisation: '',
	})
	const textChangeHandler = (event) => {
		const value = event.target.value
		setFields({
			...fields,
			[event.target.name]: value,
		})
		// auth.city = fields.city
		// auth.docName = fields.docName
		// auth.specialisation = fields.specialisation
		const name = event.target.name
		auth[name] = value
		searchFilter[name] = value
		localStorage.setItem('filter', JSON.stringify(searchFilter))
	}

	return (
		// <Container>
		//         <h2 style={{ color: 'rgb(71,123,117)', fontWeight: 'bold' }}>Search For Doctors</h2>
		//         <input type='text' placeholder='Type Something' style={{ width: '50%' }} />
		//         <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
		//             <DropdownToggle caret color='success' style={{ marginLeft: '40px' }}>
		//                 Specialities
		//             </DropdownToggle>
		//             <DropdownMenu>
		//                 <DropdownItem>Surgeon</DropdownItem>
		//                 <DropdownItem>Cardiologist</DropdownItem>
		//                 <DropdownItem>Neurologist</DropdownItem>
		//                 <DropdownItem>Orthopedics</DropdownItem>
		//                 <DropdownItem>Radiologist</DropdownItem>
		//             </DropdownMenu>
		//         </ButtonDropdown>
		//         <Button color="primary">Search</Button>
		//     </Container>

		<div class='section'>
			<div></div>
			<div class='form-container jumbotron  '>
				<div class='row align-items-center justify-content-center'>
					<div class=' mb-1 searchLocName'>
						<select
							name='city'
							onChange={textChangeHandler}
							class='form-control form-control-lg'>
							<option value=''> Location </option>
							<option value='ranchi'> Ranchi </option>
							<option value='dhanbad'> Dhanbad </option>
							<option value='jamshedpur'> Jamshedpur </option>
							<option value='bokaro'> Bokaro </option>
							<option value='deogarh'> Deogarh </option>
							<option value='ramgarh'> Ramgarh </option>
							<option value='giridih'> Giridih </option>
							<option value='hazaribagh'> Hazaribagh </option>
						</select>
					</div>
					<div className=' mb-1 searchLocName'>
						<input
							name='name'
							onChange={textChangeHandler}
							type='text'
							class='form-control form-control-lg'
							placeholder='Doctor Name'
						/>
					</div>
					<div className=' mb-1 searchSpe'>
						<select
							name='specialisation'
							onChange={textChangeHandler}
							class='form-control form-control-lg'>
							<option value=''>Specialist</option>
							<option value='General Physician'>General Physician</option>
							<option value='Cardiology'>Cardiology</option>
							<option value='Child Specialist'>Child Specialist</option>
							<option value='General Surgeon'>General Surgeon</option>
							<option value='Dental'>Dental</option>
							<option value='Nephrology'>Nephrology</option>
							<option value='Gynaecologist'>Gynaecologist</option>
							<option value='Skin and Hair'>Skin and Hair</option>
							<option value='Bones and Joints'>Bones and Joints</option>
							<option value='Eye Specialist'>Eye Specialist</option>
						</select>
					</div>
					<div className='mb-1 searchbtn  btn-info form-control-lg '>
						<NavLink to='search' className='text-white text-decoration-none'>
							Search
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SearchOptions
