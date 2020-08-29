const DEAD = 0;
const ALIVE = 1;
const EMPTY = 2;
let X_BOUND = 0;
let Y_BOUND = 0;

function checkNeighbours( x, y, grid ) {
  let numAlive = 0;

  if ( x !== 0 && y !== 0 && grid[ y - 1 ][x - 1] === ALIVE ) { numAlive ++; }
  if ( x !== 0 && grid[ y ][x - 1] === ALIVE ) { numAlive ++; }
  if ( x !== 0 && y !== Y_BOUND - 1 && grid[ y + 1 ][x - 1] === ALIVE ) { numAlive ++; }
  if ( y!== 0 && grid[ y - 1 ][x] === ALIVE ) { numAlive ++; }
  if ( y!== Y_BOUND - 1 && grid[ y + 1 ][x] === ALIVE ) { numAlive ++; }
  if ( x !== X_BOUND - 1 && y !== 0 && grid[ y - 1 ][x + 1] === ALIVE ) { numAlive ++; }
  if ( x !== X_BOUND - 1 && grid[ y ][x + 1] === ALIVE ) { numAlive ++; }
  if ( x !== X_BOUND - 1 && y !== Y_BOUND - 1 && grid[ y + 1 ][x + 1] === ALIVE ) { numAlive ++; }

  return numAlive;
}

function createGrid() {
  $grid = $("#grid");
  for ( let y = 0; y < Y_BOUND; y ++ ) {
    for ( let x = 0; x < X_BOUND; x ++ ) {
      $pixel = $("<div>").addClass("pixel");
      $pixel.attr( "id", y + "k" + x );
      $grid.append( $pixel );
    }
  }
}

function updateGraphic( grid ) {
  $grid = $("#grid");
  for ( let y = 0; y < Y_BOUND; y ++ ) {
    for ( let x = 0; x < X_BOUND; x ++ ) {
      if ( grid[y][x] === ALIVE ) {
        $( "#" + y + "k" + x ).addClass("alive").removeClass("dead");
      } else if ( grid[y][x] === DEAD ) {
        $( "#" + y + "k" + x ).addClass("dead").removeClass("alive");
      } else if ( grid[y][x] === EMPTY ) {
        $( "#" + y + "k" + x ).addClass("empty").removeClass("alive").removeClass("dead");
      }
    }
  }
}

function updatePixel( x, y, grid ) {
  grid[x][y] = ALIVE;
  updateGraphic( grid );
  return grid;
}

function updatePixelEmpty( x, y, grid ) {
  if ( grid[x][y] === EMPTY ) {
    grid[x][y] = DEAD;
  } else {
    grid[x][y] = EMPTY;
  }
  updateGraphic( grid );
  return grid;
}

function updateGrid( grid ) {
  let newGrid = new Array( Y_BOUND );
  for ( let y = 0; y < Y_BOUND; y ++ ) {
    newGrid[y] = new Array( X_BOUND );
    newGrid[y].fill(0);
  }

  //for number of rows...
  for ( let y = 0; y < Y_BOUND; y ++ ) {
    //for num cols...
    for ( let x = 0; x < X_BOUND; x ++ ) {
      let numAdjAlive = checkNeighbours( x, y, grid );
      if ( grid[y][x] === DEAD ) {
        if ( numAdjAlive === 3 ) {
          newGrid[y][x] = ALIVE;
        } else {
          newGrid[y][x] = DEAD;
        }
      } else if ( grid[y][x] === ALIVE ) {
        if ( numAdjAlive < 2 || numAdjAlive > 3 ) {
          newGrid[y][x] = DEAD;
        } else {
          newGrid[y][x] = ALIVE;
        }
      }
    }
  }
  updateGraphic( newGrid );
  return newGrid;
}

function presetGrid(grid) {
  const alive = [{x: 0, y: 0}];
  for ( let i = 0; i < alive.length; i ++ ) {
    if ( alive[i].x < X_BOUND && alive[i].y < Y_BOUND ) {
      updatePixel( alive[i].x, alive[i].y, grid )
    }
  }
  return grid;
}

$(document).ready( function() {
  Y_BOUND = Math.floor( $("#grid").height()/40 );
  X_BOUND = Math.floor( $("#grid").width()/40 );
  let grid = new Array( Y_BOUND );
  let generation_loop;

  for ( let y = 0; y < Y_BOUND; y ++ ) {
    grid[y] = new Array( X_BOUND );
    grid[y].fill(0);
  }

  createGrid();
  grid = presetGrid(grid);

  generation_loop = setInterval( function() {
    grid = updateGrid( grid );
  }, 500 );

  //only the mouseenter should make the grid space ALIVE
  $(document).on( "mouseenter", ".pixel", function(e) {
    let coords = e.target.id.split( 'k' );
    let onX = coords[0];
    let onY = coords[1];
    grid = updatePixel( onX, onY, grid );
  });

  $(document).on( "click", ".pixel", function(e) {
    let coords = e.target.id.split( 'k' );
    let onX = coords[0];
    let onY = coords[1];
    grid = updatePixelEmpty( onX, onY, grid );
  });

});
