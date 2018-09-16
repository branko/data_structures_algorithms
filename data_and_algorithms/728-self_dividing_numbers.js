function checkNumber(n) {

  let tempNum = n;

  while (tempNum > 0) {
    const digit = tempNum % 10;

    if (n % digit !== 0) return false

    tempNum = Math.floor(tempNum / 10);
  }

  return true;
}

var selfDividingNumbers = function(left, right) {
  let nums = [];

  while (left <= right) {
    checkNumber(left) && nums.push(left);
    left++;
  }

  return nums
};