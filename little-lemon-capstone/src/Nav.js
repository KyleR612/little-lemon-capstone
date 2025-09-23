import React from 'react';
import logo from '../Images/little lemon logo.jpg';


function Nav() {
    return (
        <nav>
            <a href='/'></a>
            <img src={logo} alt='little lemon logo'/>
        </nav>
    );
} 

export default Nav;