import React, { useEffect, useState } from 'react';
import './AdminDashbord.css'; 

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBookings = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/admin/bookings');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      setError('Error fetching bookings: ' + error.message);
    }
  };

  const fetchContacts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/admin/contacts');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      setError('Error fetching contacts: ' + error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([fetchBookings(), fetchContacts()]);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="section">
        <h2>Bookings</h2>
        <ul>
          {bookings.length ? (
            bookings.map((booking) => (
              <li key={booking._id} className="booking-item">
                <strong>Name:</strong> {booking.name} <br />
                <strong>Email:</strong> {booking.email} <br />
                <strong>Phone:</strong> {booking.phone} <br />
                <strong>Service:</strong> {booking.service} <br />
                <strong>Date:</strong> {new Date(booking.date).toLocaleDateString()} <br />
              </li>
            ))
          ) : (
            <li>No bookings available.</li>
          )}
        </ul>
      </div>
      <div className="section">
        <h2>Contacts</h2>
        <ul>
          {contacts.length ? (
            contacts.map((contact) => (
              <li key={contact._id} className="contact-item">
                <strong>Name:</strong> {contact.name} <br />
                <strong>Email:</strong> {contact.email} <br />
                <strong>Phone:</strong> {contact.phone} <br />
                <strong>Message:</strong> {contact.message} <br />
              </li>
            ))
          ) : (
            <li>No contacts available.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
