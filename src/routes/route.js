const express = require('express');
const router = express.Router();
const allControllers = require("../controllers/allControllers");


router.post("/authors", allControllers.createAuthor);
router.post("/blogs", allControllers.createBlog);
router.get("/getblogs", allControllers.getBlogs);
router.put("/updateBlogs/:blogId", allControllers.updateBlog);
router.delete("/deleteBlogs/:BlogId", allControllers.deleteBlog);
router.delete("/deleteByAddress", allControllers.deleteByAddress);

module.exports = router;