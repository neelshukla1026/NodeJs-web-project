const express = require("express");

const app = express();
const port = 3000;

app.get("/home", (req,res)=>{
    res.send("Hello from the home page");
});
app.get("/Avantika", (req,res)=>{
    res.json([{
        id:1,
        name:"Neelmani"
    },
    {
        id:2,
        name:"Avantika"
    },
    {
        id:3,
        name:"Ajesh"
    },
    {
        id:4,
        name:"Akanksha"
}]);
});
app.get("/file", (req,res)=>{
    res.write("<h1>Hello from the file page</h1>");
    res.write("Hello from the file page");
    res.send();
});
app.get("/about", (req,res)=>{
    res.send("Hello from the about page");
});


app.listen(port,()=>{
    console.log(`listening from ${port}`);
})