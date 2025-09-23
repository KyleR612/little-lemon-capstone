import React from 'react';
import logo from '../images/little lemon logo.jpg';


const Nav = () => {
    return(
    <nav>
        <a href='/'></a>
        <img src={logo} alt='little lemon logo'/>
    </nav>
    );
}; 

export default Nav;