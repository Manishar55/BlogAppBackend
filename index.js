
const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

//import routes
const blog= require("./routes/blog");

//mount
app.use("/api/v1", blog);


//connect to the database
const dbConnect = require("./config/database");
dbConnect();

//start the server
app.listen(4000,()=>{
    console.log('App is running successfully');
});

app.get("/", (req, res)=>{
    res.send(`<h1>This is home page !! <h1>`);
})