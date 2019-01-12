function PVector( x, y ) {

  this.x = x;
  this.y = y;
  //Vector addition.
  this.add = function( vector ) {
    this.x += vector.x;
    this.y += vector.y;
  }
  //Turns the vector into a unit vector.
  this.normalize = function() {
    this.x /= (Math.sqrt(this.x*this.x + this.y*this.y));
    this.y /= (Math.sqrt(this.x*this.x + this.y*this.y));
  }
  //Reset the values of the vector components.
  this.resetValues = function( x, y ) {
    // console.log(this.x, this.y, x, y);
    this.x = x;
    this.y = y;
  }
  //Scalar multiplication
  this.scale = function( factor ) {
    this.x *= factor;
    this.y *= factor;
  }

  //Retrieves the magnitude of the vector.
  this.getMag = function() {
    return Math.sqrt( this.x*this.x + this.y*this.y );
  }

}
