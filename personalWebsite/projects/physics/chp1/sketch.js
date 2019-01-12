//Declare Globals
var moverArr = [];
var blockArr = [];
const numberOfMovers = 750;
const numberOfBlocks = 5;
var liquid;

function display( obj ) {
  noStroke();
  fill(255*obj.velocity.getMag());
  ellipse( obj.position.x, obj.position.y, obj.size, obj.size);
}

function update( obj ) {

  checkContact( obj );
  checkMouseDown( obj );
  checkBorder( obj );
  checkLiquid( obj );
  checkBlock( obj );

  if ( Math.abs(obj.velocity.x) < obj.cap ) {
    obj.velocity.x += obj.acceleration.x;
  }
  if ( Math.abs(obj.velocity.y) < obj.cap ) {
    obj.velocity.y += obj.acceleration.y;
  }

  obj.position.add(obj.velocity);
  obj.acceleration.x = 0;
  obj.acceleration.y = 0;
  obj.velocity.scale( 0.95 );
}

function checkBorder( obj ) {
  // //Detecting collision with borders.
  if ((obj.position.x > width ) || (obj.position.x < 0)) {
    obj.velocity.x *= -1;
  }
  if ((obj.position.y > height ) || (obj.position.y < 0)) {
    obj.velocity.y *= -1;
  }
}
//F = ma
function applyForce( force, obj ) {
  let copy = force;
  obj.acceleration.x += copy.x/obj.mass;
  obj.acceleration.y += copy.y/obj.mass;
}

function checkMouseDown( obj ) {
  if ( mouseIsPressed && mouseX && mouseY ) {
    let direction = new PVector( (1)*(mouseX - obj.position.x), (1)*(mouseY - obj.position.y) );
    direction.normalize( 0.75 );
    applyForce( direction, obj );
  }
}

function checkContact( obj ) {
  if ( !mouseIsPressed && mouseX && mouseY )
    if ( Math.sqrt( (mouseX - obj.position.x)*(mouseX - obj.position.x) + (mouseY - obj.position.y)*(mouseY - obj.position.y)) < 100 ) {
      let direction = new PVector( (-1)*(mouseX - obj.position.x), (-1)*(mouseY - obj.position.y) );
      direction.normalize( 0.75 );
      applyForce( direction, obj );
    }
}

function checkLiquid( obj ) {
  if ( liquid.checkIfInside( obj ) ) {
    liquid.addForce( obj );
  }
}

function checkBlock( obj ) {
  for( let i = 0; i < numberOfBlocks; i ++ ) {
    blockArr[i].checkIfInside( obj );
  }
}

function setup() {
  for ( let i = 0; i < numberOfMovers; i ++ ) {
    moverArr.push( new Mover( 1640*Math.random(), 760*Math.random(), 3*Math.random() + 1 ) );
  }
  for ( let i = 0; i < numberOfBlocks; i ++ ) {
    blockArr.push( new RStaticBlock( 1640*Math.random(), 760*Math.random(), 30, 30 ) );
  }
  liquid = new RLiquid( 100, 100, 700, 500, 1 );
  createCanvas(1640,760);
  background(51);
}

function draw() {
  background(51);
  liquid.display();
  for ( let i = 0; i < numberOfMovers; i ++ ) {
    let obj = moverArr[i];
    update( obj );
    display( obj );
  }
  for ( let i = 0; i < numberOfBlocks; i ++ ) {
    blockArr[i].display();
  }
}
