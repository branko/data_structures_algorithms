def permute(nums, solution=[], result=[])
  if solution.size == nums.size
    result << solution
  end

  nums.each do |num|
    if !solution.include?(num)
      permute(nums, solution + [num], result)
    else
      next
    end
  end

  result
end

p permute([1, 2, 3])