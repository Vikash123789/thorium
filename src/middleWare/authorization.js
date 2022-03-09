const jwt = require('jsonwebtoken')


const aurThorization = function (req, res, next) {
    let userId = req.params.userId
    let valid = req.headers["x-auth-token"]

    let Token = jwt.verify(valid, 'Facebook')

    let decodedToken = Token.userId

    if (decodedToken != userId) return res.send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })

    next()
}


module.exports.aurThorization = aurThorization