require 'prime'

def nth_prime(n)
  counter = 0
  primes = Prime.each

  while counter < n
    current = primes.next
    counter += 1
  end

  current
end

p nth_prime(10001)