import React, { createContext, useState, useCallback, useEffect } from 'react'

import moment from 'moment'

export const AuthContext = createContext()


export const AuthContextProvider = ({ children }) => {

	const [values, setValues] = useState({
		isLoggedIn: false,
		patientName: null,
		userId: null,
		referralId: null,
		name: null,
		token: null,
		location: null,
		specialisation: null,
		city: null,
		showNodal: false,
		date: null,
		time: null,
		docName: null,
		docId: null,
		hospitalId: null,
		cost: null,
		date: moment().format('YYYY/MM/DD')
	})



	const login = (uid, token) => {
		console.log("login")
		console.log(uid + token)
		setValues({ ...values, token, userId: uid, isLoggedIn: true })
		localStorage.setItem("token", token)
		localStorage.setItem("uid", uid)
	}


	const log = () => {
		console.log("log function called")
	}

	const logout = useCallback(() => {
		setValues({ ...values, token: null, userId: null, isLoggedIn: false })
		localStorage.removeItem('token')
		localStorage.removeItem('uid')
	}, [])

	useEffect(() => {
		const token = localStorage.getItem('token')
		const uid = localStorage.getItem('uid')
		setValues({ ...values, token, userId: uid })
		if (token) login(uid, token)
	}, [])

	const setValueFunc = (key, value) => {
		switch (key) {
			case "specialisation": {

				setValues({ ...values, specialisation: value })
				break;
			}
			case "hospitalId": {

				setValues({ ...values, hospitalId: value })
				break;
			}

			case "docName": {

				setValues({ ...values, docName: value })
				break;
			}
			case "city": {

				setValues({ ...values, city: value })
				break;
			}
			case "date": {

				setValues({ ...values, date: value })
				break;
			}


		}
	}


	return (
		<AuthContext.Provider value={{ values, login, logout, setValueFunc, setValues }}>
			{children}
		</AuthContext.Provider>
	)
}
