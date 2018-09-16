def tree2str(t, str='')
  return str unless t
  str << t.val.to_s

  if t.left || t.right
    str << '('
    tree2str(t.left, str)
    str << ')'
  end

  if t.right
    str << '('
    tree2str(t.right, str)
    str << ')'
  end

  str
end

class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val)
        @val = val
        @left, @right = nil, nil
    end
end

node1 = TreeNode.new(1)
node2 = TreeNode.new(2)
node3 = TreeNode.new(3)
node4 = TreeNode.new(4)

node1.left = node2
node1.right = node3
node2.right = node4

p tree2str(node1)