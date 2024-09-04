const express = require('express');
const { getAllBookings, getAllContacts } = require('../controllers/AdminController');
const router = express.Router();


router.get('/bookings', getAllBookings);


router.get('/contacts', getAllContacts);

module.exports = router;
