
//import model
const Post = require("../models/postModel");

exports.createPost = async (req, res) => {

    try {

        //fetch data from req body
        const {title, body } = req.body;


        //create a new comment object
        const post = new Post({
            title, body
        });


        //save the new post into the database
        const savedPost = await post.save();


        res.json({
            post: savedPost,

        });
    }
    catch (err) {
        return res.status(400).json({
            error: "Error while creating post",
            details: err.message,
        })
    }
};

//get all posts
exports.getAllPosts= async(req, res)=>{
    try{
        // likes & comments k sare ids ko object k sath replace kar dena
        const posts = await Post.find().populate("likes").populate("comments").exec();
        res.json({
            posts,
        })
    }
    catch(err){
        return res.status(400).json({
            error: "Error while fetching post",
            details: err.message,
        })
    }
}