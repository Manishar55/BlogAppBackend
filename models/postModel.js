

//import instance of mongoose
const mongoose= require("mongoose");


//route handler
const postSchema = new mongoose.Schema({

    title:{
        type: String,
        required: true,
    },

    body:{
        type: String,
        required: true,
    },

    likes:{
        type: mongoose.Schema.Types.ObjectId, //id
        ref:"Like",
    },

    comment:{
        type: mongoose.Schema.Types.ObjectId, //id
        ref:"Comment",
    }
    
});

//export 
module.exports=mongoose.model("Post", postSchema);