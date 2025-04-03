
const express = require("express");

const router = express.Router();

//import controller
const {dummyLink} = require("../controllers/likeController");
const {createComment}=require("../controllers/commentController");
const {createPost, getAllPosts}=require("../controllers/postController");
const { get } = require("mongoose");



//create mapping
router.get("/dummyroute", dummyLink);
router.post("/comments/create", createComment)
router.post("/posts/create", createPost)
router.get("/posts", getAllPosts)




//export
module.exports=router;