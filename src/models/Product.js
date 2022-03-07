const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');

const productSchema = new mongoose.Schema( {
    name : String, 
    category: String, 
    price  : {
        type: Number,
        required : true
    
        }   
    
   
}, { timestamps: true });


module.exports = mongoose.model('BookClient', productSchema) 
