function numDivisors(n) {
  let count = 1
  let increment = 1

  if (n % 2 !== 0) {
    increment = 2
  }

  for (let i = 1; i <= n / 2; i += increment) {
    if (n % i === 0) {
      count++;
    }
  }

  return count
}



time1 = Date.now()
console.log(numDivisors(2**33))
time2 = Date.now()
console.log(time2 - time1)

function triangularNumbers(max) {
  let n = 1;
  let sum;

  while (numDivisors(sum) <= max) {
    n++
    sum = n * (n + 1) / 2;
  }

  return sum
}

// console.log(triangularNumbers(200))