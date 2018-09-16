def is_same_tree(p, q)
  return p == q if p.nil? || q.nil?

  return p.val == q.val &&
          is_same_tree(p.left, q.left) &&
          is_same_tree(p.right, q.right)
end

# In JavaScript

# function sameTree(tree1, tree2) {
#   if (tree1 === null || tree2 === null) { return tree1 === tree2 }

#   return tree1.val === tree2.val &&
#   sameTree(tree1.left, tree2.left) &&
#   sameTree(tree1.right, tree2.right)
# }