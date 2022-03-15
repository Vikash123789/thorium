const blogModel = require("../models/blogsModel")
const authorModel = require("../models/authorModel")




const createAuthor = async function (req, res) {
    try {
        let data = req.body
        let AuthorCreated = await authorModel.create(data)
        res.status(201).send({ status : true ,data :AuthorCreated, msg: "AuthorCreated succesfully" })

    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: error.message })
    }

}





const createBlog = async function (req, res) {
    try {
        let data = req.body
        let authorId = data.authorId
        if (Object.keys(data).length == 0) {
            res.status(400).send({ status: false, msg: "Invalid Input" })
        }
        if (!authorId) {
            res.status(400).send({ status: false, msg: "Input AuthorId" })
        }
        let authorDetails = await authorModel.findById(authorId)
        if (!authorDetails) {
            res.status(404).send({ status: false, msg: "AuthorId Not Exist" })
        } else {
            let blogCreate = await blogModel.create(data)
            res.status(201).send({ status: true, data: blogCreated })
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: error.message })
    }

}

const getBlogs = async function (req, res) {
    try {
        let collection = await blogModel.find({ isPublished: false, isDeleted: false })
        res.status(200).send({ status: true, msg: collection })

        if (!collection) {
            res.status(404).send({ status: false, msg: "Blogs are not found" })
        }
        else {
            let data = req.query;
            let getByQuery = await blogModel.find(data)
            if (getByQuery.length <= 0) {
                res.status(404).send({ status: false, msg: 'Data no found' })
            }
            else {
                res.status(200).send({ status: true, msg: getByQuery })
            }
        }
    }

    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}


const updateBlog = async function (req, res) {
    try {

        let blogId = req.params.blogId
        let data = req.body
        if (Object.keys(blogId).length == 0) {
            res.status(400).send({ status: false, msg: "BlogsId Required" })
        }

        let blogDetails = await blogModel.find({ _id: blogId })
        if (!blogDetails) {
            res.status(404).send({ status: false, msg: "BlogsId Not Exist" })
        } else {
           
            let savedata = await blogModel.updateMany({ _id: blogId }, { $set: data }, { new: true })
            let updates = await blogModel.updateMany({ _id: blogId }, { isPublished: true }, { new: true })

            res.status(200).send({ status: true, data: updates, Msg: "Blogs Updated Succesfully" })
        }

    }
    catch (error) {
        console.log(error)
        res.status(500).send({ msg: error.message })
    }
}




const deleteBlog = async function (req, res) {
    try {
        let BlogId = req.params.BlogId
        if (Object.keys(BlogId).length == 0) {
            res.status(400).send({ status: false, msg: "BlogsId Required" })
        }
        let blogDetails = await blogModel.find({ _id: BlogId }, { isDeleted: false })
        if (!blogDetails) {
            res.status(404).send({ status: false, msg: "Blogs Not Found" })
        } else {

            let deleteData = await blogModel.findOneAndUpdate({ _id: BlogId }, { isDeleted: true }, { new: true })
            deleteData.deletedAt = Date()
            deleteData.save()
            res.status(201).send({ status: true, data: deleteData })

        }
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ msg: error.message })
    }


}


const deleteByAddress = async function (req, res) {
    try {
        let authorId = req.query.authorId
        let category = req.query.category
        if (!authorId) {
            res.status(400).send({ status: false, msg: "AuthorId Required" })
        }
        if (!category) {
            res.status(400).send({ status: false, msg: "Category Required" })
        }
        let authorDetails = await authorModel.find({ _id: authorId })
        if (!authorDetails) {
            res.status(404).send({ status: false, msg: "AuthorId Not Exist" })
        } else {
            let updateDetails = await blogModel.updateMany({ authorId: authorId, category: category }, { $set: { isDeleted: true } })
            updateDetails.deletedAt = Date()
            res.status(201).send({ status: true, data: updateDetails })

        }
    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: error.message })
    }
}






module.exports.createAuthor = createAuthor;
module.exports.createBlog = createBlog;
module.exports.getBlogs = getBlogs;
module.exports.updateBlog = updateBlog;
module.exports.deleteBlog = deleteBlog;
module.exports.deleteByAddress = deleteByAddress;