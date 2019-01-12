$(document).ready( function() {
  for ( let i = 0; i < 3; i ++ ) {
    let $element = $("<div>");
    $element.addClass("portrait");
    $element.attr("id", "portrait" + i);
    $element.css({"background-image":"url('./portraits/portrait" + i + ".jpg')","height":"200px","width":"154.43px", "left": (200*i) + "px"});
    $("#displayBox").append( $element );

    $("#portrait" + i ).on("mouseenter", function() {
      console.log( i );
      // $element.css({"width":"61.81vh","height":"80vh", "z-index":"100", "margin-top":"-40vh"})
      $element.css({"transform":"scale(3)","z-index":"1000"});
    });

    $("#portrait" + i ).on("mouseleave", function() {
      console.log( i );
      // $element.css({"width":"200px","height":"200px", "z-index":"0",  "margin-top":"0vw"})
      $element.css({"transform":"scale(1)","z-index":"0"});
    });
  }

});
