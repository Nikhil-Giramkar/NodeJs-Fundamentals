const express = require('express')
const path = require('path');
const app = express();
const PORT = 8765;

//To serve static web pages via express js,
//We need to use a built in middleware as below

//The below path indicates the location of html and css files to be served
const staticPath = path.join(__dirname, "../public");

//Useing "static" middleware for werving static webpages and providing pathn to it
//app.use(express.static(staticPath));

//Setting the view engine used by us
app.set("view engine", "hbs");

//Serving that hbs file to an endpoint
app.get("", (req, res)=>{
    res.render("index", {
        userName: "Nikhil G"
    });
});


app.listen(PORT, ()=>{
    console.log(`Express Server is listening at http://localhost:${PORT}`);
})