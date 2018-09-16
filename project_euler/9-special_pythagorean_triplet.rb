# def pythagorean_triplet

# end

# 1 2 997

# 1 499 500

# a: 1->332
# b: 2->499
# c: 333->999

(1..332).each do |i|
  (2..499).each do |j|
    (333..999).each do |k|
      p [i, j, k] if i + j + k == 1000 && i ** 2 + j ** 2 === k ** 2
    end
  end
end