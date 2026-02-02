import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, MapPin, CheckCircle, Star, ArrowRight } from 'lucide-react';
import './CommonPage.css';


// destinationData is imported from ../data/destinationData


import { destinationData } from '../data/destinationData';
import { packagesData } from '../data/packagesData';

const DestinationDetails = () => {
    const { id } = useParams();
    const info = destinationData[id] || destinationData.himachal;
    const packages = packagesData[id] || packagesData.himachal;

    return (
        <div className="common-page">
            <div
                className={`page-header ${!info.bg?.includes('/') ? info.bg : ''}`}
                style={info.bg?.includes('/') ? { backgroundImage: `url(${info.bg})` } : {}}
            >
                <div className="header-content">
                    <h1>{info.title} Packages</h1>
                    <p className="header-subtitle">{info.desc}</p>
                </div>
            </div>

            <div className="container">
                <section className="detail-section">
                    <div className="section-header">
                        <span className="section-tag">Best Selling</span>
                        <h2>Exclusive {info.title} Itineraries</h2>
                    </div>

                    <div className="packages-grid">
                        {packages.map((pkg) => (
                            <div key={pkg.id} className="package-card">
                                <div className="pkg-image-wrapper">
                                    <img src={pkg.image} alt={pkg.title} />
                                    <div className="pkg-badges">
                                        <span className="pkg-rating"><Star size={14} fill="currentColor" /> {pkg.rating}</span>
                                    </div>
                                </div>
                                <div className="pkg-content">
                                    <div className="pkg-meta">
                                        <span className="pkg-duration"><Clock size={16} /> {pkg.duration}</span>
                                    </div>
                                    <h3 className="pkg-title">{pkg.title}</h3>
                                    <div className="pkg-features">
                                        {pkg.features.slice(0, 3).map((feature, idx) => (
                                            <span key={idx} className="feature-pill"><CheckCircle size={12} /> {feature}</span>
                                        ))}
                                    </div>
                                    <div className="pkg-footer">
                                        <div className="pkg-price">
                                            <span className="price-label">Starting From</span>
                                            <span className="price-value">{pkg.price}</span>
                                        </div>
                                        <Link to={`/package/${pkg.id}`} className="pkg-btn">
                                            View Details <ArrowRight size={18} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DestinationDetails;
