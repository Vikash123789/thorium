const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    
    bookname: String,
    author: {
        type: ObjectId,
        ref: "New_Author"
        },
        price: Number,
        ratings: Number,
         publisher_id :{
        type : ObjectId,
        
        ref: 'NewPublisher'
    }

}, { timestamps: true });


module.exports = mongoose.model('Library', bookSchema)
