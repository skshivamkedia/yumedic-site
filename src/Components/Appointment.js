import React from 'react'
import moment from 'moment'
const Appointment = (props) => {
	let status, color
	if (props.appointment.status == 'awaitingPayment') {
		status = 'AwaitingPayment'
		color = 'bg-warning'
	} else if (props.appointment.status == 'confirmed') {
		status = 'Confirmed'
		color = 'bg-success'
	} else {
		status = 'Failed'
		color = 'bg-danger'
	}

	const isAfter = moment(
		`${props.appointment.dateTime.date} ${props.appointment.dateTime.time}`
	).isAfter(moment())

	let bg = '#C4FFF8'
	if (!isAfter) {
		bg = '#d3d3d3'
	}

	return (
		<div
			className=' rounded d-flex  justify-content-around m-3'
			style={{ backgroundColor: bg, minHeight: '100px' }}>
			<div className='rounded-circle bg-dark align-self-center '>
				<img style={{ height: '100px' }} src={props.appointment.doctor.photo} />
			</div>
			<div className='d-flex flex-column justify-content-around'>
				<h5 className='d-inline-block m-0'>{props.appointment.doctor.name}</h5>
				<h6 className='d-inline-block m-0'>{props.appointment.speciality}</h6>
				<h6 className='d-inline-block m-0'>
					{props.appointment.hospital.name}
				</h6>

				<React.Fragment>
					{isAfter && (
						<h6 className={`${color} p-1 rounded`}>Status:{status}</h6>
					)}
					<h6 className='my-1 m-0'>
						{moment(
							`${props.appointment.dateTime.date} ${props.appointment.dateTime.time}`
						).calendar()}
					</h6>
				</React.Fragment>

				{/* <h6 className=''>{moment(props.appointment.time).format('LT')}</h6> */}
			</div>
			<div className='d-flex flex-column justify-content-around '>
				{props.appointment.status == 'cancelled' && (
					<button className='btn rounded btn-danger m-0'>Failed</button>
				)}
			</div>
		</div>
	)
}

export default Appointment
