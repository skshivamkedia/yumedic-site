import React, { useContext } from 'react'
import { AuthContext } from '../context/auth-context'
const ContactPage = () => {
	const auth = useContext(AuthContext)
	auth.time = null
	return (
		<div>
			<h2>Contact Us</h2>
			<p>
				<b>Phone: </b>085800242009 | 09472551360 | 887774494
			</p>
			<p>
				<b>Email: </b>info@yumedic.com
			</p>
			<p>
				Your Health Our Priority
				<br />
				<b>Care for loved ones</b>
			</p>
		</div>
	)
}
export default ContactPage
