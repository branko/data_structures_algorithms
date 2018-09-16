######## Didn't get this working; everything I try is way too inefficient

require 'prime'
require 'pry'


def num_divisors(num)
  prime_factors = num.prime_division.transpose[0]
  return 0 if prime_factors.nil?

  divisors = [1, num]

  prime_factors.each do |pr|

    temp = num.to_f
    pushable = false

    while temp % 1 == 0

      temp = temp / pr

      if temp % 1 == 0
        divisors << temp.to_i
        pushable = true
      end
    end
    divisors.push pr if pushable
  end

  divisors.count
end


def visible_triangular_number
  n = 1
  sum = 1
  largest = 0

  loop do

    sum = (n * (n + 1)) / 2
    divisors = num_divisors(sum)
    largest = divisors if divisors > largest
    p largest

    return sum if divisors > 40
    n += 1
  end

  sum
end

p visible_triangular_number










