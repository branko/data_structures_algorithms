def sum_square_difference
  sum_squares, sum = 0, 0
  
  (1..100).each do |num|
    sum_squares += num * num
    sum += num
  end  

  (sum * sum) - sum_squares
end

p sum_square_difference