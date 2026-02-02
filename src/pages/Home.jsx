import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { Shield, Clock, Award, Star, ArrowRight, ArrowLeft, TrendingUp, Users, MapPin, CheckCircle, Home as HomeIcon, Package } from 'lucide-react';
import './Home.css';

const destinations = [
    { name: 'Himachal', image: '/images/hero1.png', price: '₹15,000', tags: ['Adventure', 'Nature'] },
    { name: 'Spiti Valley', image: '/images/hero2.png', price: '₹22,000', tags: ['Mountains', 'Trek'] },
    { name: 'Ladakh', image: '/images/hero3.png', price: '₹28,000', tags: ['Bike Trip', 'Lakes'] },
    { name: 'Uttarakhand', image: '/images/uttarakhand.png', price: '₹18,000', tags: ['Nature', 'Peace'] },
    { name: 'Kashmir', image: '/images/hero5.jpg', price: '₹19,000', tags: ['Paradise', 'Family'] },
];

const stats = [
    { icon: <Users size={30} />, value: '15k+', label: 'Happy Travelers' },
    { icon: <TrendingUp size={30} />, value: '250+', label: 'Tours Completed' },
    { icon: <MapPin size={30} />, value: '50+', label: 'Destinations' },
    { icon: <CheckCircle size={30} />, value: '24/7', label: 'Support' }
];

const testimonials = [
    {
        name: 'Ankit Sharma',
        location: 'Delhi',
        text: 'Best travel experience ever! Everything from cab to hotel was perfectly managed. Spiti Valley was like a dream.',
        rating: 5,
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ankit'
    },
    {
        name: 'Priyanka Gupta',
        location: 'Mumbai',
        text: 'Highly professional team. The Ladakh bike trip was seamless. Recommended for anyone looking for adventure.',
        rating: 5,
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priyanka'
    },
    {
        name: 'Rahul Verma',
        location: 'Bangalore',
        text: 'Very reasonably priced packages and great service. The hotels in Shimla were top-notch. Will book again!',
        rating: 4,
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul'
    }

];

const features = [
    { icon: <Shield size={40} />, title: 'Safe Travel', desc: 'Secure and safe travel options for all our guests.' },
    { icon: <Clock size={40} />, title: '24/7 Support', desc: 'Round-the-clock assistance throughout your journey.' },
    { icon: <Award size={40} />, title: 'Expert Guides', desc: 'Experienced guides to help you explore the best spots.' },
];

const Home = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const featuredDestinations = [
        {
            title: "Explore the Himalayas",
            description: "Experience breathtaking mountain views, pristine valleys, and adventure like never before. Your journey to the roof of the world starts here.",
            image: "/images/hero1.png",
            duration: "5-7 Days",
            type: "Group Tours",
            rating: "4.9",
            destinationId: "himachal"
        },
        {
            title: "Discover Spiti Valley",
            description: "Journey through ancient monasteries, rugged landscapes, and experience the raw beauty of the Trans-Himalayan region.",
            image: "/images/hero2.png",
            duration: "6-8 Days",
            type: "Adventure",
            rating: "4.8",
            destinationId: "spiti"
        },
        {
            title: "Kashmir Paradise",
            description: "Explore the crown jewel of India with stunning Dal Lake, Mughal gardens, and snow-capped mountains all around.",
            image: "/images/hero4.png",
            duration: "4-6 Days",
            type: "Family Tours",
            rating: "4.9",
            destinationId: "kashmir"
        }
    ];

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % featuredDestinations.length);
        }, 5000); // Auto-slide every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="home">
            <Hero />

            <section className="section stats-bar">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="stat-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="stat-icon">{stat.icon}</div>
                                <div className="stat-text">
                                    <h3>{stat.value}</h3>
                                    <p>{stat.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section about-section">
                <div className="container">
                    <div className="about-grid">
                        <motion.div
                            className="about-left"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="about-badge">ABOUT NAMO INDIA</span>
                            <h2 className="about-heading">
                                Your Gateway to <span className="highlight-text">Next-Level</span> Exploration.
                            </h2>
                            <p className="about-description">
                                Namo India is a premier travel company dedicated to providing seamless domestic tour solutions.
                                We don't just book trips—we engineer experiences, combining cutting-edge technology with deep-rooted
                                local expertise for the modern explorer.
                            </p>

                            <div className="about-features-grid">
                                <div className="feature-box">
                                    <div className="feature-icon-circle">
                                        <Award size={24} />
                                    </div>
                                    <h4>Elite Standards</h4>
                                    <p>Curated luxury and safety standards across all destinations.</p>
                                </div>
                                <div className="feature-box">
                                    <div className="feature-icon-circle">
                                        <MapPin size={24} />
                                    </div>
                                    <h4>Pan-India Network</h4>
                                    <p>Direct partnerships with 50+ verified travel suppliers.</p>
                                </div>
                            </div>

                            <Link to="/about" className="btn-about-green">
                                View More Details →
                            </Link>
                        </motion.div>

                        <motion.div
                            className="about-right"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="about-image-container">
                                <img className='abtimage' src="/images/abtimg.jpg" alt="Namo India Travel" />
                                <div className="years-badge">
                                    <div className="years-number">7+</div>
                                    <div className="years-text">YEARS EXCELLENCE</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section popular-destinations-new">
                <div className="container">
                    <div className="popular-header">
                        <div className="header-left">
                            <h2>Popular Destinations</h2>
                            <p>Most searched locations this week</p>
                        </div>
                        <Link to="/destinations" className="view-all-link">View All →</Link>
                    </div>

                    <div className="popular-grid">
                        <motion.div
                            className="popular-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0 }}
                        >
                            <Link to="destination/himachal">
                                <div className="popular-card-image">
                                    <img src="/images/hmchl.jpg" alt="Himachal Pradesh" />
                                    <div className="popular-overlay">
                                        <h3>Himachal Pradesh</h3>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>

                        <motion.div
                            className="popular-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <Link to="destination/spiti">
                                <div className="popular-card-image">
                                    <img src="/images/hero2.png" alt="Spiti Valley" />
                                    <div className="popular-overlay">
                                        <h3>Spiti Valley</h3>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>

                        <motion.div
                            className="popular-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Link to="destination/ladakh">
                                <div className="popular-card-image">
                                    <img src="/images/hero3.png" alt="Leh Ladakh" />
                                    <div className="popular-overlay">
                                        <h3>Leh Ladakh</h3>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>

                        <motion.div
                            className="popular-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Link to="destination/kashmir">
                                <div className="popular-card-image">
                                    <img src="/images/kashmir.jpg" alt="Kashmir" />
                                    <div className="popular-overlay">
                                        <h3>Kashmir</h3>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section why-choose-section">
                <div className="container">
                    <div className="section-header centered">
                        <span className="section-subtitle">Why Choose Us</span>
                        <p>We provide exceptional service and unforgettable experiences</p>
                    </div>

                    <div className="why-choose-grid">
                        <motion.div
                            className="why-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0 }}
                        >
                            <div className="why-icon">
                                <Award size={40} />
                            </div>
                            <h3>Best Price Guarantee</h3>
                            <p>Get the best deals on all our packages with transparent pricing and no hidden costs.</p>
                        </motion.div>

                        <motion.div
                            className="why-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="why-icon">
                                <Clock size={40} />
                            </div>
                            <h3>24/7 Customer Support</h3>
                            <p>Our dedicated team is always available to assist you throughout your journey.</p>
                        </motion.div>

                        <motion.div
                            className="why-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="why-icon">
                                <Shield size={40} />
                            </div>
                            <h3>Verified Partners</h3>
                            <p>All our travel partners are verified and trusted for your safety and comfort.</p>
                        </motion.div>

                        <motion.div
                            className="why-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="why-icon">
                                <MapPin size={40} />
                            </div>
                            <h3>Customized Itineraries</h3>
                            <p>Tailor-made travel plans designed to match your preferences and budget.</p>
                        </motion.div>
                        <motion.div
                            className="why-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="why-icon">
                                <HomeIcon size={40} />
                            </div>
                            <h3>Heritage Tours</h3>
                            <p>Explore India's rich cultural heritage with expert guides and authentic experiences</p>
                        </motion.div>
                         <motion.div
                            className="why-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="why-icon">
                                <Package size={40} />
                            </div>
                            <h3>Adventure Activities</h3>
                            <p>Thrilling adventures including trekking, rafting, paragliding, and wildlife safaris</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section featured-slider-section">
                <div className="featured-slider">
                    {featuredDestinations.map((destination, index) => (
                        <div
                            key={index}
                            className={`featured-slide ${index === currentSlide ? 'active' : ''}`}
                            style={{
                                opacity: index === currentSlide ? 1 : 0,
                                pointerEvents: index === currentSlide ? 'auto' : 'none',
                                position: index === currentSlide ? 'relative' : 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                zIndex: index === currentSlide ? 2 : 1
                            }}
                        >
                            <div className="slide-bg-wrapper">
                                <img src={destination.image} alt={destination.title} className="slide-bg-img" />
                                <div className="slide-gradient-overlay"></div>
                            </div>

                            <div className="featured-slide-content">
                                <div className="brand-badge">
                                    <span>NAMO INDIA | EXPEDITION</span>
                                </div>

                                <h2 className="featured-title">{destination.title}</h2>
                                <p className="featured-description">{destination.description}</p>

                                <div className="featured-cta-row">
                                    <div className="slide-location-tag">
                                        <MapPin size={16} /> {destination.title}
                                    </div>
                                    <Link to={`/destination/${destination.destinationId}`} className="btn-featured-green">
                                        BOOK EXPERIENCE <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="slider-navigation">
                        <button className="nav-arrow prev" onClick={() => setCurrentSlide((prev) => (prev - 1 + featuredDestinations.length) % featuredDestinations.length)}>
                            <ArrowLeft size={20} />
                        </button>
                        <button className="nav-arrow next" onClick={() => setCurrentSlide((prev) => (prev + 1) % featuredDestinations.length)}>
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </section>
            <section className="section how-it-works-section">
                <div className="container">
                    <div className="section-header centered">
                        <span className="section-subtitle">How It Works</span>
                        <p>Simple and hassle-free booking process</p>
                    </div>

                    <div className="steps-grid">
                        <motion.div
                            className="step-card"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0 }}
                        >
                            <div className="step-number">01</div>
                            <div className="step-icon">
                                <MapPin size={35} />
                            </div>
                            <h3>Choose Your Destination</h3>
                            <p>Browse through our curated destinations and select the perfect getaway for you.</p>
                        </motion.div>

                        <div className="step-connector"></div>

                        <motion.div
                            className="step-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="step-number">02</div>
                            <div className="step-icon">
                                <CheckCircle size={35} />
                            </div>
                            <h3>Customize Your Trip</h3>
                            <p>Personalize your itinerary with our flexible packages and add-on services.</p>
                        </motion.div>

                        <div className="step-connector"></div>

                        <motion.div
                            className="step-card"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="step-number">03</div>
                            <div className="step-icon">
                                <ArrowRight size={35} />
                            </div>
                            <h3>Book & Travel</h3>
                            <p>Complete your booking securely and get ready for an unforgettable journey.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section testimonials">
                <div className="container">
                    <div className="section-header centered">
                        <span>Client Testimonials</span>
                    </div>
                    <div className="testimonials-grid">
                        {testimonials.map((t, index) => (
                            <motion.div
                                key={index}
                                className="testimonial-card"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="t-rating">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="#ff6b35" color="#ff6b35" />)}
                                </div>
                                <p className="t-text">"{t.text}"</p>
                                <div className="t-user">
                                    <img src={t.avatar} alt={t.name} />
                                    <div className="t-info">
                                        <h4>{t.name}</h4>
                                        <span>{t.location}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Home;
