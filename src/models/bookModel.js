const mongoose = require('mongoose');

const bookModel = new mongoose.Schema({
    bookName: {
        type: String,
        unique: true,
        required: true
    },
    authorName: String,
    tags: [String],
    totalPages: Number,
    year: {
        type: Number,
        default: 2021
    },

    StockAvailable: Boolean,
    prices: {
        indianPrice : String,
        europePrice: String,
    }

}, { timestamps: true });


module.exports = mongoose.model('Book', bookModel) //users

