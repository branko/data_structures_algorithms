// By considering the terms in the Fibonacci sequence whose values do 
// not exceed four million, find the sum of the even-valued terms.

function sumEvenFib(n) {
  let sum = 2;
  i = 1;
  j = 2;

  while (j < n) {

    let next = i + j;
    i = j;
    j = next;

    if (j % 2 === 0) { sum += j }

  }

  return sum;
}


console.log(sumEvenFib(4000000)) // 4613732