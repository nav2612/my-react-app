import React from 'react';
import './home.css';
import Search from './search.js';
import Location from './Location';
import Cards from './Cards.js';

const Mainpage = () => {

	return (
    <> 
    <Search/><br/><br/>
    <Cards/>
    <Location/>
    </>
	);
}

export default Mainpage;
