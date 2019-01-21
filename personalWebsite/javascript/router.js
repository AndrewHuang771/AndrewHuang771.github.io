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
    clearTimeout( timeouts[i] );
    clearInterval( timeouts[i] );
  }
  timeouts = [];
}

function clearMainContent() {
  $("#mainContent").empty();
  $("#codeBox").empty();
  superSpeed = false;
  for ( let i = 0; i < displayTimers.length; i ++ ) {
    clearInterval( displayTimers[i] );
  }

}

function makeTitle() {
  let title = new Writing( "     <h1>Hi I'm Andrew</h1>", 13, 10, ["code"] );
  let title1 = new Writing( "     <p>Let's tell some great stories</p>", 13, 10, ["code"] );
  startTypewriter( $("#codeBox"), [ title, title1 ], function() {
    makeSidebar();
  });
}

function makeRealTitle() {
  let title = new Writing( "Hi I'm Andrew", "7vw", 500, ["blueTitle"] );
  let title1 = new Writing( "Let's tell some great stories", "3vw", 10, ["whiteTitle"] );

  let top = $("#vid").height();
  let ownHeight = $("#back").height();
  $("#back").css({
    "transform":"translate( 0px, " + (top/2 - 150) + "px )",
    "display":"block",
    "font-size":"2vw"
  });

  startTypewriter( $("#back"), [ title, title1 ], function() {

  });
}

function makeSidebar() {
  let t6 = new Writing( "     <div id = 'header'>", 13, 10, ["code"] );
  startTypewriter( $("#codeBox"), [ t6 ], function() {
    // $("#mainContent").css("margin-left","130px");
    // $("#sidebar").css("display","block");
    makeButtons();
  });
}

function makeButtons() {
  let t7 = new Writing( "           <div id = 'home'></div>", 13, 10, ["code"] );
  let t8 = new Writing( "           <div id = 'experience'></div>", 13, 10, ["code"] );
  let t9 = new Writing( "           <div id = 'devProjects'></div>", 13, 10, ["code"] );
  let t10 = new Writing( "           <div id = 'otherProjects'></div>", 13, 10, ["code"] );
  let t11 = new Writing( "           <div id = 'contact'></div>", 13, 10, ["code"] );
  let t12 = new Writing( "      </div>", 13, 10, ["code"] );

  startTypewriter( $("#codeBox"), [ t7 ], function() {
    $("#home").css("opacity","1");
  });

  timeouts.push( setTimeout( function() {
    startTypewriter( $("#codeBox"), [ t8 ], function() {
      $("#experience").css("opacity","1");
    });
  }, 100 ) );

  timeouts.push( setTimeout( function() {
    startTypewriter( $("#codeBox"), [ t9 ], function() {
      $("#devProjects").css("opacity","1");
    });
  }, 200 ) );

  timeouts.push( setTimeout( function() {
    startTypewriter( $("#codeBox"), [ t10 ], function() {
      $("#otherProjects").css("opacity","1");
    } );

  }, 300 ) );

  timeouts.push( setTimeout( function() {
    startTypewriter( $("#codeBox"), [ t11, t12 ], function() {
      $("#contact").css("opacity","1");
      makeFooter();
    } );

  }, 400 ) );
}

function makeFooter() {
  let footer = new Writing( "      <div id = 'footer'></div>", 13, 10, ["code"] );
  let t0 = new Writing( "</body>", 13, 10, ["codeRed"] );
  let t1= new Writing( "</head>", 13, 10, ["codeRed"] );
  let t2 = new Writing( "</html>", 13, 10, ["codeRed"] );
  startTypewriter( $("#codeBox"), [ footer ], function() {
    // $("#footer1").css("padding","20px");
    startTypewriter( $("#codeBox"), [ t0, t1, t2 ], function() {

      let time1 = setTimeout( function() {
        let t3 = new Writing( "<!-- Feel Free to look around by the way -->", 13, 10, ["codeGreen"] );
        let t4 = new Writing( "<!-- Try scrolling or pressing the buttons! -->", 13, 10, ["codeGreen"] );
        startTypewriter( $("#codeBox"), [ t3, t4 ] );
      }, 5000 );

      timeouts.push( time1 );
    });
  });
}

function goHome() {

    let t0 = new Writing( "<!DOCTYPE HTML>", 13, 10, ["code"] );
    let t1= new Writing( "<html>", 13, 10, ["codeRed"] );
    let t2 = new Writing( "<head>", 13, 10, ["codeRed"] );
    let t3 = new Writing( "     <title> Home </title>", 13, 10, ["code"] );
    let css = new Writing( "     <link href='main.css'>", 13, 10, ["code"] );
    let t4 = new Writing( "</head>", 13, 10, ["codeRed"] );
    let t5 = new Writing( "<body>", 13, 10, ["codeRed"] );
    currentScreen = 0;
    $("#selector").css("transform","translate(0px,5px)");
    $("#shader").css("visibility","visible");

    clearTypewriterList();
    clearMainContent();
    clearTimeouts();
    homeHTML();
    if ( !styled ) {
      styleHeader();
      styled = true;
    }
    highlight( $("#header0") );
    superSpeed = true;
    if ( firstTime || !firstTime ) {
      startTypewriter( $("#codeBox"), [ t0,t1,t2,t3 ], function() {
        $("title").text("Home");
        startTypewriter( $("#codeBox"), [ css ], function() {
          $(".code").css({"color":"#fafafc","font-family":"'Inconsolata', monospace"});
          startTypewriter( $("#codeBox"), [ t4, t5 ], function() {
            makeTitle();
            makeRealTitle();
          });
        });
      });
      firstTime = false;
    }

}

function goExperience() {
    let title1 = new Writing( "Full Stack Developer at OtoSim", 20, 200, ["whiteTitle"] );
    let title2 = new Writing( "Experience", 50, 1000, ["title"] );
    let title3 = new Writing( "Poster", 20, 200, ["projLabel"] );
    currentScreen = 1;
    $("#selector").css("transform","translate(0px,100px)");
    $("#shader").css("visibility","hidden");
    $("body").css("background-image","");
    highlight( $("#header1") );
    clearTypewriterList();
    clearMainContent();
    clearTimeouts();
    experienceHTML();

    startTypewriter( $("#textbox"), [ title2, title1 ], function() {
      $("#project0").css("height","50px");
      startTypewriter( $("#project0"), [ title3 ] );
    });

}

function goDevProjects() {
    let title1 = new Writing( "Click the boxes to see more", 20, 200, ["whiteTitle"] );
    let title2 = new Writing( "Projects", 50, 1000, ["title"] );
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
    highlight( $("#header2") );
    startTypewriter( $("#textbox"), [ title2, title1 ] );
    startTypewriter( $("#project0"), [ title4 ] );
    startTypewriter( $("#project1"), [ title6 ] );
    startTypewriter( $("#project2"), [ title5 ] );
    startTypewriter( $("#project3"), [ title8 ] );
    // startTypewriter( $("#project4"), [ title7 ] );
    // startTypewriter( $("#project5"), [ title8 ] );

}

function goOtherProjects() {
    let title2 = new Writing( "Other Projects", 40, 750, ["title"] );
    let title3 = new Writing( "Some of my hobbies", 20, 200, ["whiteTitle"] );
    let title4 = new Writing( "Portraits", 20, 200, ["projLabel"] );
    let title5 = new Writing( "Writing", 20, 200, ["projLabel"] );
    currentScreen = 3;
    $("#selector").css("transform","translate(0px,290px)");
    $("body").css("background-image","");
    $("#shader").css("visibility","hidden");
    clearTypewriterList();
    clearMainContent();
    clearTimeouts();
    otherProjectsHTML();
    highlight( $("#header3") );
    startTypewriter( $("#textbox"), [ title2, title3 ] );
    startTypewriter( $("#project0"), [ title4 ] );
    startTypewriter( $("#project1"), [ title5 ] );
}

function goContact() {
    let title2 = new Writing( "Let's get in touch", 30, 750, ["title"] );
    let title3 = new Writing( "I look forward to talking with you", 15, 200, ["whiteTitle"] );
    let title4 = new Writing( "Email: andrewy.huang@mail.utoronto.ca", 15, 750, ["title"] );
    currentScreen = 4;
    $("#selector").css("transform","translate(0px,380px)");
    $("body").css("background-image","");
    $("#shader").css("visibility","hidden");
    clearTypewriterList();
    clearMainContent();
    clearTimeouts();
    contactHTML();
    highlight( $("#header4") );
    startTypewriter( $("#codeBox"), [ title2, title3, title4 ] );
}

function highlight( $element ) {
    $(".headerButton").css("border-bottom","30px solid #1e1f21");
    $element.css("border-bottom","30px solid #403F4C");
}

$( document ).ready( function() {
  highlight( $("#header0") );
  //This file will route the onclicks and activate their respective js folders.
  //For instance, if the user clicks "home", it will activate the function responsible for changing the mainContent that is stored in home.js.
  $("#header0").on( "click", function() {
    goHome();
  });

  $("#header1").on( "click", function() {
    goExperience();
  });

  $("#header2").on( "click", function() {
    goDevProjects();
  });

  $("#header3").on( "click", function() {
    goOtherProjects();
  });

  $("#header4").on( "click", function() {
    goContact();
  });

});
