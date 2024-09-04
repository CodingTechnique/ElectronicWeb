const Contact = require('../models/ContactModel');


exports.submitContactForm = async (req, res) => {
    console.log('Request body received:', req.body); 

    const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        phone: req.body.phone
    });

    try {
        const newContact = await contact.save();
        console.log('Contact saved:', newContact); // Saved data ko log karo
        res.status(201).json(newContact);
    } catch (err) {
        console.error('Error saving contact:', err.message); 
        res.status(400).json({ message: err.message });
    }
};
