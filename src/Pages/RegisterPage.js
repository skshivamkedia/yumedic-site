import React from 'react'
import SubmitBtn from '../Components/submitBtn'
import { NavLink } from 'react-router-dom'

class RegisterPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = { name: '', email: '', phone: '', password: '', referral: '' }
		this.handleNameChange = this.handleNameChange.bind(this)
		this.handlePhoneChange = this.handlePhoneChange.bind(this)
		this.handleEmailChange = this.handleEmailChange.bind(this)
		this.handlePasswordChange = this.handlePasswordChange.bind(this)
		this.handleReferralChange = this.handleReferralChange.bind(this)
	}

	handleNameChange(event) {
		this.setState({ name: event.target.value })
	}
	handleEmailChange(event) {
		this.setState({ email: event.target.value })
	}
	handlePhoneChange(event) {
		this.setState({ phone: event.target.value })
	}
	handlePasswordChange(event) {
		this.setState({ password: event.target.value })
	}
	handleReferralChange(event) {
		this.setState({ referral: event.target.value })
	}

	render() {
		return (
			<div>
				<div className='container'>
					<div className='row'>
						<div className='col-md-5 mx-auto'>
							<div id='first'>
								<div className='myform form '>
									<div className='logo mb-3'>
										<div className='col-md-12 text-center'>
											<h1>Register</h1>
										</div>
									</div>
									<div name='register'>
										<div className='form-group'>
											<label htmlFor='exampleInputEmail1'>Name</label>
											<input
												value={this.state.name}
												onChange={this.handleNameChange}
												type='text'
												name='name'
												className='form-control'
												id='name'
												aria-describedby='nameHelp'
												placeholder='Enter name'></input>
										</div>
										<div className='form-group'>
											<label htmlFor='exampleInputEmail1'>Email address</label>
											<input
												value={this.state.email}
												onChange={this.handleEmailChange}
												type='email'
												name='email'
												className='form-control'
												id='email'
												aria-describedby='emailHelp'
												placeholder='Enter email'></input>
										</div>

										<div className='form-group'>
											<label htmlFor='exampleInputEmail1'>Phone</label>
											<input
												value={this.state.phone}
												onChange={this.handlePhoneChange}
												type='text'
												name='phone'
												className='form-control'
												id='phone'
												aria-describedby='emailHelp'
												placeholder='Enter Phone Number'></input>
										</div>
										<div className='form-group'>
											<label htmlFor='exampleInputEmail1'>Password</label>
											<input
												value={this.state.password}
												onChange={this.handlePasswordChange}
												type='password'
												name='password'
												id='password'
												className='form-control'
												aria-describedby='emailHelp'
												placeholder='Enter Password'></input>
										</div>
										<div className='form-group'>
											<label htmlFor='exampleInputEmail1'>Referral Code (optional)</label>
											<input
												value={this.state.referral}
												onChange={this.handleReferralChange}
												style={{ backgroundColor: "#f0f0c9" }}
												type='text'
												name='referral'
												id='referral'
												className='form-control'
												aria-describedby='emailHelp'
												placeholder='Referral Code'></input>
										</div>
										<div className='form-group'>
											<p className='text-center'>
												By signing up you accept our{' '}
												<a href='#'>Terms Of Use</a>
											</p>
										</div>
										<div className='col-md-12 text-center '>
											<SubmitBtn
												fun='register'
												className=' btn btn-block mybtn btn-primary tx-tfm'
												text='Register'
												name={this.state.name}
												email={this.state.email}
												phone={this.state.phone}
												password={this.state.password}
												referral={this.state.referral}
											/>
										</div>
										<div className='col-md-12 '>
											<div className='login-or text-center'>
												<hr className='hr-or'></hr>
												<span className='span-or text-center'>or</span>
											</div>
										</div>
										<div className='col-md-12 mb-3'>
											<p className='text-center'></p>
										</div>
										<div className='form-group'>
											<p className='text-center'>
												Already have account?{' '}
												<NavLink to='/login' id='login'>
													Login here
												</NavLink>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default RegisterPage
