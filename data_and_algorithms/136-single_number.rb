def single_number(nums)
  result = 0

  nums.each do |num|
    result = num ^ result
  end

  result
end

p single_number([2, 2, 1])



