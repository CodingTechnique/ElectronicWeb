import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ items, autoPlay = true, interval = 8000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let autoPlayInterval;
    if (autoPlay) {
      autoPlayInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, interval);
    }
    return () => clearInterval(autoPlayInterval);
        
  }, [autoPlay, interval, items.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div className="carousel">
      <div className="offer-label">
        50% Discount Offer
      </div>
      <div className="phone-number">
        Call Us: 7723062912
      </div>
      <div className="carousel-control left" onClick={goToPrevious}>
        &#10094;
      </div>
      <div className="carousel-item">
        <img src={items[currentIndex].image} alt={items[currentIndex].name} />
        
        
      </div>
      <div className="carousel-control right" onClick={goToNext}>
        &#10095;
      </div>
    </div>
  );
};

export default Carousel;
