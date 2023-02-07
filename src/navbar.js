import React from 'react';
import {BsFillHouseFill} from 'react-icons/bs';
import './navbar.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const navbar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <h1><span><BsFillHouseFill />Open</span>House</h1>
                <ul className='nav-menu' style={{listStyleType:'none'}}>
                    <DropdownButton id="dropdown-basic-button" title="Login">
<<<<<<< HEAD
                        <Dropdown.Item  href="/Login-realtor">Realtor</Dropdown.Item>
                        <Dropdown.Item href="/Login-customer">Customer</Dropdown.Item>
=======
                        
                        <Dropdown.Item  href="/Login">Realtor</Dropdown.Item>
                        <Dropdown.Item href="/Customer_login">Customer</Dropdown.Item>
>>>>>>> 55194b1 (07-02-2023 Customer,Realtor SignUp forms)
                    </DropdownButton>
                </ul>
            </div>
        </div>
    );
}

export default navbar;