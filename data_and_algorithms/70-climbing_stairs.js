var climbStairs = function(n, cache={}) {
  if (n <= 1) { return 1 }
  if (n == 2) { return 2 }
  
  let result = (cache[n-1] || climbStairs(n - 1, cache)) + (cache[n-2] || climbStairs(n - 2, cache))
  cache[n] = result
  return cache[n]
};

var climbStairs = function(n) {
  // Iterative bottom-up DP solution

  let cache = {}

  for (let i = 3; i <= n; i++) {
    if (i === 1) { cache[i] === 1 }
    else if (i === 2) { cache[i] === 2 }
    else { cache[i] = cache[i - 1] + cache[i - 2] }
  }

  return cache[n]
}


console.log(climbStairs(1))
console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(100))

