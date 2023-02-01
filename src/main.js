import React from 'react';
import { auth } from './firebase';
import './main.css';
import Cards from './cards.js';

const Mainpage = () => {
	const logout = () => {
		auth.signOut();
	}

	return (
    <div>
		<Cards/>
		 <div className= "main-page" style={{ marginTop: 250 }}>
			<center>
			<h3>Welcome{auth.currentUser.phoneNumber}</h3>
	 		<button style={{ "marginLeft": "20px" }}
				onClick={logout}>Logout</button><br/>
				<button style={{ "marginLeft": "20px" }}>Realtor </button>
			</center>
		</div>
    </div>
	);
}

export default Mainpage;
