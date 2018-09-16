// Naive solution:
//    iterate over natural numbers and square them until larger than num
//.   if one of them equals num, it is a perfect square
//    i.e. 1 4 9 16 25 ...
//
//
//
// Possible solution:

//. 64 -> 32 -> 16 -> 8
//        lg.   lg.   64

//  87 -> 43 -> 21 -> 10 -> 5 -> 7 -> 8 -> 9
//                    100   25.  49   64.  81

// upper = num
// lower = floor(num / 2)

// while upper - lower > 1
//.  square = lower ** lower
//   if square === num
//     return true
//   else if square > num
//.    upper = lower
//.    lower = floor(lower / 2)
//.  else if square < num
//.    lower += floor(lower / 2)
//
//
// return false

function isPerfectSquare(num) {
  if (num === 1) { return true }
  let upper = num;
  let lower = Math.floor(num / 2);

  while (upper - lower > 0) {
    let square = lower ** 2;

    if (square === num) {
      return true;
    } else if (square > num) {
      upper = lower;
      lower = Math.floor(lower / 2);
    } else if (square < num) {
      lower += Math.max(1, Math.floor((upper - lower) / 2));
    }
  }

  return false
}

console.log(isPerfectSquare(100))
