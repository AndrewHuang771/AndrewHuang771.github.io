const PERIOD_DELAY = 500;
let typewriterArray = [];
let numberOfTypeWriters = 0;

class Writing {
  constructor( text, size, delay, classes ) {
    this.$element = $("<div>");
    this.text = text;
    this.size = size;
    this.classes = classes;
    this.delay = delay;
    this.$element.css( "font-size", size + "px" );
    for ( let i = 0; i < this.classes.length; i ++ ) {
      this.$element.addClass( classes[i] );
    }
  };
}

class TypeWriter {
  constructor( $parent, writing ) {
    this.writing = writing;
    this.$parent = $parent;
    this.writer;
    this.writer1;
    this.counter = 0;
    this.order = numberOfTypeWriters;
  };
}

TypeWriter.prototype.write = function() {
    var self = this;
    $( document ).ready( function() {
      let listOfElements = [];
      for ( let i = 0; i < self.writing.length; i ++ ) {
        listOfElements.push( self.writing[i].$element );
      }
      for ( let i = 0; i < listOfElements.length; i ++ ) {
        self.$parent.append( listOfElements[i] );
      }
      self.render( 0 );
    });
}

TypeWriter.prototype.render = function( count ) {
    var self = this;
    self.makeTimeout( self.writing[count], 0, function() {
      if ( count < self.writing.length - 1 ) {
        $(".highlight").remove();
        self.counter ++;
        self.render( count + 1 );
      } else {
        return;
      }
    });
}

TypeWriter.prototype.makeTimeout = function( msg, i, callback ) {
    let delay = Math.random()*10 + 20;
    var self = this;

    if ( msg.text[ i - 1 ] === "." ) {
      delay = PERIOD_DELAY;
    }

    $("#blinker" + self.order + self.counter ).css("font-size", (msg.size + 10) + "px" );
    $("#blinker" + self.order + self.counter ).css("transform", "translate( 0, " + ((3)*(msg.size/60) + 2) + "px)" );

    if ( i === 0 ) {
      $(".blinker").css("visibility", "hidden");
      self.appendBlinker( msg.$element );
    }

    self.writer = setTimeout( function() {
        let $letter = $("<div>").text( msg.text[i]).addClass("typed");
        $letter.insertBefore("#blinker" + self.order + self.counter );
        i ++;

        if ( i > msg.text.length ) {
          if ( callback ) {
            self.writer1 = setTimeout( function() {
              callback();
            }, msg.delay);
          }
        } else {
          self.makeTimeout( msg, i, callback );
        }

    }, delay );
}

TypeWriter.prototype.appendBlinker = function ( $element ) {
    var self = this;
    let $blinker = $("<div>").text("|").addClass("blinker typed").attr("id", "blinker" + self.order + self.counter );
    let isOpaque = true;
    let $highlight = $("<div>").addClass("highlight");
    $element.append( $blinker ).append( $highlight );
    setInterval( function() {
      $blinker.css( "opacity", isOpaque ? 1 : 0 );
      isOpaque = !isOpaque;
    }, 500 );
}

TypeWriter.prototype.delete = function() {
    var self = this;
    for ( let i = 0 ; i <= self.counter ; i ++ ) {
      $("#blinker" + self.order + i ).parent().remove();
    }
    clearInterval( self.writer );
    clearInterval( self.writer1 );
}

function startTypewriter( $parent, messages ) {
    let newTypeWriter = new TypeWriter( $parent, messages );
    typewriterArray.push( newTypeWriter );
    numberOfTypeWriters ++;
    typewriterArray[ numberOfTypeWriters - 1 ].write();
}
