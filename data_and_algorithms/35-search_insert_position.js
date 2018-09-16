// pseudo code

//LOWER = 0
//UPPER = array.length - 1
//WHILE LOWER + 1 < UPPER
//MID = LOWER + ((UPPER - LOWER) / 2)
//  VALUE = array[MID]
//  IF VALUE == TARGET
//    RETURN MID
//  ELSE IF VALUE > TARGET
//    UPPER = MID
//  ELSE IF VALUE < TARGET
//    LOWER = MID
//IF array[LOWER] == TARGET
//  RETURN LOWER
//ELSE IF array[UPPER] === TARGET
//  RETURN UPPER
//ELSE IF array[LOWER] > TARGET
// RETURN LOWER
//ELSE IF array[UPPER] < TARGET
//  RETURN UPPER + 1
//

function searchInsert(nums, target) {
  let lower = 0;
  let upper = nums.length -1;
  let mid;

  while (lower + 1 < upper) {
    mid = lower + Math.floor((upper - lower) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      upper = mid;
    } else if (nums[mid] < target) {
      lower = mid;
    }
  }

  if (nums[lower] === target || nums[lower] > target) {
    return lower;
  } else if (nums[upper] === target) {
    return upper;
  } else if (nums[upper] < target) {
    return upper + 1;
  } else if (nums[lower] < target) {
    return lower + 1;
  }
}

console.log(searchInsert([1, 3, 5, 6], 2))