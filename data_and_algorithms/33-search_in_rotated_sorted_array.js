// Search in Rotated Sorted Array

// (not-very) Pseudo-code

// lower = 0
// upper = nums.length - 1

// while lower + 1 < upper
//   mid = lower + floor((upper - lower) / 2)

//   upperVal = nums[upper]
//   lowerVal = nums[lower]
//   val = nums[mid]

//   if (val === target) {
//     return mid
//   }

//   if (not rotated) {
//     if (target > val) {
//       lower = mid
//     } else {
//       upper = mid
//     }
//   } else if (rotated right) {
//     if (target > val || target < upperVal) {
//       lower = mid
//     } else {
//       upper = mid
//     }
//   } else if (rotated left) {
//     if (target < val || target > lowerVal) {
//       upper = mid
//     } else {
//       lower = mid
//     }
//   }

// return nums[lower] === target ? lower : upper;


function search(nums, target) {
  let lower = 0;
  let upper = nums.length - 1

  while (lower + 1 < upper) {
    mid = lower + Math.floor((upper - lower) / 2)
  
    let upperVal = nums[upper];
    let lowerVal = nums[lower];
    let val = nums[mid];

    if (val === target) {
      return mid;
    }

    // Not rotated
    if (lowerVal < upperVal) { 
      if (target > val) {
        lower = mid
      } else {
        upper = mid
      }
    // Right side is rotated
    } else if (upperVal < val) { 
      if (target > val || target <= upperVal) {
        lower = mid
      } else {
        upper = mid
      }
    // Left side is rotated
    } else if (lowerVal > val) { 
      if (target < val || target >= lowerVal) {
        upper = mid
      } else {
        lower = mid
      }
    }

  }

  if (nums[lower] !== target && nums[upper] !== target) {
    return -1;
  }

  return nums[lower] === target ? lower : upper;
}

