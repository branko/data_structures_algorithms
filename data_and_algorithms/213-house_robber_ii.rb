def rob(houses)
  memo = {}
  memo2 = {}
  memo3 = {}
  return 0 if houses.length == 0
  return houses.max if houses.length <= 2
  return [rob_paths(houses[0..-2], memo), rob_paths(houses[1..-1], memo2), rob_paths(houses[2..-1], memo3)].max
end

def rob_paths(houses, memo)
  return 0 unless houses
  return 0 if houses.length == 0

  if houses.length <= 2
    memo[houses] = houses.max
    return houses.max 
  end

  jump2 = memo[houses[2..-1]] || rob_paths(houses[2..-1], memo)
  jump3 = memo[houses[3..-1]] || rob_paths(houses[3..-1], memo)

  memo[houses] = houses[0] + [jump2, jump3].max

  return memo[houses]
end

p rob([1, 2, 3, 4, 5, 1, 2, 3, 4, 5])