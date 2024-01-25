const taskValidator=(req,res,next)=>{
    const { title, description, dueDate, category } = req.body;

    //return error message if password and email missing

    if(!title || !description || !dueDate || !category){
        return res.status(400).json({
            success:false,
            message:"Every field is required"
        });
    }
    next()
}

module.exports=taskValidator;