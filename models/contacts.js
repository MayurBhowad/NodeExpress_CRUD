const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    first_name: {
        type: String,
        require: true
    }, 
    last_name: {
        type: String,
        require: true
    }, 
    phone: {
        type: String,
        require: true
    } 
});

const contact = module.exports = mongoose.model('contact', ContactSchema);