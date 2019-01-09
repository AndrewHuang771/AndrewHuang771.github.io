var songList = [
  {
    name: "of_monsters_and_men/mountain_sound.mp3",
    type: "audio/mpeg"
  },
  {
    name: "imagine_dragons/tokyo.mp3",
    type: "audio/mpeg"
  },
  {
    name: "coldplay/birds.mp3",
    type: "audio/mpeg"
  },
  {
    name: "imagine_dragons/real_life.mp3",
    type: "audio/mpeg"
  },
  {
    name: "train/drops_of_jupiter.mp3",
    type: "audio/mpeg"
  },
  {
    name: "coldplay/paradise.mp3",
    type: "audio/mpeg"
  },
  {
    name: "coldplay/life_in_technicolor.mp3",
    type: "audio/mpeg"
  },
  {
    name: "imagine_dragons/west_coast.mp3",
    type: "audio/mpeg"
  },
  {
    name: "coldplay/strawberry_swing.mp3",
    type: "audio/mpeg"
  },
  {
    name: "coldplay/christmas_lights.mp3",
    type: "audio/mpeg"
  },
  {
    name: "green_day/21_guns.mp3",
    type: "audio/mpeg"
  }
];

var counter = 0;
var looping = false;
var volumeWatch = 0;

$(document).ready(function() {
  watchVolume();
  addSound( songList[counter].name, songList[counter].type );

});

function watchVolume() {
  volumeWatch = setInterval( function() {
    var vol = document.getElementById("mainAudio").volume;
    if ( vol > 0 && vol < 0.4 ) {
      $("#volume").removeClass("fa-volume-off");
      $("#volume").removeClass("fa-volume-up");
      $("#volume").addClass("fa-volume-down");
    } else if ( vol >= 0.4 ) {
      $("#volume").removeClass("fa-volume-down");
      $("#volume").removeClass("fa-volume-off");
      $("#volume").addClass("fa-volume-up");
    } else {
      $("#volume").removeClass("fa-volume-down");
      $("#volume").removeClass("fa-volume-up");
      $("#volume").addClass("fa-volume-off");
    }
  }, 10 );
}

function stopWatchVolume() {
  clearInterval( volumeWatch );
}

function transitionBkgd() {
  var $old = $(".background");

  var $newBkgd = $("<div>").addClass("background");
  $newBkgd.css("background-image","url('./images/bkgd" + counter + ".jpg')");
  $newBkgd.css("display","none");
  $("body").append( $newBkgd );
  setTimeout( function() {
    $newBkgd.slideDown();
  }, 10 );

  setTimeout( function() {
    $old.remove();
  }, 1000 );
}

function transitionBkgdRev() {
  var $old = $(".background");

  var $newBkgd = $("<div>").addClass("background");
  $newBkgd.css("background-image","url('./images/bkgd" + counter + ".jpg')");
  $newBkgd.css("z-index","-10");
  $("body").append( $newBkgd );

  setTimeout( function() {
    $old.slideUp();
  }, 10 );

  setTimeout( function() {
    $old.remove();
  }, 1000 );
}

function convertUpper(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function convertTitle(str) {
  str = convertUpper(str);
  str = str.replace(/_/g," ");
  let length = str.length;
  for ( let i = 0; i < length; i ++ ) {
    if ( str.charAt(i) === ' ' ) {
      str = str.substring(0,i) + " " + str.charAt(i+1).toUpperCase() + str.substring(i+2,str.length);
    }
  }
  return str;
}

function addSound( soundURL, type ) {

  var $player = $("#player");
  $player.empty();
  var $audio = $("<audio autoplay>").attr("id","mainAudio");
  var $soundFile = $("<source>").attr({ "src" : "./sound/" + soundURL, "type" : type });
  $player.append( $audio.append( $soundFile ) );

  var author = (soundURL.split('/'))[0];
  var songName = (soundURL.split('/'))[1];

  $("#title").text(
    convertTitle( author ) + " - " +
    convertTitle( songName.substr( 0, songName.length - 4 ) )
  );

  if ( counter < songList.length - 1 ) {
    counter ++;
  } else {
    counter = 0;
  }

  document.getElementById("mainAudio").volume = lastVolume;

  var timer = setInterval( function() {
    var audio = document.getElementById("mainAudio");
    $("#bar").css("width", (audio.currentTime/audio.duration)*100 + "%");
    $("#knob").css("left", (audio.currentTime/audio.duration)*100 + "%");
  }, 10 );

  var audio = document.getElementById("mainAudio");
  audio.onended = function() {
    clearInterval( timer );
    $("#play").removeClass("fa-play");
    $("#play").addClass("fa-pause");
    if( looping ) {
      counter --;
      if( counter == -1 ) {
        counter = songList.length - 1;
      }
      addSound( songList[counter].name, songList[counter].type );
    } else {
      transitionBkgd();
      addSound( songList[counter].name, songList[counter].type );
    }
  }

}

$(document).on( "click", "#play", function() {
  var audio = document.getElementById("mainAudio");
  if ( $("#play").hasClass("fa-play") ) {
    audio.play();
    $("#play").removeClass("fa-play");
    $("#play").addClass("fa-pause");
  } else {
    audio.pause();
    $("#play").removeClass("fa-pause");
    $("#play").addClass("fa-play");
  }
});

$(document).on( "click", "#next", function() {
  transitionBkgd();
  $("#play").removeClass("fa-play");
  $("#play").addClass("fa-pause");
  addSound( songList[counter].name, songList[counter].type );
});

$(document).on( "click", "#back", function() {
  $("#play").removeClass("fa-play");
  $("#play").addClass("fa-pause");

  if ( counter !== 0 && counter !== 1 ) {
    counter -= 2;
    //transitionBkgdRev();
    transitionBkgd();
    addSound( songList[counter].name, songList[counter].type );
  } else if ( counter === 1 ) {
    counter = songList.length - 1;
    //transitionBkgdRev();
    transitionBkgd();
    addSound( songList[counter].name, songList[counter].type );
  } else if ( counter === 0 ) {
    counter = songList.length - 2;
    //transitionBkgdRev();
    transitionBkgd();
    addSound( songList[counter].name, songList[counter].type );
  }

});

$(document).on( "click", "#loop", function() {
  $("#loop").toggleClass("looping");
  if ( $("#loop").hasClass("looping") ) {
    looping = true;
  } else {
    looping = false;
  }
});

$("#progBar").on("click", function() {
  var x = event.clientX;
  var audio = document.getElementById("mainAudio");
  var totalWidth = 0.75*window.innerWidth;
  var leftOffset = totalWidth*0.125/0.75 + 15;
  var percentPlayed = (x - leftOffset)/totalWidth;
  if ( percentPlayed < 0 ) {
    percentPlayed = 0;
  }
  audio.currentTime = audio.duration*percentPlayed + 2;
});

var delay;
var lastVolume = 1;
$("#volume").on( "mouseenter" , function() {
  var audio = document.getElementById("mainAudio");
  $("#volumeBar").css("width","100px");
  $("#loudness").css("width", (audio.volume*100) + "%");
  clearInterval( delay );
});

$("#mute").on( "click" , function(e) {
  e.stopPropagation();
  var audio = document.getElementById("mainAudio");
  if ( $("#volume").hasClass("fa-volume-off") ) {
    audio.volume = lastVolume;
    $("#loudness").css("width", (audio.volume*100) + "%");
  } else {
    audio.volume = 0;
    lastVolume = 0;
    $("#loudness").css("width","0px");
  }

});

$("#volume").on( "mouseleave" , function() {
  delay = setTimeout( function() {
    $("#volumeBar").css("width","0px");
    $("#loudness").css("width","0px");
  }, 1000 );
});

$("#volumeBar").on( "click", function() {
  var audio = document.getElementById("mainAudio");
  var viewportOffset = document.getElementById("loudness").getBoundingClientRect();
  var left = viewportOffset.left;
  var x = event.clientX;
  var delta = x - left;
  if( delta < 0 ) {
    delta = 0;
  }
  audio.volume = delta/100 ;
  $("#loudness").css("width", (audio.volume*100) + "%");
  lastVolume = delta/100;
});
