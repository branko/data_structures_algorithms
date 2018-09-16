function searchRange(nums, target) {
  // O(N) time because each num in nums considered once as midpoint
  // O(logN) because depth of tree is logN, each node uses O(1) space

  if (nums.length === 0) { return [-1, -1] }
  return [neighbour(nums, target, 'left'), neighbour(nums, target, 'right')];
}

function neighbour(nums, target, direction, start = 0, end = nums.length - 1) {
  let neighbourValue = direction === 'left' ? nums[start - 1] : nums[start + 1];

  if (start === end && nums[start] === target && neighbourValue !== target) {
    return start;
  } else if (start >= end) {
    return -1;
  }

  let mid = start + Math.floor((end - start) / 2)

  return Math.max(neighbour(nums, target, direction, start, mid),
                  neighbour(nums, target, direction, mid + 1, end))
}

let arr = [5,6,7,8]
let target = 8

console.log(searchRange(arr, target)) // [4, 4]


