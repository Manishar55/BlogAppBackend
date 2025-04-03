

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
            error: "Error while liking post",
            details: err.message,
        })
    }

}

//unlike a post
exports.unlikePost= async (req, res)=>{
    
    try{
        //fetch data from req body
        const {post, like} = req.body;

        //find and delet the like from like collection
        const deletedLike = await Like .findOneAndDelete({post:post, _id:like}); //jis v pehli entry k andar ye dono parameters match kar jayenge usko delete kar dega

        //update the post collection, delet the like from post collection also
        const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {likes: deletedLike._id}}, {new: true})  //likes k andar jiski id deletedLike._id h usko delete karo

        res.json({
            post:updatedPost,
        })
    }
    catch(err){

        return res.status(500).json({
            error: "Error while unliking post",
            details: err.message,
        })
    }

}



exports.dummyLink=(req, res)=>{
    res.send("This is your dummy page");
}


