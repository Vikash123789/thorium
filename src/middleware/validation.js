const mongoose = require("mongoose")
const jwt = require("jsonwebtoken");

const valid = function (input){
    if (typeof (input)===  undefined|| typeof(input) ===null){return false}
    if(typeof (input)==="string" && (input).trim().length===0) {return false}

    else {return true
}}



const isValidObjectId = function (ObjectId) {
    return mongoose.Types.ObjectId.isValid(ObjectId)
  }






  let auth = async function(req,res,next){

      try{
      let token = req.headers["x-api-key"]
      if(token){
          let decodedToken = jwt.verify(token , "Project-One" )      
          if(decodedToken){

         req.decodedToken = decodedToken
          next()
          }}else{ return res.status(400).send({ERROR:"Token Missing"})}   

}catch(err){
      return res.status(500).send({ERROR:err.message})}
}
 
module.exports.auth=auth




module.exports.valid= valid
module.exports.isValidObjectId = isValidObjectId