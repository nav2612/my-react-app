import React, { useState } from 'react';
import { firebase, auth } from './firebase';
import './home.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Link } from "react-router-dom";

const Login = () => {
	// Inputs
	var [mynumber, setnumber] = useState("");
	const [otp, setotp] = useState('');
	const [show, setshow] = useState(false);
	const [final, setfinal] = useState('');

	// Sent OTP
	const signin = () => {
		mynumber='+'+mynumber;
		if (mynumber === "" || mynumber.length < 10) 
        {alert("Please enter a valid phone number");
        return;}
		let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
		auth.signInWithPhoneNumber(mynumber, verify).then((result) => {
			setfinal(result);
			alert("OTP sent to your specified phone number");
			setshow(true);
		})
			.catch((err) => {
				alert(err);
				window.location.reload()
			});
	}

	// Validate OTP
	const ValidateOtp = () => {
		if (otp === null || final === null)
			return;

		const handleConfirm = () => {
			final.confirm(otp).then(() => {
			return (<Link to='/OpenHouse'></Link>);
		}).catch(() => {
			alert("Wrong code");
		});
	};
	return handleConfirm();
	};

	return (
		<div className='login-box'>
			<center>
                <h1>Login using Phone Number</h1><br /><br /><br />
				<div id = 'phone-input' style={{ display: !show ? "block" : "none" }}>
					<PhoneInput country={'ca'}
					onlyCountries={['ca']}
					disableAreaCodes
					disableDropdown
					countryCodeEditable={false}
					value={mynumber} 
					onChange={(e) => {setnumber(e)}}
					placeholder="Enter phone number" />
					<br /><br /><br />

					<div id="recaptcha-container"></div>
					<button id="send-otp" onClick={signin}>Send OTP</button>
				</div>
				<div style={{ display: show ? "block" : "none" }}>
					<input type="text" placeholder={"Enter your OTP"}
						onChange={(e) => { setotp(e.target.value) }}></input>
					<br /><br /><br />
					<button onClick={ValidateOtp}>Verify</button>
				</div>
			</center>
		</div>
	);
}

export default Login;
