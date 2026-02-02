import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { destinationData } from '../data/destinationData';
import './CommonPage.css';

const Destinations = () => {
    return (
        <div className="common-page">
            <div className="page-header" style={{ backgroundImage: "url('/images/hmchl.jpg')" }}>
                <div className="header-content">
                    <h1>Explore Our Destinations</h1>
                    <p className="header-subtitle">Discover the most beautiful places in India</p>
                </div>
            </div>

            <div className="container">
                <section className="detail-section">
                    <div className="section-header">
                        <span className="section-tag">Top Locations</span>
                        <h2>Choose Your Next Adventure</h2>
                    </div>

                    <div className="grid">
                        {Object.entries(destinationData).map(([key, destination]) => (
                            <div key={key} className="hotel-card-item">
                                <Link to={`/destination/${key}`}>
                                    <div
                                        className={`hotel-card-img ${destination.bg}`}
                                        style={destination.bg.includes('/') ? { backgroundImage: `url(${destination.bg})` } : {}}
                                    >
                                        <div className="destination-overlay">
                                            <h3>{destination.title}</h3>
                                        </div>
                                    </div>
                                </Link>
                                <div className="hotel-card-content">
                                    <h3>{destination.title}</h3>
                                    <p style={{ color: '#64748b', margin: '10px 0 20px', lineHeight: '1.6' }}>
                                        {destination.desc}
                                    </p>
                                    <Link to={`/destination/${key}`} className="pkg-btn" style={{ justifyContent: 'center', width: '100%' }}>
                                        Explore {destination.title} <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Destinations;
