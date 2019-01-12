$(document).ready( function() {
  for ( let i = 0; i < 3; i ++ ) {
    let $element = $("<div>");
    $element.addClass("portrait");
    $element.attr("id", "portrait" + i);
    $element.css({"background-image":"url('./portraits/portrait" + i + ".jpg')","height":"200px","width":"200px","background-size":"contain","background-repeat":"no-repeat", "display":"inline-block"});
    $("#displayBox").append( $element );
  }
});
