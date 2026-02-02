import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Phone, Mail, MapPin, Gauge, ShieldCheck, Users, Briefcase, Star, Clock, Car } from 'lucide-react';
import { motion } from 'framer-motion';
import './CommonPage.css';

const bookingData = {
    cab: {
        title: "Cab Booking",
        desc: "Premium cab services for a comfortable and safe journey through the hills.",
        bg: "/images/transportbg.jpg"
    },

    hotel: {
        title: 'Hotel Booking',
        desc: 'Book from a wide range of premium hotels across India.',
        bg: '/images/riversidehtlmanalai.jpg'
    },
    volvo: {
        title: 'Volvo Bus Booking',
        desc: 'Travel in luxury with our Volvo bus services.',
        bg: '/images/Volvo-Buses.jpg'
    },
    railway: {
        title: 'Railway Ticket Booking',
        desc: 'Hassle-free railway ticket reservations.',
        bg: '/images/railwayas.jpg'
    },
    flight: {
        title: 'Flight Booking',
        desc: 'Best deals on domestic and international flights.',
        bg: '/images/flight.jpg'
    },
};

const cabFleet = [
    {
        name: 'Toyota Innova Crysta',
        type: 'Premium SUV',
        capacity: '6+1 Seater',
        bags: '4 Large Bags',
        image: '/images/crystanew.jpg',
        features: ['AC', 'Leather Seats', 'Music System', 'Experienced Driver'],
        price: 'Starts ₹3,500/day'
    },
    {
        name: 'Tempo Traveller',
        type: 'Luxury Van',
        capacity: '12+1 Seater',
        bags: '10 Large Bags',
        image: '/images/tempo.jpg',
        features: ['Pushback Seats', 'LED TV', 'Spacious Boot', 'AC'],
        price: 'Starts ₹5,500/day'
    },
    {
        name: 'Mahindra XUV700',
        type: 'Luxury SUV',
        capacity: '6+1 Seater',
        bags: '3 Large Bags',
        image: '/images/xuv700.jpg',
        features: ['Panoramic Sunroof', 'Dual Zone AC', 'Premium Audio', 'Safe Trip'],
        price: 'Starts ₹4,000/day'
    },
    {
        name: 'Maruti Suzuki Dzire',
        type: 'Compact Sedan',
        capacity: '4+1 Seater',
        bags: '2 Medium Bags',
        image: '/images/dezire.jpg',
        features: ['AC', 'Clean Interior', 'Punctual', 'Economical'],
        price: 'Starts ₹2,500/day'
    }
];

const hotelShowcase = [
    {
        id: 'mountain-view-shimla-1',
        name: 'The Oberoi Cecil',
        location: 'Shimla',
        type: 'Luxury Heritage',
        image: '/images/theoberoi.jpg',
        features: ['Royal Suites', 'Heated Pool', 'Fine Dining', 'Spa & Wellness'],
        price: 'Starts ₹15,500/night',
        rating: 5
    },
    {
        id: 'manali-resort-4',
        name: 'Span Resort & Spa',
        location: 'Manali',
        type: 'Riverside Luxury',
        image: '/images/spamanali.jpg',
        features: ['River Views', 'Organic Garden', 'Heli-Skiing', 'Private Balcony'],
        price: 'Starts ₹12,000/night',
        rating: 5
    },
    {
        id: 'mountain-view-shimla-3',
        name: 'Wildflower Hall',
        location: 'Shimla Hills',
        type: 'Premium Mountain Resort',
        image: '/images/Wildflower.jpg',
        features: ['Infinity Pool', 'Trekking Trails', 'Yoga Pavilion', 'Luxury Service'],
        price: 'Starts ₹22,000/night',
        rating: 5
    },
    {
        id: 'mountain-view-shimla-2',
        name: 'Radisson Jass',
        location: 'Shimla',
        type: 'Premium Comfort',
        image: '/images/radison.jpg',
        features: ['Valley Views', 'Modern Gym', 'Business Center', 'Multi-Cuisine'],
        price: 'Starts ₹8,500/night',
        rating: 4
    }
];

const BookingDetails = () => {
    const { id } = useParams();

    let data = bookingData[id];
    let isSpecificBooking = false;

    if (!data) {
        data = { title: 'Booking Request', desc: `Requesting booking for ${id.replace(/-/g, ' ')}`, bg: 'himachal-bg' };
        isSpecificBooking = true;
    }

    return (
        <div className="common-page">
            <div
                className={`page-header ${!data.bg.includes('/') ? data.bg : ''}`}
                style={data.bg.includes('/') ? { backgroundImage: `url(${data.bg})` } : {}}
            >
                <div className="header-content container">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {data.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        {data.desc}
                    </motion.p>
                </div>
            </div>

            <div className="container">
                {id === 'cab' && (
                    <section className="fleet-section">
                        <div className="section-header centered">
                            <span className="section-tag">Our Premium Fleet</span>
                            <h2>Choose Your Preferred Ride</h2>
                            <p>Well-maintained, clean, and driven by professional mountain experts.</p>
                        </div>

                        <div className="fleet-grid">
                            {cabFleet.map((cab, index) => (
                                <motion.div
                                    className="fleet-card"
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="fleet-img">
                                        <img src={cab.image} alt={cab.name} />
                                        <div className="fleet-type">{cab.type}</div>
                                    </div>
                                    <div className="fleet-body">
                                        <h3>{cab.name}</h3>
                                        <div className="fleet-specs">
                                            <span><Users size={16} /> {cab.capacity}</span>
                                            <span><Briefcase size={16} /> {cab.bags}</span>
                                        </div>
                                        <div className="fleet-features">
                                            {cab.features.map((feat, fIdx) => (
                                                <span key={fIdx} className="feat-pill">{feat}</span>
                                            ))}
                                        </div>
                                        <div className="fleet-footer">
                                            <span className="fleet-price">{cab.price}</span>
                                            <div className="fleet-rating">
                                                <Star size={14} fill="#ffb800" color="#ffb800" />
                                                <span>4.9</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="cab-trust-marks">
                            <div className="trust-item">
                                <ShieldCheck size={32} />
                                <div>
                                    <h4>Verified Drivers</h4>
                                    <p>Background checked & trained professionals.</p>
                                </div>
                            </div>
                            <div className="trust-item">
                                <Clock size={32} />
                                <div>
                                    <h4>On-Time Pickup</h4>
                                    <p>Zero wait time guarantee for all bookings.</p>
                                </div>
                            </div>
                            <div className="trust-item">
                                <Gauge size={32} />
                                <div>
                                    <h4>Transparent Pricing</h4>
                                    <p>No hidden charges or unexpected tolls.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {id === 'hotel' && (
                    <section className="fleet-section">
                        <div className="section-header centered">
                            <span className="section-tag">PREMIUM STAYS</span>
                            <h2>Featured Luxury Hotels</h2>
                            <p>Hand-picked premium hotels for an unforgettable experience.</p>
                        </div>

                        <div className="fleet-grid">
                            {hotelShowcase.map((hotel, index) => (
                                <motion.div
                                    key={index}
                                    className="fleet-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="fleet-img">
                                        <img src={hotel.image} alt={hotel.name} />
                                        <div className="fleet-type">{hotel.type}</div>
                                    </div>
                                    <div className="fleet-body">
                                        <h3>{hotel.name}</h3>
                                        <div className="fleet-specs">
                                            <span><MapPin size={14} /> {hotel.location}</span>
                                            <div className="fleet-rating">
                                                <Star size={14} fill="#ff6b35" color="#ff6b35" />
                                                <span>{hotel.rating}.0</span>
                                            </div>
                                        </div>
                                        <div className="fleet-features">
                                            {hotel.features.map((feat, i) => (
                                                <span key={i} className="feat-pill">{feat}</span>
                                            ))}
                                        </div>
                                        <div className="fleet-footer">
                                            <div className="fleet-price">{hotel.price}</div>
                                            <Link to={`/hotel-details/${hotel.id}`} className="book-pill-btn" style={{ background: '#ff6b35', color: '#fff', border: 'none', padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', textDecoration: 'none' }}>View Details</Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="cab-trust-marks">
                            <div className="trust-item">
                                <ShieldCheck size={32} />
                                <div>
                                    <h4>Safe & Hygienic</h4>
                                    <p>Our hotels follow strict safety & sanitation protocols.</p>
                                </div>
                            </div>
                            <div className="trust-item">
                                <Star size={32} />
                                <div>
                                    <h4>Best Price Guarantee</h4>
                                    <p>Find a better rate? We will match it, guaranteed.</p>
                                </div>
                            </div>
                            <div className="trust-item">
                                <Users size={32} />
                                <div>
                                    <h4>24/7 Concierge</h4>
                                    <p>Round-the-clock support for all your needs.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                <section className="booking-main-section">
                    <div className="booking-grid">
                        <div className="booking-form-side">
                            <div className="form-premium-card">
                                <div className="card-header">
                                    <h2>Quick Booking Request</h2>
                                    <p>Fill in your details and we'll get back to you within 30 minutes.</p>
                                </div>
                                <form className="premium-form">
                                    <div className="form-row">
                                        <div className="form-input-group">
                                            <label><User size={18} /> Full Name</label>
                                            <input type="text" placeholder="Your Name" required />
                                        </div>
                                        <div className="form-input-group">
                                            <label><Phone size={18} /> Phone Number</label>
                                            <input type="tel" placeholder="+91 98168 80442" required />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-input-group">
                                            <label><Mail size={18} /> Email Address</label>
                                            <input type="email" placeholder="email@example.com" required />
                                        </div>
                                        <div className="form-input-group">
                                            <label><Calendar size={18} /> Travel Date</label>
                                            <input type="date" required />
                                        </div>
                                    </div>

                                    {(id === 'hotel' || isSpecificBooking) && (
                                        <div className="form-input-group">
                                            <label><MapPin size={18} /> Destination / Hotel Name</label>
                                            <input type="text" placeholder="Where are you planning to stay?" defaultValue={isSpecificBooking ? id.replace(/-/g, ' ') : ''} required />
                                        </div>
                                    )}

                                    {id === 'cab' && (
                                        <div className="form-input-group">
                                            <label><Car size={18} /> Preferred Cab Type</label>
                                            <select required>
                                                <option value="">Select Vehicle Type</option>
                                                <option value="sedan">Sedan (Dzire/Etios)</option>
                                                <option value="suv">SUV (Innova/XUV)</option>
                                                <option value="luxury">Luxury SUV (Crysta)</option>
                                                <option value="traveller">Tempo Traveller (12/17/26 Seater)</option>
                                            </select>
                                        </div>
                                    )}

                                    <div className="form-input-group">
                                        <label>Special Instructions (Optional)</label>
                                        <textarea placeholder="Any specific requirements or pickup details..." rows="3"></textarea>
                                    </div>

                                    <button type="submit" className="booking-submit-btn">
                                        Confirm Booking Request
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="booking-info-side">
                            <div className="info-modern-card">
                                <h3>Why Book With Us?</h3>
                                <ul className="modern-list">
                                    <li>- Premium hand-picked services</li>
                                    <li>- Hand-picked destination experts</li>
                                    <li>- 24/7 Professional assistance</li>
                                    <li>- Flexible cancellation policies</li>
                                    <li>- Secure premium experiences</li>
                                </ul>
                                <div className="contact-small-card">
                                    <h4>Need Urgent Help?</h4>
                                    <p>Contact our booking specialist directly:</p>
                                    <a href="tel:+919816880442" className="phone-link">+91 98168 80442</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default BookingDetails;
