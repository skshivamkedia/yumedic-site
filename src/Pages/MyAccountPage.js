import React, { useEffect, useContext, useState } from 'react'
import Download from '../Components/Download'
import Referral from '../Components/Referral'
import AppointmentGroup from '../Components/AppointmentGroup'
import axios from 'axios'
import { AuthContext } from '../context/auth-context'
const MyAccountPage = () => {
	const auth = useContext(AuthContext)
	auth.time = null
	const [refId, setRefId] = useState(auth.referralId)



	useEffect(() => {

		console.log(auth.values)
		axios
			.get(
				`http://${process.env.REACT_APP_YUVER_IP}/api/v1/users/${auth.values.userId}`
			)
			.then(function (response) {
				setRefId(response.data.data.referral.code)
				auth.refferalID = response.data.data.referral.code
				console.log(response.data.data.referral.code)
			})
	}, [])
	return (
		<div>
			<h3>Upcoming Appointments</h3>
			<AppointmentGroup type='Upcoming' />
			<h3>Past Appointments</h3>
			<AppointmentGroup type='Past' />
			{<Referral code={refId} />}
			<Download />
		</div>
	)
}

export default MyAccountPage
