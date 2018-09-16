def sum_numbers(root, numbers = '')
  return 0 unless root
  return (numbers + root.val.to_s).to_i if root.left.nil? && root.right.nil?
  
  numbers += root.val.to_s

  return sum_numbers(root.left, numbers) + sum_numbers(root.right, numbers)
end

