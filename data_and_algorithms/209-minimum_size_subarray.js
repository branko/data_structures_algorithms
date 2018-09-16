// Use anchor/runner mental model to check subarrays which are >=s and find minimal length


// set anchor to 0, runner to 1
// set sum to arr[0] + arr[1]
// set minLength

// while runner < array.length AND anchor < runner
  // if sum >= target && runner - anchor > minLength
  //   minLength = runner - anchor
  
  // if sum < target
  //   runner++
  //   sum += arr[runner]
  // else if sum >= target
  //   anchor++
  //   sum -= arr[anchor]


function minSubArrayLen(target, nums) {
  // O(N) time, O(1) space
  let anchor = 0;
  let runner = 0;
  let sum = nums[anchor];
  let minLength = Infinity;

  while (runner < nums.length) {
    if (sum >= target && (runner - anchor + 1 < minLength)) {
      minLength = runner - anchor + 1;
    }

    if (sum < target) {
      runner++;
      if (runner === nums.length) { break }
      sum += nums[runner];
    } else if (sum >= target) {
      sum -= nums[anchor];
      anchor++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen(11, [1,2,3,4,5]))