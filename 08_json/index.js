const fs = require("fs");


//This is an object
const bioData = {
    name: "Nikhil G",
    profession: "Software Engineering",
    age: 23
}

//Lets convert it to Json and put it inside a file
const jsonData = JSON.stringify(bioData);

fs.writeFile("myJsonData.json", jsonData, (err)=>{
    if(err!=null){
        console.log(err);
        return;
    }
    console.log("File created and content written");    
})

//Lets read that file data and convert to object and print
fs.readFile("myJsonData.json", "utf-8", (err, data)=>{
    const objData = JSON.parse(data);
    console.log(objData);
})

//Write in terminal
//    node index.js
