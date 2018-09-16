def palindrome?(num)

  num.to_s == num.to_s.reverse

end

def largest_palindrome
  largest = 0

  (100..999).each do |i|
    (i + 1..999).each do |j|
      num = i * j
      largest = num if num > largest && palindrome?(num)
    end
  end

  largest
end

p largest_palindrome