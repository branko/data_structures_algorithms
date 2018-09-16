function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);

  console.log(arr.slice(0, mid))
  console.log(arr.slice(mid, arr.length))

  return merge(
      mergeSort(arr.slice(0, mid)),
      mergeSort(arr.slice(mid, arr.length))
    )
}

function merge(arr1, arr2) {
  const output = [];
  let i = 0;
  let j = 0;

  while (output.length < arr1.length + arr2.length) {
    if (!arr1[i]) return output.concat(arr2)
    if (!arr2[j]) return output.concat(arr1)

    if (arr1[i] < arr2[j]) {
      output.push(arr1[i])
      i++;

    } else {
      output.push(arr2[j])
      j++;

    }
  }

  return output
}

console.log(mergeSort([7, 4, 1]))