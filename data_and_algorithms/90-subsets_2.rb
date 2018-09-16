# def subsets_with_dup(nums)
#   subsets_with_dup_helper(nums.sort, [], [])
# end

# def subsets_with_dup_helper(nums, solution, results)
#   if !results.include?(solution)
#     results.push(solution)
#   end

#   nums.uniq.each_with_index do |num, i|
#     candidate_solution = solution + [num]
#     subsets_with_dup_helper(nums[i..-1], candidate_solution, results)
#   end

#   results
# end

def subsets_with_dup(nums)
  subsets_with_dup_helper(nums.sort, [], [])
end

def subsets_with_dup_helper(nums, solution, result)
  result << solution unless result.include?(solution)
  
  nums.each_with_index do |n, i|
    subsets_with_dup_helper(nums[i + 1..-1], solution + [n], result)
  end

  result
end


p subsets_with_dup([1, 1, 2, 2])












