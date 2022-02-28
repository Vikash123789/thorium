const { count } = require("console")
const BookModel = require("../models/bookModel")

const createBook = async function (req, res) {
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}



const bookList = async function (req, res) {
    let allBooks = await BookModel.find().select({ bookName: 1, authorName: 1, _id: 0 })
    res.send({ msg: allBooks })
}


const getBooksInYear = async function (req, res) {
    let EnterYear = req.query.EnterYear
    let getYear = await BookModel.find({ year: EnterYear })

    res.send({ msg: getYear })
}

const getParticularBooks = async function (req, res) {
    let enterInput = req.query.enterInput
    let authorName = req.query.authorName
    let bookName = req.query.bookName
    let findByInput = await BookModel.find({
        $or: [{ authorName: authorName }, { bookName: bookName }
            , { year: enterInput }
        ]
    })

    res.send({ msg: findByInput })

}



const getXINRBooks = async function (req, res) {

    let price = await BookModel.find({ indianPrice: [100,200,500] })

    res.send({ msg: price })
}


const getRandomBooks = async function (req, res) {

    let page = await BookModel.find({ totalPages: { $gte: 500 } })


    res.send({ msg: page })
}

module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks

