
// lower = 0
// upper = array.length - 1

// WHILE lower + 1 < upper
//   MID = lower + ((upper - lower) / 2).floor
//   LEFT = MID - 1
//   RIGHT = MID + 1

//   LEFTVAL = array[LEFT] || -Infinity
//.  RIGHTVAL = array[RIGHT] || -Infinitys

//   IF (array[MID] > LEFTVAL && array[MID] > RIGHTVAL)
//      FOUND A PEAK -> return MID

//.  IF LEFTVAL > array[MID]
//.    upper = MID
//.  ELSE IF RIGHTVAL > array[MID]
//.    lower = MID


// return array[lower] > array[upper] ? lower : upper

function findPeakElement(nums) {
  let lower = 0;
  let upper = nums.length - 1;

  while (lower + 1 < upper) {
    let mid = lower + Math.floor((upper - lower) / 2);
    let left = mid - 1;
    let right = mid + 1;

    let currentVal = nums[mid];
    let leftVal = nums[left] || -Infinity;
    let rightVal = nums[right] || -Infinity;

    if (currentVal > leftVal && currentVal > rightVal) {
      return mid
    }

    if (leftVal > currentVal) {
      upper = mid;
    } else {
      lower = mid;
    }
  }

  return nums[lower] > nums[upper] ? lower : upper;
}




