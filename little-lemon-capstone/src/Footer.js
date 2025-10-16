import React from 'react';
import logo from '../src/Images/little lemon logo.jpg';

const Footer = () => {
    return(
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt='little lemon logo' class='logo'/>
                    <p class='footer-p'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a 
                     modern twist.</p>  
                </div>
                <div>
                    <h3 class='important-links'>Important Links</h3>
                    <ul>
                        <li class='footer-li'><a href='/'>Home</a></li>
                        <li class='footer-li'><a href='/'>About</a></li>
                        <li class='footer-li'><a href='/'>Services</a></li>
                        <li class='footer-li'><a href='/'>Menu</a></li>
                        <li class='footer-li'><a href='/'>Reservations</a></li>
                        <li class='footer-li'><a href='/'>Order Online</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class='contact'>Contact</h3>
                    <ul>
                        <li class='address'>Address: <br/> 123 Towncity, USA</li>
                        <li class='address'>Phone Number: <br/> (000) 000-0000</li>
                        <li class='address'>Email: <br/> little@lemon.com</li>
                    </ul>
                </div>

                <div>
                    <h3 class='social'>Social Media Links</h3>
                    <ul>
                        <li class='media'><a href='/'>Facebook</a></li>
                        <li class='media'><a href='/'>Instagram</a></li>
                        <li class='media'><a href='/'>Twitter</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}
export default Footer;