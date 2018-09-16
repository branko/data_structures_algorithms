function maxArea(heights) {
  let start = 0;
  let end = heights.length - 1;
  let max = -Infinity;

  while (start < end) {

    let startValue = heights[start];
    let endValue = heights[end];

    max = Math.max(max, Math.min(startValue, endValue) * (end - start));

    if (startValue === endValue) {
      let innerStart = heights[start + 1];
      let innerEnd = heights[end - 1];

      innerStart >= innerEnd ? start++ : end++;

    } else if (startValue > endValue) {
      end--;
    } else if (startValue < endValue) {
      start++
    }
  }

  return max
}

console.log(maxArea([100,100,300]))