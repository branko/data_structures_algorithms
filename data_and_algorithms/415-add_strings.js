var addStrings = function(num1, num2) {
  let index1 = num1.length - 1;
  let index2 = num2.length - 1;
    
  let output = '';
  let carry = 0;
    
  while (index1 >= 0 || index2 >= 0) {
    let num = 0;

    if (index1 >= 0) num += +num1[index1];
    if (index2 >= 0) num += +num2[index2];

    num += carry;

    if (num > 9) {
      carry = Math.floor(num / 10)
      num = num % 10
    } else {
      carry = 0;
    }

    output = String(num) + output

    index1--;
    index2--;
  }
  
  if (carry > 0) output = String(carry) + output

  return output
};

let num1 = "18582506933032752"
let num2 = "366213329703"

console.log(addStrings(num1, num2))