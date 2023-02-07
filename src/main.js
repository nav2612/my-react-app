import React from 'react';
import './home.css';
import Search from './search.js';
import Location from './Location';
import Cards from './Cards.js';

const Mainpage = () => {

	return (
    <React.Fragment> 
    <Search/>
    <Cards/>
    <Location/>
    </React.Fragment>
	);
}

export default Mainpage;
