unction validParentheses(string) {
  if (string.length === 0) { return true }
  let stack = [];
  let open = {
    '}': '{',
    ')': '(',
    ']': '[',
  };

  for (let i = 0; i < string.length; i++) {
    if (open[string[i]]) {
      let comparedVal = stack.pop();
      if (open[string[i]] !== comparedVal) { return false }
    } else {
      stack.push(string[i]);
    }
  }

  return stack.length === 0;
}