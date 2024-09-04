import React from 'react';
import './Footer.css';
// import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Repair Services. All rights reserved.</p>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://wa.me/7723062912" target="_blank" rel="noopener noreferrer">
            <img src="https://png.pngtree.com/element_our/sm/20180626/sm_5b321c99945a2.png" alt="WhatsApp" className="social-icon" />
          </a>
          <a href="tel:+7723062912">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkj5S7t8-oQViJPpUY2c_tGrCqQULCTK2rQ&s" alt="Phone" className="social-icon" />
          </a>
        </div>
      </div>
      <p className="footer-phone-number">Call us: <a href="tel:+7723062912">7723062912</a></p>
      {/* <li><Link to="/admin-dashboard">Admin Dashboard</Link></li> */}
    </footer>
  );
};

export default Footer;
