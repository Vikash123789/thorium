const express = require('express');
const router = express.Router();
const authorContoller = require("../controllers/authorController");
const blogControllers = require("../controllers/blogControllers");
const authentication = require("../middleWare/auth");
const authoriZation = require("../middleWare/auth");


router.post("/authors", authorContoller.createAuthor);

router.post("/authorLogIn", blogControllers.authorLogIn);

router.post("/blogs", authentication.authentication, authoriZation.authorization, blogControllers.createBlog);

router.get("/getblog", authentication.authentication, authoriZation.authorization, blogControllers.getBlogs);

router.put("/updateBlogs/:blogId", authentication.authentication, authoriZation.authorization, blogControllers.updateBlogs);

router.delete("/deleteBlogs/:blogId", authentication.authentication, authoriZation.authorization, blogControllers.deleteBlogs);

router.delete("/deleteByQuery", authentication.authentication, authoriZation.authorization, blogControllers.deleteByQuery);




module.exports = router;