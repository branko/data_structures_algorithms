def combination_sum2(candidates, target)
  results = []
  helper(candidates.sort, target, [], results)

  results
end

def helper(candidates, target, solution, results)
  results << solution if solution.sum == target && !results.include?(solution)

  candidates.each_with_index do |candidate, i|
    candidate_solution = solution + [candidate]

    next if candidate_solution.sum > target
    helper(candidates[i + 1..-1], target, candidate_solution, results)
  end
end

# p combination_sum2([1,5,7], 12)

