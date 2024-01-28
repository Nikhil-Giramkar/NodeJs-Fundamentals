//After installing express from nom, we can start using it

const express = require('express');
const app = express();

/*
app now provides 4 main methods
    get
    post
    put 
    delete
*/

/*
Get method has 2 params
    route requested by client
    and callback function to handle that request
    The callback functio has reques and response as params
    Request Param has properties like request query strings, parameters, body, HTTP Headers, etc.

    Similarly we have response object
*/


app.get("/", (req, res)=>{
    //Here we use send method, in Node Js we used end method
    res.send("Hello from Express Js Backend");
});

app.get("/about", (req, res)=>{
    res.send("Hello from About Page");
});

app.get("/contact", (req, res)=>{
    res.send("Hello from Contact");
});

app.get("/products", (req, res)=>{
    res.send("Hello from Products page");
});


//Listen at a port
app.listen(8765, ()=>{
    console.log("Express.JS is now listening at http://localhost:8765/");
})


/*
    In NODE JS
    ------------
const http = require('http');

const server = http.createServer((req, res)=>{
    //Which url isrequested by user?
    console.log(req.url);

    if(req.url=='/')
        res.end('Hi, from Home Page');
    else if(req.url == '/about')
        res.end('Hi, from About Page');
    else if(req.url =='/contact')
        res.end('Hi, from Contact Page');
    else
        res.end("Error 404: Page Not Found");
})

server.listen(8765, "127.0.0.1", ()=>{
    console.log("Server is listening...")
})



Difference
--------------
Here In Express JS, 
we can seperate each get method
In Node JS, 
we had to write if-else for checking every request url

*/