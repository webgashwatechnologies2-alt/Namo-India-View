import React from 'react';
import './Features.css';

const Features = () => {
    return (
        <section className="features-section">
            <div className="features-container">
                <h2 className="features-title">WHY CHOOSE US</h2>
                <div className="feature-columns">
                    <div className="feature-col">
                        <div className="feature-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                            </svg>
                        </div>
                        <h4>Best Price Guarantee</h4>
                        <p>Get the best deals on hotels, flights, and tour packages with our price match guarantee</p>
                    </div>
                    <div className="feature-col">
                        <div className="feature-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                        </div>
                        <h4>24/7 Customer Support</h4>
                        <p>Round-the-clock assistance for all your travel needs and emergency support</p>
                    </div>
                    <div className="feature-col">
                        <div className="feature-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                        <h4>Verified Partners</h4>
                        <p>Trusted hotels, transport services, and tour operators with quality assurance</p>
                    </div>
                    <div className="feature-col">
                        <div className="feature-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
                                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
                            </svg>
                        </div>
                        <h4>Customized Itineraries</h4>
                        <p>Personalized travel plans tailored to your preferences and budget</p>
                    </div>
                    <div className="feature-col">
                        <div className="feature-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                                <polyline points="9 22 9 12 15 12 15 22"/>
                            </svg>
                        </div>
                        <h4>Heritage Tours</h4>
                        <p>Explore India's rich cultural heritage with expert guides and authentic experiences</p>
                    </div>
                    <div className="feature-col">
                        <div className="feature-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                                <line x1="12" y1="22.08" x2="12" y2="12"/>
                            </svg>
                        </div>
                        <h4>Adventure Activities</h4>
                        <p>Thrilling adventures including trekking, rafting, paragliding, and wildlife safaris</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
