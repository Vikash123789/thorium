const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema({

    bookname: String,
    author_id: {
        type: ObjectId,
        ref: "BrandNewAuthor"
    },
    price: Number,
    
    publisher_id: {
        type: ObjectId,

        ref: 'BrandNewPublisher',},

        isHardCover : {
            type : Boolean,
            default : false,
        
    },
     
    

}, { timestamps: true });


module.exports = mongoose.model('BrandNewLibrary', bookSchema)
