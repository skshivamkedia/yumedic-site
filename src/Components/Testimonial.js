import React from 'react'
const Testimonial = (props) => {
	return (
		<div className='d-flex col-sm-6  px-3 align-items-center justify-content-center'>
			<img src={props.image} style={{ width: '100px', borderRadius: '50%' }} />
			<div style={{ padding: '0 15px 0 60px' }}>
				<p>{props.testimony}</p>
				<p style={{ fontWeight: 'bold', display: 'block' }}>{props.name}</p>
			</div>
		</div>
	)
}
export default Testimonial
