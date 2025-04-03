

//import instance of mongoose
const mongoose= require("mongoose");


//route handler
const postSchema = new mongoose.Schema({
    
    //title of the post
    title:{
        type: String,
        required: true,
    },

    //content of the post
    body:{
        type: String,
        required: true,
    },

   //likes of the post
    likes: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",
    }],

    //comments of the post
    comments: [{  
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    }]
        
});

//export 
module.exports=mongoose.model("Post", postSchema);