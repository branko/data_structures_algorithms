    #      1         => tilts: [8, 4, 5, 0, 0, 1, 0, 0] => 18
    #    /   \
    #   2        
    #  / \   
    # 3   4  
#.  /  \
#  2.   1

class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val)
        @val = val
        @left, @right = nil, nil
    end
end

def find_tilt(root, tilts=[], cache={})
  return 0 unless root

  left_sum = cache[root.left] || sum_of_tree(root.left)
  right_sum = cache[root.right] || sum_of_tree(root.right)

  cache[root.left] = left_sum
  cache[root.right] = right_sum

  tilt = (left_sum - right_sum).abs
  tilts << tilt

  find_tilt(root.left, tilts, cache)
  find_tilt(root.right, tilts, cache)

  return tilts.sum
end

def sum_of_tree(root, sum = 0)
  return 0 unless root

  sum += sum_of_tree(root.left)
  sum += sum_of_tree(root.right)
  sum += root.val

  return sum
end

node1 = TreeNode.new(1)
node2 = TreeNode.new(2)
node3 = TreeNode.new(3)
node4 = TreeNode.new(4)
node5 = TreeNode.new(5)

node1.left = node2
node1.right = node3
node2.left = node4
node3.left = node5

p sum_of_tree(node1)








