function powerDigitSum(n) {
  let sum = 0

  while (n > 0) {
    let lastDigit = n % 10


    sum += lastDigit


    n = (n - lastDigit) / 10
  }

  return sum
}

console.log(powerDigitSum(2 ** 1000))

// Issue with floating point numbers? Solved in ruby