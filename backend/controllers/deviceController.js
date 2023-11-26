const Device = require('../models/device');

exports.createDevice = async (req, res) => {
    try {
        const device = new Device(req.body);
        await device.save();
        res.status(201).json(device);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.getDevices = async (_, res) => {
    try {
        const devices = await Device.find();
        res.status(201).json(devices);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.getDevice = async (req, res) => {
    try {
        const device = await Device.findById(req.params.id);
        res.status(201).json(device);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}