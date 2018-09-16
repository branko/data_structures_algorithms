function canJump(nums) {
  // Anchor - Runner

  let anchor = nums.length - 1;
  let runner = anchor - 1;

  while (runner >= 0) {
    if (runner + nums[runner] >= anchor) {
      anchor = runner;
      runner--;
    } else {
      runner--
    }
  }

  return anchor === 0;
}

function canJump(nums, current=0, memo={}) {
  // This function return true if the current index can reach the end or
  // if an index within the current value's range can reach the end

  if (current >= nums.length - 1) { return true } // Made it to the end
    
  // d stands for distance jumped
  for (let d = nums[current]; d >= 1; d--) {
    let seenBefore = memo[current + d] !== undefined;

    let result = seenBefore ? memo[current + d] : canJump(nums, current + d, memo);

    memo[current + d] = memo[current + d] || result;
    if (memo[current + d]) { return true }
  }

  return false;
}
     
function canJump(nums) {
  // Iterative bottom-up solution

  let cache = []

  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = 1; j <= nums[i]; j++) {
      if (cache[i + j]) {
        cache[i] = true
        break
      }
    }

    if (i + nums[i] >= nums.length - 1 || cache[i]) {
      cache[i] = true;
    } else {
      cache[i] = false
    }
  }

  return cache[0]
}

























