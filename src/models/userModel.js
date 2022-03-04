const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
   
}, { timestamps: true });

module.exports = mongoose.model('UserForCheck', userSchema) //users


