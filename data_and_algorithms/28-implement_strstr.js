
// input: two strings, haystack and needle
// output: integer representing index of needle in haystack

// Return -1 if needle not in haystack
// Return 0 if needle is an empty string


// Data structure: String

// Algorithm

// Get length of needle

// IF length of needle is 0
  // Return false

// IF 

// Iterate i from 0 -> (haystack.length - needle.length)
// compare haystack sliced from i to i + needle.length
// IF slice is equal to needle, return true

// After iteration, return -1


var strStr = function(haystack, needle) {
  if (needle === '') return 0;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) {
      return i;
    }
  }

  return -1;
};


console.log(strStr('', '') === 0);
console.log(strStr('hello', 'll') === 2);
console.log(strStr('aaaaa', 'bba') === -1);
console.log(strStr('aaaa', 'a') === 0);
console.log(strStr('baaaa', 'a') === 1);
console.log(strStr('0123', '2') === 2);
console.log(strStr('abcdefgh', 'gh') === 6);
console.log(strStr('', '') === 0);
