import React from 'react'
import moment from 'moment'
import DateDay from '../Components/DateDay'
const DateDayGroup = (props) => {
	const dateDays = []
	for (var i = 0; i < 7; i++) {
		dateDays[i] = {
			mdy: moment().add(i, 'days').format('YYYY/MM/DD'),
			date: moment().add(i, 'days').format('Do MMM'),
			day: moment().add(i, 'days').format('ddd'),
		}
	}

	dateDays[0].day = 'Today'
	dateDays[1].day = 'Tomorrow'
	console.log()
	return (
		<div
			className='d-flex  border rounded shadow mb-3'
			style={{ overflowX: 'auto' }}>
			{dateDays.map((dateDay, index) => (
				<DateDay
					dateDay={dateDay}
					onChangee={props.onChangee}
					day={`${new Date(
						moment().add(index, 'days').format('MM-DD-YYYY')
					).getDay()}`}
					index={index}
				/>
			))}
		</div>
	)
}
export default DateDayGroup
