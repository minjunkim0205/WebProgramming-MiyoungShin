const express = require("express");
const app = express();

const port = 80;

app.get("/", (req, res)=>{
    console.log("Root");
    //res.send("Root요청 응답");
    res.sendFile(__dirname+"/pages/main.html");
});
app.get("/about", (req, res)=>{
    console.log("About");
    //res.send("about요청 응답");
    res.sendFile(__dirname+"/pages/about.html");
});

app.listen(port, ()=> {
    console.log("http://localhost:"+port);
});