function generateCollatz(num) {
  let length = 1

  while (num !== 1) {
    num = num % 2 === 0 ? (num / 2) : (3 * num + 1);

    length++
  }

  return length
}

function longestCollatz(max) {
  let longestStarting = 0
  let longestCollatz = 0

  for (let i = 1; i <= max; i++) {
    let collatz = generateCollatz(i)

    if (collatz > longestCollatz) {
      longestStarting = i
      longestCollatz = collatz
    }
  }

  return longestStarting
}


console.log(longestCollatz(1000000))