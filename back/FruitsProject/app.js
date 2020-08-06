const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser:true,useUnifiedTopology: true });
//the above line creates the db as fruitsDB

// const fruitSchema = new mongoose.Schema({
//   name: String,
//   rating: Number,
//   review: String
// });

//Adding validation to properties:
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,"Please enter a name for your data"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit",fruitSchema); //mongoose will automatically name
//your COLLECTION as fruits from the defined model "Fruit" using _lodash

//Will give erro due to validation for name
// const fruit = new Fruit({
//   rating: 5,
//   review: "Decent"
// });
//
// fruit.save();

// const personSchema = new mongoose.Schema({
//   name: String,
//   age: Number
// });
//
// const Person = mongoose.model("Person",personSchema);
//
// const person = new Person({
//   name: "Mitinam",
//   age: 21
// });
//
// //person.save();

//inserting more than one record at a time:
const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review : "Awesome"
});
const banana = new Fruit({
  name: "Banana",
  rating: 8,
  review : "Good"
});

// Fruit.insertMany([kiwi,banana],function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("Successfully saved fruits to fruitsDB");
//   }
// });

//Reading a collection from DB
// Fruit.find(function(err,fruits){
//   if(err){
//     console.log(err);
//   }
//   else{
//     mongoose.connection.close();
//
//     // console.log(fruits);
//     fruits.forEach(function(fruit){
//       console.log(fruit.name);
//     });
//   }
// });

//Updating a DOCUMENT IN Collection OF DB
// Fruit.updateOne({_id:"5f2b76ea1a937ac4bf5819b8"},{name:"Mango"},function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("Successfully updated the document");
//   }
// });

//Deleting an entry or document or record
// Fruit.deleteOne({name:"Mango"},function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("Successfully deleted the entry");
//   }
// });

//Deleting every same enrty from a Collection
// Person.deleteMany({name:"Mitinam"},function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("Deleted many documents Successfully");
//   }
// });

//Establishing Relationships and Embedding Documents
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person",personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  rating:5,
  review: "Average"
})

const person = new Person({
  name: "Kadum",
  age: 22,
  favouriteFruit: pineapple
});

//pineapple.save();
//person.save();

const strawberry = new Fruit({
  name: "Strawberry",
  rating:8,
  review: "Fine"
})

strawberry.save();
Person.updateOne({name:"Mitinam"},{favouriteFruit:strawberry},function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log("Successfully updated the document");
  }
});
