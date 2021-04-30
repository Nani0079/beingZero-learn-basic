const express = require('express');
 
const app = express();
 app.use(express.static(__dirname+"/1stcss.css"));
 app.use(express.static(__dirname+"/1stjs.js"));
app.get("/", function(req, res){
    res.send("Welcome");
})
app.get("/resume", function(req, res){
    res.sendFile(__dirname+"/index.html");
})
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
