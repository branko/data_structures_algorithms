def combination_sum(candidates, target, solution=[], results=[])
  results.push solution if solution.sum == target

  candidates.each_with_index do |candidate, i|
    candidate_solution = solution + [candidate]

    if candidate_solution.sum <= target
      combination_sum(candidates[i..-1], target, candidate_solution, results)
    end
  end

  results
end