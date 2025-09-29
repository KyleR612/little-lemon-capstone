import React from 'react';
import logo from '../src/Images/little lemon logo.jpg';


function Nav() {
    return (
        <nav>
            <a href='/'></a>
            <img src={logo} alt='little lemon logo'/>


            <ul class="container">
                <li><a href='/'>Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservations</a></li>
            </ul>
        </nav>
    );
} 

export default Nav;