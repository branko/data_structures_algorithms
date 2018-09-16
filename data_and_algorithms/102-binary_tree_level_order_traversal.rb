
def level_order(root)
  return [] unless root

  output = []
  current = [root]
  queue = []

  while current.length > 0
    current.each do |node|
      queue << node.left if node.left
      queue << node.right if node.right
    end

    output.push(current.map { |node| node.val })
    current = queue
    queue = []
  end

  return output
end

def average_of_levels(root)
  levels = level_order(root)

  levels.map do |level|
    level.sum / level.length.to_f
  end
end