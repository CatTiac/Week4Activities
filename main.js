// const {add, multiply} = require('./maths');


// console.log(add(5,8));

// console.log(multiply(5,8));

//Node JS
//lodash is a third-party module
//npm install will install dependencies from json

const fsObj = require("fs");
const osObj = require("os");
const _ = require("lodash");



let userData = osObj.userInfo().username;

fsObj.appendFile("example.txt", `The username is ${userData}`, (error) => {
    if(error) {
        console.log("BAD TIMES");
    }
});
console.log(userData);

let myRandom = _.random(1,100);

console.log(myRandom);