function checkCancelling(num, denom) {

  let value = num / denom;

  let [a, b] = String(num).split('').map(x => Number(x));
  let [c, d] = String(denom).split('').map(x => Number(x));

  if (a / c === value) { // Trivial case
    return false
  } else if ((a === c && b / d === value) ||
             (a === d && b / c === value) ||
             (b === c && a / d === value) ||
             (b === d && a / c === value)) {
    return [num, denom]
  } else {
    return false
  }
}

function decimalToFraction(dec) {
  denom = 1
  while (dec % 1 !== 0) {
    dec *= 10
    denom *= 10
  }

  return [dec, denom]
}

function reduceFraction(num, denom) {
  var gcd = function gcd(a, b) {
    return b ? gcd(b, a % b) : a
  }

  gcd = gcd(num, denom);

  return [num/gcd, denom/gcd]
}

function digitCancelling() {
  let fractions = [];

  for (var denom = 10; denom < 100; denom++) {
    for (var num = 10; num < denom; num++) {
      let fraction = checkCancelling(num, denom)

      if (fraction) {
        fractions.push(fraction)
      }
    }
  }

  let numeratorSum = fractions.map(fraction => fraction[0]).reduce((acc, n) => acc * n)
  let denominatorSum = fractions.map(fraction => fraction[1]).reduce((acc, n) => acc * n)

  return numeratorSum / denominatorSum
}


answer = digitCancelling()
answer = decimalToFraction(answer)
answer = reduceFraction(...answer)[1]

console.log(answer)











