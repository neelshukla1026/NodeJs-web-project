const requests = require('requests');
const path = require('path');
const express = require("express");
const app = express();
const hbs = require('hbs');
const port = 8000;

//console.log(__dirname);

//console.log(path.join(__dirname, "../project"));

const staticPath = path.join(__dirname, "../project")
const temp  = path.join(__dirname,"./temp/views");
const partials = path.join(__dirname,"./temp/partials")

// to set view engine
app.set("view engine", "hbs");
app.set("views",temp);
hbs.registerPartials(partials)

app.use(express.static(staticPath))

app.get("/", (req, res) =>{
    console.log("Conneted ji")
    res.render("index.hbs", {
        signup : "Neelmani Shukla"
    });
});

app.get("/about",(req,res)=>{
    console.log("connected from about")
    res.render("about.hbs");
});

app.get("/apidata",(req, res)=>{
    requests(`http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=6a1165835a666af616e74850005750be`)
    .on('data', (chunk)=> {
        const objdata = JSON.parse(chunk);
        const arrData = [objdata];
        const cel = `${arrData[0].main.temp}`- 273;
        console.log(`city name is ${arrData[0].name} and temprature is ${cel}`);
         
        res.send(`<h1>${arrData[0].name} temp is  ${cel} &deg;C</h1>`);
        //console.log(realTimeData);
    
    })
    .on('end', (err)=> {
      if (err) return console.log('connection closed due to errors', err);
     
      console.log('end');
    });
} )

// app.get("/",(req,res)=>{
//     res.send("Hello from the express sides");
// });

app.get('*',(req,res)=>{
    res.render("404",{
        errorcomment : "Oops! Page Not Found."
    });
})

app.listen(port,()=>{
    console.log(`Listining the port at ${port}`);
})