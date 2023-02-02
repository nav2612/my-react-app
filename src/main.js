import React from 'react';
import './main.css';
import './home.css';
import Cards from './cards.js';
import Navbar from './navbar.js';
import Search from './search.js';
import Location from './Location';

const Mainpage = () => {

	return (
    <div>
    <Navbar/>
    <Search/><br/><br/>
		<Cards/><br/><br/>
    <Location/>
    </div>
	);
}

export default Mainpage;
