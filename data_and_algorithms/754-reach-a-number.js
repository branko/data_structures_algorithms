function reachNumber(target, depth=1, memo={}) {

  if (depth > 10) return Infinity

  if (target > 10 ** 9 || target < (-10) ** 9) return Infinity
  if (memo[[target, depth]]) return memo[[target, depth]]

  if (target + depth === 0 || target - depth === 0) {
    return 1;
  }

  return 1 + Math.min(
    reachNumber(target - depth, depth + 1, memo),
    reachNumber(target + depth, depth + 1, memo)
  )

  
}

console.log(reachNumber(2))