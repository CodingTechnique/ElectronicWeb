import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.phone) {
      alert('Mobile number is required');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/contact', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      });

      const result = await response.json();
      if (response.ok) {
        console.log('Form submitted successfully:', result);
        alert('Thank you for your message!');
        // Form reset karo
        setFormData({
          name: '',
          email: '',
          message: '',
          phone: ''
        });
      } else {
        console.error('Form submission error:', result);
        alert('Form submit karte waqt error aayi. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Form submit karte waqt error aayi. Please try again.');
    }
  };

  return (
    <div className="contact-section">
      <h2>Contact Us : 7723062912</h2>
      <p>Agar aapke koi sawal hain ya madad chahiye, to humse contact karein.</p>
      <p className="phone-number">Call Us:  <span>7723062912</span></p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email (optional)"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Your Mobile Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactSection;
