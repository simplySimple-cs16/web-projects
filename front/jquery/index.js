$(document).keypress(function(event) {
  var txt = event.key;
  $("h1").text(txt);

});

$("h1").on("mouseover",function(){
  $("h1").css("color","green");
})
