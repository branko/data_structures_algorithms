// Group naive solution

var spiralOrder = function(matrix) {
  if (matrix.length === 0) return [];

  const result = [];
  const elementCount = matrix.length * matrix[0].length;

  let top = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let left = 0;

  while (result.length < elementCount) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }

    top++;
    if (result.length === elementCount) return result;

    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }

    right--;
    if (result.length === elementCount) return result;

    for (let i = right; i >= left; i--) {
      result.push(matrix[bottom][i]);
    }

    bottom--;
    if (result.length === elementCount) return result;

    for (let i = bottom; i >= top; i--) {
      result.push(matrix[i][left]);
    }

    left++;
  }

  return result;
};

// Transposition solution

function spiralOrder(matrix) {
  if (matrix.length === 0) { return [] };

  let output = [];

  while (matrix.length > 0) {
    output = output.concat(matrix.shift());
    if (matrix.length === 0) { return output }
    matrix = transpose(matrix).reverse()
  }

}

function transpose(matrix) {
  let transposed = [];

  while (transposed.length < matrix[0].length) {
    transposed.push([])
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      transposed[j][i] = matrix[i][j]
    }
  }

  return transposed;
}

console.log(spiralOrder(matrix))

