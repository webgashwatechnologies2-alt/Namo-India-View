import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './CommonPage.css';

const Contact = () => {
    return (
        <div className="common-page">
            <div className="page-header himachal-bg">
                <h1>Contact Us</h1>
            </div>
            <div className="container">
                <section className="contact-section">
                    <div className="contact-grid">
                        <div className="contact-info-cards">
                            <div className="contact-info-card">
                                <MapPin className="card-icon" />
                                <h3>Our Office</h3>
                                <p>123 Travel Street, Shimla,<br />Himachal Pradesh, India</p>
                            </div>
                            <div className="contact-info-card">
                                <Phone className="card-icon" />
                                <h3>Call Us</h3>
                                <p>+91 98168 80442<br />+91 98168 80442</p>
                            </div>
                            <div className="contact-info-card">
                                <Mail className="card-icon" />
                                <h3>Email Us</h3>
                                <p>info@namoindia.com<br />support@namoindia.com</p>
                            </div>
                        </div>

                        <div className="contact-form-container">
                            <h2>Send us a Message</h2>
                            <form className="contact-form">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <label>Subject</label>
                                    <input type="text" placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea placeholder="Your Message" rows="5"></textarea>
                                </div>
                                <button type="submit" className="btn-primary full-width">
                                    Send Message <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;
