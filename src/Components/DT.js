import React, { useState, useEffect, useContext, Fragment } from 'react'
import DateDayGroup from '../Components/DateDayGroup'
import axios from 'axios'
import TimeSlot from '../Components/TimeSlot'
import { AuthContext } from '../context/auth-context'
const DT = (props) => {
	const auth = useContext(AuthContext)
	const [day, setDay] = useState(new Date().getDay())
	console.log(`todays date ${new Date().getDay()}`)
	const [time, setTime] = useState(null)
	const [ds, setDs] = useState(new Array())

	console.log(`auth.date ${auth.date}`)

	const onDayChangeHandler = (event) => {
		console.log(event.target)
		setDay(event.target.getAttribute('value'))
		console.log(`date ${event.target.getAttribute('date')}`)
		auth.date = event.target.getAttribute('date')
		console.log('dateChanged' + day)
		const pre = document.getElementsByClassName('activeDate')
		console.log(pre)
		if (pre.length > 0) {
			pre[0].classList.remove('activeDate')
		}
		const element = document.getElementById(event.target.id)
		element.classList.add('activeDate')
		console.log(`day ${event.target.getAttribute('value')}`)
	}

	const onTimeChangeHandler = (event) => {
		setTime(event.target.getAttribute('value'))
		auth.time = event.target.getAttribute('value')
		props.timeFunction(event.target.getAttribute('value'))
		console.log(`time ${auth.time}`)
		console.log('timechanged' + event.target.getAttribute('value'))
		const pre = document.getElementsByClassName('activeTime')
		if (pre.length > 0) {
			pre[0].classList.remove('activeTime')
		}
		document.getElementById(event.target.id).classList.add('activeTime')
	}

	// fetch day-slots using docId passed from

	useEffect(() => {
		axios
			.get(
				`http://${process.env.REACT_APP_YUVER_IP}/api/v1/doctors/${props.docId}`
			)
			.then(function (response) {
				setDs(response.data.data.ds)
				console.log(`ds ${ds}`)
			})
	}, [])

	// ds = [
	// 	{
	// 		day: '0',
	// 		timeSlots: [
	// 			{ time: '4:30PM', status: true },
	// 			{ time: '4:45PM', status: false },
	// 		],
	// 	},
	// 	{
	// 		day: '1',
	// 		timeSlots: [
	// 			{ time: '4:30PM', status: true },
	// 			{ time: '4:45PM', status: false },
	// 		],
	// 	},
	// 	{
	// 		day: '2',
	// 		timeSlots: [
	// 			{ time: '4:30PM', status: true },
	// 			{ time: '4:45PM', status: false },
	// 		],
	// 	},
	// 	{
	// 		day: '3',
	// 		timeSlots: [
	// 			{ time: '4:30PM', status: true },
	// 			{ time: '4:45PM', status: false },
	// 		],
	// 	},
	// 	{
	// 		day: '4',
	// 		timeSlots: [
	// 			{ time: '4:30PM', status: true },
	// 			{ time: '4:45PM', status: false },
	// 		],
	// 	},
	// 	{
	// 		day: '5',
	// 		timeSlots: [
	// 			{ time: '4:30PM', status: true },
	// 			{ time: '4:45PM', status: true },
	// 		],
	// 	},
	// 	{
	// 		day: '6',
	// 		timeSlots: [
	// 			{ time: '4:30PM', status: true },
	// 			{ time: '4:45PM', status: false },
	// 		],
	// 	},
	// ]

	return (
		ds.length > 0 && (
			<div className='p-3 border shadow-sm m-1'>
				<DateDayGroup onChangee={onDayChangeHandler} />
				{
					<div className='d-flex flex-wrap'>
						{ds[day].timeSlots.map((slot) => (
							<Fragment>
								{slot.status && (
									<TimeSlot time={slot.time} onChangee={onTimeChangeHandler} />
								)}
							</Fragment>
						))}
					</div>
				}
			</div>
		)
	)
}

export default DT
