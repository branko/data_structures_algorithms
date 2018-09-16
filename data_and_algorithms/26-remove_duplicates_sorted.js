// initialize i, j to 0, 1
// while i < array.length - 1
  // if arr[i] === arr[j]
  //   splice(j, 1)
  // else
  //   increment i, j

var removeDuplicates = function(nums) {
  // Using sliding window with k=2
  // O(N) time O(1) space
  
  let start = 0;
  let end = 1;

  while (end < nums.length) {
    if (nums[start] === nums[end]) {
      nums.splice(end, 1);
    } else {
      start++;
      end++;
    }
  }

  return nums.length;
};