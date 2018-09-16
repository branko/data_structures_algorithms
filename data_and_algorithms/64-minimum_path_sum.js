var minPathSum = function(grid, row=0, col=0, cache={}) {
  if (grid.length === 0 || grid[0].length === 0) { return 0 }

  let m = grid.length;
  let n = grid[0].length;

  if (row === m || col === n) { return Infinity }
  if (m - row === 1 && n - col === 1) { return grid[row][col] }

  let down = cache[[row + 1, col]] || minPathSum(grid, row + 1, col, cache)
  let right = cache[[row, col + 1]] || minPathSum(grid, row, col + 1, cache)

  let result = grid[row][col] + Math.min(down, right)
  
  cache[[row, col]] = result

  return result
};

var minPathSum = function(grid) {
  // Iterative bottom-up DP solution
  let m = grid.length;
  let n = grid[0].length;
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {

      let above = grid[i - 1] !== undefined ? grid[i - 1][j] : Infinity;
      let left = grid[i][j - 1] !== undefined ? grid[i][j - 1] : Infinity;

      if (i === 0 && j === 0) {
        above = 0;
        left = 0;
      }

      let result = grid[i][j] + Math.min(above, left)
      grid[i][j] = result
    }
  }

  return grid[m - 1][n - 1]
}

let grid = [
  [0, 0],
  [0, 0]
]

console.log(minPathSum(grid))