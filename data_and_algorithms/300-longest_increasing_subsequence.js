// Given an unsorted array of integers, find the length of longest increasing subsequence.

// Example:

// Input: [10,9,2,5,3,7,101,18]
// Output: 4 
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
// Note:

// There may be more than one LIS combination, it is only necessary for you to return the length.
// Your algorithm should run in O(n2) complexity.
// Follow up: Could you improve it to O(n log n) time complexity?

// [3, 10, 1, 20, 30]

// f(i) = 1 + MAX{ f(i + k) }    k=> 1..N-i-1
//          WHERE nums[i] < nums[i + k]






function lengthOfLIS(nums, cache={}) {
  if (nums.length === 0) { return 0 }
  if (nums.length === 1) { return 1 }
  if (nums.length === 2) {
    if (nums[0] < nums[1]) {
      return 2
    } else {
      return 1
    }
  }

  let max = 0
  let altMax = 0

  for (let k = 1; k <= nums.length - 1; k++) {
    substr = nums.slice(k, nums.length)
    
    if (nums[0] === nums[k]) {
      continue
    } else if (nums[0] < nums[k]) {
      console.log(substr)
      max = Math.max(max, cache[substr] === undefined ? lengthOfLIS(substr, cache) : cache[substr]);
    } else {
      altMax = Math.max(altMax, cache[substr] === undefined ? lengthOfLIS(substr, cache) : cache[substr])
    }
  }

  result = max >= altMax ? max + 1 : altMax
  cache[nums] = result
  return result
}

// console.log(lengthOfLIS([]) === 0)
// console.log(lengthOfLIS([1]) === 1)
// console.log(lengthOfLIS([10]) === 1)
// console.log(lengthOfLIS([10, 1]) === 1)
// console.log(lengthOfLIS([1, 10]) === 2)
// console.log(lengthOfLIS([1, 2, 3]) === 3)
// console.log(lengthOfLIS([3, 2, 1]) === 1)
// console.log(lengthOfLIS([3, 1, 2, 4]) === 3)
console.log(lengthOfLIS([4,10,4,3,8,9]))
