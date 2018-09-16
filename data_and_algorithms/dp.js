function maxProfit(prices) {
  if (prices.length <= 1) return 0

  const memo = {};

  function helper(i, j) {
    if (i >= j) return 0;

    if (memo[[i, j]] !== undefined) return memo[[i, j]];

    if (j - i === 1) {
      let result = Math.max(0, prices[j] - prices[i])
      memo[[i, j]] = result;
      return result;
    }

    let outerResult = prices[j] - prices[i];
    let result = Math.max(outerResult, helper(i + 1, j), helper(i, j - 1));

    memo[[i, j]] = result;
    return result;
  }

  let end = prices.length - 1;

  while (prices[end] === 0) end--;

  return helper(0, prices.length - 1)
}

prices = [7, 1, 5, 3, 6, 4]

console.log(maxProfit(prices));
