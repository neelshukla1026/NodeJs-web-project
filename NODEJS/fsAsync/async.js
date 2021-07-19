const fs = require('fs');

//Creating an Asynchronous file
fs.writeFile("read.txt", "Today is an awsome Day",(err)=>{
console.log("file is created");
console.log(err);
});

//Append data into Asynchronous file
fs.appendFile("read.txt"," Neel Shukla Ji",(err)=>{
    console.log("Data Appended");
})

fs.readFile("read.txt","UTF-8",(err,data)=>{
        console.log(data);
});