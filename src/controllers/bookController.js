const { count } = require("console")
const authorModel = require("../models/newAuthor")
const publisherModel = require("../models/newPublisher")
const BookModel = require("../models/newBook")

const newAuthor = async function (req, res) {
    let book = req.body
    let bookCreated = await authorModel.create(book)
    res.send({ data: bookCreated })
}


const getAuthors = async function (req, res) {
    let book = req.body
    let ListofAuthor = await authorModel.find(book)
    res.send({ data: ListofAuthor })


}
const NewPublisher = async function (req, res) {
    let book = req.body
    let bookCreated = await publisherModel.create(book)
    res.send({ data: bookCreated })



}

const CheckPublisher = async function (req, res) {
    let book = req.body
    let AllPublisher = await publisherModel.find(book)
    res.send({ data: AllPublisher })


}

const newBook = async function (req, res) {
    let book = req.body
    let bookCreated = await BookModel.create(book)
    res.send({ data: bookCreated })
}
const Checkbook = async function (req, res) {

    let data = req.body
    let authorId = data.author;
    let publisherId = data.publisher_id;
    // A
    if (!authorId)
        return res.send("* That Author_id detail is required")

    // B
    let author = await authorModel.findById(authorId)
    if (!author)
        return res.send("*  The author is not present")

    // C
    if (!publisherId)
        return res.send(" This Publisher Object_id detail is required")


    // D
    let publisher = await publisherModel.findById(publisherId)
    if (!publisher) return res.send("*Please Enter a Valid Publisher Id")



    let FinalBook = await BookModel.create(data)
    return res.send({ data: FinalBook })
}

const fetchBooks = async function (req, res) {


    let AllBookData = await BookModel.find().populate("author").populate("publisher_id")


    res.send({ data: AllBookData })

}



module.exports.newAuthor = newAuthor
module.exports.getAuthors = getAuthors
module.exports.NewPublisher = NewPublisher
module.exports.CheckPublisher = CheckPublisher
module.exports.newBook = newBook
module.exports.Checkbook = Checkbook
module.exports.fetchBooks = fetchBooks
