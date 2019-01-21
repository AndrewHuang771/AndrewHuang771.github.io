function experienceHTML() {

  let $textbox = $("<div>").attr( "id", "textbox" );
  let $imagebox = $("<div>").attr( "id", "imagebox" );
  let $video = $("<iframe>").attr({
    "width":"420",
    "height":"315",
    "src":"https://www.youtube.com/embed/LPg6Ywen_nM",
    "id":"yVid"
  }).addClass("no-border");

  $("#mainContent").append( $imagebox );
  $("#codeBox").append( $textbox );
  $imagebox.append( $video );

  for ( let i = 0; i < 1; i ++ ) {
    let $projectElement = $("<div>");
    $projectElement.addClass("projectElementSmall");
    $projectElement.attr("id", "project" + i);
    $("#codeBox").append( $projectElement );
  }

  $("#project0").attr("onclick", "window.location = './personalWebsite/projects/otosimposter/template.html'");
  $("#project0").css({"height":"0px", "transition":"0.25s"});

  let width = window.innerWidth - 350;
  $("#mainContent").css("width",width);
  let height = $("#mainContent").height() - 80;

  $("#yVid").css({
    "width": width + "px",
    "height": height + "px"
  });

  $imagebox.css("background-image","");
  document.getElementById("codeBox").contentEditable = false;


}
