const mongoose = require("mongoose");
const userModel = require("../models/userModel.js");
const jwt = require("jsonwebtoken");
const validation = require("../middleware/validation");
const bookModel = require("../models/bookModel");

const createBooks = async (req, res) => {
  try {
    const data = req.body;
    if (Object.keys(data) == 0) {return res.status(400).send({status: false,msg: "No input provided by user",});}
    const { title,excerpt, userId, ISBN, category, subcategory } = data;
    if(!validation.valid(title)){return res.status(400).send({status: false,msg: "No title provided by user",})}
    if(!validation.valid(excerpt)){return res.status(400).send({status: false,msg: "No excerpt provided by user",})}
    if(!validation.valid(userId)){return res.status(400).send({status: false,msg: "No userId provided by user",})}
    if(!validation.valid(ISBN)){return res.status(400).send({status: false,msg: " No ISBN provided by user",})}
    if(!validation.valid(category)){return res.status(400).send({status: false,msg: "No category provided by user",})}
    if(!validation.valid(subcategory)){return res.status(400).send({status: false,msg: "No subcategory provided by user",})}
    
    if (!validation.isValidObjectId(userId)){return res.status(400).send({status: false,msg: "Not Object Id",});}
    
    const existTitle = await bookModel.findOne({title :title})
    if (existTitle){return res.status(400).send({status: false,msg: " Title already exist",})}

    const existISBN = await bookModel.findOne({ISBN:ISBN})
    if (existISBN){return res.status(400).send({status: false,msg: " ISBN already exist",})}

    //  /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/
    if (!/^(\()?\d{3}(\))?(-|\s)?\d{9}$/.test(ISBN)) {
      return res.status(404).send({ status: false, message: "Enter  valid ISBN number " });}

    

    const saveData = await bookModel.create(data)
    return res.status(201).send({status :true, msg : saveData})

  } catch (err) {
    console.log(err);
    return res.status(500).send({status: false,msg: err,});}
};




const getBooks = async (req, res) => {
  try { 
    const data = req.query;
    if (Object.keys(data) == 0) {return res.status(400).send({status: false,msg: "No input provided by user",});}
    const findData = await bookModel.find({$and :[ {userId:userId.data, category :category.data ,subcategory :subcategory.data }, { isDeleted: false }]}).populate("userId")


   //const {name} = title.findData
    //const findDate = findData.sort('name')
    //.select({_id :1, title:1, excerpt:1, userId :1, category:1, releasedAt:1, reviews :1})
    if(findData.length ==0){return res.status(400).send({status: false,msg: "wrong input provided by user",})}
return res.status(200).send({status :true, msg : findData})

  } catch (err) {console.log(err);return res.status(500).send({status: false,msg: err,});}
};


// const getBooks = async function (req, res) {
//   try {
//       const data = req.query
//       if (Object.keys(data) == 0) return res.status(400).send({ status: false, msg: "No input provided" })

//       const blogs = await bookModel.find({$and : [data, { isDeleted: false }]}).populate("userId")
//       if (blogs.length == 0) return res.status(404).send({ status: false, msg: "No blogs Available." })
//       res.status(200).send({ status: true,count:blogs.length, data: blogs });
//   }


//   catch (error) {
//       res.status(500).send({ status: false, msg: error.message });
//   }
// }






const getById = async (req, res) => {
  try {
    const data = req.params.bookId;
    if (Object.keys(data) == 0) { return res.status(400).send({status: false,msg: "No input provided by user",});}
    const findId = await bookModel.findById( data)
    console.log(findId)
    if(Object.keys(findId) == 0) {return res.status(400).send({status: false,msg: "Wrong input provided by user",})}

    return res.status(200).send({status : true, msg :findId})


  } catch (err) {console.log(err);return res.status(500).send({status: false,msg: err,});}
};



const updateBooks = async (req, res) => {
  try {
    const data = req.params.bookId;
    if (Object.keys(data) == 0) {return res.status(400).send({status: false,msg: "No input provided by user",});}
    //if (!validation.isValidObjectId(data)){return res.status(400).send({status: false,msg: "Not Object Id",});}
    
    const findId = await bookModel.findById(data)
   if(Object.keys(findId) == 0) {return res.status(400).send({status: false,msg: "Wrong input provided by user",})}
    
   let title = req.body.title
   let excerpt = req.body.excerpt
   let ISBN = req.body.ISBN


    const updateData = await bookModel.findOneAndUpdate({_id : data},{ $set:{ title : title ,
       excerpt :excerpt ,
      ISBN : ISBN

    }},{new:true})

    return res.status(201).send({status :true,msg :updateData})


  } catch (err) {console.log(err); return res.status(500).send({status: false,msg: err,});}
};

// const deleteBooks = async (req, res) => {
//   try {
//     const data = req.body;
//     if (Object.keys(data) == 0) {return res.status(400).send({status: false,msg: "No input provided by user",});}
//   } catch (err) {console.log(err); return res.status(500).send({status: false,msg: err,});}
// };

module.exports = {
  createBooks,
  getBooks,
 getById,
   updateBooks,
//   deleteBooks,
};

//module.exports.createBooks = createBooks
