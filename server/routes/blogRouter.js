const express = require("express")
const {  deleteBlogsByAdmine, getAllBlogsByAdmine, createBlogController, getBlogs, updateBlog, deleteBlogController } = require("../controller/blogController")
const Auth = require("../middleware/Auth")
const rolecheck = require("../middleware/rolechecker")
const BlogRouter=express.Router()

BlogRouter.use(Auth)
BlogRouter.post("/create",createBlogController)
BlogRouter.get("/getblog",getBlogs)
BlogRouter.delete("/delete/:noteId",deleteBlogController)
BlogRouter.patch("/update/:noteId",updateBlog)
BlogRouter.delete("/deleteallblogsbyadmine",rolecheck,deleteBlogsByAdmine)
BlogRouter.get("/getallblogsbyadmine",rolecheck,getAllBlogsByAdmine)




module.exports=BlogRouter