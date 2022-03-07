const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId



const orderSchema = new mongoose.Schema( {
    userId: {
     type: objectId,
     ref : "clientUser"
    },
    productId : {
        type : objectId,
        ref : "BookClient"
    },
    amount : Number,

    isFreeAppUser: Boolean,
    date :{
        type: Date,
        default :Date.now
    }      
    
    
}, { timestamps: true });

module.exports = mongoose.model('clientOrder', orderSchema) 

