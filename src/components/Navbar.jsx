import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Plane, Bed, Car, Train, Bus, MapPin, Phone, CreditCard } from 'lucide-react';
import './Navbar.css';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Destination',
      path: '/destinations',
      dropdown: [
        { name: 'Himachal', path: '/destination/himachal' },
        { name: 'Spiti', path: '/destination/spiti' },
        { name: 'Ladakh', path: '/destination/ladakh' },
        { name: 'Uttarakhand', path: '/destination/uttarakhand' },
        { name: 'Kashmir', path: '/destination/kashmir' },
      ]
    },
    {
      name: 'Hotel',
      dropdown: [
        { name: 'Shimla', path: '/hotel/shimla' },
        { name: 'Manali', path: '/hotel/manali' },
      ]
    },

    {
      name: 'Bookings',
      dropdown: [
        { name: 'Cab Booking', path: '/booking/cab', icon: <Car size={18} /> },
        { name: 'Hotel', path: '/booking/hotel', icon: <Bed size={18} /> },
        { name: 'Volvo', path: '/booking/volvo', icon: <Bus size={18} /> },
        { name: 'Railways', path: '/booking/railway', icon: <Train size={18} /> },
        { name: 'Flight', path: '/booking/flight', icon: <Plane size={18} /> },
      ]
    },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img
            src="/namoologoo.png"
            alt="Namo India Logo"
            className="logo-img"
          />
        </Link>
        {/* Desktop Menu */}
        <div className="nav-menu desktop">
          {navLinks.map((link, index) => (
            <div
              key={index}
              className="nav-item"
              onMouseEnter={() => link.dropdown && setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {link.dropdown ? (
                <>
                  {link.path ? (
                    <Link to={link.path} className="nav-link dropdown-toggle" onClick={() => setActiveDropdown(null)}>
                      {link.name} <ChevronDown size={16} />
                    </Link>
                  ) : (
                    <button className="nav-link dropdown-toggle">
                      {link.name} <ChevronDown size={16} />
                    </button>
                  )}
                  <div className={`dropdown-menu ${activeDropdown === index ? 'show' : ''}`}>
                    {link.dropdown.map((item, i) => (
                      <div key={i} className={`dropdown-item-wrapper ${item.subDropdown ? 'has-submenu' : ''}`}>
                        <Link
                          to={item.path}
                          className="dropdown-item"
                        >
                          {item.icon && <span className="item-icon">{item.icon}</span>}
                          {item.name}
                          {item.subDropdown && <ChevronDown size={14} style={{ transform: 'rotate(-90deg)', marginLeft: 'auto' }} />}
                        </Link>
                        {item.subDropdown && (
                          <div className="dropdown-sub-menu">
                            {item.subDropdown.map((subItem, j) => (
                              <Link key={j} to={subItem.path} className="dropdown-item">
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <Link to={link.path} className="nav-link">
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Link to="/pay-now" className="pay-btn">
            <CreditCard size={18} />
            Pay Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link, index) => (
            <div key={index} className="mobile-nav-item">
              {link.dropdown ? (
                <>
                  <div className="mobile-dropdown-header">
                    {link.path ? (
                      <Link
                        to={link.path}
                        onClick={toggleMenu}
                        style={{ flex: 1, color: 'inherit', textDecoration: 'none' }}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <span
                        onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                        style={{ flex: 1 }}
                      >
                        {link.name}
                      </span>
                    )}
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveDropdown(activeDropdown === index ? null : index);
                      }}
                      style={{ padding: '0 10px', display: 'flex', alignItems: 'center' }}
                    >
                      <ChevronDown size={18} className={activeDropdown === index ? 'rotate' : ''} />
                    </span>
                  </div>
                  <div className={`mobile-dropdown-content ${activeDropdown === index ? 'show' : ''}`}>
                    {link.dropdown.map((item, i) => (
                      <Link key={i} to={item.path} onClick={toggleMenu}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link to={link.path} onClick={toggleMenu}>{link.name}</Link>
              )}
            </div>
          ))}
          <Link to="/pay-now" className="mobile-pay-btn" onClick={toggleMenu}>
            Pay Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
