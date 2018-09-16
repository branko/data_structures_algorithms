function addBinary(a, b) {
  let output = '';
  let carry = '';
  const length = Math.max(a.length, b.length);

  while (a.length < length) a = '0' + a;
  while (b.length < length) b = '0' + b;

  console.log(a, b);

  for (let i = length - 1; i >= 0; i--) {
    if (a[i] === '1'  && b[i] === '1') {
      if (carry === '1') {
        output  = '1' + output;
      } else {
        output = '0' + output;
      }

      carry = '1';

    } else if (a[i] === '1' || b[i] === '1') {
      if (carry === '1') output = '0' + output;
      else {
        output = '1' + output;
        carry = '0'
      }
    } else {
      if (carry === '1') {
        output = '1' + output
        carry = '0';
      } else {
        output = '0' + output;
      }
    }
  }
  return carry === '1' ? carry + output : output;
}

console.log(addBinary('1', '111'));