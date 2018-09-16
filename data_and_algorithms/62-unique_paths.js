// var uniquePaths = function(m, n, cache=new Map) {
//   if (m === 1 && n === 1) { return 1 }
//   if (m < 1 || n < 1) { return 0 }

//   let strDown = [m - 1, n].toString();
//   let strRight = [m, n - 1].toString();

//   let result = (cache.has(strDown) || uniquePaths(m - 1, n, cache)) + (cache.has(strRight) || uniquePaths(m, n - 1, cache));
//   cache.set([m, n].toString(), result)

//   return result
// };

var uniquePaths = function(m, n) {
  // Iterative bottom-up DP solution
  
  let grid = []

  for (i = 0; i < m; i++) {
    grid.push([1])
  }
  for (i = 0; i < n; i++) {
    grid[0].push(1);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!grid[i][j]) {
        grid[i][j] = grid[i - 1][j] + grid[i][j - 1]
      }
    }
  }

  return grid[m- 1][n- 1]
}

console.log(uniquePaths(10, 10))