const express = require("express");
const app = express();

app.get("/", function(request,response){
  response.send("Hi there!");
});

app.get("/contact", function(req,res){
  res.send("<h3>Contact me at <em>kadumperme5@gmail.com</em> </h3>");
});

app.get("/about", function(req,res){
  res.send("I am Kadum Perme & I am from Pasighat");
});

app.listen(3000,function(){
  console.log("Server started at port 3000");
});
//Until this line our browser will print error because although
//it is listening our local server is not sending anything
