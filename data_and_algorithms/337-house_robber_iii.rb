def rob(root)
  return 0 unless root
  return root.val if !root.left && !root.right

  left = rob(root.left)
  right = rob(root.right)

  return [root.val, left + right].max
end