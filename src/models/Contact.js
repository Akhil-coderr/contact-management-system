const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    contactId: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        match: /^\d{10}$/
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    }
});

module.exports = mongoose.model('Contact', ContactSchema);