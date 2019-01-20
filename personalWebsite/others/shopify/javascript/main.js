class Garbage {
  constructor( title, body ) {
    this.title = title;
    this.body = body;
  };
};

var fetchData;
var favorites = [];
var toRender = [];

function arrayify( text ) {
  var array = text.split(/,| /);
  return array;
}

function isFavorite( obj ) {
  for ( let i = 0 ; i < favorites.length; i ++ ) {
    if ( !favorites[i].title.trim().localeCompare( obj.title.trim() ) ) {
      return true;
    }
  }
  return false;
}

function searchAndDestroy( victim, crowd ) {
  let target = -1;
  for ( let i = 0; i < crowd.length; i ++ ) {
    if ( crowd[i].title == victim ) {
      target = i;
    }
  }
  if ( target !== -1 ) {
    crowd.splice( target, 1 );
  }
}

function renderPages( toRender, renderFav ) {
  let $parent;
  let marker = "f";

  if ( renderFav ) {
    $parent = $("#favoriteList");
  } else {
    $parent = $("#mainContent");
    marker = "m";
  }

  $parent.empty();

  for ( let i = 0; i < toRender.length; i ++ ) {

    let $wrapper = $("<div>").attr({
      "id" : marker + "item" + i,
      "class" : "wrapper"
    });

    let $title = $("<div>").attr({
      "id" : marker + "title" + i,
      "class" : "titleCard"
    }).text( toRender[i].title );

    let $info = $("<div>").attr({
      "id" : marker + "info" + i,
      "class" : "info"
    }).html( toRender[i].body );

    let favorited = isFavorite( toRender[i] );

    let $star = $("<div>").attr({
      "id" : marker + "fav" + i,
      "class" : "fav"
    }).html( "<i class='fas fa-star text inline star' id = '" + marker + "star" + i + "' ></i>" );

    if ( favorited ) {
      $star.addClass( "selected" );
    }

    $info.html( $info.text() );

    $wrapper.append( $star, $title, $info );

    $parent.append( $wrapper );

  }
}


function searchGarbage() {
  let text = document.getElementById( "searchBar" ).value.toLowerCase();
  toRender = [];

  fetchData.forEach( item => {
    let rawText = item.keywords;
    let rawTitle = item.title;
    let foundMatch = false;
    let keywordArr = arrayify( rawText );
    let titleArr = arrayify( rawTitle );

    //Search keywords
    for( let i = 0; i < keywordArr.length; i ++ ) {
      if ( text === keywordArr[i].trim() ) {
        let garbage = new Garbage( item.title, item.body );
        toRender.push( garbage );
        foundMatch = true;
        break;
      }
    }
    //Search titles if no match found in keywords
    if ( !foundMatch ) {
      for ( let i = 0; i < titleArr.length; i ++ ) {
        if ( text === titleArr[i].trim() ) {
          let garbage = new Garbage( item.title, item.body );
          toRender.push( garbage );
          break;
        }
      }
    }

  });

  renderPages( toRender, false );
}


$(document).ready( function() {
  var request = new XMLHttpRequest();

  request.open('GET', 'https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000', true);

  request.onload = function () {
    if ( request.status >= 200 && request.status < 400 ) {
      var data = JSON.parse(this.response);
      fetchData = data;
    }
  }

  request.send();

  //Make sure that the search results clear when the search bar is empty
  $("#searchBar").on('input',function(e) {
    let text = document.getElementById( "searchBar" ).value;
    if ( text.length === 0 ) {
      $("#mainContent").empty();
    }
  });

  $(document).on( "click", ".star", function(e) {
    let id = e.target.id.substr( 5, e.target.id.length );
    let newFavorite;

    if ( $("#" + e.target.id ).parent().attr("id")[0] === "f" ) {
      newFavorite = new Garbage( $( "#ftitle" + id ).text(), $( "#finfo" + id ).html() );
    } else {
      newFavorite = new Garbage( $( "#mtitle" + id ).text(), $( "#minfo" + id ).html() );
    }

    if ( $("#" + e.target.id ).parent().hasClass("selected") || $("#" + e.target.id ).hasClass("selected") ) {
      searchAndDestroy( newFavorite.title, favorites );
    } else {
      $("#" + e.target.id ).addClass("selected");
      favorites.push( newFavorite );
    }

    renderPages( favorites, true );
    renderPages( toRender, false );
  });

});
