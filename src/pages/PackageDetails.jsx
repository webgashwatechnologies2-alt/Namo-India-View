import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, MapPin, CheckCircle, XCircle, Star, Calendar, ArrowLeft, Phone, Mail } from 'lucide-react';
import { packagesData } from '../data/packagesData';
import './CommonPage.css';

const PackageDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Flatten the data to search for the package ID across all categories
    const allPackages = Object.values(packagesData).flat();
    const pkg = allPackages.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!pkg) {
        return (
            <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
                <h2>Package not found</h2>
                <Link to="/" className="btn-primary">Return Home</Link>
            </div>
        );
    }

    return (
        <div className="package-details-page">
            <div className="package-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${pkg.image})` }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="hero-content"
                    >
                        <span className="pkg-tag">PREMIUM PACKAGE</span>
                        <h1>{pkg.title}</h1>
                        <div className="hero-meta">
                            <span><Clock size={18} /> {pkg.duration}</span>
                            <span><Star size={18} fill="#ffb700" color="#ffb700" /> {pkg.rating} Rating</span>
                        </div>
                        <div className="hero-price">
                            From <span>{pkg.price}</span> <small>per person</small>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="container package-container">
                <div className="package-layout">
                    <div className="package-main">
                        <section className="pkg-section">
                            <h3>Overview</h3>
                            <p>{pkg.overview || "Embark on an unforgettable journey with our carefully curated package. Experience the best of culture, nature, and adventure."}</p>
                        </section>

                        <section className="pkg-section">
                            <h3>Itinerary</h3>
                            <div className="itinerary-timeline">
                                {pkg.itinerary && pkg.itinerary.length > 0 ? (
                                    pkg.itinerary.map((day, index) => (
                                        <motion.div
                                            key={index}
                                            className="timeline-item"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <div className="day-marker">Day {day.day}</div>
                                            <div className="day-content">
                                                <h4>{day.title}</h4>
                                                <p>{day.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))
                                ) : (
                                    <p className="no-data">Itinerary details coming soon.</p>
                                )}
                            </div>
                        </section>

                        <section className="pkg-section">
                            <h3>Inclusions & Exclusions</h3>
                            <div className="inc-exc-grid">
                                <div className="inc-box">
                                    <h4><CheckCircle size={20} className="text-green" /> Inclusions</h4>
                                    <ul>
                                        {pkg.inclusions && pkg.inclusions.length > 0 ? (
                                            pkg.inclusions.map((item, idx) => (
                                                <li key={idx}><CheckCircle size={16} /> {item}</li>
                                            ))
                                        ) : (
                                            <li>Standard inclusions apply.</li>
                                        )}
                                    </ul>
                                </div>
                                <div className="exc-box">
                                    <h4><XCircle size={20} className="text-red" /> Exclusions</h4>
                                    <ul>
                                        {pkg.exclusions && pkg.exclusions.length > 0 ? (
                                            pkg.exclusions.map((item, idx) => (
                                                <li key={idx}><XCircle size={16} /> {item}</li>
                                            ))
                                        ) : (
                                            <li>Personal expenses and others not mentioned.</li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="package-sidebar">
                        <div className="booking-card sticky-card">
                            <h3>Book This Tour</h3>
                            <div className="price-display">
                                <span>Starting from</span>
                                <div className="amount">{pkg.price}</div>
                            </div>
                            <p className="small-text">*Prices may vary based on season and availability.</p>

                            <a href="tel:+919816880442" className="btn-book-now">
                                <Phone size={18} /> Call to Book
                            </a>
                            <Link to="/contact" className="btn-enquiry">
                                <Mail size={18} /> Send Enquiry
                            </Link>

                            <div className="sidebar-features">
                                <div className="sf-item">
                                    <CheckCircle size={16} /> Instant Confirmation
                                </div>
                                <div className="sf-item">
                                    <CheckCircle size={16} /> Best Price Guarantee
                                </div>
                                <div className="sf-item">
                                    <CheckCircle size={16} /> 24/7 Support
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageDetails;
