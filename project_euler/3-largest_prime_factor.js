function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) { return false }
  }

  return num > 1
}

function nextPrime(primes) {

  let next = primes.slice(-1)[0] + 1

  while (!isPrime(next)) {
    next++
  }

  return next
}



function largestPrimeFactor(n) {
  let primes = [2]

  while (n !== 1) {
    while (n % primes.slice(-1) === 0) {
      n = n / primes.slice(-1)
    }

    if (n === 1) { return primes.slice(-1)[0] }

    primes.push(nextPrime(primes))
  }
}


console.log(largestPrimeFactor(600851475143))
