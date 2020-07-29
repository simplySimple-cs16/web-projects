const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

console.log(date);

let items = ["Buy Food","Cook Food","Eat Food"];
let workItems = [];

const app = express();

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res){

  let day = date.getDate();

  res.render("list",{listTitle:day, newListItem:items});
});

app.post("/",function(req,res){
  let item = req.body.newItem;

  let listType = req.body.listType;

  if(listType==="Work"){
    workItems.push(item);
    res.redirect("/work");
  }
  else{
    items.push(item);
    res.redirect("/");
  }

});

app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work",newListItem:workItems});
});

app.get("/about",function(req,res){
  res.render("about");
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
