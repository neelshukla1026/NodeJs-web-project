const express = require('express');
require("./db/conn");
const Student = require("./models/signup");
const router = require("./routers/router");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);


app.listen(port, ()=>{
    console.log(`connection is setup at ${port}`);
})


