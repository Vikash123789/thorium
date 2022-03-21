const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId;

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    authorId :{
        required:true,
        type:ObjectId,
        ref:"Project_authors"
    },
    tags:{
        type:[String],
        required:true
    },
    category:{
        type:String,
        required:true
    },
    subcategory:{
        type:[String],
        required:true
    },
    isPublished:{
        type:Boolean,
        default:false,
    },
    publishedAt:Date,
    isDeleted:{
        type:Boolean,
        default:false
    },
    deletedAt:Date,
},{timestamps:true})


module.exports = mongoose.model("Project_Blogs", blogSchema)