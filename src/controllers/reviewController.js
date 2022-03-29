
const validation = require("../middleware/validation");
const bookModel = require("../models/bookModel");
const reviewModel = require("../models/reviewModel");

const createReview = async (req, res) => {
    try {
    const data = req.body
    let bookId = req.params.bookId
    if (Object.keys(data) == 0 || data == null){return res.status(400).send({Status:false, msg:"Please provide the request body"})}
    
    if(!validation.isValidObjectId(bookId)){return res.status(400).send({Status:false , msg:"Please provide a valid book id"})}
    let book = await bookModel.findById(bookId)
    if(!book){return res.status(404).send({Status:false , msg:"No book with the given book id was found"})}
    if(book.isDeleted===true){return res.status(400).send({Status:false , msg:"The requested book has been deleted"})}
    
    const {reviewedBy , rating , review} = data
    let reviewData = {reviewedAt:Date.now(),bookId:bookId}
    
    if(validation.valid(reviewedBy)){
      reviewData['reviewedBy']=reviewedBy
    }

    if(!validation.valid(review)){return res.status(400).send({Status:false , msg:"Please provide a review"})}
    
    reviewData['review']=review

    
    if (!validation.isValidRating(rating)){return res.status(400).send({Status:false, msg:"Please enter a rating from 1 to 5"})}
   
    reviewData['rating']=rating

    let createdReview = await reviewModel.create(reviewData)
    let reviewCount = await bookModel.findOneAndUpdate({_id:bookId},{$inc:{reviews : 1}},{new:true})
    
    
    return res.status(202).send({Staus:true , msg:"Successfuly added review", Data:reviewCount})

    


 } catch (err) {console.log(err);return res.status(500).send({status: false,msg:err.message});}
  };

  
  const updateReview = async (req, res) => {
    try {
      const bookId = req.params.bookId;
      if (!validation.isValidObjectId(bookId)) { return res.status(400).send({ status: false, message: "input valid bookid" }) }
      const reviewId = req.params.reviewId;
      if (!validation.isValidObjectId(reviewId)) { return res.status(400).send({ status: false, message: "input valid reviewid" }) }
      const data = req.body;
      if (Object.keys(data) == 0) { return res.status(400).send({status: false, message: "No input provided by user",});}

    const bookDetails = await bookModel.findById(bookId)
    if(!bookDetails) return res.status(400).send({status: false,message:"No book with this id exists"})
    if(bookDetails.isDeleted==true){return res.status(400).send({Status:false, message:"Thebook has been deleted"})}
     

    const reviewDetails = await reviewModel.findById(reviewId)
    if(!reviewDetails){return res.status(400).send({Status:true , message:"No review with this review id exists"})}
    if(reviewDetails.isDeleted==true){return res.status(400).send({Status:false , msg:"The requested review has been deleted"})}
    
    if(bookDetails._id!=reviewId){return res.status(400).send({Status:false , msg:"The review and book do not match"})}
      const saveData = await reviewModel.findOneAndUpdate({_id:reviewId},{data, reviewedAt: Date.now()})
      return res.status(201).send({status :true , msg :saveData})
    
    } catch (err) {console.log(err);return res.status(500).send({status: false,msg:err.message});}
  };



  const deleteReview = async (req, res) => {
    try {
      const reviewId = req.params.reviewId;
      const bookId = req.params.bookId

      //if(!data ){return res.status(400).send({status :false,msg:"Please insert id"})}
      if(validation.isValidObjectId(bookId)){ return res.status(400).send({status :false,msg:"Please insert valid book id"})}
      
      if(validation.isValidObjectId(reviewId)){ return res.status(400).send({status :false,msg:"Please insert valid review id"})}
      
      const review = await reviewModel.findById(reviewId) 
      if(!review) {return res.status(404).send({status:false,msg :"No review exists with this id"})}
      if(review.isDeleted == true ){return res.status(400).send({status : false ,msg :"Review Already deleted"})}


      const book = await  bookModel.findById (bookId)
      
      if(!book) {return res.status(404).send({status:false,msg :"not book exists with this id"})}
      if(book.isDeleted == true){ return res.status(400).send({status:false, msg :"This book is Deleted"})}

  if(book._id != review.bookId) {return res.status(400).send({Status:false , msg :"The book and review dont match"})}
 
  if (book.userId == req.decodedToken.userId) {

      const deleteReview = await reviewModel.findOneAndUpdate({_id :reviewId},{$set:{isDeleted :true}}, {new: true})

       const updatedBook = await bookModel.findOneAndUpdate({_id:bookId},{$inc:{reviews: -1}},{new:true})
      return res.status(200).send({status :true , msg : " Review deleted "})
    } else { return res.status(403).send({ Status: false, msg: "Not Authorized" }) }
    
    } catch (err) {console.log(err);return res.status(500).send({status: false,msg:err.message,});}
  };
  module.exports = { createReview , updateReview, deleteReview}