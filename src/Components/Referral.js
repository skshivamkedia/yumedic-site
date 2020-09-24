import React from 'react'
import RefImage from '../images/Referral.png'
import { CopyToClipboard } from 'react-copy-to-clipboard'
const Referral = (props) => {
	return (
		<div className='pt-3 px-3' style={{ backgroundColor: '#FFF050' }}>
			<div className='container-fluid pb-0'>
				<h2>Referrals</h2>
				<h5>Your Referral Code</h5>
				<div className='d-flex align-items-stretch justify-content-between	'>
					<div className='d-flex flex-column align-items-center d-md-block'>
						<h5
							className='d-inline-block rounded p-2 bg-white m-0'
							value={props.code}
							id='code'>
							{props.code}
						</h5>

						<CopyToClipboard text={props.code}>
							<button className='rounded bg-dark p-2 text-light m-0'>
								Copy Code
							</button>
						</CopyToClipboard>
					</div>
					<div className='mr-md-5 pr-md-5'>
						<img src={RefImage} style={{ width: '45vw' }} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Referral
