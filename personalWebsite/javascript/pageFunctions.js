const numberOfScreens = 5;
let currentScreen = 0;
let scrolling = false;
var isMobile = false;
var firstTime = true;
var styled = false;

function goToPage() {
  if ( currentScreen === 0 ) {
    goHome();
  } else if ( currentScreen === 1 ) {
    goExperience();
  } else if ( currentScreen === 2 ) {
    goDevProjects();
  } else if ( currentScreen === 3 ) {
    goOtherProjects();
  } else if ( currentScreen === 4 ) {
    goContact();
  }
}

function styleHeader() {
  let width = $("#vid").width()/5;

  let $header0 = $("<div>").addClass("headerButton").attr("id","header0");
  let $header1 = $("<div>").addClass("headerButton").attr("id","header1");
  let $header2 = $("<div>").addClass("headerButton").attr("id","header2");
  let $header3 = $("<div>").addClass("headerButton").attr("id","header3");
  let $header4 = $("<div>").addClass("headerButton").attr("id","header4");
  let $text0 = $("<p>").addClass("shiftDown").text("home.html");
  let $text1 = $("<p>").addClass("shiftDown").text("IBM.html");
  let $text2 = $("<p>").addClass("shiftDown").text("OtoSim.html");
  let $text3 = $("<p>").addClass("shiftDown").text("projects.html");
  let $text4 = $("<p>").addClass("shiftDown").text("resume.pdf");

  for ( let i = 0; i < 5; i ++ ) {
    eval( "$header" + i ).css({
      width:width,
      left:width*i
    });
    eval( "$header" + i ).append( eval( "$text" + i ) );
    $("#header").append( eval( "$header" + i ) );
  }
}

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};


$(document).ready( function() {
  isMobile = isMobileDevice();
  if ( isMobile ) {
    window.location = "./personalWebsite/mobile/mobileIndex.html";
  }

  $("#mainContent").css("width", (window.width - 200) + "px");
  let $codeBox = $("<div>");
  $codeBox.addClass("codeBox").attr("id","codeBox");
  $("body").append( $codeBox );

  goHome();
});
