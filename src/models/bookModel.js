const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorName: String, 
  
    
   
  

}, { timestamps: true });


module.exports = mongoose.model('BookForCheck', bookSchema) 
