const mongoose=require("mongoose")

const blogSchema= new mongoose.Schema({
    title:String,
    author:String,
    userId:String,
    content:String,
    published_date:Date
})

const blogModel=mongoose.model("blog",blogSchema)

module.exports=blogModel