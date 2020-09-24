import React from 'react'
import TimeSlot from './TimeSlot'
const DaySlot = (props) => {
	var weekday = new Array(7)
	weekday[0] = "Sun"
	weekday[1] = "Mon"
	weekday[2] = "Tue"
	weekday[3] = "Wed"
	weekday[4] = "Thu"
	weekday[5] = "Fri"
	weekday[6] = "Sat"
	const day = weekday[props.datetime.day]        //convert date to day and display at top
	return (
		<div className='d-flex flex-column m-3'>
			<div className='bg-info'>{day}</div>
			{props.datetime.time.map((time) => (
				<TimeSlot time={time} date={props.datetime.date} />
			))}

		</div>
	)
}
export default DaySlot
