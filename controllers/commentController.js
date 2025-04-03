
//import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");


//business logic
exports.createComment=async(req, res)=>{

    try{
        //fetch data from req body
        const{post, user, body}=req.body;
        
        //create a new comment object
        // const comment=await Comment.create({post, user, body});
        //OR
        const comment = new Comment({
            post, user, body
        }); 


        //save the new comment into the database
        const savedComment= await comment.save();

        //find the post by id, add the new comment to its (that post's) comments array            //{new: true} will return the updated document after all the task
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id}}, {new: true})  //push->update pull->remove
        .populate("comments")  //it will fetch the actual documents which relate with that id instead of ids of comment, means populate the comment array with comment documents
        .exec();

        res.json({
            post: updatedPost,
           
        });
    }
    catch(err){
        return res.status(500).json({
            error: "Error while creating comment",
            details: err.message,
        })
    }
}