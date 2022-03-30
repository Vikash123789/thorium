const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const reviewModel = new mongoose.Schema({
    bookId: {
        type: ObjectId,
        required: true,
        ref: "bookmdata"
    },
    reviewedBy: {
        type: String,
       
        default: "Guest",
       
    }, 
    reviewedAt: {
        type: Date,
        required: true
    },
    rating: {
        type: Number,
       
        required: true
    },
    review: {
        type: String,
       
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
},{timestamps:true});

module.exports = new mongoose.model("reviewData", reviewModel);