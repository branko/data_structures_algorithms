// f(i) = MAX{ f(i-k), f(k) }
// k: { 1, i - 1 }

function integerBreak(n, memo={1:1}) {
  if (memo[n]) return memo[n]
  let maxProduct = -Infinity;

  for (let k = 1; k <= n / 2; k++) {
    maxProduct = Math.max(maxProduct, (n - k) * k, Math.max(n - k, integerBreak(n-k, memo)) * Math.max(k, integerBreak(k, memo)));
  }
  memo[n] = maxProduct
  return maxProduct
}

