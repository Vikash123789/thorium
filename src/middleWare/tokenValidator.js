const jwt = require('jsonwebtoken')

const tokenValidator = async function (req, res, next){
    let token = req.headers["x-auth-token"]
    let  userId = req.params.userId
    
    if(!token) return res.send({status: false, msg: "[x-auth-token] Manadatory"})
    let tokenValidation = jwt.verify(token, "Facebook")


    if(!tokenValidation) return res.send({status: false, msg:"Invalid token"})
    next()
}

module.exports.tokenValidator = tokenValidator



