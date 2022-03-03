const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({


    authorName: {
        type: String,
        required: true
    },
    address: String,
    ratings :  Number
    
}, { timestamps: true });

module.exports = mongoose.model('BrandNewAuthor', authorSchema)


