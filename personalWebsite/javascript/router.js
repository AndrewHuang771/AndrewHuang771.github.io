let displayTimers = [];
let timeouts = [];

function clearTypewriterList() {
    for ( let i = 0; i < numberOfTypeWriters; i ++ ) {
      typewriterArray[i].delete();
    }
    typewriterArray = [];
    numberOfTypeWriters = 0;
}

function clearTimeouts() {
  for ( let i = 0; i < timeouts.length; i ++ ) {
    clearInterval( timeouts[i] );
  }
}

function clearMainContent() {
  $("#mainContent").empty();
  superSpeed = false;
  for ( let i = 0; i < displayTimers.length; i ++ ) {
    clearInterval( displayTimers[i] );
  }
  timeouts = [];
}

function makeTitle() {
  let title = new Writing( "     <h1>Hi I'm Andrew</h1>", 15, 10, ["code"] );
  let title1 = new Writing( "     <p>I tell stories through design</p>", 15, 10, ["code"] );
  startTypewriter( $("#mainContent"), [ title, title1 ], function() {
    makeSidebar();
  });
}

function makeRealTitle() {
  let title = new Writing( "Hi I'm Andrew", 80, 20, ["blueTitle"] );
  let title1 = new Writing( "I tell stories through design", 20, 10, ["whiteTitle"] );
  $(".back").css("display","block");
  startTypewriter( $("#back"), [ title, title1 ], function() {
  });
}

function makeSidebar() {
  let t6 = new Writing( "     <div id = 'sidebar'>", 15, 10, ["code"] );
  startTypewriter( $("#mainContent"), [ t6 ], function() {
    $("#mainContent").css("margin-left","130px");
    $("#sidebar").css("display","block");
    makeButtons();
  });
}

function makeButtons() {
  let t7 = new Writing( "           <div id = 'home'></div>", 15, 10, ["code"] );
  let t8 = new Writing( "           <div id = 'experience'></div>", 15, 10, ["code"] );
  let t9 = new Writing( "           <div id = 'devProjects'></div>", 15, 10, ["code"] );
  let t10 = new Writing( "           <div id = 'otherProjects'></div>", 15, 10, ["code"] );
  let t11 = new Writing( "           <div id = 'contact'></div>", 15, 10, ["code"] );
  let t12 = new Writing( "      </div>", 15, 10, ["code"] );

  startTypewriter( $("#mainContent"), [ t7 ], function() {
    $("#home").css("opacity","1");
  });

  timeouts.push( setTimeout( function() {
    startTypewriter( $("#mainContent"), [ t8 ], function() {
      $("#experience").css("opacity","1");
    });
  }, 100 ) );

  timeouts.push( setTimeout( function() {
    startTypewriter( $("#mainContent"), [ t9 ], function() {
      $("#devProjects").css("opacity","1");
    });
  }, 200 ) );

  timeouts.push( setTimeout( function() {
    startTypewriter( $("#mainContent"), [ t10 ], function() {
      $("#otherProjects").css("opacity","1");
    } );

  }, 300 ) );

  timeouts.push( setTimeout( function() {
    startTypewriter( $("#mainContent"), [ t11, t12 ], function() {
      $("#contact").css("opacity","1");
      makeFooter();
    } );

  }, 400 ) );
}

function makeFooter() {
  let t0 = new Writing( "</body>", 15, 10, ["codeRed"] );
  let t1= new Writing( "</head>", 15, 10, ["codeRed"] );
  let t2 = new Writing( "</html>", 15, 10, ["codeRed"] );
  startTypewriter( $("#mainContent"), [ t0, t1, t2 ], function() {
    timeouts.push( setTimeout( function() {
      let t3 = new Writing( "<!-- Feel Free to look around by the way -->", 15, 10, ["codeGreen"] );
      let t4 = new Writing( "<!-- Press the buttons or scroll to look around! -->", 15, 10, ["codeGreen"] );
      startTypewriter( $("#mainContent"), [ t3, t4 ])
    }, 5000 ));
  });
}

function goHome() {
    let t0 = new Writing( "<!DOCTYPE HTML>", 15, 10, ["code"] );
    let t1= new Writing( "<html>", 15, 10, ["codeRed"] );
    let t2 = new Writing( "<head>", 15, 10, ["codeRed"] );
    let t3 = new Writing( "     <title> Home </title>", 15, 10, ["code"] );
    let t4 = new Writing( "</head>", 15, 10, ["codeRed"] );
    let t5 = new Writing( "<body>", 15, 10, ["codeRed"] );
    currentScreen = 0;
    $("#selector").css("transform","translate(0px,5px)");
    // $("body").css("background-image", "url('./personalWebsite/images/bkgd.jfif')");
    $("#shader").css("visibility","visible");
    highlight( $("#home") );
    clearTypewriterList();
    clearMainContent();
    clearTimeouts();
    homeHTML();
    superSpeed = true;
    startTypewriter( $("#mainContent"), [ t0,t1,t2,t3 ], function() {
      $("title").text("Home");
      startTypewriter( $("#mainContent"), [ t4, t5 ], function() {
        makeTitle();
        makeRealTitle();
      });
    });
}

function goExperience() {
    let title1 = new Writing( "Full Stack Developer at OtoSim", 20, 200, ["whiteTitle"] );
    let title2 = new Writing( "Work Experience", 80, 1000, ["title"] );
    let title3 = new Writing( "Poster", 20, 200, ["projLabel"] );
    currentScreen = 1;
    $("#selector").css("transform","translate(0px,100px)");
    $("#shader").css("visibility","hidden");
    $("body").css("background-image","");
    highlight( $("#experience") );
    clearTypewriterList();
    clearMainContent();
    clearTimeouts();
    experienceHTML();

    startTypewriter( $("#textbox"), [ title2, title1 ], function() {
      $("#project0").css("height","70px");
      startTypewriter( $("#project0"), [ title3 ] );
    });

}

function goDevProjects() {
    let title1 = new Writing( "Click the boxes to see more", 20, 200, ["whiteTitle"] );
    let title2 = new Writing( "Dev Projects", 80, 1000, ["title"] );
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
    currentScreen = 2;
    $("#selector").css("transform","translate(0px,195px)");
    $("body").css("background-image","");
    $("#shader").css("visibility","hidden");
    clearTypewriterList();
    clearMainContent();
    clearTimeouts();
    devProjectsHTML();
    highlight( $("#devProjects") );
    startTypewriter( $("#textbox"), [ title2, title1 ] );
    startTypewriter( $("#project0"), [ title3 ] );
    startTypewriter( $("#project1"), [ title4 ] );
    startTypewriter( $("#project2"), [ title5 ] );
    startTypewriter( $("#project3"), [ title6 ] );
    startTypewriter( $("#project4"), [ title7 ] );
    startTypewriter( $("#project5"), [ title8 ] );

}

function goOtherProjects() {
    let title2 = new Writing( "Other Projects", 80, 750, ["title"] );
    let title3 = new Writing( "Some of my hobbies", 20, 200, ["whiteTitle"] );
    let title4 = new Writing( "Portraits", 20, 200, ["projLabel"] );
    let title5 = new Writing( "Writing", 20, 200, ["projLabel"] );
    let title6 = new Writing( "Pencil drawings and more", 30, 200, ["projDesc"] );
    let title7 = new Writing( "Short stories and more", 30, 200, ["projDesc"] );
    currentScreen = 3;
    $("#selector").css("transform","translate(0px,290px)");
    $("body").css("background-image","");
    $("#shader").css("visibility","hidden");
    clearTypewriterList();
    clearMainContent();
    clearTimeouts();
    otherProjectsHTML();
    highlight( $("#otherProjects") );
    startTypewriter( $("#textbox"), [ title2, title3 ] );
    startTypewriter( $("#project0"), [ title4 ] );
    startTypewriter( $("#project1"), [ title5 ] );
    // startTypewriter( $("#project0"), [ title6 ] );
    // startTypewriter( $("#project1"), [ title7 ] );
}

function goContact() {
    let title2 = new Writing( "Let's get in touch", 80, 750, ["title"] );
    let title3 = new Writing( "I look forward to talking with you", 20, 200, ["whiteTitle"] );
    let title4 = new Writing( "Email: andrewy.huang@mail.utoronto.ca", 20, 750, ["title"] );
    currentScreen = 4;
    $("#selector").css("transform","translate(0px,380px)");
    $("body").css("background-image","");
    $("#shader").css("visibility","hidden");
    clearTypewriterList();
    clearMainContent();
    clearTimeouts();
    highlight( $("#contact") );
    startTypewriter( $("#mainContent"), [ title2, title3, title4 ] );
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

  $("#experience").on( "click", function() {
    goExperience();
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
