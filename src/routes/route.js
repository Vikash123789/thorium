const express = require("express")
const { route } = require("express/lib/application")
const router = express.Router();
//const mongoose = require("mongoose")
const userController =  require("../controllers/userController.js")
const bookController =  require("../controllers/bookController")
const reviewController =  require("../controllers/reviewController")


router.post("/register",userController.registerUser)
router.get("/login",userController.loginUser)


router.post("/books",bookController.createBooks)

 router.get("/books",bookController.getBooks)
 router.get("/books/:bookId",bookController.getById)
 router.put("/books/:bookId",bookController.updateBooks)
// router.delete("/books/:bookId",bookController.deleteBooks)
// router.post("/books/:bookId/review",reviewController.createReview)
// router.put("/books/:bookId/review/:reviewId",reviewController.updateReview)
// router.delete("/books/:bookId/review/:reviewId",reviewController.deleteReview)

module.exports =router;