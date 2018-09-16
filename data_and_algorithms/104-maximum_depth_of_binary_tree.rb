  #   3
  #  / \
  # 9  20
  #   /  \
  #  15   7

class TreeNode
  attr_accessor :val, :left, :right
  def initialize(val)
    @val = val
    @left, @right = nil, nil
  end
end

def max_depth(root)
  return 0 unless root

  left = max_depth(root.left)
  right = max_depth(root.right)

  return 1 + [left, right].max
end

def is_balanced(root)
  return true if !root

  left = max_depth(root.left)
  right = max_depth(root.right)

  return (left - right).abs < 2 && is_balanced(root.left) && is_balanced(root.right)
end

def is_balanced(root, cache={})
  return true if !root

  left = cache[root.left] || max_depth(root.left)
  right = cache[root.right] || max_depth(root.right)

  cache[root.left] = left
  cache[root.right] = right

  return (left - right).abs < 2 && is_balanced(root.left, cache) && is_balanced(root.right, cache)
end









