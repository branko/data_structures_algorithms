// Generate board

const board = [];

for (let i = 0; i < 8; i++) {
  const row = [];

  for (let j = 0; j < 8; j++) {
    row.push(undefined);
  }

  board.push(row)
}

// 8 Possible directions

const directions = [
  [2, 1],
  [1, 2],
  [-2, 1],
  [-1 ,2],
  [2, -1],
  [1, -2],
  [-2, -1],
  [-1, -2],
]

let counter = 0; // To keep track of which step we are on

function validCoords(x, y) {
  // x and y are constrained to 0 => 7
  return x >= 0 && x < 8 && y >= 0 && y < 8;
}

function knightsTour(board, x=0, y=0) {
  board[y][x] = counter;
  counter++;

  directions.forEach(diffs => {
    const newX = x + diffs[0];
    const newY = y + diffs[1];

    if (validCoords(newX, newY) && !board[newY][newX]) {
      if (knightsTour(board, newX, newY)) return true
    }
  })

  if (counter < 63) {
    board[y][x] = undefined;
    counter--;
    return false
  }

  return board
}

console.log(knightsTour(board, 1, 2))

// Go in all 8 possible directions if possible
// If all squares are filled, return true
// If no directions are visited, clear current square return false
// 