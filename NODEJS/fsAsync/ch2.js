const fs = require('fs');

// //Creating A folder
// fs.mkdir("Chal",(err)=>{
//     console.log("Folder created");
// });

// //Creating a file in Chal Folder
// fs.writeFile('./Chal/bio.txt',"My Name is Neelmani Shukla and This is Asynchronous File",(err)=>{
//     console.log("File Created");
// });

// //Append Data
// fs.appendFile("./Chal/bio.txt"," More Data Is Added in the file",(err)=>{
//     console.log("Data Appended")
// });

// //Read Data
// fs.readFile("./Chal/bio.txt","utf8",(err, data)=>{
//     console.log(data);
// })

// //Rename the file
// fs.rename("./Chal/bio.txt","./Chal/myBio.txt",(err)=>{
//     console.log("File Renamed");
// })

// //Delete File
// fs.unlink("./Chal/myBio.txt",(err)=>{
//     console.log("File Deleted");
// })

//Delete Folder
fs.rmdir("Chal",(err)=>{
    console.log("Folder Delted");
});