const User = require('../models/user');

exports.createDevice = async (req, res) => {
    try {
        const device = new Device(req, body);
        await device.save();
        res.status(201).json(device);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}