$(document).ready(function(){
  $(".background2").hide();
  $(".soliloquy").hide();
  $(".text").hide();
  $(".lower").hide();
  setInterval(function(){
    $(".background2").fadeIn();
  },1000);

  $(".clicker").click(function(){
    $(".theatre").slideDown(1000);
    $(".soliloquy").fadeIn(1000);
    $(".background2").slideUp(1200);
    $(".background1").slideUp(900);

    setInterval(function(){
      $(".text").fadeIn(750);
      $(".lower").fadeIn(750);
      setInterval(function(){
        $(".intro").slideUp(1000);        
        setInterval(function(){
        window.location = "welcome.html";
        },1000);
      },1900);
     },500);  
  })
})