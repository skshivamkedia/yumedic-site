import React from 'react'
const TimeSlot = (props) => {
	const timeSelected = () => {
		console.log(props.time)
	}
	return (
		<div
			className='m-1 p-1 rounded shadow-sm border'
			onClick={props.onChangee}
			value={props.time}
			id={props.time}>
			{props.time}
		</div>
	)
}

export default TimeSlot
