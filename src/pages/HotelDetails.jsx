import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, Wifi, Coffee, Wind, ChevronRight, Waves, Tv, CheckCircle, Shield, Utensils, Zap, Car } from 'lucide-react';
import { hotelsData } from '../data/hotelsData';
import './CommonPage.css';

const amenityIconMap = {
    'Free WiFi': <Wifi size={14} />,
    'WiFi': <Wifi size={14} />,
    'Restaurant': <Coffee size={14} />,
    'Fine Dining': <Utensils size={14} />,
    'Pool': <Waves size={14} />,
    'Infinity Pool': <Waves size={14} />,
    'Spa': <Waves size={14} />,
    'Gym': <Shield size={14} />,
    'Fitness Center': <Shield size={14} />,
    'Riverside View': <Waves size={14} />,
    'Garden': <Wind size={14} />,
    'Bar': <Coffee size={14} />,
    'Rooftop Bar': <Coffee size={14} />,
    'Flat-screen TV': <Tv size={14} />,
    'Room Service': <CheckCircle size={14} />,
    'Parking': <Car size={14} />,
    'Heritage Property': <Shield size={14} />,
    'Breakfast included': <Coffee size={14} />,
    'Air Conditioned': <Wind size={14} />,
};

const destinationInfo = {
    shimla: { title: 'Luxury Stays in Shimla', bg: '/images/luxery-stay-shimla-bg.jpg', desc: 'Experience royal comfort in the heart of Shimla.' },
    manali: { title: 'Riverside Hotels in Manali', bg: '/images/riversidehtlmanalai.jpg', desc: 'Stay close to nature in our premium manali hotels.' },
};

const HotelDetails = () => {
    const { id } = useParams();
    const [selectedType, setSelectedType] = useState('Super Deluxe');

    const info = destinationInfo[id] || destinationInfo.shimla;
    const filteredHotels = hotelsData.filter(h => h.destinationId === id && h.type === selectedType);

    const isImagePath = info.bg?.startsWith('/') || info.bg?.includes('.');

    return (
        <div className="common-page">
            <div
                className={`page-header ${!isImagePath ? info.bg : ''}`}
                style={isImagePath ? { backgroundImage: `url(${info.bg})` } : {}}
            >
                <div className="header-content container">
                    <h1>{info.title}</h1>
                    <p>{info.desc}</p>
                </div>
            </div>

            <div className="container">
                <section className="hotel-catalog-section">
                    <div className="catalog-header">
                        <div className="type-filters">
                            <button
                                className={`filter-btn ${selectedType === 'Deluxe' ? 'active' : ''}`}
                                onClick={() => setSelectedType('Deluxe')}
                            >
                                Deluxe Hotels
                            </button>
                            <button
                                className={`filter-btn ${selectedType === 'Super Deluxe' ? 'active' : ''}`}
                                onClick={() => setSelectedType('Super Deluxe')}
                            >
                                Super Deluxe Hotels
                            </button>
                        </div>
                        <p className="results-count">Showing {filteredHotels.length} premium hotels</p>
                    </div>

                    <div className="hotel-cards-grid">
                        {filteredHotels.length > 0 ? (
                            filteredHotels.map((hotel) => (
                                <div key={hotel.id} className="premium-hotel-card">
                                    <div className="card-img-wrapper">
                                        <div className="hotel-card-img" style={{ backgroundImage: `url(${hotel.image})` }}></div>
                                        <div className="hotel-type-tag">{hotel.type}</div>
                                    </div>
                                    <div className="hotel-card-body">
                                        <div className="card-top">
                                            <h3>{hotel.name}</h3>
                                            <div className="hotel-stars">
                                                {[...Array(hotel.rating)].map((_, i) => <Star key={i} size={14} fill="#ff6b35" color="#ff6b35" />)}
                                            </div>
                                        </div>

                                        <div className="hotel-loc">
                                            <MapPin size={14} /> {hotel.location}
                                        </div>

                                        <p className="hotel-short-desc">{hotel.shortDesc}</p>

                                        <div className="card-amenities-preview">
                                            {hotel.amenities.slice(0, 4).map((amenity, idx) => (
                                                <span key={idx} title={amenity}>
                                                    {amenityIconMap[amenity] || <div className="dot"></div>}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="card-bottom">
                                            <div className="price-info">
                                                <span className="from">From</span>
                                                <span className="price">₹{hotel.price}</span>
                                                <span className="tax">/night</span>
                                            </div>
                                            <Link to={`/hotel-details/${hotel.id}`} className="view-details-btn">
                                                View Details <ChevronRight size={16} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no-hotels">No hotels found in this category for {id}.</div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HotelDetails;
