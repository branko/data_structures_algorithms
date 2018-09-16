// Store starting pixel colour
// Change starting pixel
// recursively call (x - 1, y) if image[x-1][y] === startingColor && x - 1 >= 0
// recursively call (x, y - 1) if image[x][y-1] === startingColor && y - 1 >= 0
// recursively call (x + 1, y) if image[x+1][y] === startingColor && x + 1 < image.length
// recursively call (x, y + 1) if image[x][y+1] === startingColor && y + 1 < image[0].length
//
// return image

var floodFill = function(image, sr, sc, newColor) {
  const startColor = image[sr][sc];

  if (startColor === newColor) return image;

  image[sr][sc] = newColor;

  if (sr - 1 >= 0 && image[sr - 1][sc] === startColor) floodFill(image, sr - 1, sc, newColor);
  if (sc - 1 >= 0 && image[sr][sc - 1] === startColor) floodFill(image, sr, sc - 1, newColor);
  if (sr + 1 < image.length && image[sr + 1][sc] === startColor) floodFill(image, sr + 1, sc, newColor);
  if (sc + 1 < image[0].length && image[sr][sc + 1] === startColor) floodFill(image, sr, sc + 1, newColor);

  return image
};

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2))
