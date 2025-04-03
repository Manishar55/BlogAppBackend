
//import instance of mongoose
const mongoose= require("mongoose");


//route handler
const likeSchema = new mongoose.Schema({

    //like in which post?
    post: {
        type: mongoose.Schema.Types.ObjectId, //id
        ref: "Post", //this is the reference to the post model
    },

    //who is liked
    user:{
        type: String,
        required: true,
    },
    
});

//export 
module.exports=mongoose.model("Like", likeSchema);