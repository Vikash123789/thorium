const { Module } = require("module")
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    
        title: {type :String, required :true, enum :["Mr","Mrs", "Miss"]},
        name: {type : String, required :true},
        phone: {type : String, required :true, unique: true},
        email: {type : String, required :true,
            validate: {
                validator: function(v) {
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
                },
                message: "Please enter a valid email"
            }, unique: true}, 
        password: {type : String, 
            required :true,
            minlength:[5,"Input more than 5 charachter"],
            maxlength:[15,"Enter less than 15 characters"]},
        address: {
          street: {type : String},
          city: {type : String},
          pincode: {type : String}
        }

})
module.exports = new mongoose.model("UserMBook",userSchema)