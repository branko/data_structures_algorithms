def num_squares(n, min=Float::INFINITY, cache={})
  return 0 if n == 0
  return 1 if Math.sqrt(n) % 1 == 0

  Math.sqrt(n).floor.downto(1) do |i|
    square = i ** 2
    num = cache[n - square] || num_squares(n - square, min, cache)
    min = [min, num].min
  end

  return cache[n] = min + 1
end

p num_squares(13) == 2
p num_squares(16) == 1
p num_squares(12) == 3
p num_squares(32) == 2
p num_squares(33) == 3
p num_squares(34) == 2

p num_squares(7168) == 4
