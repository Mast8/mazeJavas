


mazeTest =
[ [ 'X', 'X', 'X', 'X', 'X', 'X', 'X' ],
  [ 'X', '*', 'O', 'O', 'O', '^', 'X' ],
  [ 'X', '', 'O', '░', 'O', '░', 'X' ],
  [ 'X', '░', '░', 'O', 'O', '░', 'X' ],
  [ 'X', '░', '░', 'O', 'O', '░', 'X' ],
  [ 'X', '░', '░', '░', '░', '0', 'X' ],
  [ 'X', 'X', 'X', 'X', 'X', 'X', 'X' ] ];
 

function printMaze( maze ) {
  let result = '';
  let pos = "";
  var matrix = maze;
  for ( let row = 0; row < maze.length; row++ ) {
    for ( let col = 0; col < maze[ row ].length; col++ ) {
      pos = maze[ row ][ col ];
      if(pos != 'O'){
        
        result += matrix[row][col] = '.';
      }
      else {
        //result += maze[ row ][ col ] + ' '; 
        result += matrix[row][col] = 'W';
      }  
    }
    
    result += '\n';
  }
  return result;
}

function printMaze2( maze ) {
  var result = "";
  
  for ( let row = 0; row < maze.length; row++ ) {
    for ( let col = 0; col < maze[ row ].length; col++ ) {
      result += maze[row][col] + " "
    }
    result += '\n';
  }
  return result;
}



// new maze

map2 = [
  [1,1,0,0,0,0,0,0],
  [0,1,1,0,0,0,0,0],
  [1,1,1,0,0,0,0,0],
  [1,0,1,1,1,1,1,1],
  [1,1,0,0,1,0,0,1],
  [0,1,1,0,1,0,0,1],
  [1,1,1,0,1,0,0,1],
  [1,0,0,0,1,1,'e',1]];

 map =
[ [ '0', '0', 'x', 'x', 'x', 'x', 'x' ],
  [ 'x', '0', '0', 'x', 'x', '0', 'x' ],
  [ 'x', '0', '0', '0', '0', '0', 'x' ],
  [ 'x', '0', '0', '0', '0', '0', 'x' ],
  [ 'x', '0', '0', '0', '0', '0', 'x' ],
  [ 'x', '0', '0', '0', '0', '0', 'x' ],
  [ 'x', 'x', 'x', 'x', 'x', 'e', 'x' ] ];
  
  /// x = no pass
  //  * = path passed
  //  0 = free
  //  e = exit
console.log( printMaze2( map ) );

console.log(map)


function findpath(x,y){
  res = false;
  if( valid(map,x,y) ){
    if ( map[x][y] != 'x' ||  map[x][y] != '*') {
      if (map[x][y] == 'e'){
        console.log('Reached exit at: ' + x + ',' + y);
        showPosition(x,y);
        return true; 
      }
      
      console.log('I am at: ' + x + ',' + y);
      map[x][y]= '*'; 
 
      if ( findpath(x+1,y) || findpath(x,y+1) || findpath(x,y-1) ||findpath(x-1,y) ){
        return true; 
      }
      
    }
  }

  return res ;
}

function showPosition(x,y) {
  const xPos = document.getElementById("x-pos");
  xPos.textContent = x + "," +y;
}

function valid(map,x,y) {
  if(x >= 0 && x < (map.length) && y >= 0 && y < (map[0].length)) return true;
}



function startMaze() {
  findpath(0, 0);
  resetMaze();
}

function resetMaze(){
   map =
[ [ '0', '0', 'x', 'x', 'x', 'x', 'x' ],
  [ 'x', '0', '0', 'x', 'x', '0', 'x' ],
  [ 'x', '0', '0', '0', '0', '0', 'x' ],
  [ 'x', '0', '0', '0', '0', '0', 'x' ],
  [ 'x', '0', '0', '0', '0', '0', 'x' ],
  [ 'x', '0', '0', '0', '0', '0', 'x' ],
  [ 'x', 'x', 'x', 'x', 'x', 'e', 'x' ] ];
}


