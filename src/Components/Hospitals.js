import React from 'react'

const Hospitals = (props) => {
	const style = {
		display: 'inline-block',
		marginLeft: '16px',
		marginRight: '20px',
		textAlign: 'center',
	}

	const images = {
		height: '150px',
	}

	return (
		<div style={style} id={props.id}>
			<img
				src={props.img}
				alt={props.name}
				id={props.id}
				className
				style={images}
			/>
			<div id={props.id}>{props.name}</div>
		</div>
	)
}

export default Hospitals
