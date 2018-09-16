

def find_the_difference(s, t)

  # Convert all characters to base 36
  s_nums = s.split('').map { |char| char.to_i(36) }
  t_nums = t.split('').map { |char| char.to_i(36) }

  mask = 1
  result = 0

  (0...6).each do |i| 
    # High level: Iterate over each bit column and sum up total '1's for each
    # string
      # Note: 0...6 beacuse 6 is the amount of bits needed to represent 35, which is z in base 36

    # Initialize counter for each string
    counter_s = 0
    counter_t = 0


    # Get count for s in the ith column
    (0...s_nums.length).each do |j|
      counter_s += 1 if (mask & s_nums[j]) > 0
    end

    # Get count for t in the ith column
    (0...t_nums.length).each do |j|
      counter_t += 1 if (mask & t_nums[j]) > 0
    end

    # Add to result if more 1s in ith column of t than s
    if counter_t > counter_s
      result = result | mask
    end

    # Shift mask
    mask = mask << 1
  end

  result.to_s(36)
end 

def find_the_difference(s, t)
  result = 0

  (s + t).each_char do |char|
    ascii = char.ord
    result = result ^ ascii
  end

  result.chr
end

p find_the_difference('abcd', 'abczd')



# 1 2
# ---

# 01
# 10

# 11


# 1 2 3
# ----
# 01
# 10
# 11

# 22


# 11