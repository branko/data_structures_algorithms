function coins(arr, start=0, end=arr.length - 1, sum=0, memo={}) {
  if (end - start === 1) {
    return sum + Math.max(arr[start], arr[end]);
  }

  let leftMax;
  let rightMax;
  let strIndex;

  // Take left coin
  if (arr[start + 1] > arr[end]) {


    leftMax = memo[[start + 2, end]] || coins(arr, start + 2, end, sum)
  } else {

    leftMax = memo[start + 1, end - 1] || coins(arr, start + 1, end - 1, sum)

  }

  // Take right coin
  if (arr[end - 1] > arr[start]) {


    rightMax = memo[start, end - 2] || coins(arr, start, end - 2, sum)

  } else {

    rightMax = memo[start + 1, end - 1] || coins(arr, start + 1, end - 1, sum)

  }

  let result = sum + Math.max(arr[start] + leftMax, arr[end] + rightMax)
  memo[[start, end]] = result

  return result
}

