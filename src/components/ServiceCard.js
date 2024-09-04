import React from 'react';
import './ServiceCard.css';
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <img src={service.image} alt={service.name} className="service-card-image" />
      <h2>{service.name}</h2>
      <p>{service.description}</p>
      <Link to="/booking">
        <button >Book Now</button>
      </Link>
    </div>
  );
};

export default ServiceCard;
