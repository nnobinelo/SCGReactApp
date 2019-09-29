import React, { Component } from 'react'
import { connect } from 'react-redux'
import sendForm from '../../redux/actionCreators/contactFormActions'
import ReCAPTCHA from 'react-google-recaptcha'

class Contact extends Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		message: ''
	}

	recaptchaRef = React.createRef();

	handleSubmit = (value) => {
		this.props.sendForm(this.state)

		this.props.history.push('/postContact')
	}

	showRecaptcha = (event) => {
		// prevent page refresh
		event.preventDefault()

		this.recaptchaRef.current.execute()
	}

	handleTextChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value
		})
	}

	render() {
		return (
			<div className="contact yellow accent-2">
				<div className="containter center z-depth-0">
					<div className="row removeRowMargin">
						<div className="col s8 push-s2 z-depth-3">
							<h1 className="grey-text text-darken-3 contactPage">CONTACT US</h1>
							<p className="grey-text text-darken-3">
								Please leave us your contact info, so we can get back to you.
							</p>
							<form onSubmit={this.showRecaptcha}>
								<div className="row removeRowMargin">
									<div className="input-field col s12 l4">
										<input type="text" id="firstName" required className="validate" onChange={this.handleTextChange} />
										<label htmlFor="firstName">First Name</label>
									</div>
									<div className="input-field col s12 l4">
										<input type="text" id="lastName" className="validate" onChange={this.handleTextChange} />
										<label htmlFor="lastName">Last Name</label>
									</div>
									<div className="input-field col s12 l4">
										<input type="email" id="email" required className="validate" onChange={this.handleTextChange} />
										<label htmlFor="email">Email</label>
									</div>
									<div className="input-field col s12">
										<textarea type="text" id="message" required className="materialize-textarea" onChange={this.handleTextChange} />
										<label htmlFor="message">Comments/Questions</label>
									</div>
								</div>
								<div className="row">
									<div className="col s12 m6">
										<ReCAPTCHA ref={this.recaptchaRef} size = "invisible" sitekey="6Ld0QrMUAAAAAPw4Mz5FRsmP9-WcbYFIz2CinKIw" onChange={this.handleSubmit}/>
									</div>
									<div className="col s12 m6" style={{height:'100%'}}>
										<button className="zoomImage zoomCenter valign-wrapper right btn waves-effect waves-light black">SEND<i className="material-icons right">send</i></button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		sendForm: (form) => {
			dispatch((sendForm(form)))
		}
	}
}

//mapStateToProps needs to be the first function passed to connect then the one for mapDispatchToProps
//so if u don't have a mapStateToProps function you can sub it for null
export default connect(null, mapDispatchToProps)(Contact);