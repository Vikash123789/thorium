const express = require('express');
const router = express.Router();


const bookController = require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", bookController.newAuthor)
router.get("/CheckAuthor", bookController.getAuthors)
router.post("/NewPublisher", bookController.NewPublisher)
router.get("/CheckPublisher", bookController.CheckPublisher)
router.post("/NewBook", bookController.newBook)
router.post("/CheckBook", bookController.Checkbook)
router.get("/fetchBooks", bookController.fetchBooks)
router.put("/InsertInBook", bookController.InsertInBook)
router.put("/GreaterPrice",bookController.GreaterPrice)

module.exports = router;