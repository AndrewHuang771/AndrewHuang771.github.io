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

  $("#project2").attr("onclick", "window.location = './personalWebsite/projects/soundPlayer/template.html'");
  $("#project0").attr("onclick", "window.location = './personalWebsite/projects/soliloquy/appendix.html'");
  $("#project5").attr("onclick", "window.location = 'https://github.com/AndrewHuang771/DMOJ-Solutions'");
  $("#project4").attr("onclick", "window.location = './personalWebsite/projects/physics/chp1/index.html'");

}
