import React from 'react';
import { auth } from './firebase';
import {BsFillHouseFill} from 'react-icons/bs';

import './navbar.css'


const navbar = () => {
    const logout = () => {
        auth.signOut();
    }

    return (
        <div className='navbar'>
            <div className='container'>
                <h1><span><BsFillHouseFill />Open</span>House</h1>
                <ul className='nav-menu' style={{listStyleType:'none'}}>
                    <li><a href='#'>Home</a></li>
                    <li><a>Realtor Login</a></li>
                    <li><a onClick={logout}>Logout</a></li>
                </ul>
            </div>
        </div>
    );
}

export default navbar;