const Service = require('../models/ServiceModel');


exports.getAllServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.addService = async (req, res) => {
    const service = new Service({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    });

    try {
        const newService = await service.save();
        res.status(201).json(newService);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
