// initialize start, end pointers at 0 and length of string - 1
// while start < end
//   swap elements at those indexes
//   increment start pointer
//   decrement end pointer

function reverseString(str) {
  let tempStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    tempStr += str[i];
  }

  return tempStr;
}

function reverseString(str) {
  // Start + End pointers converge to the middle
  // O(N) time O(N) space
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    let tempStart = str[start];
    let tempEnd = str[end];

    str = str.slice(0, start) + tempEnd + str.slice(start + 1, str.length);
    str = str.slice(0, end) + tempStart + str.slice(end + 1, str.length);

    start++;
    end--;
  }

  return str;
}

console.log(reverse('abcdef'))

// longer
// rongel
// rengol
// regnol

// start -> 2
// end -> 4
// str[start] -> 'n'
// str[end] -> 'g'

//       're'              'g'              'gol'
// slice 0->start     + str[end]   + slice start+1->6
//       'reg'              'n'.            'ol'
// slice 0->end-1     + str[start] + slice end->6