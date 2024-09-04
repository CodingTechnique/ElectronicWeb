import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServiceList from './components/ServiceList';
import ContactSection from './components/ContactSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

import BookingForm from './components/BookingForm';
import AboutUs from './components/AboutUs';  // Un-commented
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/services" element={<ServiceList />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<HeroSection />} /> {/* Fallback route */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* Un-commented */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
