function showText( text ) {
  // $("#frame").css({"background-image":"none", "background-color":"#272b30"}).text( text );
}

function showBkgd() {
  // $("#frame").css({"background-image":"url('./images/placeholder.jpg')"}).empty();
}

$(document).ready( function() {
  $("#mainContent").css("width", (window.width - 200) + "px");

  $("#home").mouseenter( function(e) {
    showText( "Home" );
  });

  $("#home").mouseleave( function(e) {
    showBkgd();
  });

  $("#devProjects").mouseenter( function(e) {
    showText("Dev Projects");
  });

  $("#otherProjects").on( "hover", function(e) {
    e.stopPropagation();
  });

  $("#contact").on( "hover", function(e) {
    e.stopPropagation();
  });

  goHome();
});
