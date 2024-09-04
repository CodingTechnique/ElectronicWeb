import React from 'react';
import Carousel from './Carousel';
import './HeroSection.css';
import ServiceList from './ServiceList';
import ContactSection from './ContactSection';
import Testimonials from './Testimonials';  
// import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Carousel 
        items={[
          { image: 'https://wallpaper.dog/large/428192.jpg' },
          { image: 'https://th.bing.com/th/id/OIP.CZ0QpqHmj1lMt37ALtdCHgHaEE?w=314&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
        ]}
      />
      <h1>Expert Repair Services for All Your Electronics</h1>
      <p> Book a service now and get your device repaired at your convenience. - <span>24/7 Emergency Service, Call us on : 9009410973</span></p>
      <p className="home-service-line">We offer fast and reliable home service for all your repair needs, right at your doorstep.</p>
      {/* Use Link for navigation */}
      {/* <Link to="/booking">
        <button>Book Now</button>
      </Link> */}
      
      <ServiceList />
      <ContactSection />
      
      {/* Add Testimonials here */}
      <Testimonials />
    </div>
  );
};

export default HeroSection;
