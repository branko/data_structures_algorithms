function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = Math.ceil((start + end) / 2);

    if (arr[mid] === target) {
      return true
    } else if (arr[mid] < target) {
      start = mid + 1
    } else if (arr[mid] > target) {
      end = mid - 1
    }
  }

  return arr[start] === target
}

var searchMatrix = function(matrix, target) {
  const cols = matrix.length;
  const rows = matrix[0].length;

  let start = 0;
  let end = cols - 1;

  while (start < end) {
    let mid = Math.ceil((start + end) / 2);
    let currentArray = matrix[mid];

    if (currentArray[0] <= target && currentArray[rows - 1] >= target) {
      return binarySearch(currentArray, target)
    } else if (currentArray[0] > target) {
      end = mid - 1;
    } else if (currentArray[0] < target) {
      start = mid + 1;
    }
  }

  return binarySearch(matrix[start], target)
};

matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]]

target = 13

console.log(searchMatrix(matrix, target))