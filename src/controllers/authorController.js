const authorModel = require("../models/authorModel");

const createAuthor = async function (req, res) {
    try {
        let data = req.body;
        let savedata = await authorModel.create(data);
        res.status(201).send({ status: true, msg: savedata });
    }
    catch (error) {
        res.status(500).send({ status: false, error: error.message });
    }
}


module.exports.createAuthor = createAuthor;