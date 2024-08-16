import React from 'react';
import '../styles/Footer.css';
import Googleplay from '../logo/googleplay.png';
import Insta from '../logo/instagram.jpg';
import Apple from '../logo/apple.png';
import YouTube from '../logo/youtube.png';
import Twitter from '../logo/twitter.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>EYEGLASSES</h3>
                    <ul>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                        <li>Fastrack</li>
                        <li>Rimless</li>
                        <li>Titan</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>SUNGLASSES</h3>
                    <ul>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Rimless</li>
                        <li>Fastrack</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>CONTACT LENSES</h3>
                    <ul>
                        <li>Bausch & Lomb</li>
                        <li>Johnson & Johnson</li>
                        <li>Alcon</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>ACCOUNT</h3>
                    <ul>
                        <li>Our Policies</li>
                        <li>My Account</li>
                        <li>Create an Account</li>
                        <li>Tata Neu Pass</li>
                        <li>Titan Encircle</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>ABOUT SPECGO</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>USEFUL LINKS</h3>
                    <ul>
                        <li>Store Locations</li>
                        <li>Business Partner</li>
                        <li>EyeX Compatible App</li>
                        <li>Hearing Aids</li>
                        <li>Exercise Your Rights</li>
                        <li>SpecGo</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div></div>
                <div className="contact-info">
                    <p>REACH US AT</p>
                    <p>cs@SpecGo.com</p>
                    <p>6374620339</p>
                </div>
            </div>
            <div className="social-links">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={Insta} alt="Instagram" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <img src={YouTube} alt="YouTube" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src={Twitter} alt="Twitter" />
                </a>
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                        <img src={Googleplay} alt="Google Play" />
                    </a>
                    <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                        <img className="apple" src={Apple} alt="App Store" />
                    </a>
            </div>
            <div className="footer-copy">
                <p>&copy; 2024 SpecGo. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;