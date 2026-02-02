import React from 'react';
import { Shield, Users, Target, Award, Globe, Heart, CheckCircle } from 'lucide-react';
import './CommonPage.css';

const About = () => {
    return (
        <div className="common-page">
            <div className="page-header about-bg">
                <div className="header-content">
                    <h1>About Namo India</h1>
                    <p className="header-subtitle">Discovering India, One Journey at a Time</p>
                </div>
            </div>

            <div className="container">
                {/* Intro Section */}
                <section className="about-section intro-section">
                    <div className="about-grid">
                        <div className="about-text-content">
                            <span className="section-tag">Who We Are</span>
                            <h2>Your Trusted Partner in Exploring the Incredible.</h2>
                            <p>
                                At Namo India, we believe that travel is more than just visiting a place; it's about connecting with the soul of a destination.
                                Founded with a passion for the Himalayas and the diverse culture of India, we have grown into a premier travel agency
                                dedicated to crafting unforgettable experiences.
                            </p>
                            <p>
                                Whether you seek the thrill of high-altitude adventure in Ladakh, the serenity of Kerala's backwaters, or the spiritual
                                aura of Varanasi, we are here to guide you every step of the way.
                            </p>
                            <div className="about-stats-row">
                                <div className="stat-item">
                                    <span className="stat-number">7+</span>
                                    <span className="stat-label">Years Experience</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">5k+</span>
                                    <span className="stat-label">Happy Travelers</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">50+</span>
                                    <span className="stat-label">Destinations</span>
                                </div>
                            </div>
                        </div>
                        <div className="about-image-wrapper">
                            <img src="/images/hero2.png" alt="Travel Experience" className="about-feature-img" />
                            <div className="experience-badge">
                                <Award size={32} />
                                <span>Certified Experts</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="about-section mission-section">
                    <div className="mission-grid">
                        <div className="mission-card">
                            <div className="icon-box">
                                <Target size={32} />
                            </div>
                            <h3>Our Mission</h3>
                            <p>
                                To provide authentic, sustainable, and personalized travel experiences that showcase the true beauty of India while uplifting local communities.
                            </p>
                        </div>
                        <div className="mission-card">
                            <div className="icon-box">
                                <Globe size={32} />
                            </div>
                            <h3>Our Vision</h3>
                            <p>
                                To be the world's most trusted gateway to India, known for creating journeys that inspire, educate, and transform lives.
                            </p>
                        </div>
                        <div className="mission-card">
                            <div className="icon-box">
                                <Heart size={32} />
                            </div>
                            <h3>Our Values</h3>
                            <p>
                                We prioritize integrity, customer satisfaction, and eco-friendly practices in every trip we plan. Your happiness is our success.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="about-section features-section">
                    <div className="section-header">
                        <span className="section-tag">Why Choose Us</span>
                        <h2>Why Travel with Namo India?</h2>
                    </div>
                    <div className="features-grid">
                        <div className="feature-item">
                            <CheckCircle className="feature-icon" size={24} />
                            <div>
                                <h4>Expert Guidance</h4>
                                <p>Our team consists of travel experts with deep local knowledge.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <CheckCircle className="feature-icon" size={24} />
                            <div>
                                <h4>Tailor-Made Packages</h4>
                                <p>We customize every itinerary to suit your preferences and budget.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <CheckCircle className="feature-icon" size={24} />
                            <div>
                                <h4>24/7 Support</h4>
                                <p>We are with you around the clock to ensure a seamless journey.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <CheckCircle className="feature-icon" size={24} />
                            <div>
                                <h4>Best Price Guarantee</h4>
                                <p>Premium experiences at the most competitive prices in the market.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
