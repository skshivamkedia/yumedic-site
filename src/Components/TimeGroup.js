import React from 'react'
import DaySlot from './DaySlot'
import moment from 'moment'
const TimeGroup = (props) => {
	var dates = new Array(7)
	dates[0] = { "date": moment().format('L'), "day": new Date(moment().format('L')).getDay() }
	dates[1] = { "date": moment().add(1, 'days').format('L'), "day": new Date(moment().add(1, 'days').format('L')).getDay() }
	dates[2] = { "date": moment().add(2, 'days').format('L'), "day": new Date(moment().add(2, 'days').format('L')).getDay() }
	dates[3] = { "date": moment().add(3, 'days').format('L'), "day": new Date(moment().add(3, 'days').format('L')).getDay() }
	dates[4] = { "date": moment().add(4, 'days').format('L'), "day": new Date(moment().add(4, 'days').format('L')).getDay() }
	dates[5] = { "date": moment().add(5, 'days').format('L'), "day": new Date(moment().add(5, 'days').format('L')).getDay() }
	dates[6] = { "date": moment().add(6, 'days').format('L'), "day": new Date(moment().add(6, 'days').format('L')).getDay() }





	return (
		<div className='d-flex'>

			{dates.map((ds) => (

				props.ts.includes(ds.day) && < DaySlot datetime={{ "day": ds.day, "time": props.ts }} />

			))}
		</div>
	)
}
export default TimeGroup
