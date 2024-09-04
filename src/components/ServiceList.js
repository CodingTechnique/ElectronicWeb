import React from 'react';
import ServiceCard from './ServiceCard';
import './ServiceList.css';


const services = [
  { id: 1, name: 'LED TV Repair', description: 'We fix all brands of LED TVs, including Samsung, Sony, LG, and Mi.', image: 'https://th.bing.com/th/id/OIP.q1_V-m_lMpCrcxE55Do09QHaE8?w=242&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  { id: 2, name: 'Woofer Repair', description: 'Expert repair services for woofers of various brands.', image: 'https://th.bing.com/th/id/OIP.uwtqHaI9E7JZG5V7rQ4_GQAAAA?pid=ImgDet&w=184&h=184&c=7&dpr=1.3' },
  { id: 3, name: 'Music System Repair', description: 'Professional repair for music systems from different manufacturers.', image: 'https://th.bing.com/th/id/OIP.sju_GAy3xP-x3pER_LvoPgAAAA?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  { id: 4, name: 'Microwave Repair', description: 'Efficient repair services for microwaves of all brands.', image: 'https://th.bing.com/th/id/OIP.wh2LRGXPN-7nfL76kfqlrQHaFO?w=261&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  { id: 5, name: 'AC Repair', description: 'Comprehensive AC repair services for various models and brands.', image: 'https://th.bing.com/th/id/OIP.9l4VNSuMTXAfyruvyM7lcQHaE8?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  { id: 6, name: 'Washing Machine Repair', description: 'Top-notch washing machine repairs for all types and brands.', image: 'https://th.bing.com/th/id/OIP.ojfbmFOWBXhvANKIDCyOrAHaE8?w=255&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  { id: 7, name: 'Fridge Repair', description: 'Reliable repair services for all kinds of fridges.', image: 'https://th.bing.com/th/id/OIP.C7wtlN0RBpnH-aWPAPe_kQHaE7?w=238&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  { id: 8, name: 'Mixie Repair', description: 'Expert repair services for mixies of various brands.', image: 'https://th.bing.com/th?q=5+LTR+Mixie&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247' },
  { id: 9, name: 'Induction Cooktop Repair', description: 'Specialized repair services for induction cooktops.', image: 'https://th.bing.com/th/id/OIP.Ag3qCrtZ515zWlHzhnjPNwHaEK?w=312&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  { id: 10, name: 'Laptop Repair', description: 'Professional laptop repair services for all major brands and models.', image: 'https://th.bing.com/th/id/OIP.Qf2RFcuudbE3JRqkxfae_wHaHa?rs=1&pid=ImgDetMain' } // New service added
];


const ServiceList = () => {
  return (
    <div className="service-list">
       
      <div></div>
      {services.map(service => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServiceList;
