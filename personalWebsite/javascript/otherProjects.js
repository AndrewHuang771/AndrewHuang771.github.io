function otherProjectsHTML() {

  let $textbox = $("<div>").attr( "id", "textbox" );
  let $imagebox = $("<div>").attr( "id", "imagebox" );
  $("#mainContent").append( $imagebox );
  $("#codeBox").append( $textbox );

  for ( let i = 0; i < 2; i ++ ) {
    let $projectElement = $("<div>");
    $projectElement.addClass("projectElement");
    $projectElement.attr("id", "project" + i);
    $("#imagebox").append( $projectElement );
  }

  $("#project0").attr("onclick", "window.location = './personalWebsite/art/portfolio.html'");
  $("#project1").attr("onclick", "window.location = './personalWebsite/writing/CloudMaker.html'");

  $imagebox.css("background-image","url('./personalWebsite/images/hobby.jpg')");
  let height = $("#mainContent").height();
  $("#imagebox").css("height",height);
}
