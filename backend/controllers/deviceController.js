const Device = require('../models/device');

exports.getDevices = async (req, res) => {
    try {
        const devices = await Device.find();
        res.status(201).json(devices);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.createDevice = async (req, res) => {
    try {
        const device = new Device(req.body);
        await device.save();
        res.status(201).json(device);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}