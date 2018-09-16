// Using start/end pointers to find two sums that match target
//
// initialize a = 0, b = array.length

// while (a < b)
  // if sum of two pointers === target
  //.  return [a + 1, b + 1]
  // else if sum of two pointers > target
  //.  b--
  // else if sum of two pointers < target
  //   a++

function twoSum(nums, target) {
  let a = 0;
  let b = nums.length - 1;

  while (a < b) {
    let sum = nums[a] + nums[b];

    if (sum === target) {
      return [a + 1, b + 1];
    } else if (sum > target) {
      b--;
    } else if (sum < target) {
      a++;
    }
  }

}

console.log(twoSum([2,7,11,15], 9))