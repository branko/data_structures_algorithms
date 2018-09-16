function sum_of_multiples(n) {
  let counter = 1;
  let sum = 0;

  while (counter < n) {
    if (counter % 3 === 0 || counter % 5 === 0) {
      sum += counter
    }
    counter++
  }

  return sum
}