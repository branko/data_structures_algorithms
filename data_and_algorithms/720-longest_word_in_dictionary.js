/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  const dict = {};
  let longest = '';

  words.forEach(w => dict[w] = true);

  words.forEach(w => {
    if (verifyWord(w, dict)) {
      if (w.length > longest.length || w.length === longest.length &&  w < longest) {
        longest = w;
      }
    }
  })

  return longest
};

function verifyWord(word, dict) {
  for (let i = 1; i <= word.length; i++) {
    if (!dict[word.substr(0, i)]) return false
  }

  return true
}

const words = ["m","mo","moc","moch","mocha","l","la","lat","latt","latte","c","ca","cat"]

console.log(longestWord(words))
