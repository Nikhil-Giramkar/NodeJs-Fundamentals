//Core modules are built in modules in JS
//One such core module is "fs", which can be used for read/write of files

const fs = require('fs');
//Require keyword works like import keyword
//We can store the modules i na const variable, to access the in-built methods inside them.

console.log("Working with fs module");


const FILE_NAME = "myFile.txt";

//Write content to a file
fs.writeFileSync(FILE_NAME, "Hi Nikhil, This content s written via Code");
/*
We can use any option
    writeFile
    writeFileSync
writeFileSync will not proceed to next code unless its work is done.
whereas, writeFile will not wait for execution of the current line, it will go to next line for further execution

The moment I write, 
    node index.js in terminal
The code will execute and I will see a new file created in this directory with content as written above
If file already exists, it will over-write the content provided via code
*/

//Append to existing file
fs.appendFileSync(FILE_NAME, "\n\nHi Nikhil, this line was appended");


//Read from file
const fileContent = fs.readFileSync(FILE_NAME);

console.log(fileContent);
/*
Output:
<Buffer 48 69 20 4e 69 6b 68 69 6c 2c 20 54 68 69 73 20 63 6f 6e 74 65 6e 74 20 73 20 77 72 69 74 74 65 6e 20 76 69 61 20 43 6f 64 65 0a 0a 48 69 20 4e 69 6b ... 27 more bytes>

Why did we such output?
---------------------------------
Node Js includes an aditional data type called "Buffer"
Which is not available in Brower's JavaScript

Buffer is mainly used to store Binary Data 
While reading from a file or receiving packets over the network. 

So to see buffer data, we'll do a toString()
*/
console.log("------------------------------------\n");
const stringContent = fileContent.toString();
console.log(stringContent);


//To rename file
const newFileName = "myCodedFile.txt"
fs.renameSync(FILE_NAME, newFileName);

