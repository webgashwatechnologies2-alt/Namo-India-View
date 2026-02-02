import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, MapPin, Wifi, Coffee, Wind, ChevronLeft, CheckCircle, Bath, Tv, Waves } from 'lucide-react';
import { hotelsData } from '../data/hotelsData';
import './CommonPage.css';

const HotelInnerDetails = () => {
    const { hotelId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const hotel = hotelsData.find(h => h.id === hotelId);

    if (!hotel) {
        return <div className="container">Hotel not found.</div>;
    }

    const amenityIcons = {
        'Free WiFi': <Wifi size={20} />,
        'Breakfast included': <Coffee size={20} />,
        'Air Conditioned': <Wind size={20} />,
        'Pool': <Waves size={20} />,
        'Gym': <CheckCircle size={20} />,
        'Restaurant': <Coffee size={20} />,
        'Spa': <Waves size={20} />,
        'Tea/Coffee Maker': <Coffee size={20} />,
        'Flat-screen TV': <Tv size={20} />,
        'Room Service': <CheckCircle size={20} />,
        'Infinity Pool': <Waves size={20} />,
        'Nature Walk': <Wind size={20} />,
        'Fine Dining': <Coffee size={20} />,
        'Fitness Center': <CheckCircle size={20} />,
        'Riverside View': <Waves size={20} />,
        'Garden': <Wind size={20} />,
        'WiFi': <Wifi size={20} />,
        'Bar': <Coffee size={20} />,
        'Adventure Desk': <CheckCircle size={20} />,
        'Parking': <CheckCircle size={20} />
    };

    return (
        <div className="hotel-inner-page">
            <div className="hotel-inner-gallery" style={{ backgroundImage: `url(${hotel.image})` }}>
                <div className="gallery-overlay">
                    <button onClick={() => navigate(-1)} className="back-btn">
                        <ChevronLeft size={24} /> Back
                    </button>
                    <div className="gallery-info">
                        <div className="type-badge">{hotel.type}</div>
                        <h1>{hotel.name}</h1>
                        <p><MapPin size={18} /> {hotel.location}</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="hotel-grid">
                    <div className="hotel-main">
                        <section className="hotel-section-card">
                            <h2>About the Hotel</h2>
                            <p>{hotel.description}</p>

                            <div className="rating-display">
                                {[...Array(hotel.rating)].map((_, i) => (
                                    <Star key={i} size={20} fill="#ff6b35" color="#ff6b35" />
                                ))}
                                <span>{hotel.rating} Star Luxury Stay</span>
                            </div>
                        </section>

                        <section className="hotel-section-card">
                            <h2>Amenities & Facilities</h2>
                            <div className="amenities-grid">
                                {hotel.amenities.map((amenity, index) => (
                                    <div key={index} className="amenity-item">
                                        <div className="amenity-icon">
                                            {amenityIcons[amenity] || <CheckCircle size={20} />}
                                        </div>
                                        <span>{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="hotel-sidebar">
                        <div className="booking-card">
                            <div className="price-tag">
                                <span className="label">Starts from</span>
                                <span className="amount">₹{hotel.price}</span>
                                <span className="period">/ night</span>
                            </div>
                            <button className="btn-primary full-width" onClick={() => navigate(`/booking/${hotel.id}`)}>
                                Book This Stay
                            </button>
                            <p className="note">Free cancellation available for most rooms.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelInnerDetails;
