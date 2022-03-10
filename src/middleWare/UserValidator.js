const UserModel = require('../models/userModel')

const UserValidator = async function (req, res, next) {
    try {
        let userId = req.params.userId
        let user = await UserModel.findById(userId)
        if (!user)
            return res.status(400).send({ status: false, msg: "User ID not Found" })
        next()
    }
    catch (error) {
        res.status(500).send({ error: error.message })
    }
}

module.exports.UserValidator = UserValidator