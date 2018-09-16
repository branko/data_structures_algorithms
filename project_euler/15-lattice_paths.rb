def display_matrix(matrix)
  matrix.each do |row|
    p row
  end
end

def lattice_paths(max)
  matrix = []
  (1..max + 1).each do |i|
    matrix.push Array.new(max + 1)
  end
  matrix[0][0] = 0
  matrix[0].map! { |el| 1}
  matrix[1][0] = 1

  matrix.each_with_index do |row, i|
    row.each_with_index do |el, j|
      if j == 0
        matrix[i][j] = 1
        next
      end

      unless el
        matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1]
      end
      
    end
  end

  # display_matrix(matrix)
  return matrix
end

p lattice_paths(20)

0 1 1 1
1 2 3 4
1 3 6 10
1 4 10 20