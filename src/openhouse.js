import React, { useState } from 'react';
import './home.css';
//import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
//import { Link } from "react-router-dom";


const Login = () => {
    const [passw, setPassw]=useState(''); 
	const signin = () => {
        }

	return (
		<div className='login-box'>
			<center>
                <h1>Register a open house</h1><br /><br /><br />
					<div> 
					<input type="text" name="passw" id="passw" placeholder='Password' value={passw}
					onChange={(e)=>setPassw(e.target.value)}/> 
				</div>  
					<br /><br /><br />

					{/*<div id="recaptcha-container"></div>*/}
					<button id="send-otp" onClick={signin}>Login</button>
				<br></br>
				<a href='#'>Forgot password?</a>
				<br></br><br></br>
				Not a member? <a href='#'>Sign up</a>
			</center>
		</div>
	);
}

export default Login;
