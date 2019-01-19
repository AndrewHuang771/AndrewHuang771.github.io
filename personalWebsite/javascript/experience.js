function experienceHTML() {

  let $textbox = $("<div>").attr( "id", "textbox" );
  let $imagebox = $("<div>").attr( "id", "imagebox" );
  let $video = $("<iframe>").attr({"width":"420","height":"315", "src":"https://www.youtube.com/embed/LPg6Ywen_nM"}).addClass("no-border");
  let $mainWrapper = $("<div>").addClass("mainWrapper");

  $mainWrapper.append( $textbox, $imagebox );
  $("#mainContent").append( $mainWrapper );

  for ( let i = 0; i < 1; i ++ ) {
    let $projectElement = $("<div>");
    $projectElement.addClass("projectElementSmall");
    $projectElement.attr("id", "project" + i);
    $("#imagebox").append( $projectElement );
  }

  $("#project0").attr("onclick", "window.location = './personalWebsite/projects/otosimposter/template.html'");
  $("#project0").css({"height":"0px", "transition":"0.5s"});

  $imagebox.append( $video );

}
