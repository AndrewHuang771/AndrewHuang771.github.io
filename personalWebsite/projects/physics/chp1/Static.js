class Static {

  checkIfInside( obj ) {
    if ( obj.position.x >= this.x && obj.position.x <= this.x + this.w && obj.position.y >= this.y && obj.position.y <= this.y + this.h ) {
      if ( this.solid ) {
        if ( obj.position.x >= this.x && obj.position.x <= this.x + this.w ) {
          obj.velocity.x *= -1;
        }
        if ( obj.position.y >= this.y && obj.position.y <= this.y + this.h ) {
          obj.velocity.y *= -1;
        }
      }
      return true;
    } else {
      return false;
    }
  }

  display() {
    noStroke();
    fill(175);
    rect( this.x, this.y, this.w, this.h );
  }

}
