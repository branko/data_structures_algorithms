// Given an input string, reverse the string word by word.

// Example:  

// Input: "the sky is blue",
// Output: "blue is sky the".
// Note:

// - A word is defined as a sequence of non-space characters.
// - Assume the input doesn’t contain leading or trailing spaces and the words 
// are always separated by a single space.
// temp = s
// ['y', 'k', 'e', ' ', 's', 'h', 's']

// the sky is blue
// eulb si yks the

// Reverse the string using start/end pointers
  // DEF REVERSE(ARR, 0, arr.length - 1)
    // while p < q
      // set temp = str[p]
      // set str[p] = str[q]
      // set str[q] = temp
      // increment p
      // decrement q

// (Reverse each word individually maintaining the spaces)
  // set S = 0
  // set E = S + 1

  // WHILE E < array.length
    // -> initialize a start S and end E pointer
      // -> If end pointer is a space, move on
    // Move the end pointer UNTIL it finds a space OR E > arr.length - 1
      // Reverse from index S to E - 1
        // reverse(arr, S, E-1)
      // Set start to E and E to E+1

// return the string

let str = 'a a b 123 \n';
let array = str.split('');

function reverse(arr, p, q) {
  while (p < q) {
    let temp = arr[p];
    arr[p] = arr[q];
    arr[q] = temp;
    p++;
    q--;
  }
  return arr
}

function reverseWords(arr) {
  let start = 0;
  let end = 1;

  reverse(arr, 0, arr.length - 1)

  while (end < arr.length) {
    while (end <= arr.length - 1 && arr[end] !== ' ') {
      end++;
    }

    reverse(arr, start, end - 1);
    start = end + 1;
    end = start + 1;
  }

  return arr.join('')
}

// console.log(reverse(array, 0, array.length - 1))
reverseWords(array)
console.log(array)





