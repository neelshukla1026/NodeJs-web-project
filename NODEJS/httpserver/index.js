//Http.createServer() method includes request 
//and response parameters which is supplies by Node.js

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    //  console.log(req.url);
   const data =  fs.readFileSync(`${__dirname}/UserApi/userapi.json`,"utf-8");
   const objData = JSON.parse(data);

    if(req.url=="/"){
    res.end('Hello from the others sides');
    }
    else if (req.url == "/about"){
        res.end('Hello from the About us sides');
    }
    else if (req.url == "/contact"){
        res.end('Hello from the contact sides');
    }
    else if (req.url == "/userapi"){
       res.writeHead(200, {"Content-Type":"application/json"});
       res.end(objData.City);
        
    }
    else {
        res.writeHead(404, {"Content-Type" : "text/html"});
        res.end('<h1>404 Error Page</h1>');
    }
})

server.listen(8000, "127.0.0.1",()=>{
    console.log("I'm listening lochalhost8000");
});