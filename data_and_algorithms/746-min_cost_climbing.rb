def min_cost_climbing_stairs(cost)
  memo = {}
  return [min_cost_climbing_stairs_helper(cost, 0, memo), min_cost_climbing_stairs_helper(cost, 1, memo)].min
end

def min_cost_climbing_stairs_helper(cost, i, memo)
  return 0 if i >= cost.length

  jump1 = memo[i + 1].nil? ? min_cost_climbing_stairs_helper(cost, i + 1, memo) : memo[i + 1]
  jump2 = memo[i + 2].nil? ? min_cost_climbing_stairs_helper(cost, i + 2, memo) : memo[i + 2]

  result = cost[i] + [jump1, jump2].min
  memo[i] = result
  return result
end