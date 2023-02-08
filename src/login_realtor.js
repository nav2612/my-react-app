import React, { useState } from 'react';
import './home.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { createBrowserHistory as history} from 'history';

const Login = () => {
	// Inputs
	var [mynumber, setnumber] = useState("");
	const [passw, setPassw]=useState(''); 

	// Sent OTP
	const signin = () => 
	{
		mynumber='+'+ mynumber;
		if (mynumber === "" || mynumber.length < 10) 
        {alert("Please enter a valid phone number");
        return;}
		else{
			alert("Done");
			history('/openhouse');
		}		
	}

	return (
		<div className='login-box'>
			<center>
                <h1>Login for Realtor</h1><br /><br /><br />
				<div id = 'phone-input'>
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
					<button id="send-otp" onClick={()=>signin()}>Login</button>
				</div>
				<br></br>
				<a href='forgot_password'>Forgot password?</a>
				<br></br><br></br>
				Not a member? <a href="/signup_realtor">Sign up</a>
			</center>
		</div>
	);
}

export default Login;
