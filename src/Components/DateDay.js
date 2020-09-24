import React from 'react'
const DateDay = (props) => {
	console.log(`date selected ${props.dateDay.mdy}`)
	return (
		<div
			onClick={props.onChangee}
			date={props.dateDay.mdy}
			value={props.day}
			id={props.day}
			className={
				props.index == 0
					? 'm-1 p-1 border rounded text-center activeDate'
					: 'm-1 p-1 border rounded text-center'
			}
			style={{ minWidth: '100px' }}>
			{props.dateDay.day},{props.dateDay.date}
		</div>
	)
}
export default DateDay
