function countSubstrings(str) {
  memo = {}
  count =num {: 0}

  countSubstringsHelper(str, 0, str.length - 1, memo, count)
  return count['num']
}

function countSubstringsHelper(str, i=0, j=str.length-1, memo={}, count={ num: 0 }) {
  if (j < i) { return false }

  if (memo[[i, j]] === undefined && i === j) {
    // Where I === J, it's true

    memo[[i, j]] = true
    count['num']++
    return true
  }

  if (memo[[i, j]] === undefined) {
    memo[[i + 1, j - 1]] || countSubstringsHelper(str, i + 1, j - 1, memo, count)

    if (str[i] === str[j] && (j - 1 < i + 1 || memo[[i + 1, j - 1]])) {
      // IF the first and last characters are the same
      // and the inner string is a palindrome
      count['num']++;
      memo[[i, j]] = true
    } else {
      // set the memo to false
      memo[[i, j]] = false
    }
  }

  memo[[i, j - 1]] !== undefined || countSubstringsHelper(str, i, j - 1, memo, count)
  memo[[i + 1, j]] !== undefined || countSubstringsHelper(str, i + 1, j, memo, count)

}

countSubstrings('aaaaa')