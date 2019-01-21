function contactHTML() {
  let $imagebox = $("<div>").attr( "id", "imagebox" );
  $("#mainContent").append( $imagebox );

  $imagebox.css("background-image","url('./personalWebsite/images/contact.jpg')");

  let height = $("#mainContent").height();
  $("#imagebox").css("height",height);
}
