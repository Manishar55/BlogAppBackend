
const express = require("express");
const app = express();

app.listen(4000,()=>{
    console.log('App is running successfully');
});

app.get("/", (req, res)=>{
    res.send(`<h1>This is home page !! <h1>`);
})