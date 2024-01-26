const fs = require("fs");

//To do asynchronous tasks
//We use the normal methods

//Create a file
const FILE_NAME = "myAsyncFile.txt";
//fs.writeFile(FILE_NAME, "This file is created by async method");

/* 
The moment I enter
    node index.js
I get an error saying, 
Callback function is missing....

Actually, in all async functions, we also need to provide a callback function,
which we get executed, when the processing is complete.
Since compiler does not wait for async functions, 
we need to specify, what to do when async task is done.
*/

fs.writeFile(FILE_NAME, "This file is created by async method", (error) =>{
    if(error!=null){
        console.log(error)
        return;
    }
    console.log("Processing complete")
});

//Append to file
fs.appendFile(FILE_NAME,"\nHi, this line is appended", (error=>{
    if(error!=null){
        console.log(error)
        return;
    }
    console.log("Appending complete");
}))

//Read from file
fs.readFile(FILE_NAME, "utf-8", (err, data)=>{
    if(err!=null){
        console.log(error)
        return;
    }
    const strData = data.toString();
    console.log(strData);
})