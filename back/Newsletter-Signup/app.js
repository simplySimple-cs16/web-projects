//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req,res){
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;
  // console.log(firstName+lastName+email);
  // res.send(firstName+lastName+email);
  data = {
    members:[
      {
        email_address: email,
        status: "subscribed",
        merge_fields:{
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };
  const jsonData = JSON.stringify(data);

  const url = "https://us17.api.mailchimp.com/3.0/lists/14c2f89484";

  const options = {
    method: "POST",
    auth:"randomString:7590322b368b4a43b27d3481996f2c84-us17"
  }

  const request = https.request(url,options,function(response){
      response.on("data",function(d){
        console.log(JSON.parse(d));
      });
  });

  request.write(jsonData);
  request.end();

});

app.listen(3000,function(){
  console.log("Server running at port 3000");
});

//API key
//7590322b368b4a43b27d3481996f2c84-us17

//list id
//14c2f89484
