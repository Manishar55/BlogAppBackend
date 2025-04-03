
//import instance of mongoose
const mongoose= require("mongoose");


//route handler
//define schema
const commentSchema = new mongoose.Schema({
    //commenting in which post?
    post: {
        //jab v kisi aur model ko kisi aur object ko refer karte h uski id k through then we need write like this
        type: mongoose.Schema.Types.ObjectId, //id
        ref: "post", //this is the reference to the post model
    },

    //who is commenting?
    user:{
        type: String,
        required: true,
    },

    //what is the comment?
    body:{
        type: String,
        required: true,
    }
})


//export 
module.exports=mongoose.model("Comment", commentSchema);