const numberOfScreens = 4;
let currentScreen = 0;
let scrolling = false;
var isMobile = false;

function goToPage() {
  if ( currentScreen === 0 ) {
    goHome();
  } else if ( currentScreen === 1 ) {
    goDevProjects();
  } else if ( currentScreen === 2) {
    goOtherProjects();
  } else if ( currentScreen === 3 ) {
    goContact();
  }
}


function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

// $(document).on("mobileinit", function () {
//   $.mobile.ignoreContentEnabled=true;
// });

$(document).ready( function() {
  isMobile = isMobileDevice();
  $(".ui-page").css("background-color","");

  $("#mainContent").css("width", (window.width - 200) + "px");

  //Going both directions at once seems to break it. How to prevent this?

  // $( document ).keydown( function( keyPressed ) {
  //  if ( keyPressed.keyCode == 38 ) {
  //    if ( currentScreen > 0 ) {
  //      currentScreen --;
  //      goToPage();
  //    }
  //  } else if ( keyPressed.keyCode == 40 ) {
  //    if ( currentScreen < (numberOfScreens - 1) ) {
  //      currentScreen ++;
  //      goToPage();
  //    }
  //  }
  // });

  // $( document ).on( 'wheel', function(e) {
  //   if ( !scrolling ) {
  //     scrolling = true;
  //   	var delta = e.originalEvent.deltaY;
  //   	if (delta > 0) {
  //       if ( currentScreen < numberOfScreens - 1 ) {
  //         currentScreen ++;
  //         goToPage();
  //       }
  //     } else {
  //       if ( currentScreen > 0 ) {
  //         currentScreen --;
  //         goToPage();
  //       }
  //     };
  //     scrolling = false;
  //   } else {
  //     console.log("OVERLAP");
  //   }
  // });

  goHome();
});
