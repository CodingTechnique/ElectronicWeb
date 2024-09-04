const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); 


const app = express();


mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://rajeshbaghel2425:RajeshBaghel@electrodata.bjrqa.mongodb.net/', {
  
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


app.use(cors()); 
app.use(express.json()); 

// Define routes here
const serviceRoutes = require('./routes/ServiceRoutes');
const bookingRoutes = require('./routes/BookingRoutes');
// const userRoutes = require('./routes/UserRoutes');

const contactRoutes = require('./routes/ContactRoutes'); 

const adminRoutes = require('./routes/AdminRoutes'); 

// Route handlers
app.use('/api/services', serviceRoutes);
app.use('/api/bookings', bookingRoutes);
// app.use('/api/users', userRoutes);

app.use('/api/contact', contactRoutes);

app.use('/api/admin', adminRoutes); 

// for Login 
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  //chech code
  if (username === 'raj@444.gmail.com' && password === 'admin123') {
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
