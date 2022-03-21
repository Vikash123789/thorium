const mongoose = require("mongoose")
const { default: isEmail } = require("validator/lib/isEmail")


const authorSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true,
        enum:["Mr","Mrs","Miss"]
    },
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true,
        validate:[isEmail,'Enter a valid email'] 
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})


module.exports = mongoose.model("Project_authors", authorSchema)