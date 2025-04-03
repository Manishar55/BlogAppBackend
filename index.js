
//intance of express framework
const express = require("express");
const app = express(); //server created

require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

//import api route
const blog= require("./routes/blog");

//mount route to this path
app.use("/api/v1", blog);


//connect to the database
const dbConnect = require("./config/database");
dbConnect();

//start the server
app.listen(4000,()=>{
    console.log(`App is running successfully at port no ${PORT}`);
});

//default route
app.get("/", (req, res)=>{
    res.send(`<h1>This is home page !! <h1>`);
})