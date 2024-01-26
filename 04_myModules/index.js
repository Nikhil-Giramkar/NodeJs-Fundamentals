//I want to export modules, created by me

//I can export everything from that file
//const maths = require("./maths");

//Or I can export required stuff from that module
const {add, name, sub} = require("./maths");

console.log(add(2,3));
console.log(sub(2,3));
console.log(name)