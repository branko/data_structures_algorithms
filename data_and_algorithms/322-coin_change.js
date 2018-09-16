

// function coinChange(coins, amount) {
//   if (amount === 0) { return 0 }
//   let depths = []
//   coinChangeHelper(coins, amount, coins.map(c => 0), depths)

//   let output = Math.min(...depths)
//   return output === Infinity ? -1 : output
// }


// function coinChangeHelper(coins, amount, combination, depths, depth=0, cache={}) {
//   let sum = 0;
//   let max = -1

//   let minDepth

//   for (let i = 0; i < coins.length; i++) {
//     sum += coins[i] * combination[i]
//   }

//   if (sum === amount) {
//     return depth;

//   } else if (sum > amount) {
//     return -1;

//   } else {
//     let childCalls = []

//     for (let i = 0; i < coins.length; i++) {

//       let tempCombo = combination.slice();
//       tempCombo[i]++;

//       let result = cache[tempCombo] || coinChangeHelper(coins, amount, tempCombo, depths, depth + 1, cache)

//       cache[tempCombo] = result

//       if (result > 0) {
//         childCalls.push(result)
//       }
//     }

//     let output = Math.min(...childCalls)
//     depths.push(output)

//     return output
//   }
// }




// function coinChange(coins, amount) {
//   if ( amount === 0 ) { return 0 }

//   let coinHash = {}
//   coins.forEach(c => coinHash[c] = true)

//   let totals = []

//   coinChangeHelper(amount, amount, coinHash, totals)

//   let min = Math.min(...totals)

//   return min === Infinity ? -1 : min
// }

// function coinChangeHelper(i, originalAmount, coins, totals, cache={}) {
//   if (i === 0) { return 0 }

//   if (coins[i]) {
//     cache[i] = 1
//     if (i === originalAmount) { totals.push(1) }
//     return 1;
//   }

//   if (i === 1 || cache[i] === -1) { return -1 }


//   let limit = Math.ceil(i / 2)

//   for (let j = 1; j <= limit; j++) {

//     let numCoins1 = cache[j]     ||     coinChangeHelper(j, originalAmount, coins, totals, cache)
//     let numCoins2 = cache[i - j] || coinChangeHelper(i - j, originalAmount, coins, totals, cache)

//     if (numCoins1 !== -1 && numCoins2 !== -1) {
//       if (cache[i]) {
//         cache[i] = Math.min(cache[i], numCoins1 + numCoins2)
//       } else {
//         cache[i] = numCoins1 + numCoins2
//       }

//       if (i === originalAmount) { totals.push(numCoins1 + numCoins2) }
//     }
//   }

//   cache[i] = cache[i] || -1
//   return cache[i]
// }


function coinChange(coins, amount, cache={}) {
  if (amount === 0) { return 0 }
  if (coins.length === 0 || amount < 0) { return - 1 }

  let min = Infinity;

  coins.forEach(coin => {
    let val = cache[amount - coin] || coinChange(coins, amount - coin, cache);

    cache[amount - coin] = val

    if (val !== -1) {
      min = Math.min(val, min)
    }
  })

  return min === Infinity ? -1 : min + 1
}





// console.log(coinChange([1], 2))
// console.log(coinChange([1], 0))
// console.log(coinChange([2], 3))
// console.log(coinChange([470,35,120,81,121], 3000))
console.log(coinChange([1, 2, 5], 100))
// console.log(coinChange([186, 419, 83, 408, 1700, 6249], 3400)) // 20
// console.log(coinChange([3,7,405,436], 2000))



