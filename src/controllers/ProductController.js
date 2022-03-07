const { count } = require("console")
const BookModel= require("../models/Product")

const CreateProduct= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}


module.exports.CreateProduct= CreateProduct
