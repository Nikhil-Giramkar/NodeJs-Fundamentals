
const http = require("http");

const server = http.createServer();

server.on("request", (req, res)=>{
    //Traditional way
    /*
    Here, we fech the entire data source first,
    once that is done, we show it on screen.
    Problem occurs, when data set is very very huge.
    Such that downloading/ fetching it taes significant amount of time.
    In that case, the page keeps loading....
    Until the content is completely downloaded
    */
    const fs = require("fs");
    /*
    fs.readFile("data.txt", "utf-8", (err, data)=>{
        if(err)
            return console.log(err);
        res.end(data)
    }) 
    */

    //Streaming data
    const readStream = fs.createReadStream("data.txt");
    /*
    //When more chunks of data are yet to be streamed
    readStream.on("data", (chunkData)=>{
        res.write(chunkData);
    })

    //End of File
    readStream.on("end", ()=>{
        console.log("Document is completely streamed...");
        res.end();
    })

    //Error in streaming
    readStream.on("error", (err)=>{
        console.log(err);
        res.end("File Not found");
    })
    */

    //We can do the entire stuff written above in a single line using pipe()
    readStream.pipe(res);
    //pipe() does all the work in background as mentioned above, it connects readable to writable stream
})

server.listen(8765, ()=>{
    console.log("Server listening");
})