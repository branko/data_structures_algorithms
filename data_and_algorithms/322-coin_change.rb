def coin_change(coins, amount)
  result = coin_change_helper(coins, amount)
  result == Infinity ? -1 : result
end

def coin_change_helper(coins, amount, cache={})
  return 0 if amount == 0
  return Float::INFINITY if coins.size == 0 || amount < 0 

  min = Float::INFINITY

  coins.each do |coin|
    val = cache[amount - coin] || coin_change_helper(coins, amount - coin, cache)
    cache[amount - coin] = val

    min = [min, val].min
  end

  min + 1
end

p coinChange([1, 2, 5], 11)