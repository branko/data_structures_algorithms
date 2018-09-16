def permute_unique(nums, solution=[], result=[])
  if solution.size == nums.size && !result.include?(solution)
    result << solution
  end

  nums.uniq.each do |num|
    candidate_solution = solution + [num]

    if candidate_solution.count(num) <= nums.count(num)
      permute_unique(nums, candidate_solution, result)
    end
  end

  result
end

# p permute_unique([1, 1, 2])
p permute_unique([-1,2,-1,2,1,-1,2,1])