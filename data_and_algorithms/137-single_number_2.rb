def single_number_ii(nums)
  mask = 1
  result = 0

  (0...nums.max.bit_length).each do |i|
    counter = 0

    (0...nums.length).each do |j|
      counter += 1 if (mask & nums[j]) > 0
    end
    
    if counter % 3 != 0
      result |= mask
    end
    
    mask = mask << 1
  end

  result
end

# This is still broken for negative numbers
p single_number_ii([2, 2, 2, 1]) # 1