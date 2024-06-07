// Footer.js

import React from 'react';
import {Link} from 'react-router-dom'
import '../footer.css'; // Import the CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>About Us</h2>
                    <p>
                        Your company description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/auth">Join Us</Link></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h2>Contact Us</h2>
                    <div className="contact-info">
                        <p><i className="fa fa-map-marker"></i>Arunachal Pradesh ,India </p>
                        <p><i className="fa fa-envelope"></i>info@example.com</p>
                        <p><i className="fa fa-phone"></i>(123) 456-7890</p>
                    </div>
                    <div className="social-icons">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
