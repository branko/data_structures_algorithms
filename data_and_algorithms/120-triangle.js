function minimumTotal(triangle, depth=0, i=0, cache={}) {
  if (depth === triangle.length - 1) { return triangle[depth][i] }

  let result = cache[[depth, i]] || triangle[depth][i] + Math.min(minimumTotal(triangle, depth + 1, i, cache),
                                                                  minimumTotal(triangle, depth + 1, i + 1, cache))
  cache[[depth, i]] = result

  return result
}

let tri = [
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]

console.log(minimumTotal(tri))