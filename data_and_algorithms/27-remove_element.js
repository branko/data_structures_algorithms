// FOR i in array
//   if array[i] === val
//     array.splice(i, 1)
//   else
//     i++

function removeElement(nums, val) {
  for (let i = 0; i < nums.length;) {
    nums[i] === val ? nums.splice(i, 1) : i++;
  }

  return nums.length;
}

function removeElement(nums, val) {
  // Using start/end pointers going towards the middle
  // O(N^2) time and O(1) space

  let start = 0;
  let end = nums.length;

  while (start < end) {
    while (nums[start] !== val && start < end) {
      start++;
    }
    while (nums[start] === val && start < end) {
      nums.splice(start, 1);
      end--;
    }
    while (nums[end] !== val && start < end) {
      end--;
    }
    while (nums[end] === val && start < end) {
      nums.splice(end, 1);
      end--;
    }
  }

  return nums.length;
}

function removeElement(nums, val) {
  // O(N log N) time, O(1) space
  // Using "double runner"
  
  let anchor = 0;
  let count = 0;

  nums.sort((a, b) => a - b);

  while (nums[anchor] !== val && anchor < nums.length - 1) {
    anchor++;
  }

  while (nums[anchor + count] === val) {
    count++;
  }

  nums.splice(anchor, count);
  return nums.length;
}

let array = [3,3,3,3,3,3,3,3,3]
console.log(removeElement(array, 3))
console.log(array)

//  _ 1 2 4 s _ _ _ e  5 _  2

// WHILE s < e
//   WHILE arr[s] !== val
//     s++
//   WHILE arr[s] === val
//     splice(s, 1)
//   WHILE arr[e] !== val
//     e--
//   WHILE arr[e] === val
//     splice(e, 1)
