import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Destinations from './pages/Destinations';
import DestinationDetails from './pages/DestinationDetails';
import PackageDetails from './pages/PackageDetails';
import HotelDetails from './pages/HotelDetails';
import HotelInnerDetails from './pages/HotelInnerDetails';
import BookingDetails from './pages/BookingDetails';
import Contact from './pages/Contact';
import PayNow from './pages/PayNow';
import Policy from './pages/Policy';
import './index.css';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="destination/:id" element={<DestinationDetails />} />
          <Route path="package/:id" element={<PackageDetails />} />
          <Route path="hotel/:id" element={<HotelDetails />} />
          <Route path="hotel-details/:hotelId" element={<HotelInnerDetails />} />
          <Route path="booking/:id" element={<BookingDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="pay-now" element={<PayNow />} />
          <Route path="privacy-policy" element={<Policy />} />
          <Route path="terms-conditions" element={<Policy />} />
          <Route path="refund-policy" element={<Policy />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
