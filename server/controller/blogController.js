const blogModel = require("../models/blogModel")
const UserModel = require("../models/userModel")

const createBlogController=async (req,res)=>{

    const {title,author,content,published_date}=req.body
    try {
        await blogModel.create({title,author,content,published_date,userId:req.user?._id})
        res.status(200).json({message:"Blog created"})
    } catch (error) {
        res.status(404).json({message:error})
    }
}

const deleteBlogController = async (req, res) => {
    const { noteId } = req.params;
    const userId = req.user?._id;
    if (!noteId) {
        return res.status(400).json({ message: "N ID is required" });
    }
    try {
        const blogdata = await blogModel.findOne({ _id: noteId, userId: userId });
        if (!blogdata) {
            return res.status(404).json({ message: "Blog not found" });
        }
        await blogModel.findByIdAndDelete(noteId);
        res.status(200).json({ message: "Blog deleted successfully" });
    } catch (error) {
        return res.status(400).json({ message: error.message });  
    }
};

const updateBlog = async (req, res) => {
    
    const { noteId } = req.params;
    const userid = req.user?._id;
    // console.log(userid)
    // res.send("ok")

    if (!noteId) {
        return res.status(400).json({ message: "N ID is required" });
    }

    

    
    

    try {
        const blogdata = await blogModel.findOne({ _id: noteId, userId: userid });
        if (!blogdata) {
            return res.status(404).json({ message: "blog not found" });
        }
        await blogModel.findByIdAndUpdate(noteId,{ ...req.body});

        res.status(200).json({ message: "blog updated successfully" });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};


const getBlogs=async(req,res)=>{
    const {_id}=req.user
    try {
        const blogsdata=await blogModel.find({userId:_id})
        if(!blogsdata || blogsdata.length==0){
            return res.status(400).json({ message: "blog Not Found" });
        }
        res.status(200).json({message:"blogs Fetched Successfully",blogsdata});
    } catch (error) {
        return res.status(400).json({ message: error.message }); 
    }
}


// admine part

const deleteBlogsByAdmine=async(req,res)=>{
    try {
        await blogModel.deleteMany()
        res.status(200).json({ message: "all blogs deleted" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
    
}

const getAllBlogsByAdmine=async(req,res)=>{
    try {
        const allblogs=await blogModel.find()
        if(!allblogs || allblogs.length==0){
            return res.status(400).json({ message: "blogs Not Found" });
        }
        res.status(200).json({ message: "blogs fetched success",allblogs });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


module.exports={createBlogController,deleteBlogController,deleteBlogsByAdmine,updateBlog,getBlogs,getAllBlogsByAdmine}