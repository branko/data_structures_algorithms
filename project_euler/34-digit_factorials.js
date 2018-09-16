function digitFactorials(max) {
  let sum = 0;

  for(let i = 10; i < max; i++) {
    if (sumOfFactorials(i) === i) {
      sum += i
      console.log(sum)
    }
  }

  return sum
}

function sumOfFactorials(n) {
  let sum = 0

  String(n).split('').forEach(digit => {
    sum += factorial(+digit)
  })

  return sum
}

function factorial(n) {
  let prod = 1

  for(let i = 2; i <= n ; i++) {
    prod *= i
  }

  return prod
}



digitFactorials(7 * factorial(9))