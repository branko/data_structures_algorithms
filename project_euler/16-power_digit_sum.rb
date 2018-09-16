def power_digit_sum(n)
  digits = n.to_s.chars.map(&:to_i)

  return digits.reduce(:+)
end

p power_digit_sum(2**1000)
