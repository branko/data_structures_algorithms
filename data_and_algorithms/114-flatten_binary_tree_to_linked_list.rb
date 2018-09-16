def get_right_most_node(root)
  current = root

  while current.right
    current = current.right
  end

  return current
end

def combine(root, head1, head2)
  root.left = nil
  
  root.right = head1 || head2
  get_right_most_node(head1).right = head2 if head1
end

def flatten(root)
  return unless root

  left = root.left
  right = root.right
  left_result = flatten(left)
  right_result = flatten(right)

  combine(root, left, right)
end



class TreeNode
  attr_accessor :val, :left, :right

  def initialize(val)
    @val = val
    @left = nil
    @right = nil
  end

  def traverse
    current = self

    while current
      p current.val
      current = current.right
    end
  end
end

node1 = TreeNode.new(1)
node2 = TreeNode.new(2)
node3 = TreeNode.new(3)
node4 = TreeNode.new(4)
node5 = TreeNode.new(5)
node6 = TreeNode.new(6)
node7 = TreeNode.new(7)

node1.left = node3
node1.right = node6
node3.left = node2
node3.right = node4
node6.left = node5
node6.right = node7

flatten(node1)


node1.traverse







