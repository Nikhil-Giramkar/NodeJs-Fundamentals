//To create a web server in Node.js, we need http module

const http = require('http');

// Creating a server

const server = http.createServer((req, res)=>{
    //We can send a response, whenever we get a request lie this
    res.end("Hi Nikhil, Hello from other side");
})

//To accept incoming requests
//Our server must start listening on a particular port number and host
server.listen(8765, "127.0.0.1", ()=>{
    console.log("Hi Nikhil, Listening on Port 8765");
    //This line is printed on terminal
})

//Just by typing: http://localhost:8765/ in browser url bar, we get the response as written above