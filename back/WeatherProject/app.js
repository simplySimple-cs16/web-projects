const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));



app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");

});

app.post("/",function(req,res){

  var cityName = req.body.cityName; 
  console.log(cityName);
  const apiKey = "1b67f26b95bc010a802ff1d6f8254fbf";
  const query = cityName;
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?appid="+apiKey+"&q="+query+"&units="+unit;
  https.get(url,function(response){
    console.log(response.statusCode);
    response.on("data",function(data){
      const weatherData = JSON.parse(data);
      //console.log(weatherData);
      const temp = weatherData.main.temp;
      const des = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      res.write("<h1> "+cityName+" temperature is "+temp+" degrees Celcius</h1>");
      res.write("<h3> Description : "+des+"</h3>")
      const imgUrl =  'http://openweathermap.org/img/wn/'+icon+'@2x.png';
      res.write("<img src="+imgUrl+">");
  //     res.send();

    });
  });
});



app.listen(3000,function(){
  console.log("Server running at port 3000");
});
