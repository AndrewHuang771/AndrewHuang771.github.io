class RLiquid extends Static {
  constructor( x, y, w, h, visc ) {
    super();
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.visc = visc;
    this.solid = false;
  }

  addForce( obj ) {
    let dir = new PVector( obj.velocity.x, obj.velocity.y );
    dir.normalize();
    dir.scale(-1 * this.visc);
    applyForce( dir, obj );
  }

}
