const add = (a,b) =>{
    return a+b;
}

const sub = (a,b) =>{
    return a-b;
}

const name = "Nikhil"

//We can export the methods like this
// module.exports.add = add;
// module.exports.sub = sub;
//Or
module.exports = {add, sub, name};