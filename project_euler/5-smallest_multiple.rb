def smallest_multiple
  counter = 0

  until divisible_by_upto_20? counter
    counter += 20
  end

  counter

end

def divisible_by_upto_20?(n)
  divisible = true
  (1..20).each do |div|
    divisible = false if n % div != 0
  end
  divisible
end

p smallest_multiple
# prime factors: 2 2 2 3 3 5 7 11 13 17 19 = 232792560