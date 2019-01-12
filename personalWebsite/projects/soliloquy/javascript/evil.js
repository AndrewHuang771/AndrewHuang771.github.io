$(document).ready(function(){
  $("#first").fadeIn(1000);

  setTimeout(function(){
    $("#first").fadeOut(1000);
  },5000)

  setTimeout(function(){
    $("#second").fadeIn(1000);
  },6000)

  setTimeout(function(){
    $("#second").fadeOut(1000);
  },14000)

  setTimeout(function(){
    $("#third").fadeIn(1000);
  },15000)

  setTimeout(function(){
    $("#third").fadeOut(1000);
  },20000)

  setTimeout(function(){
    window.location = "your/locked.html";
  },21000)

})