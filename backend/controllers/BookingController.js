
const Booking = require('../models/BookingModel');

exports.createBooking = async (req, res) => {
  const booking = new Booking({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    service: req.body.service,
    date: req.body.date
  });

  try {
    const newBooking = await booking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
