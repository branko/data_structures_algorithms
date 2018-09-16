def combine(n, k, current = 1, solution=[], results=[])
  if solution.size == k && !results.include?(solution)
    results.push solution
  end

  current.upto(n) do |num|
    next if solution.include? num

    combine(n, k, num + 1, solution + [num], results)
  end

  results
end

p combine(20, 16)