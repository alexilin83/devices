const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    number: { type: Number, require: true, unique: true },
    name: { type: String },
    type: { type: String },
    address: { type: String },
    position: { type: [Number] },
});

module.exports = mongoose.model('Device', deviceSchema);