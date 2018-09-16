function numberSpiralDiagonals() {
  let increment = 2
  let n = 1
  let sum = 1
  let d = 1

  while ((2 * d - 1) < 1001) {


    // console.log(n, (n + increment), (n + 2 * increment), (n + 3 * increment))

    sum += (n + increment) + (n + 2 * increment) + (n + 3 * increment) + (n + 4 * increment)



    n = (n + 4 * increment)
    console.log(n)

    increment += 2


    // console.log(n)

    d++

  }

  return sum
}

console.log(numberSpiralDiagonals())

// 1
// 3 5 7 9
// 13 17 21 25
// 31 37 43 49
// 57