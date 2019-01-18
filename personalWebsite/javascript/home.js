function homeHTML() {
  let $back = $("<div>");
  $back.addClass("back");
  $back.attr("id","back");
  let $drag = $("<div>");
  $drag.attr("id","backheader");
  // let $back1 = $("<div>");
  // $back1.addClass("back1");
  // $back1.attr("id","back1");
  // $back.prepend( $drag );
  $("#mainContent").append( $back );

  // dragElement(document.getElementById("back"));

}
