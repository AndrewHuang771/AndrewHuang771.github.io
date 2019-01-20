function homeHTML() {
  // let $codeBox = $("<div>");
  // $codeBox.addClass("codeBox").attr("id","codeBox");

  let $back = $("<div>");
  $back.addClass("back");
  $back.attr("id","back");

  let $back1 = $("<div>");
  $back1.addClass("back1");
  $back1.attr("id","back1");

  // $codeBox.prepend( $drag );
  // $("body").append( $codeBox );
  $("#mainContent").append( $back, $back1 );

  let $video = $("<video>");

  $video.attr({
    "id" : "vid",
    width:"100%",
    height:"100%",
    autoplay:'',
    loop:''
  });

  let $source = $("<source>");

  $source.attr({
    "src" : "./personalWebsite/videos/typing_Medium.mp4",
    "type": "video/mp4"
  });
  $video.autoplay = true;
  $video.append( $source );

  $("#mainContent").append( $video );

  let width = window.innerWidth - 350;
  $("#mainContent").css("width",width);

  document.getElementById("back").contentEditable = true;
  document.getElementById("codeBox").contentEditable = true;

}
