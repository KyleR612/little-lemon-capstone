import logo from '../src/Images/little lemon logo.jpg';
import React, { useState } from "react";


const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a href="/" className="logo"> 
            <img src={logo} alt='little lemon logo' height='70' width='200'/>
            </a>
            
            {/* mobile navbar */}
            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            

            {/* nav items */}
            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li>
                <a class="active" href="/">Home</a>
                </li>
                <li>
                    <a class="active" href="/">About</a>
                </li>
                <li>
                    <a class="active" href="/">Services</a>
                </li>
                <li>
                    <a class="active" href="/">Menu</a>
                </li>
                <li>
                    <a class="active" href="/">Reservations</a>
                </li>
                <li>
                    <a class="active" href="/">Order Online</a>
                </li>
            </ul>
        </nav>    
    );
} 

export default Nav;