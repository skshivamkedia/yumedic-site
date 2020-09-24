import React, { useContext, useEffect, useState } from 'react'
import Appointment from '../Components/Appointment'
import axios from 'axios'
import { AuthContext } from '../context/auth-context'
import google from '../images/google.png'
import moment from 'moment'
const AppointmentGroup = (props) => {
	const auth = useContext(AuthContext)
	const [appointments, setAppointments] = useState([])

	useEffect(() => {
		if (props.type === 'Upcoming') {
			console.log('Upcoming')
			console.log(`userId ${auth.values.userId}`)
			const config = {
				headers: { Authorization: `Bearer ${auth.token}` },
			}
			axios
				.get(
					`http://${process.env.REACT_APP_YUVER_IP}/api/v1/appointments`,
					{
						params: {
							user: auth.values.userId,

							maxD: moment(Date.now()).add(10, 'days').format('YYYY/MM/DD'),

							minD: moment(Date.now()).format('YYYY/MM/DD'),
						},
					},
					config
				)
				.then(function (response) {
					setAppointments(response.data.data)
					console.log(response.data.data)
				})
		} else if (props.type === 'Past') {
			console.log('Past')
			const config = {
				headers: { Authorization: `Bearer ${auth.token}` },
			}
			axios
				.get(
					`http://${process.env.REACT_APP_YUVER_IP}/api/v1/appointments`,
					{
						params: {
							user: auth.values.userId,

							minD: moment(Date.now())
								.subtract(180, 'days')
								.format('YYYY/MM/DD'),
							maxD: moment(Date.now()).format('YYYY/MM/DD'),
						},
					},
					config
				)
				.then(function (response) {
					setAppointments(response.data.data)
					console.log(response.data.data)
				})
		}
	}, [])

	return (
		<div>
			{appointments.length > 0 ? (
				appointments.map((appointment) => (
					<Appointment appointment={appointment} />
				))
			) : (
					<div className='m-1 p-3 bg-light  text-center'>
						<p>None</p>
					</div>
				)}
		</div>
	)
}

export default AppointmentGroup
