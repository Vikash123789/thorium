const UserModel = require('../models/userModel')

const UserValidator = async function (req,res, next){
    let userId = req.params.userId
    let user =  await UserModel.findById(userId)
    if(!user) return res.send({status: false, msg: "User ID not Found"})
    next()

}

module.exports.UserValidator = UserValidator