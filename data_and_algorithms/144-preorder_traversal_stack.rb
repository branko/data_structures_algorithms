def preorder_traversal(root)
  result = []
  return result unless root
  stack = [root]

  until stack.empty?
    node = stack.pop
    result << node.val
    stack << node.right if node.right
    stack << node.left if node.left
  end

  result
end