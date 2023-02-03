import React from 'react';
import {BsFillHouseFill} from 'react-icons/bs';
import './navbar.css';
import { Link } from "react-router-dom";

const navbar = () => {
   // const logout = () => {
    //    auth.signOut();
   // }
    

    return (
        <div className='navbar'>
            <div className='container'>
                <h1><span><BsFillHouseFill />Open</span>House</h1>
                <ul className='nav-menu' style={{listStyleType:'none'}}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Login">Realtor Login</Link></li>
                    {/*<li><a onClick={logout}>Logout</a></li>*/}
                </ul>
            </div>
        </div>
    );
}

export default navbar;