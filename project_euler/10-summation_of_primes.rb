require 'prime'
sum = 0
Prime.each(2000000) do |pr|
  sum += pr
end
p sum