/*
We can create our own events and event handlers in Node Js

events is an inbuilt module that returns EventEmitter class
*/

const EventEmitter = require("events");
const events = new EventEmitter();

const sayMyNameEvent = "sayMyNameEvent";


//events.on(...) handles the event with its params
events.on(sayMyNameEvent, (statusCode, myName)=>{
    console.log(`Status Code ${statusCode}, Your name is ${myName}`);
});

// events.emit(..) triggers the event with required params
events.emit(sayMyNameEvent, 200, "Nikhil G");
