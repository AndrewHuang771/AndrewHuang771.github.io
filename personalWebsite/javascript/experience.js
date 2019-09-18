function experienceHTML() {
  // let $textbox = $("<div>").attr( "id", "textbox" );
  // let $imagebox = $("<div>").attr( "id", "imagebox" );

  // $("#codeBox").append( $textbox );
  // $("#mainContent").append( $imagebox );

  // let $videos = [
  //   $("<iframe>").attr({
  //     "width":"420",
  //     "height":"315",
  //     "src":"https://www.youtube.com/embed/krh-VahdOmc",
  //     "id":"yVid"
  //   }).addClass("no-border"),
  //   $("<iframe>").attr({
  //     "width":"420",
  //     "height":"315",
  //     "src":"https://www.youtube.com/embed/xWs_m8P8S7M",
  //     "id":"yVid"
  //   }).addClass("no-border")
  // ];

  // for ( let i = 0; i < 2; i ++ ) {
  //   let $projectElement = $("<div>");
  //   $projectElement.addClass("projectElement");
  //   $projectElement.attr("id", "project" + i);
  //   $projectElement.append($videos[i]);
  //   $("#imagebox").append( $projectElement );
  // }

  // $imagebox.css("background-image","url('./personalWebsite/images/skyline.jpg')");

  // let height = $("#mainContent").height();
  // $("#imagebox").css("height",height);
  let $textbox = $("<div>").attr( "id", "textbox" );
  let $imagebox = $("<div>").attr( "id", "imagebox" );
  let $video = $("<iframe>").attr({
    "width":"420",
    "height":"315",
    "src":"https://www.youtube.com/embed/xWs_m8P8S7M",
    "id":"yVid"
  }).addClass("no-border");

  $("#mainContent").append( $imagebox );
  $("#codeBox").append( $textbox );
  $imagebox.append( $video );

  for ( let i = 0; i < 2; i ++ ) {
    let $projectElement = $("<div>");
    $projectElement.addClass("projectElementSmall");
    $projectElement.attr("id", "project" + i);
    let $br = $("<br>");
    $("#codeBox").append( $projectElement, $br );
  }

  $("#project0").attr("onclick", "window.location = './personalWebsite/projects/otosimposter/template.html'");
  $("#project0").css({"height":"0px", "transition":"0.25s"});

  $("#project1").attr("onclick", "window.location = 'https://www.otosim.com/ophthosim-mobile'");
  $("#project1").css({"height":"0px", "transition":"0.25s"});

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
