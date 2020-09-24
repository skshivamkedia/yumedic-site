import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../context/auth-context'
import moment from 'moment'
const axios = require('axios')

function SubmitBtn(props) {
	let history = useHistory()
	const auth = useContext(AuthContext)

	function login() {
		axios
			.post(`http://${process.env.REACT_APP_YUVER_IP}/api/v1/auth/login`, {
				email: props.email,
				password: props.password,
			})
			.then(function (response) {
				console.log(response)
				if (!response.data.success) {
					alert("Email and Password not correct!")
				} else {
					//save token in local storage
					let token = response.data.token
					let uid = response.data.userId
					localStorage.setItem('token', JSON.stringify(token))
					localStorage.setItem('uid', JSON.stringify(uid))

					//         //load homepage
					auth.login(uid, token)
					history.push('/')
				}
			})
	}

	function register() {
		// console.log("register")
		console.log(props)

		axios
			.post(`http://${process.env.REACT_APP_YUVER_IP}/api/v1/auth/register`, {
				name: props.name,
				email: props.email,
				password: props.password,
				phone: props.phone,
				role: 'user',
				referral: props.referral
			})
			.then(function (response) {
				console.log(response.data.success)
				if (!response.data.success) {
					//do nothing
				} else {
					//save token in local storage
					let token = response.data.token
					let uid = response.data.userId
					localStorage.setItem('token', token)
					localStorage.setItem('uid', uid)

					//         //load homepage
					auth.login(uid, token)
					history.push('/')
				}
			})
	}

	function payment() {
		const config = {
			headers: { Authorization: `Bearer ${auth.token}` },
		}
		axios
			.post(
				`http://${process.env.REACT_APP_YUVER_IP}/api/v1/appointments`,
				{
					appointment: {
						user: auth.userId,
						patientName: auth.patientName,
						doctor: auth.docId,
						hospital: auth.hospitalId,
						cost: auth.cost,
						dateTime: { date: auth.date, time: auth.time },
						time: Date.parse(`${moment(auth.date).format('ll')} ${auth.time}`),
					},
				},
				config
			)
			.then(function (response) {
				console.log(response.data)
				if (!response.data.success) {
					//do nothing
				} else {
					let orderId = response.data.orderId

					//         //load payment gateway

					window.location.href = `http://${process.env.REACT_APP_YUVER_IP}/api/v1/payment/${orderId}`
				}
			})
	}

	let funcall
	if (props.fun == 'register') funcall = register
	if (props.fun == 'login') funcall = login
	if (props.fun == 'payment') funcall = payment

	return (
		<button
			className={`${props.className}  btn btn-inline-block shadow`}
			onClick={funcall}>
			{props.text}
		</button>
	)
}

export default SubmitBtn
