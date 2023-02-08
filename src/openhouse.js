import React, { useState } from 'react';
import './home.css';
//import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
//import { Link } from "react-router-dom";


const Login = () => {
    const [address, setAddress]=useState(''); 
	const [price, setPrice]=useState(''); 
	const signin = () => {
        }

	return (
		<div className='login-box'>
			<center>
                <h1>Register a open house
				</h1><br /><br /><br />
				<div> 
					<input type="text" name="address" id="address" placeholder='Address' value={address}
					onChange={(e)=>setAddress(e.target.value)}/> 
				</div>  
				<div> 
					<input type="text" name="Price" id="price" placeholder='Price' value={price}
					onChange={(e)=>setPrice(e.target.value)}/> 
				</div>  
				<br /><br /><br />

				{/*<div id="recaptcha-container"></div>*/}
				<button id="send-otp" onClick={signin}>Submit</button>
				<br></br>
				<a href='#'>Forgot password?</a>
				<br></br><br></br>
				Not a member? <a href='#'>Sign up</a>
			</center>
		</div>
	);
}

export default Login;
