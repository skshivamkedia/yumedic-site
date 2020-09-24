import React, { useContext } from 'react'
import { AuthContext } from '../context/auth-context'
const FAQPage = () => {
	const auth = useContext(AuthContext)
	auth.time = null
	return (
		<div>
			<h2>Frequently Asked Questions</h2>
			<p>
				<b>What does yuMedic do?</b>
				<br />
				<ul>
					<li>
						Our vision is to organise and simplify the healthcare sector by
						making quality healthcare more accessible, affordable and
						convenient.
					</li>
					<li>
						yuMedic which was formerly known as <b>The Hello Doctor </b>
						aggregates the entire health ecosystem together – patients, doctors,
						diagnostics, clinics, hospitals and other partners, to generate
						exceptional value and service for all, esp. the end consumers. We
						integrate different parts of the healthcare journey and put them
						together end-to-end on our platform
					</li>
				</ul>
			</p>

			<p>
				<b>
					What are the products offered by yuMedic for clinics and hospitals?
				</b>
				<br />
				<ul>
					<li>
						We provide an application which organises the appointments and
						packages that are offered by clinics and hospitals to the patients.
					</li>
					<li>
						We promote the clinics and hospitals on our website and application
					</li>
				</ul>
			</p>

			<p>
				<b>
					Does yuMedic have a verification process for doctors who sign up on
					the platform?
				</b>
				<br />
				Yes. All the doctors on the yuMedic platform are 100% genuine and their
				degrees have been verified. More about the verification process:
				<br />
				Doctors are asked to provide the following documents as a first step.
				<br />
				<ul>
					<li>Government issued photo ID (Passport/Aadhaar/PAN Card)</li>
					<li>Their MCI registration number.</li>
				</ul>
			</p>

			<p>
				<b>Why do you display doctor photos? Isn’t this advertising?</b>
				<br />
				No. We display doctor photos across all doctor profiles for patient
				protection. Their sole purpose is to help patients make sure that they
				are being attended to by the same doctor they booked.
				<br />
				Doctors are asked to provide the following documents as a first step.
				<br />
			</p>

			<p>
				<b>How many clinics and hospitals has yuMedic partnered with?</b>
				<br />
				More than 100 clinics and hospitals have chosen yuMedic as their digital
				healthcare partner.
				<br />
			</p>

			<p>
				<b>How many clinics and hospitals has yuMedic partnered with?</b>
				<br />
				More than 100 clinics and hospitals have chosen yuMedic as their digital
				healthcare partner.
				<br />
			</p>

			<p>
				How many doctors are a part of the yuMedic network?
				<br />
				<b>More than 200 doctors are a part of the yuMedic network</b>
			</p>
		</div>
	)
}
export default FAQPage
