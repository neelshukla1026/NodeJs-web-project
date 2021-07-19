const fs = require("fs");

//Synchronous
// const data = fs.readFileSync("read.txt","utf-8");
// console.log(data);
// console.log("After the Data");

//Asynchronous
fs.readFile("read.txt","utf-8",(err,data)=>{
    console.log(data);
});
console.log("After the Data");