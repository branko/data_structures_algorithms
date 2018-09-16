require 'prime'

def distinct_primes(n)
  start = 2

  until (start...start + n).map { |num| num.prime_division.length }.all? { |num| num == n }
    start += 1
  end

  return (start...start + n).to_a
end


p distinct_primes(4)
