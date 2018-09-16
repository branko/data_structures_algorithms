def is_symmetric(root)
  current_tier = [root]
  next_tier_queue = []

  while current_tier.length > 0
    values = current_tier.map { |node| node ? node.val : nil }
    return false if values != values.reverse

    current_tier.each do |node|
      next unless node
      next_tier_queue << node.left
      next_tier_queue << node.right
    end

    current_tier = next_tier_queue
    next_tier_queue = []
  end

  return true
end