const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    Name: String,
    Balance: {
        type: Number,
        default : 100,
    },
    Address: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] 
    },
    age: Number,
    isFreeAppUser :{
        type : Boolean,
        default :false
    }
}, { timestamps: true });

module.exports = mongoose.model('clientUser', userSchema) 



