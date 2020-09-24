import React, { useContext } from 'react'
import { AuthContext } from '../context/auth-context'
const AboutPage = () => {
	const auth = useContext(AuthContext)
	auth.time = null
	return (
		<div>
			<h2>About Us</h2>
			<p>
				We have been bridging the gap between thousands of people and their
				Doctors for almost 2 years now. We intend to create a diverse ecosystem
				connecting the people with any kind of health issue with their Health{' '}
			</p>
			<p>
				The Health Care community also harness our platform to establish and
				increase their presence among the patients.
			</p>
			<p>
				Your Health Our Priority
				<br />
				<b>Care for loved ones</b>
			</p>
		</div>
	)
}
export default AboutPage
