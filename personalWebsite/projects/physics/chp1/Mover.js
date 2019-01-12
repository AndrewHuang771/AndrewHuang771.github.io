class Mover {
  constructor(x, y, mass) {
    this.cap = 15;
    this.position = new PVector( x, y );
    this.velocity = new PVector( 0, 0 );
    this.acceleration = new PVector(0.0, 0.0);
    this.mass = mass;
    this.size = this.mass*this.mass;
  }
}
