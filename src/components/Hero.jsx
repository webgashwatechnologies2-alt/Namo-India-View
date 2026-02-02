import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Hero.css';

const slides = [
    {
        image: '/images/himalaya2.jpg',
        title: 'Explore the Mystical Himalayas',
        subtitle: 'Himachal Pradesh - The Land of Gods',
        desc: 'Experience breathtaking landscapes, ancient temples, and vibrant culture in the heart of the Himalayas.'
    },
    {
        image: '/images/spiti.jpg',
        title: 'The Cold Desert Adventure',
        subtitle: 'Spiti Valley - Nature at its Best',
        desc: 'Discover the hidden gems of Spiti, from high-altitude lakes to remote monasteries.'
    },
    {
        image: '/images/hero3.png',
        title: 'Land of High Passes',
        subtitle: 'Ladakh - A Soulful Journey',
        desc: 'Embark on an unforgettable adventure through the rugged terrains and crystal-clear lakes of Ladakh.'
    },
    {
        image: '/images/heroslider.png',
        title: 'Luxury Meets Nature',
        subtitle: 'Premium Stays in Manali',
        desc: 'Unwind in the most luxurious hotels with stunning mountain views and world-class amenities.'
    },
    {
        image: '/images/hero5.jpg',
        title: 'Heaven on Earth',
        subtitle: 'Kashmir - Dal Lake Wonders',
        desc: 'Stay in traditional houseboats and enjoy the serene beauty of the paradise that is Kashmir.'
    }
];

const Hero = () => {
    const [current, setCurrent] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    // Preload images
    useEffect(() => {
        const preloadImages = slides.map(slide => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = slide.image;
                img.onload = resolve;
                img.onerror = reject;
            });
        });

        Promise.all(preloadImages)
            .then(() => setIsLoaded(true))
            .catch(err => console.log("Image preload error:", err));
    }, []);

    useEffect(() => {
        if (!isLoaded) return;
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, [isLoaded]);

    const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
    const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

    if (!isLoaded) {
        return <div className="hero-loader" style={{ height: '100vh', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>Loading...</div>;
    }

    return (
        <div className="hero-premium">
            <AnimatePresence initial={false}>
                <motion.div
                    key={current}
                    className="premium-slide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                >
                    <motion.div
                        className="premium-bg"
                        initial={{ scale: 1.15 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 8, ease: "linear" }}
                        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.55)), url(${slides[current].image})` }}
                    />

                    <div className="premium-frame">
                        <div className="premium-content">
                            <motion.div
                                className="premium-badge-wrapper"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <span className="premium-line" />
                                <span className="premium-badge">{slides[current].subtitle}</span>
                                <span className="premium-line" />
                            </motion.div>

                            <motion.h1
                                className="premium-title"
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                {slides[current].title}
                            </motion.h1>

                            <motion.p
                                className="premium-desc"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                            >
                                {slides[current].desc}
                            </motion.p>

                            <motion.div
                                className="premium-btns"
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1 }}
                            >
                                <Link to="/about" className="btn-luxury">Discover More</Link>
                                <Link to="/contact" className="btn-minimal">Book Experience</Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className="premium-nav">
                <button onClick={prevSlide} className="nav-arrow"><ChevronLeft size={24} /></button>
                <div className="nav-divider">
                    <span className="current-num">0{current + 1}</span>
                    <span className="total-num">/ 0{slides.length}</span>
                </div>
                <button onClick={nextSlide} className="nav-arrow"><ChevronRight size={24} /></button>
            </div>

            <div className="premium-indicators">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${index === current ? 'active' : ''}`}
                        onClick={() => setCurrent(index)}
                    >
                        <svg width="40" height="40" viewBox="0 0 40 40">
                            <circle cx="20" cy="20" r="18" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                            <motion.circle
                                cx="20" cy="20" r="18"
                                fill="none"
                                stroke="#ff6b35"
                                strokeWidth="2"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: index === current ? 1 : 0 }}
                                transition={{ duration: 6, ease: "linear" }}
                            />
                        </svg>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hero;
