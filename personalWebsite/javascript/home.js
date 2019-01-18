function homeHTML() {

  // let $home = $("<div>");

  let $back = $("<div>");
  $back.addClass("back");
  $back.attr("id","back");
  // let $drag = $("<div>");
  // $drag.attr("id","backheader");
  let $back1 = $("<div>");
  $back1.addClass("back1");
  $back1.attr("id","back1");
  // $back.prepend( $drag );
  // $home.append( $back, $back1 );
  $("#mainContent").append( $back, $back1 );
  // $home.addClass("bodyWrapper");

  // dragElement(document.getElementById("back"));

}
