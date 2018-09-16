function sumOfProperDivisors(n) {
  let sum = 0

  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) { sum += i }
  }

  return sum
}

function amicableNumbers(max) {
  let total = 0

  for (let n = 1; n <= max; n++) {
    let sumDiv = sumOfProperDivisors(n)
    let otherSumDiv = sumOfProperDivisors(sumDiv)

    if (n != sumDiv && otherSumDiv === n) {
      total += sumDiv
    }
  }

  return total
}


let time1 = Date.now() 
console.log(amicableNumbers(10000))
console.log((Date.now() - time1) / 1000)