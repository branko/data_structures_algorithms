// SET currentdepth to 1
// IF currentDepth === d - 1
  // TEMP.left = node.left
  // TEMP.right = node.right
  // CREATE node.left = new Node(v)
  // CREATE node.right = new Node(v)
  // node.left.left = TEMP.left
  // node.right.right = TEMP.right
// ELSE
  // addOneRow(root.left, v, d, currentDepth=currentDepth + 1)
  // addOneRow(root.right, v, d, currentDepth=currentDepth + 1)



function addOneRow(root, v, d, currentDepth = 1) {
  if (!root) { return }
  if (currentDepth === d - 1) {
    let temp = new TreeNode(v);
    temp.left = root.left;
    temp.right = root.right;
    root.left = new TreeNode(v);
    root.right = new TreeNode(v);
    root.left.left = temp.left;
    root.right.right = temp.right;
  } else {
    addOneRow(root.left, v, d, currentDepth + 1)
    addOneRow(root.right, v, d, currentDepth + 1)
  }

  return root
}