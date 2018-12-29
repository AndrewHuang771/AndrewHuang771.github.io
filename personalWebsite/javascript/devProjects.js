function devProjectsHTML() {

  let $textbox = $("<div>").attr( "id", "textbox" );
  let $imagebox = $("<div>").attr( "id", "imagebox" );

  $("#mainContent").append( $textbox, $imagebox );

  for ( let i = 0; i < 6; i ++ ) {
    let $projectElement = $("<div>");
    $projectElement.addClass("projectElement");
    $projectElement.attr("id", "project" + i);
    $("#mainContent").append( $projectElement );
  }

  $("#project3").attr("onclick", "window.location = 'http://www.orchestraonline.org'");

}
