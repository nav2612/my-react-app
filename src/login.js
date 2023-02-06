import React, { useState } from 'react';
import './home.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Login = () => {
	// Inputs
	var [mynumber, setnumber] = useState("");
	const [passw, setPassw]=useState(''); 
	const [show, setShow]=useState(''); 

	// Sent OTP
	const signin = () => {
		mynumber='+'+mynumber;
		if (mynumber === "" || mynumber.length < 10) 
        {alert("Please enter a valid phone number");
        return;}
	}

	return (
		<div className='login-box'>
			<center>
                <h1>Login Using your phone number</h1><br /><br /><br />
				<div id = 'phone-input' style={{ display: !show ? "block" : "none" }}>
					<PhoneInput country={'ca'}
					onlyCountries={['ca']}
					disableAreaCodes
					disableDropdown
					countryCodeEditable={false}
					value={mynumber} 
					onChange={(e) => {setnumber(e)}}
					placeholder="Enter phone number" /><br></br>
					<div> 
					<input type="text" name="passw" id="passw" placeholder='Password' value={passw}
					onChange={(e)=>setPassw(e.target.value)}/> 
				</div>  
					<br /><br /><br />

					{/*<div id="recaptcha-container"></div>*/}
					<button id="send-otp" onClick={signin}>Login</button>
				</div>
				<br></br>
				<a href='#'>Forgot password?</a>
				<br></br><br></br>
				Not a member? <a href='#'>Sign up</a>
			</center>
		</div>
	);
}

export default Login;
