def is_valid_bst(root, memo = { last_value: -Float::INFINITY, is_bst: true })
  return true if root.left.nil? && root.right.nil?
  
  is_valid_bst(root.left) 

  # process root node
  if root.val > memo[:last_value]
    memo[:last_value] = root.val
    is_valid_bst(root.right) 
  else
    memo[:is_bst] = false
  end  

  return memo[:is_bst]
end