// function validSubstring(str) {
//   if (str.length % 2 !== 0 || str[0] === str[Math.floor(str.length / 2)]) return false;

//   let startValues = 0;
//   let endValues = 0;
//   let startValue = str[0];

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//     if (char === startValue && endValues > 0) return false;

//     if (char === startValue) startValues++;
//     else endValues++;
//   }

//   return startValues === endValues;
// }
// 2
// var countBinarySubstrings = function(s) {
//   let validSubstringCount = 0;

//   for (let i = 0; i < s.length; i++) {
//     let factor = 0;
//     let currentStr = s.substring(i - factor, i + 2 + factor);

//     while (i - factor >= 0 && validSubstring(currentStr)) {

//       validSubstringCount++;
//       factor++;

//       currentStr = s.substring(i - factor, i + 2 + factor);
//     }
//   }

//   return validSubstringCount;
// };


function getChangingIndexes(s) {
  const indexes = [0];
  let currentChar = s[0];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== currentChar) {
      currentChar = s[i];
      indexes.push(i);
    }
  }

  return indexes.concat(s.length);
}

function countBinarySubstrings(s) {
  let count = 0;

  let indexes = getChangingIndexes(s);
  if (indexes.length < 3) { return 0 };

  for (let i = 0; i < indexes.length - 2; i++) {
    count += Math.min(indexes[i + 1] - indexes[i], indexes[i + 2] - indexes[i + 1])
  }

  return count
}



console.log(countBinarySubstrings('00110'))














