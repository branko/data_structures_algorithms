function isUglyNumber(num, memo) {
  if (num <= 0) return false
  if (memo[num]) return true;

  if (isUglyNumber(num - 2, memo) || isUglyNumber(num - 3, memo) || isUglyNumber(num - 5, memo)) {
    memo[num] = true;
    return true;
  } else {
    return false;
  }
}

function nthUglyNumber(n, memo={1:true, 2:true}) {
  let count = 1;
  let num = 1;

  while (true) {
    if (isUglyNumber(num, memo)) {
      count += 1;
    }

    if (count === n) return num;

    num++
  }
}

console.log(nthUglyNumber(10))
console.log(nthUglyNumber(11))
console.log(nthUglyNumber(12))
