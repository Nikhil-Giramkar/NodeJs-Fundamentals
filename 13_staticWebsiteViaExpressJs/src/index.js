const express = require('express')
const path = require('path');
const app = express();

//To serve static web pages via express js,
//We need to use a built in middleware as below

//The below path indicates the location of html and css files to be served
const staticPath = path.join(__dirname, "../public");

//Useing "static" middleware for werving static webpages and providing pathn to it
app.use(express.static(staticPath));

app.listen(8765, ()=>{
    console.log("Express Server is listening....");
})