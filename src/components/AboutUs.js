import React, { useState } from 'react';
import './AboutUs.css';
import { Link, useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (data.success) {
        navigate('/admin-dashboard');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="about-us-container">
      <div className="about-us">
        <h2>About Us</h2>
        <p>We are a leading provider of electronic repair services, with years of experience in the industry.</p>
        <p>Our expertise spans across various electronic items, ensuring that you receive top-notch service. From LED TVs, which have become the best option for entertainment, to other essential appliances, we have you covered.</p>
        <p>Today, with the advancement in technology, TVs have evolved significantly, replacing various other devices. In Pimpri-Chinchwad, LED TVs are now central to our daily lives, from news to sports and even kids' entertainment.</p>
        <p>However, if your LED TV stops working, it can be heartbreaking, and life may seem dull. In such situations, you can rely on us for immediate LED TV repair services at your doorstep.</p>
        <p>If your LED TV is not working, simply search for "LED TV repair near me" on Google. Ensure your location is enabled for Google to show you the nearest service center and contact details.</p>
      </div>
      
      <div className="admin-login">
        <h3>Admin Dashboard Login</h3>
        <form onSubmit={handleLogin}>
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit">Login</button>
          {error && <p>{error}</p>}
        </form>
      </div>
      {/* <li><Link to="/admin-dashboard">Admin Dashboard</Link></li> */}
    </div>
  );
};

export default AboutUs;
