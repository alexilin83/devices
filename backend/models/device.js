const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    number: { type: String, require: true, unique: true },
    name: { type: String },
    type: { type: String },
    signal: { type: Boolean },
    battery: { type: Number },
    address: { type: String },
    latitude: { type: Number },
    longitude: { type: Number },
});

module.exports = mongoose.model('Device', deviceSchema);