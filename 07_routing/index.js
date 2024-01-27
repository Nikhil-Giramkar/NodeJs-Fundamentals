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