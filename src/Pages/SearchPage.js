import React, { useContext, useEffect, useState, useCallback } from 'react'
import axios from 'axios'
// import DocCard from '../components/DocCard'
import { AuthContext } from '../context/auth-context'
import Booking from '../Components/Booking'
import moment from 'moment'
const SearchPage = (props) => {

	const auth = useContext(AuthContext)
	let fromhospital = false
	let hospital
	try {
		auth.setValueFunc("hospitalId", props.match.params.id)
		let filter = JSON.parse(localStorage.getItem('filter'))
		console.log("filter")
		localStorage.setItem("filter", JSON.stringify({ ...filter, hospitalId: props.match.params.id, specialisation: null }))
	} catch (error) {
		console.log(error)
	}

	let [doctors, setDoctors] = useState([])

	const [divText, setDivText] = useState('Searching Doctors')

	// auth.setValueFunc("date", moment().format('YYYY/MM/DD'))
	let searchFilter = JSON.parse(localStorage.getItem('filter'))
	if (searchFilter == null) searchFilter = {}
	useEffect(() => {

		auth.setValues({ ...auth.values, specialisation: searchFilter.specialisation, city: searchFilter.city, hospitalId: searchFilter.hospitalId })

	}, [])


	useEffect(() => {





		let queryStr = `http://${process.env.REACT_APP_YUVER_IP}/api/v1/doctors?`
		if (searchFilter.specialisation) queryStr = queryStr + `specialisation=${encodeURI(searchFilter.specialisation)}`
		if (searchFilter.city) queryStr = queryStr + `&city=${searchFilter.city}`
		if (searchFilter.docName) queryStr = queryStr + `&name=${searchFilter.docName}`
		if (searchFilter.hospitalId) queryStr = queryStr + `&hospital=${searchFilter.hospitalId}`
		axios.get(`${queryStr}`).then(function (response) {
			const doctorList = response.data.data

			setDoctors(doctorList)
			if (doctorList.length == 0) setDivText('Sorry No Doctors Found')
		})
	}, [localStorage.getItem("filter")])

	// let doctors=[{}];

	// useEffect(()=>{
	//     axios.get("http://localhost:8080/api/doctors/search?specialisation=ENT")
	//      .then(function(response){
	//        doctors=response.data.doctors
	//        console.log(doctors)
	//         // setEntries(doctors)

	//      })
	// },[])
	// const doctorList //use axios to search for list of doctors base in parameters in auth context

	return (
		<div style={{ backgroundColor: '#eee', minHeight: '85vh' }}>
			{doctors.length > 0 ? (
				doctors.map((doctor) => (
					<Booking
						photo={'https://i.ibb.co/hFJnBtL/download.jpg'}
						dName={doctor.name}
						speciality={doctor.specialisation}
						hospitalName={doctor.hospital.name}
						city={doctor.city}
						docId={doctor._id}
						hospitalId={doctor.hospital._id}
						avgReviews='2.5'
						numberReviews='Number of Reviews'
						description='Description'
						fee={doctor.normalFee}
					/>
				))
			) : (
					<div
						className='shadow m-3 bg-white '
						style={{ width: '100%', marginTop: '10vh', height: '10vh' }}>
						<h1 className='text-center'>{divText}</h1>
					</div>
				)}
			{/* <Appointment dName="Name Surname" speciality="Speciality" locality="Locality" city="City" zCode="Zip Code" avgReviews="2.5" numberReviews="Number of Reviews" description="Description" />
                      <Appointment dName="Name Surname" speciality="Speciality" locality="Locality" city="City" zCode="Zip Code" avgReviews="2.5" numberReviews="Number of Reviews" description="Description" />
                      <Appointment dName="Name Surname" speciality="Speciality" locality="Locality" city="City" zCode="Zip Code" avgReviews="2.5" numberReviews="Number of Reviews" description="Description" />
                      <Appointment dName="Name Surname" speciality="Speciality" locality="Locality" city="City" zCode="Zip Code" avgReviews="2.5" numberReviews="Number of Reviews" description="Description" />
                      <Appointment dName="Name Surname" speciality="Speciality" locality="Locality" city="City" zCode="Zip Code" avgReviews="2.5" numberReviews="Number of Reviews" description="Description" /> */}
		</div>
	)
}

export default SearchPage
