
const express = require("express");

const router = express.Router();

//import controller
const {dummyLink, likePost} = require("../controllers/likeController");
const {createComment}=require("../controllers/commentController");
const {createPost, getAllPosts}=require("../controllers/postController");



//create mapping
router.get("/dummyroute", dummyLink);
router.post("/comments/create", createComment)
router.post("/posts/create", createPost)
router.get("/posts", getAllPosts)
router.post("/likes/like", likePost);




//export
module.exports=router;