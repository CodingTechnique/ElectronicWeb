// components/BookingForm.js
import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', // New phone field
    service: '', 
    date: '' 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Booking submitted:', result);

      alert('Booking successful!');
      
      
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        service: '', 
        date: '' 
      });

    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('Failed to submit booking. Please try again.');
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
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
        placeholder="Your Email" 
        value={formData.email}
        onChange={handleChange} 
      />
      <input 
        type="text" 
        name="phone" 
        placeholder="Your Phone Number"
        value={formData.phone}
        onChange={handleChange} 
      />
      <select 
        name="service" 
        value={formData.service}
        onChange={handleChange}
      >
        <option value="">Select Service</option>
        <option value="led-tv-repair">LED TV Repair</option>
        <option value="washing-machine-repair">Washing Machine Repair</option>
    
      </select>
      <input 
        type="date" 
        name="date" 
        value={formData.date}
        onChange={handleChange} 
      />
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
