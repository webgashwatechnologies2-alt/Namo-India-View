import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube, Send } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-container">
                    <div className="footer-grid">
                        {/* About Column */}
                        <div className="footer-col">
                            <Link to="/" className="footer-logo">
                                <img src="/namologo.png" alt="Namo India Logo" className="footer-logo-img" />
                            </Link>
                            <p className="footer-desc">
                                Discover the beauty of India with Namo India. We provide premium travel experiences,
                                from the mystical Himalayas to the serene beaches of the south.
                            </p>
                            <div className="social-links">
                                <a href="#"><Facebook size={20} /></a>
                                <a href="#"><Instagram size={20} /></a>
                                <a href="#"><Twitter size={20} /></a>
                                <a href="#"><Youtube size={20} /></a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-col">
                            <h3>Quick Links</h3>
                            <ul className="footer-links">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                                <li><Link to="/pay-now">Pay Now</Link></li>
                                <li><Link to="/booking/hotel">Book Hotel</Link></li>
                            </ul>
                        </div>

                        {/* Policies */}
                        <div className="footer-col">
                            <h3>Policies</h3>
                            <ul className="footer-links">
                                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
                                <li><Link to="/refund-policy">Refund Policy</Link></li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="footer-col">
                            <h3>Contact US</h3>
                            <div className="contact-info">
                                <div className="contact-item">
                                    <Phone size={18} />
                                    <span>+91 98168 80442</span>
                                </div>
                                <div className="contact-item">
                                    <Mail size={18} />
                                    <span>info@namoindia.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-container">
                    <div className="footer-bottom-content">
                        <div className="footer-bottom-left">
                           <p style={{ textAlign: 'left' }}>
                                &copy; {new Date().getFullYear()} Namo India View. All rights reserved.
                                </p>

                        </div>
                        <div className="footer-bottom-right">
                            <img src="/gashwa -logo.gif" alt="Gashwa Logo" className="gashwa-logo" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
