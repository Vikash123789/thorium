const jwt = require('jsonwebtoken')


const aurThorization = function (req, res, next) {
    try {
        let userId = req.params.userId
        let valid = req.headers["x-auth-token"]
        let Token = jwt.verify(valid, 'Facebook')
        let decodedToken = Token.userId
        if (decodedToken !== userId)
            return res.status(403).send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })
        next()
        }
    catch (error) {
        res.send(500).send({ error: error.message })
    }
}



module.exports.aurThorization = aurThorization