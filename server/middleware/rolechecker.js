const rolecheck=(req,res,next)=>{
    const {role} =req.user
    if(role!='admine'){
        return res.status(400).json({ message: "You Are Not Authorize" });
    }else{
        next()
    }
}

module.exports=rolecheck