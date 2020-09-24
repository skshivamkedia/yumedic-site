import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import MobileStoreButton from 'react-mobile-store-button'

import Mobile from '../images/App Reprsentation.png'

const Download = () => {
	const androidUrl =
		'https://play.google.com/store/apps/details?id=io.yu.medic&hl=en_IN'

	return (
		<Container fluid={true} style={{ backgroundColor: 'skyBlue' }}>
			<Row style={{ paddingTop: '32px', paddingBottom: '32px' }}>
				<Col xl='6' lg='6' md='6' style={{ textAlign: 'center' }}>
					<img src={Mobile} alt='Mobile Device' style={{ height: '400px' }} />
				</Col>
				<Col xl='6' lg='6' md='6 ' className='d-flex align-items-center'>
					<Container>
						<h2>Downlaod our App</h2>
						<ul>
							<li>Increase your reach</li>
							<li>Organise your system</li>
							<li>Strenghten your online Reputation</li>
						</ul>
						{/* <MobileStoreButton
                            store="ios"
                            url={androidUrl}
                            linkProps={{ title: 'iOS Store Button' }}
                        /> */}
						<MobileStoreButton
							store='android'
							url={androidUrl}
							linkProps={{ title: 'Android Store Button' }}
						/>
						<br />
						{/* <input
							type='number'
							placeholder='+91 9999999999'
							style={{ borderRadius: '5px' }}
						/> */}
						{/* <Button
							style={{
								marginLeft: '10px',
								backgroundColor: 'black',
								height: '34px',
							}}>
							Send Link
						</Button> */}
					</Container>
				</Col>
			</Row>
		</Container>
	)
}

export default Download
