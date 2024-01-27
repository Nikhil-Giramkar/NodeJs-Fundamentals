//Here, we will create an API to get json data and displa it on UI
const fs = require("fs");
const http = require("http");

//Create server
const server = http.createServer((req, res)=>{
    //Page requested by user?
    console.log(req.url);

    const requestedPage = req.url;

    if(requestedPage=='/')
        res.end("Hello from Home Page");
    else if(requestedPage=='/products')
    {
        //__dirname, module, exports, __filename are by default present in any module in node js
        //Every js file in node js is treated as module.

        fs.readFile(`${__dirname}/products.json`, "utf-8", (err, data)=>{
            if(err!=null)
            {
                console.log(err);
                return;
            }
            //Get the json Data into JS Obj
            const arrayOfProducts = JSON.parse(data);

            //Iterate all elements to get product titles
            const listOfProductTitles = [];
            arrayOfProducts.forEach(element => {
                listOfProductTitles.push(element.title);
            });

            console.log(listOfProductTitles);

            //Show Product titles on UI as JSON
            const jsonTitles = JSON.stringify(listOfProductTitles, null, 1);
            res.end(jsonTitles);
        })
    }
})

//Listen 
server.listen(8765, "127.0.0.1", ()=>{
    console.log("Server started listening");
})