def subsets(nums, solution=[], results=[])
  results << solution unless results.include?(solution)
  
  nums.each_with_index do |n, i|
    unless solution.include?(n)
      subsets(nums[i..-1], n, solution + [n], results)
    end
  end

  results
end

p subsets([1,2,3])