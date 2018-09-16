function isNumber(str) {
  const strNum = Number(str)
  return typeof strNum === 'number' && !isNaN(strNum)
}

var decodeString = function(s) {
  let stack = [];
  let openBrackets = 0;
  let output = '';
  let opened = false;
  let num = '';

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (char === '[') {
      stack.push(num);
      num = '';
      opened = true
      openBrackets++;
    } else if (char === ']') {
      openBrackets--;

      opened = false;

      // Process stack
      let temp = '';
      let started = true;

      while (started) {
        let stackChar = stack.pop();

        if (isNumber(stackChar)) {
          let tempStr = temp;
          temp = '';
          for (let i = 0; i < +stackChar; i++) {
            temp += tempStr;
          }
          started = false;
        } else {
          temp = stackChar + temp
        }

      }

      stack.push(temp)

    } else if (isNumber(char)) {
      num += char
    } else {
      stack.push(char)
    }


  }

  let temp = '';

  while (stack.length > 0) {
    temp = stack.pop() + temp
  }

  return output + temp;
};

console.log(decodeString('2[b4[F]c]'));



