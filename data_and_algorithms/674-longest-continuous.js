var findLengthOfLCIS = function(nums) {
    if (nums.length === 0) { return 0 }

    let longestSequence = 0;
    let currentSequence = 0;

    let last;

    for (let i = 0; i < nums.length; i++) {
      currentSequence++;

      let current = nums[i];

      if (last === undefined || last >= current) { currentSequence = 1 };

      longestSequence = Math.max(longestSequence, currentSequence);

      last = current;

    }

    return longestSequence
};

var findLengthOfLCIS = function(nums) {
    if (nums.length === 0) { return 0 }

    let longestSequence = 1;
    let currentSequence = 1;

    let last = nums[0];

    for (let i = 1; i < nums.length; i++) {
      let current = nums[i];

      last < current ? currentSequence++ : currentSequence = 1;
      longestSequence = Math.max(longestSequence, currentSequence)

      last = current;
    }

    return longestSequence
};

console.log(findLengthOfLCIS([]) === 0)
console.log(findLengthOfLCIS([1])=== 1)
console.log(findLengthOfLCIS([3,1])=== 1)
console.log(findLengthOfLCIS([2, 2, 2, 2, 2]) === 1)
console.log("RESULT: ", findLengthOfLCIS([1,0,0,8,6]) === 2)
console.log(findLengthOfLCIS([1,3,5,4,7]) === 3)