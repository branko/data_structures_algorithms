# Majority Element


def majority_element(nums)
  mask = 1
  result = 0

  (0..nums.max.bit_length).each do |i| # position in the binary representation
    counter = 0

    (0...nums.length).each do |j| # for each element in nums
      counter += 1 if (mask & nums[j]) > 0
    end

 
    result = result | mask if counter > nums.length / 2

    if i == nums.max.bit_length
      if counter > nums.length / 2
        result = result * -1
      end

    end

    mask <<= 1
  end
    
  result
end

p majority_element([-2147483648])