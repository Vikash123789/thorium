const jwt = require('jsonwebtoken')

const tokenValidator = async function (req, res, next) {
    try {
        let token = req.headers["x-auth-token"]
        // let userId = req.params.userId
        if (!token) return res.status(403).send({ status: false, msg: "[x-auth-token] Manadatory" })
        let tokenValidation = jwt.verify(token, 'Facebook')
        if (!tokenValidation)
         return res.status(400).send({ status: false, msg: "Invalid token" })
        next()
    }
    catch (err) {
        res.status(500).send({ msg: "Error", error: err.message })
    }
}

module.exports.tokenValidator = tokenValidator



