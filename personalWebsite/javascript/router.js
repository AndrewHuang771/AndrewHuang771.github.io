let displayTimers = [];

function clearTypewriterList() {
    for ( let i = 0; i < numberOfTypeWriters; i ++ ) {
      typewriterArray[i].delete();
    }
    typewriterArray = [];
    numberOfTypeWriters = 0;
}

function clearMainContent() {
  $("#mainContent").empty();
  for ( let i = 0; i < displayTimers.length; i ++ ) {
    clearInterval( displayTimers[i] );
  }
}

function goHome() {
    let title = new Writing( "Hi I'm Andrew", 100, 750, ["blueTitle"] );
    let title1 = new Writing( "I tell stories through design", 30, 700, ["whiteTitle"] );
    let title2 = new Writing( "I'm a student at the University of Toronto studying Computer Engineering", 30, 700, ["whiteTitle"]);
    let title6 = new Writing( "I'm a fullstack developer", 30, 700, ["whiteTitle"]);
    let title3 = new Writing( "I like to think I'm a writer and an artist", 30, 700, ["whiteTitle"]);
    let title4 = new Writing( "But I still have so much to learn", 30, 700, ["whiteTitle"]);
    let title5 = new Writing( "One of my favorite things to do is:", 30, 700, ["whiteTitle"]);
    currentScreen = 0;
    $("#selector").css("transform","translate(0px,5px)");
    // $("body").css("background-image","url('https://images.unsplash.com/photo-1545899236-81f9c05af041?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')");
    $("body").css("background-image", "url('./personalWebsite/images/bkgd.jfif')");
    $("#shader").css("visibility","visible");
    highlight( $("#home") );
    clearTypewriterList();
    clearMainContent();
    homeHTML();
    startTypewriter( $(".back"), [ title, title1 ] );
}

function goDevProjects() {
    let title1 = new Writing( "Click the boxes to see more", 30, 200, ["whiteTitle"] );
    let title2 = new Writing( "Dev Projects", 100, 1000, ["title"] );
    let title3 = new Writing( "Soliloquy", 20, 200, ["projLabel"] );
    let title4 = new Writing( "UnivInfo", 20, 200, ["projLabel"] );
    let title5 = new Writing( "SoundPlayer", 20, 200, ["projLabel"] );
    let title6 = new Writing( "OrchestraOnline", 20, 200, ["projLabel"] );
    let title7 = new Writing( "Physics Simulations", 20, 200, ["projLabel"] );
    let title8 = new Writing( "Dmoj", 20, 200, ["projLabel"] );
    let title9 = new Writing( "An online puzzle game", 20, 200, ["projDesc"] );
    let title10 = new Writing( "University Info Site", 20, 200, ["projDesc"] );
    let title11 = new Writing( "Plays you music", 20, 200, ["projDesc"] );
    let title12 = new Writing( "Music Chatrooms", 20, 200, ["projDesc"] );
    let title13 = new Writing( "Very physical", 20, 200, ["projDesc"] );
    let title14 = new Writing( "Competitive Programming", 20, 200, ["projDesc"] );
    currentScreen = 1;
    $("#selector").css("transform","translate(0px,120px)");
    $("body").css("background-image","");
    $("#shader").css("visibility","hidden");
    clearTypewriterList();
    clearMainContent();
    devProjectsHTML();
    highlight( $("#devProjects") );
    startTypewriter( $("#textbox"), [ title2, title1 ] );
    startTypewriter( $("#project0"), [ title3 ] );
    startTypewriter( $("#project1"), [ title4 ] );
    startTypewriter( $("#project2"), [ title5 ] );
    startTypewriter( $("#project3"), [ title6 ] );
    startTypewriter( $("#project4"), [ title7 ] );
    startTypewriter( $("#project5"), [ title8 ] );

    // startTypewriter( $("#project0"), [ title9 ] );
    // startTypewriter( $("#project1"), [ title10 ] );
    // startTypewriter( $("#project2"), [ title11 ] );
    // startTypewriter( $("#project3"), [ title12 ] );
    // startTypewriter( $("#project4"), [ title13 ] );
    // startTypewriter( $("#project5"), [ title14 ] );
}

function goOtherProjects() {
    let title2 = new Writing( "Other Projects", 100, 750, ["title"] );
    let title3 = new Writing( "Some of my hobbies", 30, 200, ["whiteTitle"] );
    let title4 = new Writing( "Portraits", 20, 200, ["projLabel"] );
    let title5 = new Writing( "Writing", 20, 200, ["projLabel"] );
    let title6 = new Writing( "Pencil drawings and more", 30, 200, ["projDesc"] );
    let title7 = new Writing( "Short stories and more", 30, 200, ["projDesc"] );
    currentScreen = 2;
    $("#selector").css("transform","translate(0px,235px)");
    $("body").css("background-image","");
    $("#shader").css("visibility","hidden");
    clearTypewriterList();
    clearMainContent();
    otherProjectsHTML();
    highlight( $("#otherProjects") );
    startTypewriter( $("#textbox"), [ title2, title3 ] );
    startTypewriter( $("#project0"), [ title4 ] );
    startTypewriter( $("#project1"), [ title5 ] );
    // startTypewriter( $("#project0"), [ title6 ] );
    // startTypewriter( $("#project1"), [ title7 ] );
}

function goContact() {
    let title2 = new Writing( "Let's get in touch", 100, 750, ["title"] );
    let title3 = new Writing( "I look forward to talking with you", 30, 200, ["whiteTitle"] );
    currentScreen = 3;
    $("#selector").css("transform","translate(0px,350px)");
    $("body").css("background-image","");
    $("#shader").css("visibility","hidden");
    clearTypewriterList();
    clearMainContent();
    highlight( $("#contact") );
    startTypewriter( $("#mainContent"), [ title2, title3 ] );
}

function highlight( $element ) {
    $(".sideButton").css("color","");
    $element.css("color","#F94D4D");
}

$( document ).ready( function() {
  highlight( $("#home") );
  //This file will route the onclicks and activate their respective js folders.
  //For instance, if the user clicks "home", it will activate the function responsible for changing the mainContent that is stored in home.js.
  $("#home").on( "click", function() {
    goHome();
  });

  $("#devProjects").on( "click", function() {
    goDevProjects();
  });

  $("#otherProjects").on( "click", function() {
    goOtherProjects();
  });

  $("#contact").on( "click", function() {
    goContact();
  });

});
