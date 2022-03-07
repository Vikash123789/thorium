const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserModel= require("../controllers/UserController")
const ProductController= require("../controllers/ProductController")
const OrderController= require("../controllers/OrderController")
const middleware= require("../middleware/middleware")


router.post("/CreateUser",middleware.isFree,UserModel.createUser)
router.post("/ProductModel",ProductController.CreateProduct)
router.post("/OrderModel",middleware.isFree,OrderController.NewOrder)


module.exports = router;