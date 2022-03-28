const mongoose = require("mongoose");
const userModel = require("../models/userModel.js");
const jwt = require("jsonwebtoken");
const validation = require("../middleware/validation");
const bookModel = require("../models/bookModel");
const reviewModel = require("../models/reviewModel");

const createReview = async (req, res) => {
    try {
      const data = req.body;
      if (Object.keys(data) == 0) { return res.status(400).send({status: false,msg: "No input provided by user",});}
    
    const saveData = await reviewModel.create(data)
     return res.status(201).send({status :true , msg :saveData})
    
    
    } catch (err) {console.log(err);return res.status(500).send({status: false,msg: err,});}
  };

  const updateReview = async (req, res) => {
    try {
      const data = req.body;
      if (Object.keys(data) == 0) { return res.status(400).send({status: false,msg: "No input provided by user",});}
    
      const saveData = await reviewModel.findOneAndUpdate()
      return res.status(201).send({status :true , msg :saveData})
    
    } catch (err) {console.log(err);return res.status(500).send({status: false,msg: err,});}
  };

  const deleteReview = async (req, res) => {
    try {
      const data = req.body;
      if (Object.keys(data) == 0) { return res.status(400).send({status: false,msg: "No input provided by user",});}
    
      const saveData = await reviewModel.findOneAndUpdate(data)
      return res.status(201).send({status :true , msg :saveData})
    
    } catch (err) {console.log(err);return res.status(500).send({status: false,msg: err,});}
  };


  module.exports = { createReview, updateReview , deleteReview}