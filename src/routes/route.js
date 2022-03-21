const express = require('express');
const router = express.Router();
const authorContoller = require("../controllers/authorController");
const blogControllers = require("../controllers/blogControllers");
const authentication = require("../middleWare/auth");
// const authorization = require("../middleWare/auth");


router.post("/author", authorContoller.createAuthor);

router.post("/logIn", authorContoller.authorLogIn);


router.post("/blogs", authentication.authentication, blogControllers.createBlog);

router.get("/blogs", authentication.authentication, blogControllers.getBlogs);

router.put("/blogs/:blogId", authentication.authentication, blogControllers.updateBlogs);

router.delete("/blogs/:blogId", authentication.authentication, blogControllers.deleteBlogs);

router.delete("/blogs", authentication.authentication, blogControllers.deleteByQuery);




module.exports = router;