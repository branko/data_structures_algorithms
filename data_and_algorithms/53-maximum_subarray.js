var maxSubArray = function(nums) {
  // Kadane's Algorithm

  let maxSoFar = 0;
  let maxEndingHere = 0;

  for (let i = 0; i < nums.length; i++) {
    maxEndingHere += nums[i];

    if (maxEndingHere < 0) { maxEndingHere = 0 }
    if (maxEndingHere > maxSoFar) { maxSoFar = maxEndingHere }
  }

  return maxSoFar
}
 

// console.log(maxSubArray([1]))
console.log(maxSubArray([1, 2]))
// console.log(maxSubArray([1, -2, 3, -5, 4]))
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // 6
