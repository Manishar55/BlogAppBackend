

//import model
const Post = require("../models/postModel");
const Like = require("../models/likeModel");

//like a post
exports.likePost= async (req, res)=>{
    
    try{
        //fetch data from req body
        const {post, user} = req.body;

        //create like object
        const like = new Like({
            post, user,
        });

        //save
        const savedlike = await like.save();

        //update the post collection
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: savedlike._id}}, {new: true})
        // .populate("likes").exec();  //it will show the details of users who has liked the post

        res.json({
            post:updatedPost,
        })
    }
    catch(err){

        return res.status(500).json({
            error: "Error while fetching likes",
            details: err.message,
        })
    }

}









exports.dummyLink=(req, res)=>{
    res.send("This is your dummy page");
}


