const express = require("express")
const { route } = require("express/lib/application")
const router = express.Router();
//const mongoose = require("mongoose")
const userController =  require("../controllers/userController.js")


router.post("/register",userController.registerUser)
router.get("/login",userController.loginUser)

module.exports =router;