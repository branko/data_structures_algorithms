

// Write string into stack character by character, starting from the end
// Initialize an empty output string

// while stack is not empty
//    pop char off stack
//.      if char is "."
//          reset output string to "/"
//.      elsif char is / AND stack is empty
//          return output
//       elsif char is / AND output[output.length - 1] is a slash
//          continue
//
// if output.length === 0, return "/"
// else return output

function simplifyPath(path) {
  let output = '/';
  let stack = [];

  for (let i = path.length - 1; i >= 0; i--) {
    stack.push(path[i]);
  }

  while (stack.length > 0) {
    let char = stack.pop();


    if (char === '.' && stack[stack.length - 1] !== '.' && stack.length > 0) {
      output = '/'
    } else if (char === '/' && stack[stack.length - 1] === '/') {
      continue
    } else if (char === '/' && stack.length === 0) {

      return output
    } else if (char === '/' && output[output.length - 1] === '/') {
      continue
    } else {
      output += char;
    }
  }

  return output
}

console.log(simplifyPath(".../..."))







