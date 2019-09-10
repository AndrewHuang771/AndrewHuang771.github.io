function devProjectsHTML() {
  let $textbox = $("<div>").attr( "id", "textbox" );
  let $imagebox = $("<div>").attr( "id", "imagebox" );

  $("#codeBox").append( $textbox );
  $("#mainContent").append( $imagebox );

  for ( let i = 0; i < 4; i ++ ) {
    let $projectElement = $("<div>");
    $projectElement.addClass("projectElement");
    $projectElement.attr("id", "project" + i);
    $("#imagebox").append( $projectElement );
  }

  $("#project2").attr("onclick", "window.location = './personalWebsite/projects/soundPlayer/template.html'");
  $("#project0").attr("onclick", "window.location = 'https://andrewyh.com'");
  // $("#project0").attr("onclick", "window.location = './personalWebsite/projects/soliloquy/appendix.html'");
  $("#project3").attr("onclick", "window.location = 'https://github.com/AndrewHuang771/DMOJ-Solutions'");
  // $("#project4").attr("onclick", "window.location = './personalWebsite/projects/physics/chp1/index.html'");
  $("#project1").attr("onclick", "window.location = 'https://github.com/AndrewHuang771/Huesja'");

  $imagebox.css("background-image","url('./personalWebsite/images/skyline.jpg')");

  let height = $("#mainContent").height();
  $("#imagebox").css("height",height);
}
