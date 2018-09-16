var singleNumber = function(nums) {
  let sum = 0
  let seen = {}

  nums.forEach(n => {
    if (!seen[n]) {
      sum += n;
      seen[n] = true
    } else {
      sum -= n
    }
  })

  return sum
};

var singleNumber = function(nums) {
  let sum = 0
  let seen = []

  nums.forEach(n => {
    sum += seen[n] ? -n : n;
    if (seen[n]) {
      sum -= n
    } else {
      sum += n
      seen[n] = true
    }
  })

  return sum
};

console.log(singleNumber([2,2,1]))