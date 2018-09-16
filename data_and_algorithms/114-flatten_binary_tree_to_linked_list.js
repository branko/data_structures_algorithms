
function flatten(root) {
  let result = flattenHelper(root, []); // [1, 2, 3...6]

  for (let i = 0; i < result.length - 1; i++) {
    result[i].left = null;
    result[i].right = result[i + 1];
  }
}

function flattenHelper(root, array) {
  if (root === null) { return array }

  array.push(root);
  flattenHelper(root.left, array)
  flattenHelper(root.right, array)

  return array;
}

