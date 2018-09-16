def rob(houses)
  memo = {}

  return [rob_paths(houses, memo), rob_paths(houses[1..-1], memo)].max
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

p rob([4,1,2,7,5,3,1]) # 14