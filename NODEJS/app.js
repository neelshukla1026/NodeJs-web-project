const http = require("http");
const server = http.createServer(function(req, res){
    res.write("Welcome to Node JS 123")
    res.end("How you doing?")
});
server.listen(8080,"127.0.0.1",()=>{
    console.log("listining to the port number 8080")
});
