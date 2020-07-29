exports.getDate = function (){
  let today = new Date();
  let options = {
    weekday:"long",
    day:"numeric",
    month:"long"
  };

  let day = today.toLocaleDateString("en-US",options);
  return day;
};


//======SAME AS ABOVE======JUST A SHORTCUT(ABOVE)=======
// module.exports.getDate = function (){
//   let today = new Date();
//   let options = {
//     weekday:"long",
//     day:"numeric",
//     month:"long"
//   };
//
//   let day = today.toLocaleDateString("en-US",options);
//   return day;
// };

module.exports.getDay = function (){
  let today = new Date();

  // let currentDay = today.getDay();
  // let day = "";
  // let weekDays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  // day = weekDays[currentDay];

  let options = {
    weekday:"long",
  };

  let day = today.toLocaleDateString("en-US",options);
  return day;
};




//
// module.exports.getDate = getDate;
//
//
// function getDate(){
//   let today = new Date();
//
//   // let currentDay = today.getDay();
//   // let day = "";
//   // let weekDays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
//   // day = weekDays[currentDay];
//
//   let options = {
//     weekday:"long",
//     day:"numeric",
//     month:"long"
//   };
//
//   let day = today.toLocaleDateString("en-US",options);
//   return day;
// }
//
// module.exports.getDay = getDay;
// function getDay(){
//   let today = new Date();
//
//   // let currentDay = today.getDay();
//   // let day = "";
//   // let weekDays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
//   // day = weekDays[currentDay];
//
//   let options = {
//     weekday:"long",
//   };
//
//   let day = today.toLocaleDateString("en-US",options);
//   return day;
// }
