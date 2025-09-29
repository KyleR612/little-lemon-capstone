import React from 'react';
import logo from '../src/Images/little lemon logo.jpg';


function Nav() {
    return (
        <nav>
            <img src={logo} alt='little lemon logo' height='100' width='300'/>

            <nav class="navbar">
            <ul class="nav-list">
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservations</a></li>
            </ul>
        </nav>
        </nav>
    );
} 

export default Nav;