import React from 'react'
import Testimonial from './Testimonial'
import Image1 from '../images/user1.jpg'
import Image2 from '../images/user2.jpg'
const CarouselSlide = (props) => {
	if (window.matchMedia('(max-width: 768px)').matches) {
		return (
			<div className='d-flex justify-content-around '>
				<Testimonial
					image={Image1}
					testimony='Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra.'
					name='PAULA WILSON'
				/>
			</div>
		)
	} else
		return (
			<div className='d-flex justify-content-around '>
				<Testimonial
					image={Image1}
					testimony='Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra.'
					name='PAULA WILSON'
				/>
				<Testimonial
					image={Image2}
					testimony='Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra.'
					name='ANTONIO MORENO'
				/>
			</div>
		)
}
export default CarouselSlide
